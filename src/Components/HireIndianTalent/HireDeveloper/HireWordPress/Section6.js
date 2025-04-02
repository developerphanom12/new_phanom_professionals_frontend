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
            <span>The Process of Hiring a </span>
            <span className="text"> WordPress Developer</span>{" "}
            <span> rom Phanom Professionals ?</span>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-2 col-md-6 col-12 block_main1">
            <div className="block_div1">
              <div className="number_div1">01</div>
              <div>
                <p> Understanding Your Needs </p>
                <span>
                  At Phanom Professionals, we start by thoroughly understanding
                  your project requirements and business objectives. Our team
                  conducts detailed consultations to ensure we capture every
                  aspect of your vision, whether you need a custom WordPress
                  theme, a complex plugin, or a complete website overhaul.
                </span>
                <br />
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 col-12 block_main">
            <div className="block_div">
              <div className="number_div">02</div>
              <div>
                <p>Tailored Talent Selection</p>
                <span>
                  Once we’ve understood your needs, we carefully select the most
                  suitable WordPress developers from our team. Our selection
                  process is designed to match you with developers whose skills
                  and experience align perfectly with your project. Whether you
                  need expertise in custom WordPress development, plugin
                  development, or full-stack capabilities, we ensure that the
                  right experts are on board.
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-12 col-12 block_main">
            <div className="block_div">
              <div className="number_div">03</div>
              <div>
                <p>Transparent Collaboration</p>

                <span>
                  We believe in maintaining clear and open communication
                  throughout the hiring process. We provide you with detailed
                  profiles of the selected developers, highlighting their
                  skills, past projects, and how they can contribute to your
                  project. You’re involved in every step, with the opportunity
                  to interview and assess developers before making a final
                  decision.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-2 col-md-12 col-12 block_main">
            <div className="block_div">
              <div className="number_div">04</div>
              <div>
                <p> Onboarding and Integration</p>
                <span>
                  Once you've chosen your developers, we facilitate a smooth
                  onboarding process. Our team works closely with you to
                  integrate the developers into your workflow, whether they’re
                  joining your in-house team or working remotely. We ensure that
                  they understand your systems, tools, and communication
                  protocols, enabling them to hit the ground running.
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-12 col-12 block_main">
            <div className="block_div">
              <div className="number_div">05</div>
              <div>
                <p> Continuous Support and Flexibility</p>
                <span>
                Our commitment doesn’t end with the hiring process. We provide ongoing support, ensuring that your developers have everything they need to succeed. If your project scope changes or you need additional expertise, we’re flexible and ready to adapt. Our goal is to provide you with the best talent and support to ensure your project’s success.

                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-12 col-12 block_main"></div>
        </div>
        <div class="cont_sub_btn mt-3 mb-3">
          <a href="/contact-us"> Ready to hire? </a>
        </div>

      </div>
    </Root>
  );
}
const Root = styled.section`
  padding: 0 50px;


 
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
