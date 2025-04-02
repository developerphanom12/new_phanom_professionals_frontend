import React, { useEffect } from "react";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaPlay } from "react-icons/fa6";
import { primaryColor, secGradient } from "../../../../Global/GlobalButton";
// import { HireForm } from "../../../HireForm/HireForm";

export default function Section1() {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);
  return (
    <Root>
      <div className="container-fluid">
        <div className="row">
          <div
            className="col-lg-6 col-md-12 col-12 first-div"
            data-aos="fade-up"
          >
            <div className="button_div">
              <button>
                Homepage <FaPlay />
              </button>
              <button>Hire NodeJs Developer</button>
            </div>
            <span className="display">
              <span className="first-content">Hire </span>
              <span className="second-content">Nodе.js developers </span>
              <span className="first-content">remotely</span>
            </span>
            <p className="mt-3">
              <b>
                Phanom Profеssionals providе adaptablе and budgеt-friеndly
                hiring solutions
              </b>
            </p>
            <p className="paragraph">
              Our talеnt nеtwork curators havе mеticulously sourcеd, scrееnеd,
              and assеmblеd a nеtwork of top-notch Nodе.js dеvеlopеrs with a
              strong undеrstanding of the Nodе.js runtime environment.
            </p>
          </div>
          <div className="col-lg-6 col-md-12 col-12 second-div">
          {/* <HireForm/> */}
          </div>
        </div>
      </div>
    </Root>
  );
}
const Root = styled.section`
  background-color: #ffffffd4;
  padding: 70px 100px;

  .first-div {
    border: none;
    padding-right: 25px;
    /* .display {
      display: flex;
    } */
    .first-content {
      display: flex;
      font-size: 45px;
      font-weight: bold;
      line-height: 1.3em;
      margin-right: 10px;
    }
    .second-content {
      font-size: 45px;
      font-weight: bold;
      line-height: 1.3em;
      background: ${secGradient};
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .paragraph {
      font-size: 17px;
      color: #6e6e6e;
      padding-top: 10px;
    }
    .button_div {
      margin-bottom: 20px;
    }
    button {
      font-size: 17px;
      margin-right: 5px;
      color: #6e6e6e;
      background-color: white;
      border: 0;
      border-radius: 50px;
      &:hover {
        transition: color 0.3s;
        color: #147888;
      }
      svg {
        color: ${primaryColor};
        padding-left: 5px;
      }
    }

    .counter {
      font-size: 45px;
      font-weight: bold;
      color: #147888;
      padding-top: 35px;
    }

    .counter-content {
      font-size: 18px;
      font-weight: 400;
      color: #6e6e6e;
    }
  }

  .second-div {
    border: none;
    .form_div {
      background: #f3f3f3;
      padding: 50px;
      border-radius: 30px;

  
      .button_box_div {
        width: 100%;
        button {
          width: 100%;
          color: #ffffff;
          flex-basis: 100%;
          border: none;
          padding: 15px 30px;
          border-radius: 30px;
          background-color: ${primaryColor};
          &:hover {
            color: #ffffff;
            background-color: ${primaryColor};
            box-shadow: 0px 10px 25px 0px rgba(0, 0, 0, 0.1);
          }
        }
      }
    }
  }

  @media (max-width: 567px) {
    padding: 20px 0;
    .first-div {
      padding: 10px;

      .first-content {
        font-size: 35px;
      }

      .second-content {
        font-size: 35px;
      }

      .btn-content {
        padding: 15px 0px;
      }

      button {
        font-size: 10px;
      }
    }

    .second-div {
      border: none;
     
    }

  }

  @media (min-width: 567px) and (max-width: 992px) {
    padding: 20px 0;

    .first-div {
      .first-content {
        display: unset;
      }
    }
  }
`;
