import React from "react";
import styled from "styled-components";
import { primaryColor, secGradient } from "../../../../Global/GlobalButton";

export default function Section4() {
  return (
    <Root>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-2 col-md-12 col-12"></div>
          <div
            className="col-lg-8 col-md-12 col-12 text_div"
            data-aos="fade-up"
          >
            <span>What </span>
            <span className="text"> we </span> <span> do</span>
          </div>
          <div className="col-lg-2 col-md-12 col-12"></div>
        </div>
        <div className="row">
          <div className="col-lg-2 col-md-6 col-12 block_main1">
            <div className="block_div1">
              <div className="number_div1">01</div>
              <p>Shopify E-commerce Development</p>
              <div>
                <span>
                  Build robust, scalable, and user-friendly Shopify stores that
                  drive sales and enhance customer experience.
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 col-12 block_main">
            <div className="block_div">
              <div className="number_div">02</div>
              <p>Shopify Public App Development </p>
              <div>
                <span>
                Develop apps that can be listed on the Shopify App Store, making them accessible to thousands of Shopify merchants globally.

                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-12 col-12 block_main">
            <div className="block_div">
              <div className="number_div">03</div>
              <p>Shopify Custom App Development:</p>
              <div>
                <span>
                Tailor-made apps that address your specific business needs and integrate seamlessly with your existing systems.

                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="cont_sub_btn mt-3 mb-3">
          <a href="/contact-us"> Ready to hire? </a>
        </div>
      </div>
    </Root>
  );
}
const Root = styled.section`
  padding: 30px 50px;

  .cont_sub_btn {
    display: flex;
    justify-content: center;
    a {
      font-size: 14px;
      color: white;
      background-color: #13c9df;
      padding: 19px 31px;
      border: 0;
      letter-spacing: 3px;
      border-radius: 50px;
      transition: 0.2s;
      font-weight: 600;
      &:hover {
        background-color: #ececec;
        color: #13c9df;
      }
    }
  }

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
        font-size: 18px;
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
        font-size: 18px;
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
