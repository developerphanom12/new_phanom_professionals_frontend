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
            <Heading>With the Help of Our Strong</Heading>
           
            <GradientSecondHeading>
                  Ppc
            </GradientSecondHeading> <br/>

            <GradientSecondHeading>            
               Campaigns,
            </GradientSecondHeading>    
            <Heading>You Can Unlock Your</Heading> <br/>

            <Heading>Business Like Never Before.</Heading>

          </span>

          <Greydescription>
          Having issues being visible online? Our professional strategists ensure that your PPC campaigns target the proper traffic, improve your rankings, and sell clicks. Irrespective of whether you are a small scale business or a corporation, we design unique PPC management services for everyone. We make sure that from the keyword analysis to the advertisement copy writing, <span style={{ color: "#6C5FD4" }}> every step is optimised to make sure that you come up first on the search results.</span>
          </Greydescription>

      

          <Greydescription  style={{ color: "#6C5FD4" }}>
              Want to Acheive Increased Sales and Visitor Count Instantly?
          </Greydescription>



          <Greydescription>
                Start maximising your PPC campaigns right now by contacting us and see your business grow before your very eyes!
          </Greydescription>


          <div>
            <PurpleBackground className="connect_btn">
            Connect with us <FaArrowRightLong />
            </PurpleBackground>
          </div>
        </div>
        <div className="sub_div_two">
          <span>
            <GradientSubHeading>Book Your Appointment</GradientSubHeading>
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
