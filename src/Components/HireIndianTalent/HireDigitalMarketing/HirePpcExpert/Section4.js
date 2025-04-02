import React from "react";
import styled from "styled-components";
import svgg from "../../../../Assets/Images/svg.svg";
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
            <span>Our SEM consultants and </span>
            <span className="text">PPC experts </span>{" "}
            <span> can help you with</span>
          </div>
          <div className="col-lg-2 col-md-12 col-12"></div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6 col-12 block_main">
            <div className="block_div">
              <div>
                <img src={svgg} alt="img" />
              </div>
              <div className="tag_text">
                <p>Managing Ads</p>
                <span>
                  Hire an AdWords consultant to help you choose the ideal ad
                  management channel to increase conversion rates and realize
                  the full potential of your business.
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12 block_main">
            <div className="block_div">
              <div>
                <img src={svgg} alt="img" />
              </div>
              <div className="tag_text">
                <p>Advertisement Remarketing</p>
                <span>
                  Who better to serve your ads to than those who already have
                  faith in your company and its offerings? Employ Google AdWords
                  specialists to make sure your retargeting has a personalized
                  touch.
                </span>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-12 block_main">
            <div className="block_div">
              <div>
                <img src={svgg} alt="img" />
              </div>
              <div className="tag_text">
                <p>Localized Marketing</p>
                <span>
                  When it comes to efficient marketing, native advertisements
                  are a popular choice among consumers and our personal
                  favorite.
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12 block_main">
            <div className="block_div">
              <div>
                <img src={svgg} alt="img" />
              </div>
              <div className="tag_text">
                <p>Management of Video Ads</p>
                <span>
                  Using YouTube's video ads, businesses of any size can improve
                  their sales and global recognition.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6 col-12 block_main">
            <div className="block_div">
              <div>
                <img src={svgg} alt="img" />
              </div>
              <div className="tag_text">
                <p>PPC Audits</p>
                <span>
                  Did you just lose your ranking due to a Google penalty, or are
                  you trying to find ways to make your ads perform better?
                  Engage the best PPC consultants for AdWords that are
                  available.
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12 block_main">
            <div className="block_div">
              <div>
                <img src={svgg} alt="img" />
              </div>
              <div className="tag_text">
                <p>Social Media Promotion</p>
                <span>
                  Every business is different, and selecting the right social
                  media platforms is part of that. We can help you with YouTube,
                  Facebook, LinkedIn, Twitter, and Instagram.
                </span>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-12 col-12 block_main"></div>
          <div className="col-lg-3 col-md-12 col-12 block_main"></div>
        </div>

        <div class="cont_sub_btn mt-5 mb-5">
          <a href="/contact-us"> Ready to hire? </a>
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
