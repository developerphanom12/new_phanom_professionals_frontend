import React, { useState } from 'react'
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import styled from 'styled-components';
const faqItems = [
  {
    question: "1. How quickly can I get my website or software developed?",
    answer: "We understand the importance of time in your business. Depending on the complexity, our projects typically take between 4 to 8 weeks, but we always aim for efficiency without compromising quality.",
  },
  {
    question: "2. What if I’m unsure of my exact requirements?",
    answer: "No worries! We’ll work with you in the initial phase to gather and understand your requirements in detail, offering expert consultation to guide your project in the right direction.",
  },
  {
    question: "3. How do you ensure my website or application is scalable?",
    answer: "We use modern technologies like ReactJS, NodeJS, and Next.js, which allow for seamless scaling as your business grows. We build a solid foundation that can handle increasing traffic and user demands.",
  },
  {
    question: "4. How do you handle security for my project?",
    answer: "Security is our top priority. We integrate industry-standard security protocols at every stage, from backend development to server deployment, ensuring your data and business are always safe.",
  },
  {
    question: "5. What happens if I want to make changes after the project is completed?",
    answer: "We offer flexible post-launch support. Whether you need small adjustments or significant updates, our team is ready to help ensure your platform continues to meet your needs.",
  },
  {
    question: "6. Will my website or software be optimized for mobile devices?",
    answer: "Absolutely! Every website or application we develop is responsive, meaning it works seamlessly on desktops, tablets, and mobile devices, enhancing the user experience across all platforms.",
  },
  {
    question: "7. Do you provide ongoing support and maintenance?",
    answer: "Yes, we offer various support packages to keep your platform running smoothly after deployment. Our team is available for updates, bug fixes, and regular maintenance.",
  },
  {
    question: "8. How do you ensure the final product meets my expectations?",
    answer: "We follow a structured process that includes prototypes, Figma designs, and regular feedback loops. You'll be involved at every step, ensuring the final product aligns with your vision.",
  },
  {
    question: "9. What’s included in your free consultation?",
    answer: "Our free consultation includes a detailed discussion of your needs, analysis of your current system (if applicable), and a personalized solution plan tailored to your goals.",
  },
  {
    question: "10. What sets you apart from other developers?",
    answer: "We not only build solutions but partner with you throughout the journey. With deep expertise in custom development, we focus on building scalable, future-proof platforms tailored to your specific needs.",
  },
  {
    question: "11. Do you work with small businesses or only large corporations?",
    answer: "We work with companies of all sizes, from startups to large enterprises. Our solutions are tailored to fit your budget and requirements, ensuring you get the best return on your investment.",
  },
  {
    question: "12. How do you charge for custom development projects?",
    answer: "We offer flexible pricing models, including fixed pricing for well-defined projects and hourly rates for ongoing development. During the consultation, we’ll help you determine the best model for your needs.",
  },
  {
    question: "13. Can I see examples of your previous work?",
    answer: "Absolutely! Check out our portfolio for case studies and examples of the work we've done for various clients across different industries.",
  },
  {
    question: "14. What technologies do you specialize in?",
    answer: "Our expertise spans ReactJS, NodeJS, Next.js, Shopify, WordPress, WooCommerce, and more. We choose the right technology based on your project’s needs and goals.",
  },
  {
    question: "15. How do you ensure the project stays within budget?",
    answer: "We provide a detailed project plan and pricing structure upfront. Through regular communication and milestone reviews, we ensure your project stays on track both in terms of timelines and budget.",
  },
  {
    question: "16. What if my business needs evolve during the development process?",
    answer: "We understand that business needs can change. Our process is flexible, and we can adapt to new requirements as long as they align with the scope of the project.",
  },
  {
    question: "17. Can you integrate third-party services or APIs into my platform?",
    answer: "Yes, we can integrate various third-party services, APIs, and payment gateways to ensure seamless functionality and enhanced user experience.",
  },
  {
    question: "18. Will I own the source code once the project is completed?",
    answer: "Yes, once the project is finished and paid for, you will have full ownership of the source code and all related assets.",
  },
  {
    question: "19. How do you handle website performance optimization?",
    answer: "We prioritize speed and performance through efficient coding practices, optimized media, and using performance-enhancing tools. Our goal is to ensure fast load times and a smooth user experience.",
  },
  {
    question: "20. Do you offer SEO services for the websites you build?",
    answer: "Yes, we ensure that all websites we develop are SEO-friendly, incorporating the best practices for search engine optimization from the start to boost your online visibility.",
  },
];

export const Section7 = () => {
  const [visibleCount, setVisibleCount] = useState(5); // Initially show 5 FAQs

  const handleViewMore = () => {
    setVisibleCount((prevCount) => Math.min(prevCount + 5, faqItems.length)); // Show 5 more FAQs on each click
  };
  return (
    <Root>
      <div className="container mt-3">
        <div className="row">
          <div className="col-lg-2 col-md-12 col-12"></div>
          <div
            className="col-lg-8 col-md-12 col-12 text_div">
            <h2 className="first-content">Frequently <span style={{color:"#0b66c2"}}>Asked </span> Questions</h2>
          </div>
          <div className="col-lg-2 col-md-12 col-12"></div>
        </div>

        <div className="row">
        <div className="col-lg-12 col-md-12">
          {faqItems.slice(0, visibleCount).map((item, index) => (
            <Accordion key={index}>
              <AccordionSummary
                expandIcon={<ArrowDownwardIcon />}
                aria-controls={`panel${index}-content`}
                id={`panel${index}-header`}
              >
                <Typography>{item.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{item.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}

          {visibleCount < faqItems.length && (
            <div className="view_btn">
              <button onClick={handleViewMore}>View More</button>
            </div>
          )}
        </div>
      </div>
    </div>
    </Root>
  );
}


const Root = styled.section`
  background-color: #ffffffd4;
  padding: 0 100px;

  .MuiAccordionSummary-content.MuiAccordionSummary-contentGutters.css-eqpfi5-MuiAccordionSummary-content
    p {
    font-size: 20px;
  }

  .MuiAccordionDetails-root.css-15v22id-MuiAccordionDetails-root p {
    font-size: 16px;
  }

  .css-eqpfi5-MuiAccordionSummary-content.Mui-expanded {
    margin: 10px 0 0px 0;
  }

  .css-15v22id-MuiAccordionDetails-root {
    padding: 0px 16px 16px;
  }

  .MuiAccordionSummary-expandIconWrapper.css-yw020d-MuiAccordionSummary-expandIconWrapper {
    color: #0b66c2;
  }

  .text_div {
    margin-bottom: 0.7em;
    text-align: center;
    .first-content {
      font-size: 45px;
      font-weight: bold;
      line-height: 1.3em;
      margin-right: 10px;
    }
   
  }

  .view_btn{
    display: flex;
    justify-content: center;
    button {
      color: #fff;
      letter-spacing: 1.6px;
      text-transform: capitalize;
      background-image: linear-gradient(101deg, #012d64, #06b0ff);
      box-shadow: 0 10px 20px #0586ceb3;
      border-radius: 74px;
      font-weight: 500;
      text-decoration: none;
      margin-top: 20px;
      border: none;
      text-align: center;
      padding: 15px 25px;
    }
  }

  @media (max-width: 567px) {
    padding: 0 10px;
    .text_div {
      padding: 0;
    }

    .text_div .first-content {
    font-size: 35px;
    margin:0;

}
.css-ahj2mt-MuiTypography-root {
  margin-bottom: 15px;

}
  }

  @media (min-width: 567px) and (max-width: 992px) {
    padding: 0;
    .text_div {
      padding: 0;
    }
  }
`;