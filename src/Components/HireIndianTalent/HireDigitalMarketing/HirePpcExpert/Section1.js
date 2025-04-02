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
                Homepage <FaPlay/>
              </button>
              <button>Hire ppc Expert</button>
            </div>
            <span className="display">
              <span className="first-content">Boost Your </span>
              <span className="second-content">Business </span>
              <span className="first-content">with Expert PPC Services</span>
            </span>
            <p className="paragraph">
              Looking to supercharge your online presence? Hire a PPC expert to
              elevate your business with targeted, high-converting campaigns.
              Our team of skilled PPC experts in India specializes in crafting
              and managing pay-per-click strategies that deliver measurable
              results. Let’s drive traffic, increase sales, and maximize your
              ROI with precision.
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
        color: ${primaryColor};
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
