import React from "react";
import styled from "styled-components";
import {  secGradient } from "../../../../Global/GlobalButton";

export default function Section5() {
  return (
    <Root>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-1 col-md-12 col-12"></div>

          <div className="col-lg-10 col-md-12 col-12 text_area">
            <span>Development </span> <span className="text"> Process </span>
            {/* <span>Bеyond Imagination</span> */}
          </div>
          <div className="col-lg-1 col-md-12 col-12"></div>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-12 col-12 block_main">
            <div className="block_div">
              <p>Discovery</p>
              <span>
                We begin by understanding your goals, target audience, and
                project requirements, ensuring a clear roadmap for success.
              </span>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-12 block_main">
            <div className="block_div">
              <p>Design</p>
              <span>
                Our creative team crafts intuitive, user-centric designs that
                reflect your brand, ensuring an engaging and cohesive user
                experience.
              </span>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-12 block_main">
            <div className="block_div">
              <p>Development</p>
              <span>
                We turn designs into reality with clean, efficient code,
                integrating functionalities and ensuring seamless performance
                across all devices.
              </span>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-12 col-12 block_main">
            <div className="block_div">
              <p>Testing & Launch</p>
              <span>
              Rigorous testing is conducted to identify and fix issues, ensuring a flawless launch that meets your expectations and industry standards.
              </span>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12 block_main">
        
          </div>
          <div className="col-lg-4 col-md-12 col-12 block_main"></div>
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
