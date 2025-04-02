import React from "react";
import styled from "styled-components";
import ind1 from "../../../Assets/Images/ind1.png";
import ind2 from "../../../Assets/Images/ind2.png";
import ind3 from "../../../Assets/Images/ind3.png";
import ind4 from "../../../Assets/Images/ind4.png";
import ind5 from "../../../Assets/Images/ind5.png";
import ind6 from "../../../Assets/Images/ind6.png";
import ind7 from "../../../Assets/Images/ind7.png";
import ind8 from "../../../Assets/Images/ind8.png";
import ind9 from "../../../Assets/Images/ind9.png";
import ind10 from "../../../Assets/Images/ind10.png";
import ind11 from "../../../Assets/Images/ind11.png";
import ind12 from "../../../Assets/Images/ind12.png";
import ind13 from "../../../Assets/Images/ind13.png";
import ind14 from "../../../Assets/Images/ind14.png";
import ind15 from "../../../Assets/Images/ind15.png";
import ind16 from "../../../Assets/Images/ind16.png";
import ind17 from "../../../Assets/Images/ind17.png";
import ind18 from "../../../Assets/Images/ind18.png";
import ind19 from "../../../Assets/Images/ind19.png";
import ind20 from "../../../Assets/Images/ind20.png";
import { secGradient } from "../../../Global/GlobalButton";

export default function Section3() {
  return (
    <Root>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-1 col-md-12 col-12"></div>

          <div className="col-lg-10 col-md-12 col-12 text_area">
            <span>India is home to many </span>{" "}
            <span className="text"> gifted people </span>
            <span>who are already changing the world.</span>
            <p>
              Indians currently manage a number of the largest corporations in
              the world. Here are a few illustrations.
            </p>
          </div>
          <div className="col-lg-1 col-md-12 col-12"></div>
        </div>
        <div className="row">
          <div className="col-lg-2 col-md-12 col-12 segment">
            <div className="fleexxx">
              <img src={ind1} alt="img" />
              <img src={ind11} alt="img" />
            </div>
          </div>
          <div className="col-lg-2 col-md-12 col-12 segment">
            {" "}
            <div className="fleexxx">
              <img src={ind2} alt="img" />
              <img src={ind12} alt="img" />
            </div>
          </div>
          <div className="col-lg-2 col-md-12 col-12 segment">
            {" "}
            <div className="fleexxx">
              <img src={ind3} alt="img" />
              <img src={ind13} alt="img" />
            </div>
          </div>
          <div className="col-lg-2 col-md-12 col-12 segment">
            {" "}
            <div className="fleexxx">
              <img src={ind4} alt="img" />
              <img src={ind14} alt="img" />
            </div>
          </div>
          <div className="col-lg-2 col-md-12 col-12 segment">
            {" "}
            <div className="fleexxx">
              <img src={ind5} alt="img" />
              <img src={ind15} alt="img" />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-2 col-md-12 col-12 segment">
            <div className="fleexxx">
              <img src={ind6} alt="img" />
              <img src={ind16} alt="img" />
            </div>
          </div>
          <div className="col-lg-2 col-md-12 col-12 segment">
            {" "}
            <div className="fleexxx">
              <img src={ind7} alt="img" />
              <img src={ind17} alt="img" />
            </div>
          </div>
          <div className="col-lg-2 col-md-12 col-12 segment">
            {" "}
            <div className="fleexxx">
              <img src={ind8} alt="img" />
              <img src={ind18} alt="img" />
            </div>
          </div>
          <div className="col-lg-2 col-md-12 col-12 segment">
            {" "}
            <div className="fleexxx">
              <img src={ind9} alt="img" />
              <img src={ind19} alt="img" />
            </div>
          </div>
          <div className="col-lg-2 col-md-12 col-12 segment">
            {" "}
            <div className="fleexxx">
              <img src={ind10} alt="img" />
              <img src={ind20} alt="img" />
            </div>
          </div>
        </div>
      </div>
    </Root>
  );
}
const Root = styled.section`

  .text_area {
    margin-bottom: 30px;
    padding: 20px 50px;
    text-align: center;
    .text {
      background:${secGradient};
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
    width: 270px;

    /* > div {
      display: flex;
      align-items: center;
      width: 100%;
    } */
  }
  img {
    width: 200px;
  }
  @media (max-width: 567px) {
    .segment {
      width: 100%;
    }
    .fleexxx {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    img {
      width: 170px;
    }

    .text_area {
      margin-bottom: 0;
      padding: 10px 10px;
    }
    .text_area p {
      padding: 20px 0 0 0;
    }
  }

  @media (min-width: 567px) and (max-width: 992px) {
    .text_area {
      margin-bottom: 0;
      padding: 10px 10px;
    }
    .segment {
      width: 242px;
    }
  }
`;
