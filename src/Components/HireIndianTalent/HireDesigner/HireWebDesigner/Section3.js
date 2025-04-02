import React from "react";
import styled from "styled-components";
import {  secGradient } from "../../../../Global/GlobalButton";

export default function Section3() {
  return (
    <Root>
      <div className="container mt-3">
        <div className="row">
          <div className="col-lg-1 col-md-12 col-12"></div>
          <div className="col-lg-10 col-md-12 col-12 text_div">
            <span>The </span>
            <span className="text">Hiring Process</span>{" "}
            <span>at Phanom Professionals</span>
          </div>
          <div className="col-lg-1 col-md-12 col-12"></div>
        </div>
        <div className="row">
          
          <div className="col-lg-12 col-md-12 col-12">
            <div className="segment">
              <p>1. Initial Consultation: </p>
              <span>
                We start with a detailed consultation to understand your vision,
                goals, and requirements. This helps us tailor our services to
                meet your specific needs.
              </span>
              
            </div>
            <div className="segment">
              <p>2. Proposal and Agreement: </p>
              <span>
                Based on the consultation, we provide a comprehensive proposal
                outlining the project scope, timeline, and cost. Once agreed
                upon, we finalize the agreement and begin work.
              </span>
            </div>
            <div className="segment">
              <p>3. Design and Development: </p>
              <span>
                {" "}
                Our designers start working on your project, incorporating your
                feedback and making necessary revisions to ensure the design
                aligns with your brand.
              </span>
            </div>

            <div className="segment">
              <p>4. Review and Launch: </p>
              <span>
                {" "}
                Before launching, we conduct thorough testing to ensure
                everything functions smoothly. We review the final design with
                you and make any last-minute adjustments.
              </span>
            </div>

            <div className="segment">
              <p>5. Ongoing Support: </p>
              <span>
                {" "}
                After launch, we offer continued support to address any issues
                and ensure your website remains up-to-date and effective.
              </span>
            </div>
          </div>
        </div>
      </div>
    </Root>
  );
}
const Root = styled.section`
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
    p {
      text-align: center;
      color: #6e6e6e;
      padding: 20px 0px;
      letter-spacing: 1px;
    }
  }
  .img_div {
    text-align: center;
    img {
      width: 30%;
    }
  }
  .segment {
    padding: 17px 0px;
    p {
      font-size: 20px;
      color: #2d2d2d;
      font-weight: bold;
      margin-bottom: 13px;
    }
    span {
      font-size: 17px;
      color: #6e6e6e;
      word-spacing: 2px;
      margin-bottom: 20px;
    }
    h6 {
      margin: 30px 0px;
      font-size: 17px;
      color: #6e6e6e;
      word-spacing: 2px;
      line-height: 1.7em;
      span {
        color: #2d2d2d;
        font-weight: bold;
      }
    }
  }

  @media (max-width: 567px) {
    .text_div {
      padding: 0;
    }
    .segment {
      padding: 0;
    }
    .img_div {
      display: none;
    }
  }

  @media (min-width: 567px) and (max-width: 992px) {
    .text_div {
      padding: 0;
    }
    .segment {
      padding: 0;
    }
    .img_div {
      display: none;
    }
  }
`;
