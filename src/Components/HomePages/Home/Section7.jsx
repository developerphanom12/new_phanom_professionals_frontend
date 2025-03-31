import React from "react";
import { GreyMainHeading } from "../../../Global/GlobalText";
import { InputType } from "../../../Global/GlobalFormElement";
import styled from "styled-components";

export const Section7 = () => {
  return (
    <Root>
      <div className="main_div">
        <div className="sub_div">
          <GreyMainHeading>Build skills, connect.</GreyMainHeading>
        </div>
        <div className="sub_div_two">
          <InputType placeholder="Enter your Email" />
          <div>
            <PurpleThird>Send </PurpleThird>
          </div>
        </div>
      </div>
    </Root>
  );
};



export const PurpleThird = styled.button`
    padding: 18px 60px;
    border-radius: 8px;
    color: #ffffff;
    background-color: #6C5FD4;
    border: 1px solid transparent;
    font-size: 20px;
    font-weight: 600;
    cursor: pointer;
    line-height: 29px;
  &:hover{
    background-color:#6C5FD4;
  }
  @media (max-width: 567px) {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
  }
`;
const Root = styled.section`
  padding: 40px 0px;
  text-align: center;
  display: flex;
  justify-content: center;
  .main_div {
    width: 84vw;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    .sub_div {
      width: 40%;
      text-align: start;
      padding: 0px 30px;
    }

    .sub_div_two {
      width: 60%;
      display: flex;
      justify-content: center;
      gap: 20px;
      input {
        border: transparent;
        width: 70%;
        font-size: 18px;
        font-weight: 400;
        line-height: 28px;
        color: #a5a5a5;
        background-color: #f2f4f8;
      }
    }
  }

  @media (max-width: 567px) {
    padding: 20px;
    .main_div {
      flex-direction: column;
      align-items: center;
      text-align: center;
      gap: 20px;

      .sub_div {
        width: 100%;
      }

      .sub_div_two {
        flex-direction: column;
        gap: 20px;
        width: 100%;
        input {
          width: 100%;
        }
      }
    }
  }

  @media (min-width: 567px) and (max-width: 1024px) {
    padding: 20px 20px 40px;

    .main_div {
      flex-direction: column;
      align-items: center;
      text-align: center;
      gap: 20px;

      .sub_div {
        width: 100%;
      }

      .sub_div_two {
        width: 100%;
      }
    }
  }
`;
