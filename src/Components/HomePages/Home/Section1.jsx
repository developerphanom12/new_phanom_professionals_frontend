import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import CountUp from "react-countup"; // Counter Library
import { GradientHeading, Heading, BlackMainDescription, WhiteMainHeading, SubNavbarLinks } from "../../../Global/GlobalText";
import { PurpleBackground } from "../../../Global/GlobalButton";
import herobanner from "../../../Assets/Images/herobanner.png";
import banner1 from "../../../Assets/logo/Property 1=Frame 108.png";
import banner2 from "../../../Assets/logo/Property 1=Frame 109.png"; 
import banner3 from "../../../Assets/logo/unsplash_Mrc8MNbopYg.png"; 
import banner4 from "../../../Assets/logo/unsplash_rhNv3q20jmg.png"; 
import { Appointment } from "../../Appointment/Appointment";

export const Section1 = () => {
  const [show, setShow] = useState(false);
  const [currentImage, setCurrentImage] = useState(banner1);
  const [fade, setFade] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Image Fade Transition
  useEffect(() => {
    const images = [banner1, banner2,banner3,banner4];
    let index = 0;
    const interval = setInterval(() => {
      setFade(false); // Start fade-out effect
      setTimeout(() => {
        index = (index + 1) % images.length;
        setCurrentImage(images[index]);
        setFade(true);  
      }, 500);  
    }, 4000);  

    return () => clearInterval(interval);
  }, []);

  return (
    <Root>
      <div className="main_div">
        <div className="banner_content">
          <div className="sub_main_div">
            <span>
              <GradientHeading>Let’s innovation</GradientHeading>
              <Heading>meets your</Heading>
              <br />
              <Heading>excellence</Heading>
            </span>
            <BlackMainDescription>
              Excellence refined, innovation ignited, the future starts here
            </BlackMainDescription>
            <div className="btn_div">
              <PurpleBackground onClick={handleShow}>
                Book an Appointment
              </PurpleBackground>
            </div>
            <Appointment show={show} handleClose={handleClose} />
          </div>

          {/* Smooth Image Transition */}
          <div className="sub_main_div">
            <img
              src={currentImage}
              alt="banner"
              className={`fade-image ${fade ? "fade-in" : "fade-out"}`}
            />
          </div>
        </div>

        {/* Counter Section */}
        <div className="pointers">
          <div className="sub_pointers">
            <WhiteMainHeading>
              <CountUp start={0} end={24} duration={2.5} />/7
            </WhiteMainHeading>
            <SubNavbarLinks>Online Support</SubNavbarLinks>
          </div>
          <div className="vertical_line"></div>

          <div className="sub_pointers">
            <WhiteMainHeading>
              <CountUp start={50} end={100} duration={2} />+
            </WhiteMainHeading>
            <SubNavbarLinks>Web Developed <br /> & Application</SubNavbarLinks>
          </div>
          <div className="vertical_line"></div>

          <div className="sub_pointers">
            <WhiteMainHeading>
              <CountUp start={1} end={5} duration={3} />+
            </WhiteMainHeading>
            <SubNavbarLinks>Year Experience</SubNavbarLinks>
          </div>
        </div>
      </div>
    </Root>
  );
};

// 🎨 Floating Gradient Animation
const floatingGradient = keyframes`
  0% { background-position: 0% 100%; }
  50% { background-position: 100% 20%; }
  100% { background-position: 0% 50%; }
`;

// 🔥 Fade-In and Fade-Out Animations
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

const Root = styled.section`
  .main_div {
    background: linear-gradient(45deg, #ff6b6b, #5f27cd, #1dd1a1);
    background-size: 300% 300%;
    animation: ${floatingGradient} 6s ease infinite;
    background-image: url(${herobanner});
    background-size: cover;
    padding: 50px 0 50px 100px;
    margin-bottom: 30px;

    .banner_content {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;

      .sub_main_div {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 40px;
        justify-content: center;

        /* 🎭 Smooth Image Transition */
        .fade-image {
          width: 100%;
          object-fit: contain;
          aspect-ratio: 3 / 2;
          transition: opacity 1s ease-in-out;
        }

        .fade-in {
          animation: ${fadeIn} 1s ease-in-out;
        }

        .fade-out {
          animation: ${fadeOut} 1s ease-in-out;
        }
      }
    }

    .pointers {
      display: flex;
      justify-content: flex-end;
      gap: 30px;
      align-items: center;
      margin: 20px 80px 0px 0px ;
      
      .sub_pointers {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0px 10px;
        br {
          display: none;
        }
      }
      .vertical_line {
        border: 1px solid #ffffff;
        height: 70px;
      }
    }
  }

  /* Responsive Design */
  @media (max-width: 567px) {
    .main_div {
      padding: 30px 0 30px 20px;

      .banner_content {
        flex-direction: column;
        gap: 60px;
        .sub_main_div {
          gap: 30px;
          p {
            padding-right: 5px;
          }
          br {
            display: none;
          }
        }
      }

      .pointers {
        gap: 10px;
        margin-right: 5px;
        .sub_pointers {
          text-align: center;
          br {
            display: block;
          }
        }
        .vertical_line {
          height: 40px;
        }
      }
    }
  }

  @media (min-width: 567px) and (max-width: 1024px) {
    .main_div {
      padding: 20px 0 20px 20px;

      .banner_content .sub_main_div {
        gap: 20px;
        br {
          display: none;
        }
      }

      .pointers {
        gap: 20px;
        .sub_pointers {
          text-align: center;
          br {
            display: block;
          }
        }
        .vertical_line {
          height: 40px;
        }
      }
    }
  }
`;
