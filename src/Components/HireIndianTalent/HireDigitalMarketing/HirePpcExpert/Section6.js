import React from "react";
import styled from "styled-components";
import { primaryColor, secGradient } from "../../../../Global/GlobalButton";

export default function Section6() {
  return (
    <Root>
      <div className="container-fluid">
        <div className="row">
          
          <div
            className="col-lg-12 col-md-12 col-12 text_div"
            data-aos="fade-up"
          >
            <span>Strategic Planning</span>
            <span className="text"> for </span>{" "}
            <span>Maximum Impact
            </span>
            <p className="mt-3">Describe your approach and the process you follow for managing PPC campaigns.
            </p>
            <p>We believe in a strategic approach to PPC. Starting with an in-depth understanding of your business goals, our PPC experts craft custom strategies tailored to your needs. We use data-driven insights to refine targeting, optimize bids, and improve ad copy, ensuring your campaigns are always performing at their peak. Continuous monitoring and adjustments keep your ads competitive and your budget efficiently spent
            </p>
          </div>
          
        </div>
      </div>
    </Root>
  );
}
const Root = styled.section`
  padding: 30px 50px;

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
  .block_main {
    margin-bottom: 20px;
    display: flex;
    flex: 1;
    .block_div {
      word-spacing: 1px;
      letter-spacing: 0.1px;
      padding: 10px;
      display: flex;
      border: 1px solid ${primaryColor};
      border-radius: 20px;
      flex-direction: column;
      align-items: center;
      &:hover {
        box-shadow: 1px 1px 5px 1px ${primaryColor};
        transition: 0.5s;
      }
      p {
        font-size: 18px;
        font-weight: 600;
        margin: 0;
        padding-bottom: 10px;
      }
      span {
        font-size: 17px;
        color: #6e6e6e;
        padding-bottom: 20px;
      }
      .number_div {
        color: #147888;
        word-spacing: 1px;
        letter-spacing: 0.1px;
        font-size: 25px;
        font-weight: bold;
        line-height: 1.2em;
      }
      .tag_text {
        padding: 10px 0px;
        text-align: center;
      }
    }
  }

  @media (max-width: 567px) {
    padding: 0;

    .text_div {
      padding: 20px;
    }

    .block_main {
      display: unset;
      flex: unset;
    }
  }

  @media (min-width: 567px) and (max-width: 992px) {
    padding: 0;

    .block_main {
      display: unset;
      flex: unset;
    }

    .block_main .block_div {
      height: 350px;
    }
  }
`;
