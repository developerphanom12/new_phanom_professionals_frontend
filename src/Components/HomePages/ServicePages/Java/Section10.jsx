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
            <Heading>Enhance Your Business with</Heading>
            <br />

            <Heading>Premium</Heading>

            <GradientSecondHeading>Java Development</GradientSecondHeading>
            <br />

            <GradientSecondHeading>Services</GradientSecondHeading>
          </span>

          <Greydescription>
            Achieve a high watermark in your business development accompanied by
            an unmatched online reputation with the supreme java development
            services at Phanom Professionals. We know what it takes to
            revolutionize your business. Regardless of whether you are a budding
            entrepreneur or a corporate giant, our range of custom tailored Java
            development services aim to cater to your specific requirements,
            enhance engagement, and provide concrete outcomes. Thrive on every
            relevant aspect of business with our all encompassing services from
            custom Java applications to SEO for kilometers free optimization to
            allow us to handle your troubles.
          </Greydescription>

          <div>
            <Greydescription>What You’ll Get:</Greydescription>

            <ui>
              <li>
                Tailored java development services with advanced SEO for
                improved retention rates and visibility for your brand.
              </li>
              <li>Maximized ROI with custom made java development services.</li>
              <li>
                Increased rankings through SEO-friendly java applications.
              </li>
            </ui>
          </div>

          <div>
            <Greydescription style={{ color: "#6C5FD4" }}>
              Do You Want to Increase Your Business's Online Visibility?{" "}
            </Greydescription>

            <Greydescription>
              {" "}
              Wondering how to enhance your online visibility? Look no further
              than Phanom Professionals. Our powerful Java Blaster Solutions
              helps change your application into a valuable business tool. So
              why wait? Contact us today and take the first step towards
              tremendous digital growth.{" "}
            </Greydescription>
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
      gap:20px;

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

        form .label_content .schedule_div {
          width: 70%;
          .time_date_btn {
            gap: 10px;
          }
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
