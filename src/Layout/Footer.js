import React, { useState } from "react";
import styled from "styled-components";
import footernew from "../Assets/Images/footernew.png";
import {
  FooterLightMenu,
  FooterMenu,
  MenuMainHeading,
  WhiteLightHeading,
  WhiteMainDescription,
  WhiteNumberHeading,
} from "../Global/GlobalText";
import phanomsLogo from "../Assets/Images/phanomsLogo.png";
import noicon from "../Assets/Images/noicon.png";
import { Whitebgebtn } from "../Global/GlobalButton";
import { FaArrowRightLong } from "react-icons/fa6";
import { Appointment } from "../Components/Appointment/Appointment";

const Footer = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Root>
      <div className="main_div">
        <div className="head_div">
          <WhiteNumberHeading>
            Let's make something <br /> great together.
          </WhiteNumberHeading>
          <WhiteLightHeading>
            {" "}
            Let us know what challenges you are <br /> trying to solve so we can
            help.
          </WhiteLightHeading>

          <div className="join_btn">
            <Whitebgebtn className="join_icon" onClick={handleShow}>
              Join Us <FaArrowRightLong />
            </Whitebgebtn>
          </div>

          <div className="menu_main_div">
            <a href="/" class="sub_menu_div img_order">
              <img src={phanomsLogo} alt="" />
            </a>

            <div class="sub_menu_div">
              <a href="/">
                <FooterMenu>Home</FooterMenu>
              </a>

              <a href="/hire-indian-talent">
                <FooterMenu>Hire Indian Talent</FooterMenu>
              </a>

              <a href="/ourportfolio">
                <FooterMenu>Our Portfolio</FooterMenu>
              </a>

              <FooterMenu onClick={handleShow}>Book an Appointment</FooterMenu>

              <Appointment show={show} handleClose={handleClose} />
            </div>

            <div class="sub_menu_div">
              <a
                href="https://www.facebook.com/phanom.professionals/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FooterMenu>Facebook</FooterMenu>
              </a>
    
              <a
                href="https://www.instagram.com/phanomprofessionalsofficial/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FooterMenu>Instagram</FooterMenu>
              </a>

              <a
                href="https://www.linkedin.com/company/phanom-professionals/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FooterMenu>Linkedin</FooterMenu>
              </a>

              <a
                href="https://in.pinterest.com/phanom_professionals/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FooterMenu>Pinterest</FooterMenu>
              </a>

              <a
                href="https://mobile.twitter.com/phanompro"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FooterMenu>Twitter</FooterMenu>
              </a>
            </div>

            <div class="sub_menu_div">
              <FooterMenu>Address:</FooterMenu>

              <FooterMenu>
                Plot No. C-209/B, 1st Floor Phase 8B, Industrial Area, Sahibzada
                Ajit Singh Nagar, Punjab 160055
              </FooterMenu>
            </div>
          </div>
        </div>

        <div className="policy_div">
          <div className="policy_div_one">
            <div className="policy_menu">
              <a href="/term-condition">
                <FooterLightMenu>Terms of Use</FooterLightMenu>
              </a>

              <a href="/privacy-policy">
                <FooterLightMenu>Privacy Policy</FooterLightMenu>
              </a>

              {/* <a href="#">
                <FooterLightMenu>About Cookies</FooterLightMenu>
              </a> */}
            </div>

            <FooterLightMenu>
              Copyright © 2025 Phanom Techno Private Ltd. All rights reserved.
            </FooterLightMenu>
          </div>

          <div className="no_div">
            <img src={noicon} alt="Contact Icon" />
            <div className="sub_no_div">
              <MenuMainHeading style={{ fontSize: "21px", fontWeight: 700 }}>
                Call to ask any question
              </MenuMainHeading>
              <WhiteMainDescription
                style={{ fontSize: "21px", fontWeight: 700 }}
              >
                +91 (628) 007-2655
              </WhiteMainDescription>
            </div>
          </div>
        </div>
      </div>
    </Root>
  );
};

export default Footer;

const Root = styled.section`
  .main_div {
    background-image: url(${footernew});
    background-size: 100% 100%;
    display: flex;
    flex-direction: column;

    .head_div {
      padding: 100px 100px 10px;
      text-align: center;
      display: flex;
      flex-direction: column;
      gap: 30px;

      .join_btn {
        display: flex;
        justify-content: center;
        .join_icon {
          display: flex;
          gap: 15px;
          align-items: center;
        }
      }

      .menu_main_div {
        border-top: 1px solid #ffffff;
        padding: 70px 0;
        margin-top: 80px;
        display: flex;
        gap: 30px;

        .sub_menu_div {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 10px;
          align-items: flex-start;
          text-align: left;
          img {
            width: 270px;
            object-fit: contain;
          }

          a {
            text-decoration: none;
          }

          h4 {
            cursor: pointer;
          }
        }
      }
    }

    .policy_div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 100px 50px;
      .policy_div_one {
        display: flex;
        gap: 30px;
        flex-direction: column;

        .policy_menu {
          display: flex;
          gap: 30px;
          a {
            text-decoration: none;
          }
        }
      }
      .no_div {
        display: flex;
        gap: 10px;
        align-items: center;
        .sub_no_div {
          display: flex;
          flex-direction: column;
        }
      }
    }
  }

  @media (max-width: 576px) {
    .main_div {
      .head_div {
        padding: 50px 50px 20px;
        br {
          display: none;
        }

        .menu_main_div {
          flex-direction: column;
          margin: 0;
          padding: 30px 0;
          .img_order {
            display: flex;
            order: 4;
          }
        }
      }

      .policy_div {
        padding: 0 20px 40px;
        flex-direction: column;
        gap: 30px;

        .no_div .sub_no_div {
          gap: 10px;
        }

        .policy_div_one .policy_menu {
          flex-direction: column;
        }
      }
    }
  }

  @media (min-width: 576px) and (max-width: 1024px) {
    .main_div {
      .head_div {
        padding: 50px 20px 0;
        br {
          display: none;
        }
        .menu_main_div {
          margin-top: 0;
          padding: 30px 0;
          gap: 15px;
          .sub_menu_div img {
            width: unset;
            object-fit: contain;
          }
        }
      }

      .policy_div {
        padding: 0 20px 50px;
        flex-direction: column;
        gap: 20px;
        align-items: center;
        .policy_div_one {
          width: 100%;
          gap: 10px;
          text-align: center;
          .policy_menu {
            justify-content: center;
          }
        }
      }
    }
  }
`;
