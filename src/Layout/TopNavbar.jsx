import React, { useState } from "react";
import styled from "styled-components";
import phanomsLogo from "../Assets/Images/phanomsLogo.png";
import {
  MenuHeading,
  MenuMainHeading,
  MenuSubHeading,
} from "../Global/GlobalText";
import { MdKeyboardArrowDown } from "react-icons/md";
import headerbg from "../Assets/Images/headerbg.png";
import { PurpleSecondBackground } from "../Global/GlobalButton";
import { Appointment } from "../Components/Appointment/Appointment";
// import { Appointment } from "../Appointment";

export const TopNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Root>
      <div className="navbar">

        <a href="/" className="logo">
          <img src={phanomsLogo} alt="Phanom Professionals Logo" />
        </a>

        <div className={`menu ${menuOpen ? "open" : ""}`}>
          <div className="menu-item">
            <MenuHeading>
              {" "}
              Service <MdKeyboardArrowDown />
            </MenuHeading>
          </div>

          <div className="main_icon_content">
            <div className="sub_icon_menu">
              <div className="sub_icon_content">
                <MenuMainHeading>Digital Marketing</MenuMainHeading>

                <a href="/offshore-seo-company-in-india/">
                  <MenuSubHeading>
                    SEO (Search Engine Optimisation)
                  </MenuSubHeading>
                </a>

                <a href="/offshore-social-media-marketing-agency-in-india/">
                  <MenuSubHeading>Social Media Marketing</MenuSubHeading>
                </a>

                <a href="/offshore-ppc-marketing-agency-in-india/">
                  <MenuSubHeading>Pay Per Click (PPC)</MenuSubHeading>
                </a>

                <a href="/offshore-youtube-marketing-services-in-india/">
                  <MenuSubHeading>Youtube Marketing</MenuSubHeading>
                </a>
              </div>

              <div className="sub_icon_content">
                <MenuMainHeading>Design & Development</MenuMainHeading>

                <a href="/offshore-website-development-services-in-india/">
                  <MenuSubHeading>Web Development</MenuSubHeading>
                </a>

                <a href="/offshore-shopify-web-development-services-in-india/">
                  <MenuSubHeading>Shopify</MenuSubHeading>
                </a>

                <a href="/offshore-java-software-development-company-in-india/">
                  <MenuSubHeading>Java</MenuSubHeading>
                </a>

                <a href="/offshore-magento-development-company-in-india/">
                  <MenuSubHeading>Magento</MenuSubHeading>
                </a>

                <a href="/offshore-wordpress-development-company-on-india/">
                  <MenuSubHeading>WordPress</MenuSubHeading>
                </a>
                <a href="/offshore-php-development-company-in-india/">
                  <MenuSubHeading>PHP</MenuSubHeading>
                </a>
              </div>

              <div className="sub_icon_content">
                <MenuMainHeading>Animations & Graphics</MenuMainHeading>

                <a href="/offshore-video-marketing-services-in-India/">
                  <MenuSubHeading>Video Marketing</MenuSubHeading>
                </a>
                <a href="/offshore-branding-agency-in-india/">
                  <MenuSubHeading>Branding</MenuSubHeading>
                </a>
                <a href="/offshore-packeging-and-labeling-agency-in-india/">
                  <MenuSubHeading>Packeging & Labeling</MenuSubHeading>
                </a>
                <a href="/offshore-graphic-design-agency-in-india/">
                  <MenuSubHeading>Graphic Design</MenuSubHeading>
                </a>

                <a href="/offshore-web-design-agency-in-india/">
                  <MenuSubHeading>Web Design</MenuSubHeading>
                </a>
                <a href="/offshore-rotoscoping-services-in-india/">
                  <MenuSubHeading>Rotoscoping</MenuSubHeading>
                </a>
                <a href="/offshore-animation-company-in-india/">
                  <MenuSubHeading>Animation</MenuSubHeading>
                </a>
              </div>

              <div className="sub_icon_content">
                <MenuMainHeading>E- commerce solution</MenuMainHeading>

                <a href="/offshore-ecommerce-agency-india/">
                  <MenuSubHeading>E- Commerce Marketing</MenuSubHeading>
                </a>
                <a href="/offshore-amazon-marketing-agency-in-india/">
                  <MenuSubHeading>Amazon Marketing</MenuSubHeading>
                </a>
              </div>
            </div>
          </div>

          <div className="menu-item">
            <MenuHeading>
              Hire Indian Talent <MdKeyboardArrowDown />
            </MenuHeading>
          </div>

          <div className="main_icon_content">
            <div className="sub_icon_menu">
              <div className="sub_icon_content">
                <MenuMainHeading>Hire Digital Marketing</MenuMainHeading>

                <a href="/hire-pay-per-click-experts-in-india/">
                  <MenuSubHeading>Hire PPC Expert</MenuSubHeading>
                </a>

                <a href="/hire-seo-experts-in-india/">
                  <MenuSubHeading>Hire SEO Expert </MenuSubHeading>
                </a>
              </div>

              <div className="sub_icon_content">
                <MenuMainHeading>Hire Designer</MenuMainHeading>

                <a href="/hiregraphic-designers-in-india/">
                  <MenuSubHeading>Hire Graphic Designer</MenuSubHeading>
                </a>
                <a href="/hire-ui-designers-in-india/">
                  <MenuSubHeading>Hire UI|UX Designer</MenuSubHeading>
                </a>
                <a href="/hire-web-designers-in-india/">
                  <MenuSubHeading>Hire Web Designer</MenuSubHeading>
                </a>
              </div>

              <div className="sub_icon_content">
                <MenuMainHeading>Hire Developer</MenuMainHeading>

                <a href="/hire-dedicated-reactjs-developers-in-india/">
                  <MenuSubHeading>Hire ReactJs Developer</MenuSubHeading>
                </a>
                <a href="/hire-dedicated-nodejs-developers-in-india/">
                  <MenuSubHeading>Hire NodeJs Developer</MenuSubHeading>
                </a>
                <a href="/hire-dedicated-laravel-developers-in-india/">
                  <MenuSubHeading>Hire Laravel Developer</MenuSubHeading>
                </a>

                <a href="/hire-shopify-developers-in-india/">
                  <MenuSubHeading>Hire Shopify Developer</MenuSubHeading>
                </a>

                <a href="/hire-expert-php-developers-in-india/">
                  <MenuSubHeading>Hire PHP Developer</MenuSubHeading>
                </a>
                <a href="/hire-wordpress-developers-in-india/">
                  <MenuSubHeading>Hire WordPress Developer</MenuSubHeading>
                </a>
              </div>

              <div className="sub_icon_content develper_div">
                <a href="/hire-dedicated-react-native-developers-in-india/">
                  <MenuSubHeading>Hire React Native Developer</MenuSubHeading>
                </a>
                <a href="/hire-dedicated-android-app-developers-in-india/">
                  <MenuSubHeading>Hire Android Developer</MenuSubHeading>
                </a>
                <a href="/hire-dedicated-ios-app-developer-in-india/">
                  <MenuSubHeading>Hire IOS Developer</MenuSubHeading>
                </a>
                <a href="/hire-dedicated-software-developers-in-india/">
                  <MenuSubHeading>Hire Software Developer</MenuSubHeading>
                </a>
                <a href="/hire-mobile-app-developers-in-india/">
                  <MenuSubHeading>Hire Mobile App Developer</MenuSubHeading>
                </a>
              </div>
            </div>
          </div>

          <div className="menu-item">  
            <a href="/ourportfolio"><MenuHeading>Our Portfolio</MenuHeading> </a>
          </div>

          <div className="menu-item">  
            <a href="/hosting"> <MenuHeading> Hosting </MenuHeading></a>
          </div>

          <PurpleSecondBackground onClick={handleShow}>
            Book an Appointment
          </PurpleSecondBackground>

          <Appointment show={show} handleClose={handleClose}/>
          
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </Root>
  );
};

