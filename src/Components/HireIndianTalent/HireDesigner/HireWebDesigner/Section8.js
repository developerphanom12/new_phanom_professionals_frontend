import React from "react";
import styled from "styled-components";
import { primaryColor, secGradient } from "../../../../Global/GlobalButton";

export default function Section8() {
  return (
    <Root>
      <div className="container">
        <div className="row">
          <div className="col-lg-1 col-md-12 col-12"></div>

          <div className="col-lg-10 col-md-12 col-12 text_area">
            <span>Key Features of Working with </span> <span className="text">Phanom </span>
            <span> Professionals?</span>
          </div>
          <div className="col-lg-1 col-md-12 col-12"></div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-12 block_main">
            <div className="block_div">
              <p>Skilled and Experienced Designers:  </p>
              <div className="mini_block">
                <div>
                  <span>
                  Access top talent with proven expertise.

                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12 block_main">
            <div className="block_div">
              <p>Cost Savings:  </p>
              <span>
              Save up to 50% compared to other service providers.

              </span>
              {/* <div className="mini_block">
                <div>
                  <FaCheck />
                </div>
                <div>
                  <span>Network - employee strength 200 plus </span>{" "}
                </div>
              </div>
              <div className="mini_block">
                <div>
                  <FaCheck />
                </div>
                <div>
                  <span>Project delivered - 1000+</span>{" "}
                </div>
              </div>
              <div className="mini_block">
                <div>
                  <FaCheck />
                </div>
                <div className="border-bottom">
                  <span>Experience - 5 years</span>
                </div>
              </div> */}
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-12 block_main">
            <div className="block_div">
              <p>Custom Solutions: </p>
              <span>
              Get designs tailored to your specific needs.

              </span>{" "}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6 col-12 block_main">
            <div className="block_div">
              <p>Responsive Design:</p>
              <div className="mini_block">
                <div>
                  <span>
                  Ensure a seamless experience across all devices.

                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12 block_main">
            <div className="block_div">
              <p>Transparent Process:  </p>
              <span>
              Enjoy clear communication and timely updates.

              </span>
              {/* <div className="mini_block">
                <div>
                  <FaCheck />
                </div>
                <div>
                  <span>Network - employee strength 200 plus </span>{" "}
                </div>
              </div>
              <div className="mini_block">
                <div>
                  <FaCheck />
                </div>
                <div>
                  <span>Project delivered - 1000+</span>{" "}
                </div>
              </div>
              <div className="mini_block">
                <div>
                  <FaCheck />
                </div>
                <div className="border-bottom">
                  <span>Experience - 5 years</span>
                </div>
              </div> */}
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-12 block_main">
            <div className="block_div">
              <p>Future-Proofing: </p>
              <span>
              Benefit from scalable and adaptable designs.

              </span>{" "}
            </div>
          </div>
        </div>

        {/* <div className="row">
          <div className="col-lg-4 col-md-6 col-12 block_main">
            <div className="block_div">
              <p>Timely Delivery: </p>
              <div className="mini_block">
                <div>
                  <span>
                  We understand the importance of deadlines. Our team is committed to delivering high-quality websites on schedule and within budget, ensuring you achieve your goals promptly and efficiently.

                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12 block_main"></div>
          <div className="col-lg-4 col-md-12 col-12 block_main"></div>
        </div> */}

<div class="cont_sub_btn mt-3 mb-5">
          <a href="/contact-us"> Ready to hire? </a>
        </div>
      </div>
    </Root>
  );
}
const Root = styled.section`
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
    span {
      color: #6e6e6e;
    }
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
      .mini_block {
        display: flex;
        .border-bottom {
          padding-bottom: 30px;
          border-bottom: 1px solid #dadada;
        }
        svg {
          color: ${primaryColor};
          width: 20px;
          height: 20px;
          font-weight: 600;
          margin: 10px;
        }
      }
    }
  }
  @media (max-width: 567px) {
    .text_area {
      margin-bottom: 0;
      padding: 0;
    }
  }
  @media (min-width: 567px) and (max-width: 992px) {
    .text_area {
      margin-bottom: 0;
      padding: 0;
    }

    .block_main .block_div {
    padding: 50px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    border: 1px solid #dadada;
    border-radius: 30px;
    height: 266px;
}

.block_main {
    margin-bottom: 20px;
    display: unset;
    flex: unset;
}
  }
`;
