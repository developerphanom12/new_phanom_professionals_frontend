import React from "react";
import styled from "styled-components";
import { primaryColor, secGradient } from "../../../../Global/GlobalButton";

export default function Section7() {
  return (
    <Root>
      <div className="container-fluid mt-3">
        <div className="row">
          <div
            className="col-lg-12 col-md-12 col-12 text_div"
            data-aos="fade-up"
          >
            {/* <span>Ready to Transform Your </span>
            <span className="text"> Digital</span> <span> Experience?</span> */}

            <span>
              Connect with our In-House team of React Native Developers who will
              guide you knowing difference between React Native and JS
            </span>
            <p className="mt-3">
              Facebook created React Native, and choosing a React Native app
              developer is a tremendous investment.
            </p>
            <p>
              <b>
                The distinction between React Native and ReactJS is as follows:
              </b>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-2 col-md-6 col-12 block_main1">
            <div className="block_div1">
              {/* <div className="number_div1">01</div> */}
              <div>
                <p> Application range:</p>
                <span>
                  React Native is by and large meant for the improvement of
                  local-feeling mobile apps.
                </span>
                <br />
                <span>
                  ReactJS, on the other hand, is a JavaScript library that
                  specializes in producing responsive personal interfaces for
                  online projects.
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 col-12 block_main">
            <div className="block_div">
              {/* <div className="number_div">02</div> */}
              <div>
                <p>Routing mechanism:</p>
                <span>
                  React Native includes an in-constructed navigator library for
                  cell app navigation.
                </span>
                <br />
                <span>
                  ReactJS is predicated on a react-router for navigation as it
                  lacks built-in routing abilities.
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-12 col-12 block_main">
            <div className="block_div">
              {/* <div className="number_div">03</div> */}
              <div>
                <p>Different React Native Threads:</p>
                <span>
                  <b>Shadow thread:</b>A historical past thread in React Native
                  that calculates the layout created by the usage of the React
                  framework.
                </span>
                <br />
                <span>
                  <b>Javascript thread: </b>In React Native, this thread
                  executes the primary JavaScript code.
                </span>
                <br />
                <span>
                  <b>MAIN/UI thread: </b>The foremost software thread in the fee
                  of executing the Android or iOS cellular app.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-2 col-md-6 col-12 block_main">
            <div className="block_div">
              {/* <div className="number_div">04</div> */}
              <div>
                <p> Causes of React Native Performance Issues:</p>
                <span>
                  <b>Thread speed issues:</b>When threads run at unique speeds,
                  React Native may also enjoy overall performance problems.
                </span>
                <br />
                <span>
                  <b> Reduce needless bridge passes: </b>Performance can be
                  advanced by decreasing needless bridge passes among threads.
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 col-12 block_main">
            <div className="block_div">
              {/* <div className="number_div">04</div> */}
              <div>
                <p> React Native Memory Leak:</p>
                <span>
                  <b>Memory leak reasons: </b>Memory leaks occur when the Garbage Collector discovers unreferenced graph sections.
                </span>
                <br />
                <span>
                  <b> Prevention: </b>Developers can avoid reminiscence leaks by attaching each JS module scope to a root object and making sure adequate rubbish series.

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
