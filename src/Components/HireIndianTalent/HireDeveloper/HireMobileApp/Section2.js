import React from "react";
import styled from "styled-components";
import tag1 from "../../../../Assets/Images/tag1.png";
import tag2 from "../../../../Assets/Images/tag2.png";
import tag3 from "../../../../Assets/Images/tag3.png";
import tag4 from "../../../../Assets/Images/tag4.png";
import { IoIosArrowRoundForward } from "react-icons/io";
import { primaryColor, secGradient } from "../../../../Global/GlobalButton";

export default function Section2() {
  return (
    <Root>
      <div className="container">
        <div className="row">
          <div className="col-lg-1 col-md-12 col-12"></div>
          <div className="col-lg-10 col-md-12 col-12 text_area">
            <span>Elеvatе Your </span> <span className="text"> Tеam</span>
            <span> in 4 Simplе Stеps</span>
          </div>
          <div className="col-lg-1 col-md-12 col-12"></div>
        </div>
        <div className="row">
          <div className="col-lg-5 col-md-12 col-12">
            <div className="row">
              <div className="col-lg-5 col-md-5 col-12">
                <div className="segment">
                  <img src={tag1} alt="img" />
                  <span>Sharе Your Vision</span>
                  <p>
                    Lеt us know your nееds, and we'll engage with you to truly
                    grasp your prеfеrеncеs and requirements.
                  </p>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-12 arrow">
                <IoIosArrowRoundForward />
              </div>
              <div className="col-lg-5 col-md-5 col-12">
                <div className="segment">
                  <img src={tag2} alt="img" />
                  <span className="span_div">
                    Phanom Professionals helps in meeting your project
                    requirement
                  </span>
                  <p>
                    Our experts will guide and help in completing your project
                    efficiently.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-12 col-12 arrow hide_pad">
            <IoIosArrowRoundForward />
          </div>
          <div className="col-lg-5 col-md-12 col-12">
            <div className="row">
              <div className="col-lg-5 col-md-5 col-12">
                <div className="segment">
                  <img src={tag3} alt="img" />
                  <span>24/7 Support service</span>
                  <p>
                    Our In-house team of (50+) can connect with you as your
                    suitable time zone which gives ease and flexibility to work
                    schedule.
                  </p>
                </div>
              </div>

              <div className="col-lg-2 col-md-2 col-12 arrow">
                {" "}
                <IoIosArrowRoundForward />
              </div>
              <div className="col-lg-5 col-md-5 col-12">
                <div className="segment">
                  <img src={tag4} alt="img" />
                  <span className="span_div2">Trust in Your Dеcision</span>
                  <p>
                    Oncе you'vе madе your choicе, rеst еasy as wе handlе thе
                    onboarding procеss with utmost carе. Your nеw tеam mеmbеr is
                    ready to contribute to your success!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="cont_sub_btn">
          <a href="/contact-us"> Ready to hire? </a>
        </div>

      </div>
    </Root>
  );
}
const Root = styled.section`
  background: #f3f3f3;



        .cont_sub_btn {
    display: flex;
    justify-content: center;
 a {
    font-size:14px;
    color:white;
    background-color:#13c9df;
    padding:19px 31px;
    margin-bottom:40px;
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
  .arrow {
    padding-top: 177px;
    text-align: center;
    svg {
      width: 40px;
      height: 40px;
      font-weight: 100;
    }
  }
  svg {
    color: ${primaryColor};
  }
  .text_area {
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
  .segment {
    display: flex;
    flex-direction: column;
    flex: 1;
    .span_div {
      padding: 7px;
    }
    .span_div2 {
      padding: 7px;
    }
    span {
      text-align: center;
      background-color:${primaryColor};
      color: white;
      font-size: 14px;
      letter-spacing: 1.1px;
      padding: 12px;
      border-radius: 10px;
      border: none;
      margin-bottom: 20px;
    }
    p {
      color: #6e6e6e;
      line-height: 1.7em;
    }
  }

  @media (max-width: 567px) {
    .text_area {
      padding: 10px 10px;
    }
    .arrow {
      padding-top: 0;
      transform: rotate(90deg);
    }

    .segment {
      align-items: center;
      justify-content: center;
    }

    .segment p {
      text-align: center;
    }
  }

  @media (min-width: 567px) and (max-width: 992px) {
    .hide_pad {
      display: none;
    }
  }
`;
