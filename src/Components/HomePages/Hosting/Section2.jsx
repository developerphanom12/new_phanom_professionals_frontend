import React, { useState } from "react";
import styled from "styled-components";
import { MonthlyPlan } from "./HostingPlan/MonthlyPlan";
import { YearlyPlan } from "./HostingPlan/YearlyPlan";

export const Section2 = () => {
  const [activeButton, setActiveButton] = useState(0);

  const handleButtonClick = (index) => {
    setActiveButton(index);
  };
  return (
    <Root>
      <div className="main_div" id="plan">
        <div className="btn_div">
          <div
            className={activeButton === 0 ? "active" : ""}
            onClick={() => handleButtonClick(0)}
          >
            <h4>Pay monthly</h4>
          </div>

          <div
            className={activeButton === 1 ? "active" : ""}
            onClick={() => handleButtonClick(1)}
          >
            <h4>Pay yearly</h4>
          </div>
        </div>

        <div className="content_div">
          {activeButton === 0 && (
            <>
              <MonthlyPlan />
            </>
          )}

          {activeButton === 1 && (
            <>
              <YearlyPlan />
            </>
          )}
        </div>
      </div>
    </Root>
  );
};

const Root = styled.section`
  padding: 30px 70px;
  .main_div {
    display: flex;
    flex-direction: column;
    gap: 60px;
    align-items: center;
    .btn_div {
      display: flex;
      border: 1px solid #d4dbe0;
      border-radius: 50px;

      div {
        border-radius: 50px;
        text-align: center;
        width: 340px;
        padding: 16px 20px;

        h4 {
          font-size: 28px;
          font-weight: 500;
          line-height: 36px;
          color: black;
          /* &.active {
            color: white;
          } */
        }

        p {
          font-size: 18px;
          font-weight: 400;
          line-height: 28px;
        }
        &.active {
          background-color: #6c5fd4;
          color: #ffffff;
          h4{
            color:#ffffff;
          }
        }
      }
    }

    .content_div {
      width: 100%;
    }
  }

  @media (max-width: 567px) {
    padding: 20px;

    .main_div {
      gap: 30px;
      .btn_div {
        flex-direction: column;
        div h4 {
          font-size: 22px;
          font-weight: 500;
          line-height: 23px;
        }
        div p {
          font-size: 16px;
          font-weight: 400;
          line-height: 24px;
        }
      }
    }
  }

  @media (min-width: 567px) and (max-width: 1024px) {
    padding: 20px;
    .main_div {
      gap: 30px;
    }
  }
`;
