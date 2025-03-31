import React from "react";
import styled from "styled-components";
import {
  GradientSecondHeading,
  GradientSubHeading,
  Greydescription,
  Heading,
  Subdescription,
} from "../../../Global/GlobalText";

import {
  PurpleBackground,
} from "../../../Global/GlobalButton";
import { FaArrowRightLong } from "react-icons/fa6";

import "react-datepicker/dist/react-datepicker.css";
import { AppoinmentForm } from "../../AppointmentForm/AppoinmentForm";

export const Section10 = () => {
 
  return (
    <Root>
      <div className="main_div" id="form">
        <div className="sub_div_one">
          <Greydescription>
            Explore a rewarding career in the Phenom Professional Industry. Fill
            out the form to get started.
          </Greydescription>

          <span>
            <Heading>Supercharge Your Business with the</Heading>
            <br/>

            <GradientSecondHeading>
              {" "}
              Best Website Development Services
            </GradientSecondHeading>
          </span>

          <Greydescription>
               Grow your online presence with the best website development services. Here at Phanom Professionals, our services can completely change your business. It doesn't matter if you're a small business or a gigantic company, we can help you construct a website that drives engagement and results. From custom designs to SEO, we do it all so your business can thrive.
          </Greydescription>

          <div>

          <Greydescription>What You’ll Get: </Greydescription>

          <ul>
            <li>Get higher rankings with our SEO optimized website content.</li>
            <li>Increased ROI with our tailored development strategies.</li>
            <li>High retention rates and visibility for your website with SEO services</li>
          </ul>

          </div>

          <div>

          <Greydescription style={{color:"#6C5FD4"}}>Do You Want to Increase Your Business’s Online Visibility?</Greydescription>
          <Greydescription>Our website development services can transform your website into a powerful business asset, do you want to boost your digital success?</Greydescription>

          </div>
      

          <div>
            <PurpleBackground className="connect_btn">
            Connect with us <FaArrowRightLong />
            </PurpleBackground>
          </div>
        </div>


        <div className="sub_div_two">

          <span>
            <GradientSubHeading> Book Your Appointment</GradientSubHeading>
            <Subdescription>
              Where innovation meets unstoppable growth
            </Subdescription>
          </span>

           <AppoinmentForm/>

        </div>
      </div>
    </Root>
  );
};

const Root = styled.section`
  padding: 30px 100px;
  .main_div {
    gap: 100px;
    display: flex;
    .sub_div_one {
      gap: 20px;
      display: flex;
      flex-direction: column;
      gap: 30px;
      flex: 1;

      .connect_btn {
        display: flex;

        align-items: center;
        gap: 10px;
      }
    }

    .sub_div_two {
      flex: 1;
      padding: 0 30px 30px;
      box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
      display: flex;
      flex-direction: column;
      gap: 20px;
      span {
        display: flex;
        flex-direction: column;
        gap: 5px;
      }
   
    }
  }

  
  @media (max-width: 567px) {
    padding: 10px 20px;

    .main_div {
      flex-wrap: wrap;
      gap: 20px;
      .sub_div_one {
        text-align: center;
        gap: 20px;
        align-items: center;
        .purpl_cont {
          color: #6c5fd4;
          font-size: 16px;
        }
        span {
          font-size: 22px;
          br {
            display: none;
          }
        }
      }

      .btn_div {
        display: flex;
        justify-content: center;
      }

      .sub_div_two {
        span {
          font-size: 18px;
        }


      }
    }
  }

  @media (min-width: 567px) and (max-width: 1024px) {
    padding: 30px 20px;
    .main_div {
      gap: 0;
    }
  }
`;
