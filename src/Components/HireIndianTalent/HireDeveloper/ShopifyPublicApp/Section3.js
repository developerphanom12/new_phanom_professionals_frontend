import React from "react";
import styled from "styled-components";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { primaryColor, secGradient } from "../../../../Global/GlobalButton";

const Section3 = () => {
  return (
    <Root>
      <div className="container mt-3">
        <div className="row">
          <div className="col-lg-2 col-md-12 col-12"></div>
          <div
            className="col-lg-8 col-md-12 col-12 text_div"
            data-aos="fade-up"
          >
            <span>Frequently</span>
            <span className="text"> Asked</span>
            <span> Questions</span>
          </div>
          <div className="col-lg-2 col-md-12 col-12"></div>
        </div>

        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography> 1. What is a Shopify Public App?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              A Shopify Public App is an application that is developed to be
              listed on the Shopify App Store, allowing any Shopify merchant to
              install and use it. These apps are designed to address common
              business needs and enhance the functionality of Shopify stores.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography>
              2. How long does it take to develop a Shopify Public App?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              The development time for a Shopify Public App depends on the
              complexity and features required. Typically, it can take anywhere
              from a few weeks to a couple of months.<br></br>
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography>
              3. Can you help with the app submission process to the Shopify App
              Store?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Yes, we assist with the entire process, including app submission,
              ensuring that your app meets all Shopify guidelines and is
              approved for listing on the Shopify App Store.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography>
              4. What kind of support do you offer after the app is launched?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              We provide ongoing maintenance and support to ensure your app
              remains compatible with Shopify updates and continues to perform
              optimally.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography>
              5. Why should I hire a Shopify Public App Developer from Phanom
              Professionals?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Hiring a Shopify Public App Developer from Phanom Professionals
              ensures that you receive a high-quality, custom solution tailored
              to your business needs. Our developers are experienced, reliable,
              and committed to delivering exceptional results.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <div className="row">
          <div
            className="col-lg-12 col-md-12 col-12 text_div"
            data-aos="fade-up"
          >
            <span>Skyrocket Your </span>
            <span className="text"> Shopify Store</span>
            <span> with Phanom Professionals
            </span>
            <p className="text-center mt-3"> Ready to take your Shopify store to the next level? Explore our portfolio by clicking "See Our Work" and discover how we can help you achieve your business goals.</p>
          </div>
        </div>
      </div>
    </Root>
  );
};

const Root = styled.section`
  background-color: #ffffffd4;
  padding: 0px 100px;

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
    color: ${primaryColor};
  }

  .text_div {
    margin-bottom: 0.7em;
    padding: 30px;
    text-align: center;
    .text {
      background: ${secGradient};
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      font-weight: bold;
      font-size: 35px;
      line-height: 1.3em;
    }
    span {
      font-weight: bold;
      font-size: 35px;
      line-height: 1.3em;
    }
  }

  @media (max-width: 567px) {
    padding: 0;
    .text_div {
      padding: 0;
    }
  }

  @media (min-width: 567px) and (max-width: 992px) {
    padding: 0;
    .text_div {
      padding: 0;
    }
  }
`;

export default Section3;
