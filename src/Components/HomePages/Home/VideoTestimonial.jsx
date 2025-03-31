import React, { useRef } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import { MainWhiteHeading } from "../../Global/GlobalText";

export const VideoTestimonial = () => {
  let sliderRef = useRef(null);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Root>
      <div className="main_div">
        <MainWhiteHeading>
          Real Stories, Real Impact: Our User's Shares Their Experience
        </MainWhiteHeading>

        <div className="slider_container">
          <Slider {...settings}>
            <div className="video_div">
              <div className="frame_div">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/62QxQRt7Yr4?si=3UruEFm6Ks0I5uG7"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </div>

              <div className="frame_div">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/Y083KfXfEQk?si=ccmUsREGdphkEFIH"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </Root>
  );
};

const Root = styled.section`
  .main_div {
    padding: 50px 100px 80px;
    background: linear-gradient(90deg, #439de0, #8f59e4, #ce1be6);
    display: flex;
    flex-direction: column;
    gap: 40px;
    align-items: center;

    .slider_container {
      width: 100%;

      .slick-slider .slick-track,
      .slick-slider .slick-list {
        transform: translate3d(0, 0, 0);
        width: 100% !important;
      }

      .slick-initialized .slick-slide {
        display: block;
        width: 100% !important;
      }
      .video_div {
        display: flex !important;

        justify-content: center;
        .frame_div {
          display: flex;
          justify-content: center;
          width: 35%;
          iframe {
            height: 600px;
            border-radius: 10px;
          }
        }
      }
    }
  }

  @media (max-width: 567px) {
    .main_div {
      padding: 50px 20px;
      text-align: center;

      .slider_container .video_div {
        gap: 10px;
        flex-direction: column;

        .frame_div {
          width: 100%;
          iframe {
            height: 300px;
          }
        }
      }
    }
  }

  @media (min-width: 567px) and (max-width: 1024px) {
    .main_div {
      padding: 50px 20px;
      text-align: center;
      .slider_container .video_div {
        gap: 10px;
        .frame_div {
            width: 48%;
        iframe {
          height: 350px;
        }
    }
      }
    }
  }
`;
