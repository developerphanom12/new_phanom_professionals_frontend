import React from "react";
import styled from "styled-components";

import { IoIosArrowRoundForward } from "react-icons/io";
import { FaUserCheck } from "react-icons/fa";
import { RiServiceFill } from "react-icons/ri";
import { RiContactsBook3Fill } from "react-icons/ri";
import { IoLogoFigma } from "react-icons/io5";
import { FaComputer, FaLaptopCode } from "react-icons/fa6";

export const Section4 = () => {
  return (
    <Root>
      <div className="container ">
        <div className="row">
          <div className="col-lg-1 col-md-12 col-12"></div>
          <div className="col-lg-10 col-md-12 col-12 text_area">
            <span className="text">OUR PROCESS</span>
            <p className="paragraph">
              Make this a visually appealing, step-by-step breakdown to show
              transparency and professionalism.
            </p>
          </div>

          <div className="col-lg-1 col-md-12 col-12"></div>
        </div>
        <div className="row">
          <div className="col-lg-5 col-md-12 col-12">
            <div className="row">
              <div className="col-lg-5 col-md-5 col-12">
                <div className="segment">
                  <div className="img_icon">
                    <FaUserCheck />
                  </div>
                  <span> Client Requirements </span>
                  <p>
                    We begin by thoroughly understanding your business goals and
                    challenges.
                  </p>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-12 arrow">
                <IoIosArrowRoundForward />
              </div>
              <div className="col-lg-5 col-md-5 col-12">
                <div className="segment">
                  <div className="img_icon">
                    <RiContactsBook3Fill />
                  </div>

                  <span className="span_div">Final Documentation </span>
                  <p>
                    Clear documentation ensures we’re aligned on all
                    deliverables.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-12 col-12 arrow hide_pad spac_arr">
            <IoIosArrowRoundForward />
          </div>
          <div className="col-lg-5 col-md-12 col-12">
            <div className="row">
              <div className="col-lg-5 col-md-5 col-12">
                <div className="segment">
                  <div className="img_icon">
                    <IoLogoFigma />
                  </div>

                  <span>Prototypes & Figma Designs</span>
                  <p>
                    We create detailed wireframes and prototypes to visualize
                    your ideas.
                  </p>
                </div>
              </div>

              <div className="col-lg-2 col-md-2 col-12 arrow">
                {" "}
                <IoIosArrowRoundForward />
              </div>
              <div className="col-lg-5 col-md-5 col-12">
                <div className="segment">
                  <div className="img_icon">
                    <FaLaptopCode />
                  </div>

                  <span className="span_div2">UI/UX Design</span>
                  <p>
                    Our user-centered design approach guarantees a seamless
                    experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-5 col-md-12 col-12">
            <div className="row">
              <div className="col-lg-5 col-md-5 col-12">
                <div className="segment">
                  <div className="img_icon">
                    <FaComputer />
                  </div>
                  <span>Backend Development </span>
                  <p>
                    Expert coding with the latest frameworks for stability and
                    security.
                  </p>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-12 arrow">
                <IoIosArrowRoundForward />
              </div>
              <div className="col-lg-5 col-md-5 col-12">
                <div className="segment">
                  <div className="img_icon">
                    <RiServiceFill />
                  </div>

                  <span className="span_div">Deployment </span>
                  <p>
                    We ensure a smooth, secure launch on your preferred servers.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-12 col-12 arrow hide_pad"></div>
          <div className="col-lg-5 col-md-12 col-12">
            <div className="row">
              <div className="col-lg-5 col-md-5 col-12"></div>

              <div className="col-lg-2 col-md-2 col-12 arrow"> </div>
              <div className="col-lg-5 col-md-5 col-12"></div>
            </div>
          </div>
        </div>
      </div>
    </Root>
  );
};

const Root = styled.section`
  background: #f3f3f3;
  padding: 50px 0;

  .col-lg-2.col-md-12.col-12.arrow.hide_pad.spac_arr{
    width: 10%;
}


  .arrow {
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      width: 40px;
      height: 40px;
      font-weight: 100;
    }
  }

  .text_area {
    padding: 20px 50px;
    text-align: center;
    .text {
      background: #0b66c2;
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

  svg {
    color: #0b66c2;
  }

  .segment {
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 10px;
    .img_icon {
      display: flex;
      justify-content: center;

      svg {
        width: 40px;
        height: 40px;
        color: #0b66c2;
      }
    }
    span {
      text-align: center;  
      font-size: 15px;
      letter-spacing: 1.1px;
      font-weight:bold;
      border-radius: 10px;
      border: none;
      color:#0b66c2;
    }
    p {
      color: #6e6e6e;
      line-height: 1.7em;
      text-align: center;
    }
  }

  @media (max-width: 567px) {
    .text_area {
      padding: 10px 10px;
    }
    .arrow {
      padding-top: 0;
      transform: rotate(90deg);
      display: none;
    }

    .segment {
      align-items: center;
      justify-content: center;
      margin-top: 20px;
    }

    .segment p {
      text-align: center;
    }

    .segment span {
      width: 100%;
    }
  }

  @media (min-width: 567px) and (max-width: 992px) {
    .text_area {
      padding: 10px 10px;
    }
    .hide_pad {
      display: none;
    }
  }
`;
