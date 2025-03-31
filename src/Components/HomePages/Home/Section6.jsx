import React from "react";
import styled from "styled-components";
import {
  Blackdescription,
  BlackHeading,
  GradientHeading,
  Heading,
} from "../../../Global/GlobalText";
import horizontalframe from "../../../Assets/Images/horizontalframe.png";
import vertically from "../../../Assets/Images/vertically.png";

export const Section6 = () => {
  return (
    <Root>
      <div className="main_div">
        <span>
          <Heading>Our</Heading>
          <GradientHeading> Mission</GradientHeading>
        </span>

        <Blackdescription>
          Empowering businesses with innovation, crafting bespoke solutions, and
          driving industry leadership.
        </Blackdescription>

        <div className="sub_main_div">
          <img
            src={horizontalframe}
            alt="horizontalframe"
            className="horizont"
          />
          <img src={vertically} alt="vertically" className="verticall" />

          <div className="pointer_main_div">
            <div className="pointer_sub_main_div" data-number="01">
              <BlackHeading>Innovate</BlackHeading>
              <Blackdescription>
                Harnessing the power of technology to bring fresh,
                groundbreaking ideas to life.
              </Blackdescription>
            </div>

            <div className="pointer_sub_main_div" data-number="02">
              <BlackHeading>Create</BlackHeading>
              <Blackdescription>
                Designing and developing solutions that drive progress and meet
                unique challenges.
              </Blackdescription>
            </div>

            <div className="pointer_sub_main_div" data-number="03">
              <BlackHeading>Dominate</BlackHeading>
              <Blackdescription>
                Empowering businesses to lead their industries with robust,
                scalable IT strategies.
              </Blackdescription>
            </div>
          </div>
        </div>
      </div>
    </Root>
  );
};

const Root = styled.section`
  padding: 20px 100px;
  .main_div {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;

    .sub_main_div {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 30px;
      width: 86vw;
      img {
        width: 67%;
        margin: 0px 50px 0px 0px;
      }
      .verticall {
        display: none;
      }
      .pointer_main_div {
        display: flex;
        gap: 18px;
        width: 79vw;
        margin-top: -10px;
        .pointer_sub_main_div {
          position: relative;
          flex: 1;
          border-radius: 10px;
          padding: 60px;
          display: flex;
          flex-direction: column;
          gap: 20px;
          align-items: center;
          box-shadow: 0px 4px 16px 2px #00000040;
          text-align: center;
        }

        /* Add this to display the numbers */
        .pointer_sub_main_div::before {
          content: attr(data-number); /* Use a custom attribute */
          position: absolute;
          top: 15px;
          left: 10px;
          font-size: 100px;
          font-weight: bold;
          color: rgba(162, 119, 255, 0.2); /* Light purple, adjust as needed */
          z-index: -1;
        }
      }
    }
  }

  @media (max-width: 567px) {
    padding: 30px 20px;

    .main_div {
      text-align: center;
      .sub_main_div {
        flex-direction: row;
        margin-left: -10px;

        .horizont {
          display: none;
        }
        .verticall {
          display: block;
          width: 15%;
          height: 40rem;
          margin-top: 30px;
        }

        .pointer_main_div {
          flex-direction: column;
          margin-left: -7px;
          .pointer_sub_main_div {
            padding: 40px;
          }
        }
      }
    }
  }

  @media (min-width: 567px) and (max-width: 1024px) {
    padding: 0 20px 20px;

    .main_div {
      text-align: center;
      .sub_main_div {
        margin-top: 0;

        .pointer_main_div {
          margin-top: -4px;

          .pointer_sub_main_div {
            padding: 9px;
          }
        }
      }
    }
  }
`;
