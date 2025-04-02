import React from "react";
import styled from "styled-components";
import {  secGradient } from "../../../../Global/GlobalButton";

export default function Section3() {
  return (
    <Root>
      <div className="container-fluid mt-3">
        <div className="row">
          <div className="col-lg-1 col-md-12 col-12"></div>

          <div className="col-lg-10 col-md-12 col-12 text_area">
            <span>Key Features of Our </span>{" "}
            <span className="text"> UI/UX </span>
            <span>Design Services</span>
          </div>
          <div className="col-lg-1 col-md-12 col-12"></div>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6 col-12 block_main">
            <div className="block_div">
              <p>Comprehensive Technical Expertise</p>
              <span>
                <b>Cross-Platform Design:</b> Skilled in crafting designs for
                iOS, Android, and web platforms, ensuring seamless functionality
                across all devices.
              </span>
              <span>
                <b>Diverse Industry Experience:</b> From SaaS to e-commerce, our
                designers have worked across various sectors, bringing valuable
                insights to every project.
              </span>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12 block_main">
            <div className="block_div">
              <p>Cutting-Edge Design Solutions</p>
              <span>
                <b>Mockups & Prototypes:</b> Detailed mockups and prototypes
                that bring your vision to life before development begins.
              </span>
              <span>
                <b>Responsive Design: </b> Designs that adapt perfectly to any
                screen size, enhancing user experience on all devices.
              </span>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-12 block_main">
            <div className="block_div">
              <p>Collaborative Approach</p>
              <span>
                <b>Integrated Teamwork: </b>Our designers work closely with your
                team, including content creators and developers, to ensure a
                cohesive and effective design strategy.
              </span>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-12 col-12 block_main">
            <div className="block_div">
              <p> Strategic UI/UX Consulting</p>
              <span>
                <b>Tailored Strategies: </b>We provide strategic guidance to align your design with business objectives, ensuring a user-centric approach that drives engagement and conversions.

              </span>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12 block_main"></div>
          <div className="col-lg-4 col-md-12 col-12 block_main"></div>
        </div>

        {/* <div className="row">
          <div className="col-lg-1 col-md-12 col-12"></div>

          <div className="col-lg-10 col-md-12 col-12 text_area">
            <span>Navigating </span>{" "}
            <span className="text"> UI and UX Dеsign: </span>
            <span>A Usеr-Cеntric Approach</span>
            <p>
              In the intricate realm of design, both UI and UX sharе a common
              goal – ensuring a positive usеr еxpеriеncе. UI, the interactive
              facet, defines how users engage with a product, whilе UX shapes
              thе overall feel of this interaction.
            </p>
          </div>
          <div className="col-lg-1 col-md-12 col-12"></div>
        </div> */}

        
      </div>
    </Root>
  );
}
const Root = styled.section`
  padding: 0 50px;

  .text_area {
    margin-bottom: 30px;
    padding: 20px 50px;
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
      padding: 20px;
      word-spacing: 1px;
    }
  }
  .block_main {
    margin-bottom: 20px;
    display: flex;
    flex: 1;
    .block_div {
      padding: 50px;
      display: flex;
      flex-direction: column;
      gap: 20px;
      border: 1px solid #dadada;
      border-radius: 30px;
      &:hover {
        background-color: #dadada4f;
      }
      p {
        font-size: 25px;
        font-weight: bold;
        margin: 0;
      }
      span {
        padding-bottom: 20px;
        border-bottom: 1px solid lightgray;
        color: #6e6e6e;
      }
    }
  }
  @media (max-width: 567px) {
    padding: 0;
    .text_area {
      padding: 10px 5px;
      margin-bottom: 0;
    }
    .block_main {
      flex: unset;
    }
  }

  @media (min-width: 567px) and (max-width: 992px) {
    padding: 0;
    .text_area {
      padding: 10px 5px;
      margin-bottom: 0;
    }
    .block_main {
      flex: unset;
    }
  }
`;
