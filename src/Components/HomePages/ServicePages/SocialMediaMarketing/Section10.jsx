import React from "react";
import styled from "styled-components";
import { FaArrowRightLong } from "react-icons/fa6";
import "react-datepicker/dist/react-datepicker.css";
import { AppoinmentForm } from "../../AppointmentForm/AppoinmentForm";
import { GradientSecondHeading, GradientSubHeading, Greydescription, Heading, Subdescription } from "../../../../Global/GlobalText";
import { PurpleBackground } from "../../../../Global/GlobalButton";

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
            <Heading>Get Noticed on the Internet with the </Heading>
            <br />

            <GradientSecondHeading>
              Best Social Media Marketing Company
            </GradientSecondHeading>
          </span>

          <Greydescription>
            <span style={{ color: "#6C5FD4" }}>
              Can't get enough online attention?
            </span>
            The experts at social media marketing have social media marketing
            tactics in place to help elevate the prominence of your business. We
            assist in increasing your interaction as well as enhancing your
            organic reach which will help convert social media interaction into
            meaningful transactions.
          </Greydescription>

          <Greydescription>
            Phanom Professionals provide marketing plans that are customized
            using data to fit companies of all shapes and sizes. It does not
            matter if you need to generate compelling ideas, responsive social
            media marketing or{" "}
            <span style={{ color: "#6C5FD4" }}> all-in-one engagement,</span> we
            help in every aspect of your brand and assist in growing your online
            presence. 
          </Greydescription>

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
