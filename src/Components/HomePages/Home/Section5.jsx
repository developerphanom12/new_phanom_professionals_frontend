import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  BlacvkHeading,
  BlacvkDescription,
  Textwithborder,
} from "../../../Global/GlobalText";
import rangenew from "../../../Assets/Images/rangenew.png";
import verifiednew from "../../../Assets/Images/verifiednew.png";
import pricingnew from "../../../Assets/Images/pricingnew.png";
import customisenew from "../../../Assets/Images/customisenew.png";
import quicknew from "../../../Assets/Images/quicknew.png";
import securenew from "../../../Assets/Images/securenew.png";
import feednew from "../../../Assets/Images/feednew.png";
import customer from "../../../Assets/Images/customer.png";

export const Section5 = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const slides = [
    {
      img: rangenew,
      title: "Wide Range of Services",
      description:
        "Unlock a world of possibilities with our diverse pool of talented freelancers – from digital marketing to web development",
    },
    {
      img: verifiednew,
      title: "Verified Professionals",
      description:
        "you're in good hands with our verified professionals – your trusted experts for top-quality work",
    },
    {
      img: pricingnew,
      title: "Competitive Pricing",
      description:
        " Find the perfect fit for your budget with our competitive pricing",
    },
    {
      img: customisenew,
      title: "Customized Solutions",
      description:
        "Experience the power of personalized service with our freelancers, who tailor their solutions to meet your unique needs.",
    },
    {
      img: quicknew,
      title: "Quick Turnaround",
      description:
        " Efficient project management and prompt delivery of services, saving clients time and effort.",
    },
    {
      img: securenew,
      title: "Secure Payments",
      description:
        " Reliable and secure payment gateways to protect financial transactions and ensure payments are made only when the client is satisfied.",
    },
    {
      img: feednew,
      title: "Feedback and Ratings",
      description:
        "Reliable and secure payment gateways to protect financial transactions and ensure payments are made only when the client is satisfied.",
    },
    {
      img: customer,
      title: "Customer Support",
      description:
        " Dedicated customer support to assist with any issues or queries,ensuring a smooth and satisfying experience.",
    },
  ];

  const totalSlides = slides.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 3000); // Change slide every 4 seconds
    return () => clearInterval(interval);
  }, [totalSlides]);

  return (
    <Root activeIndex={activeIndex}>
      <div className="main_div">
        <div className="sub_main_div">
          <div className="ist_border">
            <div className="sec_border">
              <div className="three_border"></div>
            </div>
          </div>
        </div>

        <div className="sub_main_div_two">
          <div className="text_border">
            <Textwithborder> Why</Textwithborder>
            <Textwithborder> Choose </Textwithborder>
            <Textwithborder>Us?</Textwithborder>
          </div>

          <div className="slide_container">
            <div className="slide_div">
              {slides.map((slide, index) => (
                <div className="sub_slide_div" key={index}>
                  <div className="image_content">
                    <div className="img_div">
                      <img src={slide.img} alt="Logo" />
                    </div>
                    <div className="content_div">
                      <BlacvkHeading>{slide.title}</BlacvkHeading>
                    </div>
                  </div>
                  <BlacvkDescription>{slide.description}</BlacvkDescription>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Root>
  );
};

const Root = styled.section`
  padding: 20px 100px 0 0;
  .main_div {
    display: flex;
    gap: 20px;
    align-items: center;

    .sub_main_div {
      width: 25%;

      .ist_border {
        width: 400px;
        height: 420px;
        border: 40px solid #ca1de2;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        animation: borderAnimationIst 3s infinite;
        margin-left: -50%;
      }

      .sec_border {
        width: 100%;
        height: 100%;
        border: 40px solid #a444e4;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        animation: borderAnimationSec 3s infinite;
      }

      .three_border {
        width: 100%;
        height: 100%;
        border: 40px solid #4c94e0;
        border-radius: 50%;
        background-color: #e0e0e0;
        animation: borderAnimationThree 3s infinite;
      }
    }

    @keyframes borderAnimationIst {
      0% {
        border-color: #4C94E0CC;
        box-shadow: 2.5px 0px 7.5px 0px #00000040
      }
      50% {
        border-color:  #A444E4CC;
        box-shadow: 2.5px 0px 7.5px 0px #00000040;
      }
      100% {
        border-color: #CA1DE2CC;
        box-shadow: 2.5px 0px 12.5px 3px #00000040;
      }
    }

    @keyframes borderAnimationSec {
      0% {
        border-color: #CA1DE2CC;
        box-shadow: 2.5px 0px 12.5px 3px #00000040;
      }
      50% {
        border-color: #4C94E0CC;
        box-shadow: 2.5px 0px 7.5px 0px #00000040
      }
      100% {
        border-color:  #A444E4CC;
        box-shadow: 2.5px 0px 7.5px 0px #00000040;
      }
    }

    @keyframes borderAnimationThree {
      0% {
        border-color: #CA1DE2CC;
        box-shadow: 2.5px 0px 12.5px 3px #00000040;
      }
      50% {
        border-color:  #A444E4CC;
        box-shadow: 2.5px 0px 7.5px 0px #00000040;
      }
      100% {
        border-color: #4C94E0CC;
        box-shadow: 2.5px 0px 7.5px 0px #00000040;
      }
    }

    .sub_main_div_two {
      width: 70%;
      gap: 100px;
      display: flex;
      
      .text_border {
        display: flex;
        gap: 5px;
        flex-direction: column;
      }

      .slide_container {
        height: 220px;
        width: 100%;
        position: relative;
        overflow: hidden;
        
        .slide_div {
          height: auto;
          width: 100%;
          position: relative;
          transition: transform 0.8s ease;
          transform: translateY(-${props => props.activeIndex * 220}px);
        }
        
        .sub_slide_div {
          height: 220px;
          width: 100%;
          padding: 20px 0;
          display: flex;
          gap: 10px;
          flex-direction: column;
          box-sizing: border-box;
          
          .image_content {
            display: flex;
            align-items: center;
            gap: 10px;
            
            .img_div {
              width: 15%;
              img {
                width: 70%;
                height: auto;
              }
            }
            
            .content_div {
              width: 85%;
              display: flex;
              gap: 10px;
              flex-direction: column;
            }
          }
        }
        
        /* Add a fade-in/fade-out effect */
        .sub_slide_div {
          opacity: 0;
          animation: fadeIn 0.8s forwards;
        }
        
        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
      }
    }
  }

  @media (max-width: 567px) {
    padding: 20px;

    .main_div {
      flex-direction: column;

      .sub_main_div {
        display: none;
      }

      .sub_main_div_two {
        width: 100%;
        gap: 20px;
        flex-direction: column;
        .text_border {
          flex-direction: row;
          justify-content: center;
          flex-wrap: wrap;
        }
      }
    }
  }

  @media (min-width: 567px) and (max-width: 1024px) {
    padding: 20px;

    .main_div {
      flex-direction: column;

      .sub_main_div {
        display: none;
      }

      .sub_main_div_two {
        width: 100%;
        gap: 40px;
        flex-direction: column;

        .text_border {
          flex-direction: row;
          justify-content: center;
          flex-wrap: wrap;
        }
      }
    }
  }
`;