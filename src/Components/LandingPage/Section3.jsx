import React from "react";
import styled from "styled-components";
import {
  TbCircleNumber1Filled,
  TbCircleNumber2Filled,
  TbCircleNumber3Filled,
  TbCircleNumber4Filled,
  TbCircleNumber5Filled,
} from "react-icons/tb";
import Slider from "react-slick";
import html from "../../Assets/Images/html.png";
import css from "../../Assets/Images/css.png";
import bootstrap from "../../Assets/Images/bootstrap.png";
import js from "../../Assets/Images/js.png";
import react from "../../Assets/Images/react.png";
import next from "../../Assets/Images/next.svg";
import mongo from "../../Assets/Images/mongo.png";
import wordpress from "../../Assets/Images/wordpress.png";
import shopify from "../../Assets/Images/shopify.webp";

export const Section3 = () => {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 1500,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          autoplay: false,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          autoplay: false,
          dots: true,
        },
      },
    ],
  };

  return (
    <Root>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-12">
            <h2 className="first-content text-center">
              Technologies<span style={{ color: "#0b66c2" }}> we </span>serve
            </h2>
          </div>
        </div>

        <div className="slider_div">
          <div className="slider-container">
            <Slider {...settings}>
              <div>
                <img src={html} alt="html" />
              </div>

              <div>
                <img src={css} alt="css" />
              </div>

              <div>
                <img src={js} alt="js" />
              </div>

              <div>
                <img src={bootstrap} alt="bootstrap" />
              </div>

              <div>
                <img src={react} alt="react" />
              </div>

              <div>
                <img src={next} alt="next" />
              </div>

              <div>
                <img src={mongo} alt="mongo" />
              </div>

              <div>
                <img src={wordpress} alt="wordpress" />
              </div>

              <div>
                <img src={shopify} alt="shopify" />
              </div>
            </Slider>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-5  col-md-12 col-12 segment ">
            <div className="mini_div">
              <p className="p">Why Choose Phanom Techno</p>
              <span>
                Get a cutting-edge website, e-commerce store, or custom software
                developed by experts in ReactJS, NodeJS, Next.js, Shopify, and
                more. Our team delivers scalable, secure, and user-friendly
                solutions to bring your vision to life with precision and
                creativity.
              </span>
            </div>
          </div>
          <div className="col-lg-2  col-md-3 col-4 number">
            {/* <img src={number} alt="img" /> */} <TbCircleNumber1Filled />{" "}
            <TbCircleNumber2Filled /> <TbCircleNumber3Filled />{" "}
            <TbCircleNumber4Filled /> <TbCircleNumber5Filled />
          </div>
          <div className="col-lg-5  col-md-9 col-8 segment seg_div">
            <div className="mini_div ">
              <p>✅ Guaranteed On-Time Delivery – No delays, no excuses!</p>
              {/* <span>
                We are Web Development Company in India, focusing on empowering
                businesses and brands across many industries of extempore with
                the basic mapping technique.
              </span> */}
            </div>
            <div className="mini_div">
              <p>
                {" "}
                ✅ Custom Solutions – Websites & apps tailored to your business
              </p>
              <span>
                {/* Get personalized websites with clear content and design to
                elevate your brand in the online market.{" "} */}
              </span>
            </div>
            <div className="mini_div">
              <p>
                ✅ Scalability & Performance – Future-proof technology for your
                growth.
              </p>
              <span>
                {/* We offer full-service SEO in India, helping businesses of all
                sizes succeed. Our expertise ensures your brand thrives on
                SEO-driven platforms{" "} */}
              </span>
            </div>
            <div className="mini_div">
              <p>
                {" "}
                ✅ AI-Powered Optimization – Smarter, faster, and more
                efficient.
              </p>
              <span>
                {/* Get personalized websites with clear content and design to
                elevate your brand in the online market.{" "} */}
              </span>
            </div>
            <div className="mini_div">
              <p>✅ Dedicated Support – From planning to launch & beyond.</p>
              <span>
                {/* We offer full-service SEO in India, helping businesses of all
                sizes succeed. Our expertise ensures your brand thrives on
                SEO-driven platforms{" "} */}
              </span>
            </div>
          </div>
        </div>

        <div className="consult_btn">
          <a href="/apply" target="_blank">
            {" "}
            Book a Free Consultation Today{" "}
          </a>
        </div>
      </div>
    </Root>
  );
};

const Root = styled.section`
  margin-top: 50px;
.number{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 100px;
  svg{
    height: 40px;
    width: 40px;
    color: rgb(11, 102, 194);;
  }
}
  .container {
    display: flex;
    gap: 20px;
    flex-direction: column;
  }

  .slider_div {
    display: flex;
    justify-content: center;
    .slider-container {
      width: 80%;

      .slick-slide img {
        display: block;
        aspect-ratio: 3/2;
        object-fit: contain;
        width: 100px;
        height: 100%;
      }
    }
  }

  .first-content {
    font-size: 45px;
    font-weight: bold;
    line-height: 1.3em;
    margin-right: 10px;
    word-spacing: 5px;
  }

  .segment {
    margin-top: 30px;
    padding: 50px 10px 10px 10px;

    .mini_div {
      padding: 20px;
      margin-bottom: 20px;
      .p {
        font-size: 40px;
        font-weight: bold;
      }
      p {
        font-size: 20px;
        font-weight: bold;
      }
      span {
        font-size: 17px;
        color: #6e6e6e;
        padding-top: 30px;
      }
    }
  }

  .consult_btn {
    display: flex;
    justify-content: center;
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
      margin-bottom: 40px;
      border: none;
      text-align: center;
      padding: 15px 0;
    }
  }

  @media (max-width: 567px) {
    margin-top: 20px;

    .slider_div {
      padding: 20px 0 40px;
    }

    .slider_div .slider-container .slick-slide img {
      width: 70px;
    }

    .container {
      gap: 0px;
      display: flex;
    }
    .first-content {
      font-size: 35px;
    }
    .segment {
      margin-top: 0;
      padding: 0;
    }

    .segment .mini_div {
      margin-bottom: 20px;
      padding: 0 20px;
    }

    img,
    .img {
      height: 80%;
    }

    .seg_div {
      margin-top: 20%;
    }
  }

  @media (min-width: 567px) and (max-width: 992px) {
    .segment {
      margin-top: 0;
      padding: 45px 10px 10px 10px;
    }
    img,
    svg {
      vertical-align: middle;
      height: 400px;
      margin-left: 20px;
    }

    .segment .mini_div {
      margin-bottom: 20px;
      padding: 0 20px;
    }

    .seg_div {
      margin-top: 0%;
    }

    .consult_btn {
      display: flex;
      justify-content: flex-start;
    }
  }
`;
