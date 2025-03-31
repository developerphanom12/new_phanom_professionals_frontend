import React from "react";
import styled from "styled-components";
import {
  GradientSecondHeading,
  GreySecondDescription,
  Heading,
  PurpleSubHeading,
} from "../../Global/GlobalText";
import framneww from "../../Assets/Images/framm.png";
import groupone from "../../Assets/Images/groupone.png";
import deve from "../../Assets/Images/deve.png";
import groupthree from "../../Assets/Images/groupthree.png";
import groupfour from "../../Assets/Images/groupfour.png";

export const SectionAdd = () => {
  return (
    <Root>
      <div className="main_div">
        <span style={{ textAlign: "center" }}>
          <Heading>Our Process:</Heading>
          <GradientSecondHeading>The Legacy Flywheel Approach</GradientSecondHeading>
          {/* <br />
          <GradientSecondHeading>Development Strategies</GradientSecondHeading> */}
        </span>
        <div className="bg_img">
          <div className="sub_bg_img">
            <img src={groupone} alt="Design" />
            <PurpleSubHeading>IDENTIFY</PurpleSubHeading>
            <GreySecondDescription>
            We analyze your needs & craft the best strategy.
            </GreySecondDescription>
          </div>

          <div className="sub_bg_img">
            <img src={deve} alt="Development" />
            <PurpleSubHeading>BUILD</PurpleSubHeading>
            <GreySecondDescription>
            – Our expert developers create a high-performing solution.
            </GreySecondDescription>
          </div>

          <div className="sub_bg_img">
            <img src={groupthree} alt="Familiarization" />
            <PurpleSubHeading>OPTIMIZE</PurpleSubHeading>
            <GreySecondDescription>
            – AI-driven enhancements for speed & usability.
            </GreySecondDescription>
          </div>

          <div className="sub_bg_img">
            <img src={groupfour} alt="Strategy" />
            <PurpleSubHeading>DELIVER</PurpleSubHeading>
            <GreySecondDescription>
            – On time, every time. Or you don’t pay!
            </GreySecondDescription>
          </div>
        </div>
        <div className="consult_btn">
           <a href="/apply" target="_blank">🎯 Ready to Build? Let's Talk! </a>
        </div>
       
      </div>
    </Root>
  );
};

const Root = styled.section`
  padding: 30px 100px 50px;
  .consult_btn{
    display: flex;
    justify-content: center;
    margin: 10px;
    a {
    color: #fff;
    letter-spacing: 1.6px;
    text-transform: capitalize;
    background-image: linear-gradient(101deg, #012d64, #06b0ff);
    box-shadow: 0 10px 20px #0586ceb3;
    border-radius: 74px;
    width: 340px;
    font-weight: 500;
    text-decoration: none;
    margin-bottom: 40px;
    border: none;
    text-align: center;
    padding: 15px 0;
}
  }
  .main_div {
    display: flex;
    flex-direction: column;
    align-items: center;
    .bg_img {
      background-image: url(${framneww});
      background-size: 100% 100%;
      width: 100%;
      display: flex;
      .sub_bg_img {
        flex: 1;
        display: flex;
        gap: 10px;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        padding: 50px 20px 0;
        text-align: center;
      }
    }
  }

  @media (max-width: 567px) {
    padding: 30px 20px;
    .main_div {
     

      .bg_img {
        background-image: unset;
        display: unset;
        .sub_bg_img {
          padding: 20px 20px 0;
        }
      }
    }
  }

  @media (min-width: 567px) and (max-width: 1024px) {
    padding: 30px 20px;
    .consult_btn {
    display: flex;
    justify-content: flex-start;
}
    .main_div {
      .bg_img {
        background-image: unset;
        display: flex;
        flex-direction: unset;
        flex-wrap: wrap;
        justify-content: center;
        .sub_bg_img {
          padding: 20px 20px 0;
          flex: unset;
          width: 48%;
        }
      }
    }
  }
`;
