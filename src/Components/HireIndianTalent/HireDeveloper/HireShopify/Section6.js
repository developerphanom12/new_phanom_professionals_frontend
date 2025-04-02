import React from "react";
import styled from "styled-components";
import { primaryColor, secGradient } from "../../../../Global/GlobalButton";

export default function Section6() {
  return (
    <Root>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-2 col-md-12 col-12"></div>
          <div
            className="col-lg-8 col-md-12 col-12 text_div"
            data-aos="fade-up"
          >
            <span>Shopify </span>
            <span className="text">App</span>{" "}
            <span>developer Hiring Process</span>
          </div>

          <div className="col-lg-2 col-md-12 col-12"></div>
        </div>

        <p className="paragraph">
        Our Shopify developer hiring process ensures you get the best
                  talent for your project. From inquiry to interview, selection,
                  and secure payment, each step is designed to match you with a
                  skilled Shopify app developer, Shopify E-commerce Developer or
                  Custom Shopify app Developer. This process guarantees a smooth
                  start and successful execution of your Shopify app
                  development.
        </p>
        <div className="row">
      
          <div className="col-lg-4 col-md-6 col-12 block_main">
            <div className="block_div">
              <div className="number_div">01</div>
              <p>Begin With Inquiry </p>
              <span>
                Start by reaching out to discuss your specific Shopify app
                development needs, and we'll guide you through the process.
              </span>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-12 block_main">
            <div className="block_div">
              <div className="number_div">02</div>
              <p>Schedule Interview</p>
              <span>
                We'll arrange an interview with top Shopify app developers to
                ensure the perfect fit for your project requirements.
              </span>
            </div>
          </div>

          <div className="col-lg-4 col-md-12 col-12 block_main">
            <div className="block_div">
              <div className="number_div">03</div>
              <p>Select & Hire Shopify App Developer </p>
              <span>
                Choose the best candidate from our talented pool of developers
                to bring your Shopify app vision to life.
              </span>
            </div>
          </div>
        </div>

        <div className="row">
       
          <div className="col-lg-4 col-md-6 col-12 block_main">
            <div className="block_div">
              <div className="number_div">04</div>
              <p>Make The Payment </p>
              <span>
                Secure your developer by completing the payment process, setting
                the stage for a successful collaboration.
              </span>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12 block_main">
            <div className="block_div">
              <div className="number_div">05</div>
              <p>Get Started With Your Project</p>
              <span>
                Once hired, the developer dives into your project, turning your
                Shopify app ideas into a fully functional reality.
              </span>
            </div>
          </div>

          <div className="col-lg-4 col-md-12 col-12 block_main">

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
  .paragraph {
    text-align: center;
    padding-bottom: 20px;
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