const Root = styled.div`
.logo img {
          height: 50px !important;
        }

  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 100px;
    background: white;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    font-family: Arial, sans-serif;
    position: relative;
    background-image: url(${headerbg});
    background-size: 100%;
  }

  .menu {
    display: flex;
    align-items: center;
    gap: 20px;

    .menu-item {   
      cursor: pointer;
      font-size: 1rem;
      color: black;
      transition: color 0.3s ease;
   
      span {
        display: flex;
        align-items: center;

        svg {
          width: 20px;
        }
      }
    }

    .menu-item:hover + .main_icon_content,
    .main_icon_content:hover {
      display: block;
    }

    .main_icon_content {
      width: 60%;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 2px 7px 15px 2px rgba(0, 0, 0, 0.13),
        2px 1px 4px 2px rgba(0, 0, 0, 0.11);
      display: none;
      position: absolute;
      top: 52px;
      z-index: 111111;
      background-color: #ffffff;
      right: 20%;
      .sub_icon_menu {
        display: flex;
        .sub_icon_content {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 20px;
          a {
            text-decoration: none;
          }
        }
        .develper_div {
          display: flex;
          justify-content: center;
        }
      }
    }

    button {
      margin-left: 20px;
    }
  }

  .hamburger {
    display: none;
    flex-direction: column;
    gap: 5px;
    cursor: pointer;
  }

  .hamburger span {
    width: 25px;
    height: 3px;
    background: black;
    transition: transform 0.3s ease;
  }

  @media (max-width: 567px) {
    .navbar {
      padding: 10px 20px;
      background-image: unset;
      .logo {
        display: flex;
        align-items: center;
        img {
          width: 100px !important;
        }
      }

      .menu {
        display: none;
        flex-direction: column;
        position: absolute;
        top: 58px;
        right: 0px;
        background: white;
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
        padding: 10px 10px 20px;
        border: 1px solid #d4dbe0;
        width: 100%;
        z-index: 111;
        .main_icon_content {
          width: 90%;
          right: 5%;
          .sub_icon_menu {
            gap: 15px;
            flex-wrap: wrap;
            justify-content: center;
            .sub_icon_content {
              width: 47%;
              flex: unset;
            }
          }
        }
      }

      .menu.open {
        display: flex;
        z-index: 111111;
      }

      .menu-item {
        margin: 10px 0;
      }

      .hamburger {
        display: flex;
      }
    }
  }

  @media (min-width: 567px) and (max-width: 1024px) {
    .navbar {
      padding: 15px 20px;
      background-image: unset;
      .logo {
        display: flex;
        align-items: center;
        img {
          width: 100px;
        }
      }
      .menu {
        .menu-item {
          span {
            font-size: 14px;
          }
        }

        button {
          margin-left: 0px;
          font-size: 15px;
        }

        .main_icon_content {
          width: 90%;
          right: 5%;

          .sub_icon_menu .sub_icon_content {
            span {
              font-size: 18px;
            }
            a {
              span {
                font-size: 14px;
              }
            }
          }
        }
      }
    }
  }
`;
