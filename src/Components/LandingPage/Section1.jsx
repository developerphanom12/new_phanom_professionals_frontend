import React, { useEffect } from "react";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";
import front from "../../Assets/Images/lala.png";

export const Section1 = () => {
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
        <div className="main_heading">
          <p align="center">
            Get Your Website or App on Time <br />
            <span style={{ color: "#0b66c2" }}>– or Your Money Back!</span>
          </p>
        </div>
        {/* <hr className="displayhr" /> */}
        <div className="row">
          <div
            className="col-lg-6 col-md-12 col-12 first-div"
            data-aos="fade-up"
          >
            <span className="display">
              <h2 className="first-content">
                Frustrated with missed deadlines and broken promises?
                <span style={{ color: "#0b66c2" }}></span>  on-time delivery—or you get your money back!
              </h2>
            </span>
            <p className="paragraph">
              {/* Get your website, e-commerce store, or custom software developed
              by experts in ReactJS, NodeJS, Next.js, Shopify, and more. */}
              {/* Get for cost-effective, Experienced Dedicated developers for your
              projects. */}
            </p>
            <a href="/apply" target="_blank">
              {" "}
              Book a Free Consultation Today{" "}
            </a>
          </div>
          <div className="col-lg-6 col-md-12 col-12 second-div">
            <img src={front} alt="front_img" loading="lazy" />
          </div>
        </div>
      </div>
    </Root>
  );
};
const Root = styled.section`
  background-color: #ffffffd4;
  padding: 30px 100px;
  .displayhr {
    display: none;
  }
  .main_heading {
    p {
      font-size: 55px;
      line-height: 69px;
      font-weight: 900;
      color: #00194c;
      margin-bottom: 20px;
      font-family: "Urbanist", sans-serif;
      span {
        font-family: "Urbanist", sans-serif;
      }
    }
  }

  .first-div {
    border: none;
    padding-right: 25px;
    display: flex;
    justify-content: center;
    flex-direction: column;

    .first-content {
      font-size: 45px;
      font-weight: bold;
      line-height: 1.3em;
      margin-right: 10px;
      word-spacing: 5px;
    }

    .second-content {
      font-size: 45px;
      font-weight: bold;
      line-height: 1.3em;
      background: #0b66c2;
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .paragraph {
      font-size: 20px;
      color: #6e6e6e;
      padding-top: 10px;
    }

    a {
      color: #fff;
      letter-spacing: 1.6px;
      text-transform: capitalize;
      background-image: linear-gradient(101deg, #012d64, #06b0ff);
      box-shadow: 0 10px 20px #0586ceb3;
      border-radius: 74px;
      width: 340px;
      font-weight: 500;
      text-decoration: none;
      margin-top: 20px;
      border: none;
      text-align: center;
      padding: 15px 0;
    }
  }

  .second-div {
    border: none;
    display: flex;
    justify-content: center;
    img {
      width: 70%;
    }
  }

  @media (max-width: 567px) {
    padding: 20px 0;
    .main_heading {
      margin-bottom: 20px;
    }

    .displayhr {
      display: block;
    }
    .first-div {
      padding: 10px;
      .first-content {
        font-size: 35px;
        text-align: center;
        margin: 0;
      }
      .second-content {
        font-size: 35px;
      }
      .paragraph {
        text-align: center;
      }

      .btn-content {
        padding: 15px 0px;
      }
    }
    .second-div {
      border: none;

      img {
        width: 100%;
      }
    }
    .second-div .form_div .form_field {
      flex-wrap: unset;
    }
    .main_heading {
      p {
        font-size: 20px;
        font-weight: 600;
        color: #00194c;
        text-align: center;
        line-height: 1.3;
        margin: 0;
      }
    }

    .first-div a {
      margin: 0;
    }

    .first-div {
      align-items: center;
    }
  }

  @media (min-width: 567px) and (max-width: 1024px) {
    padding: 20px 0;
    .displayhr {
      display: block;
    }
    .main_heading p {
      margin-bottom: 10px;
      text-align: left;
      font-size: 23px;
    }
    /* 
 .first-div {
    align-items: center;
} */

    .first-div {
      .first-content {
        display: unset;
      }
    }

    .second-div {
      border: none;

      img {
        width: 100%;
      }
    }
  }
`;
