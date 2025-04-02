import React from "react";
import styled from "styled-components";
import { primaryColor, secGradient } from "../../../../Global/GlobalButton";

export default function Section8() {
  return (
    <Root>
      <div className="container-fluid">
        <div className="row">
          <div
            className="col-lg-12 col-md-12 col-12 text_div"
            data-aos="fade-up"
          >
            <span>Why Should You Hire</span>
            <span className="text"> a PPC </span> <span> Specialist?</span>
            <p className="mt-3">
              Below are some of the main justifications for why companies employ
              PPC experts:
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-2 col-md-6 col-12 block_main1">
            <div className="block_div1">
              <div className="number_div1">01</div>
              <div>
                <p>It Gives You More Time</p>
                <span>
                  For a small account, managing PPC campaigns takes at least two
                  to five hours a week. More time is required for reporting and
                  optimization as your account gets larger. The majority of
                  business owners are pressed for time. By leaving the campaigns
                  to the professionals, you can concentrate on managing your
                  business to the best of your ability by outsourcing to a PPC
                  expert.
                </span>
                <br />
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 col-12 block_main">
            <div className="block_div">
              <div className="number_div">02</div>
              <div>
                <p>You Acquire Entry to Skillful Methods</p>
                <span>
                  Competent PPC advisors remain current on the newest PPC
                  tactics, trends, and platform enhancements. They can inform
                  you about more complex strategies that a novice needs to know.
                  This gives your PPC advertising a major competitive advantage.
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-12 col-12 block_main">
            <div className="block_div">
              <div className="number_div">03</div>
              <div>
                <p>Your Acquisition Cost Reduces</p>
                <span>
                  For every dollar you spend, a PPC specialist with experience
                  can increase conversions. The return on investment (ROI) of
                  your PPC campaigns can be raised by optimizing targeting,
                  bids, ads, and landing pages.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-2 col-md-6 col-12 block_main">
            <div className="block_div">
              <div className="number_div">04</div>
              <div>
                <p> It Allows for Quicker Optimization and Testing</p>
                <span>
                  The majority of experts can test and optimize more quickly
                  than in-house marketers juggling multiple priorities because
                  PPC is their full-time job. Better performance and higher
                  productivity follow from this.
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 col-12 block_main">
            <div className="block_div">
              <div className="number_div">05</div>
              <div>
                <p> You Get Improved Analytics & Tracking</p>
                <span>
                  Advanced PPC analytics tools are available to the majority of
                  independent PPC consultants and agencies. These offer more
                  insightful campaign data than native analytics found in
                  systems such as Google Ads.
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-12 col-12 block_main">
            <div className="block_div">
              <div className="number_div">06</div>
              <div>
                <p> Your Chance Of Violating Policies Drops</p>
                <span>
                  PPC specialists have a great deal of platform experience and
                  are familiar with all PPC advertising policies. They are thus
                  aware of how to avoid infractions that might result in the
                  suspension of your account. If you're new to PPC, those risks
                  are much greater.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="cont_sub_btn mt-3 mb-5">
          <a href="/contact-us"> Ready to hire? </a>
        </div>
      </div>
    </Root>
  );
}
const Root = styled.section`
  padding: 0 50px;

  .text_div {
    margin-bottom: 0.7em;
    padding: 20px 30px;
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
      padding: 30px;
      display: flex;
      flex-direction: column;
      gap: 20px;
      border: 1px solid #dadada;
      border-radius: 30px;
      &:hover {
        background-color: #dadada4f;
      }
      p {
        font-size: 20px;
        font-weight: bold;
        margin: 0;
        padding-bottom: 10px;
      }
      span {
        font-size: 17px;
        color: #6e6e6e;
      }
      .number_div {
        color: ${primaryColor};
        word-spacing: 1px;
        letter-spacing: 0.1px;
        font-size: 25px;
        font-weight: bold;
        line-height: 1.2em;
      }
    }
  }

  .block_main1 {
    margin-bottom: 20px;
    display: flex;
    flex: 1;
    .block_div1 {
      background-color: ${primaryColor};
      word-spacing: 1px;
      letter-spacing: 0.1px;
      padding: 30px;
      display: flex;
      flex-direction: column;
      gap: 20px;
      border: 1px solid #dadada;
      border-radius: 30px;

      p {
        font-size: 20px;
        font-weight: bold;
        margin: 0;
        padding-bottom: 10px;
        color: #fff;
      }
      span {
        font-size: 17px;
        color: #fff;
      }
      .number_div1 {
        color: #fff;
        word-spacing: 1px;
        letter-spacing: 0.1px;
        font-size: 25px;
        font-weight: bold;
        line-height: 1.2em;
      }
    }
  }
  .cont_sub_btn {
    display: flex;
    justify-content: center;
 a {
    font-size:14px;
    color:white;
    background-color:#13c9df;
    padding:19px 31px;
    border:0;
    letter-spacing:3px;
    border-radius: 50px;
    transition: 0.2s;
    font-weight: 600;
    &:hover{
      background-color:#ececec;
      color:#13c9df;
    }
}
}

  @media (max-width: 567px) {
    padding: 0;
    .block_main1 {
      flex: unset;
    }
    .block_main {
      flex: unset;
    }
  }
  @media (min-width: 567px) and (max-width: 992px) {
    padding: 0;
    .block_main1 {
      flex: unset;
    }
    .block_main {
      flex: unset;
    }
  }
`;
