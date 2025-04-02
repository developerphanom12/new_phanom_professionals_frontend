import React from "react";
// import { FaCheck } from "react-icons/fa6";
import styled from "styled-components";
import { primaryColor, secGradient } from "../../../../Global/GlobalButton";

export default function Section5() {
  return (
    <Root>
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-lg-1 col-md-12 col-12"></div>

          <div className="col-lg-10 col-md-12 col-12 text_area">
            <span>Why Choose </span>{" "}
            <span className="text"> Phanom Professionals </span>
            <span>for Node.js Development?</span>{" "}
            <p className="text-center mt-3">
              When it comes to Node.js development, selecting the right team is
              crucial for your project's success. Phanom Professionals stands
              out for several reasons:
            </p>
          </div>
          <div className="col-lg-1 col-md-12 col-12"></div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-12 block_main">
            <div className="block_div">
              <p>Tailored Solutions:</p>
              <span>
                We understand that every project has unique requirements. Our
                developers craft bespoke solutions that align with your business
                objectives.
              </span>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12 block_main">
            <div className="block_div">
              <p>Rapid Deployment:</p>

              <span>
                With our streamlined processes, you can onboard developers
                quickly, ensuring your project timelines are met without delay.
              </span>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-12 block_main">
            <div className="block_div">
              <p>Global Expertise: </p>
              <span>
                Our developers bring global experience, having worked on a
                variety of international projects. This diversity enhances their
                problem-solving capabilities and innovation.
              </span>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-12 col-12 block_main">
            <div className="block_div">
              <p>Commitment to Quality:</p>
              <span>
                We adhere to industry best practices, ensuring that the code we
                deliver is clean, maintainable, and scalable.
              </span>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-12 block_main">
            <div className="block_div">
              <p>Client-First Approach: </p>
              <span>
              Our developers are not just technically skilled but also understand the importance of clear communication, timely updates, and proactive problem-solving.

              </span>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-12 block_main"></div>
        </div>
        <div class="cont_sub_btn mt-5 mb-5">
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
  .text_area {
    margin-bottom: 30px;
    padding: 0 50px;
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
    padding: 0;
    .text_area {
      margin-bottom: 0;
      padding: 0;
    }
    .block_main {
      margin-bottom: unset;
      margin-top: 20px;
      flex: unset;
    }
  }

  @media (min-width: 567px) and (max-width: 992px) {
    padding: 0;
    .text_area {
      margin-bottom: 0;
      padding: 0;
    }

    .block_main {
      margin-bottom: unset;
      margin-top: 20px;
      flex: unset;
    }
  }
`;
