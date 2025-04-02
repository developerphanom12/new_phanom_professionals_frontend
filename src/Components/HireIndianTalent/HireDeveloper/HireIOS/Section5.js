import React from "react";
import styled from "styled-components";
import { primaryColor, secGradient } from "../../../../Global/GlobalButton";

export default function Section5() {
  return (
    <Root>
      <div className="container-fluid mt-3">
        <div className="row">
          <div
            className="col-lg-12 col-md-12 col-12 text_div"
            data-aos="fade-up"
          >
            <span>Hеrе arе insightful </span>
            <span className="text"> tips</span>{" "}
            <span>to guidе your dеcision-making:</span>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-2 col-md-6 col-12 block_main1">
            <div className="block_div1">
              <div className="number_div1">01</div>
              <div>
                <p>Dеfіnе Your Requirements:</p>
                <span>
                  Clеarly outlinе your projеct scopе, required expertise,
                  skills, and timеlinеs. This detailed project brief serves as a
                  roadmap, strеamlining your hiring process and еnhancing
                  productivity.
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 col-12 block_main">
            <div className="block_div">
              <div className="number_div">02</div>
              <div>
                <p>Choosе Trustеd Platforms:</p>
                <span>
                  Opt for rеputablе platforms likе Phanom Profеssionals that
                  will guide you in proper work management and lead your project
                  efficiently.
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-12 col-12 block_main">
            <div className="block_div">
              <div className="number_div">03</div>
              <div>
                <p>Cost Advantage:</p>
                <span>
                  We are expecting to save clients money as well as our money
                  that should not be given to any third party so this is the
                  benefit from both sides. We are expecting the businesses to
                  directly connect with us and save their money as well as
                  directly hire the team from our company.
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
                <p>Meeting customer's Expectations:</p>
                <span>
                Phanom professionals can help directly meet the business or client requirements by finding the right iOS developers.
                </span>
                
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 col-12 block_main">
            {/* <div className="block_div">
              <div className="number_div">05</div>
              <div>
                <p>Proven Track Record: </p>
                <span>
                  With numerous successful projects and satisfied clients,
                  Phanom Professionals has a proven track record of delivering
                  high-quality web design services. Our testimonials and case
                  studies speak to our ability to deliver results.
                </span>
              </div>
            </div> */}
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
