import React from "react";
import styled from "styled-components";
import leadspace from "../../Assets/Images/leadspace.jpg";
import { FiCheckCircle } from "react-icons/fi";

export const Section10 = () => {
  return (
    <Root>
      <span className="text">Working with us is easier & faster.</span>
      <p className="paragraph">
        At Phanom, we simplify the recruitment process so you can{" "}
        <b>focus 100% on core priorities. </b>
      </p>

      <div className="img_cont">
        <img src={leadspace} alt="lead-image" loading="lazy"/>

        <div className="cont_div">
          <div className="sub_cont_div">
            <FiCheckCircle />
            <p> Accelerate growth with timezone-aligned, nearshore talent. </p>
          </div>

          <div className="sub_cont_div">
            <FiCheckCircle />
            <p> Onboard our top 1% developers in as little as 2 weeks. </p>
          </div>

          <div className="sub_cont_div">
            <FiCheckCircle />
            <p>Enjoy fast, clear communication from our bilingual team.</p>
          </div>

          <div className="sub_cont_div">
            <FiCheckCircle />
            <p>Top Skilled talent in 100+ technologies at your disposal.</p>
          </div>
        </div>

        <div className="cont_btn">
          <p>We can offer your company these and much more.</p>

          <div>
            <a href="/apply" target="_blank">
              {" "}
              Get Started
            </a>
          </div>
        </div>
      </div>
    </Root>
  );
};

const Root = styled.section`
  background: #f3f3f3;
  padding: 50px 100px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: center;
  align-items: center;

  .text {
    background: #0b66c2;
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

  .img_cont {
    width: 70%;
    border-radius: 8px;
    background-color: #0b66c2;

    img {
      width: 100%;
      height: 320px;
      object-fit: cover;
    }

    .cont_div {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      padding: 40px 40px;
      .sub_cont_div {
        display: flex;
        gap: 20px;
        flex: 1;
        svg {
          height: 50px;
          width: 50px;
          color: #ffffff;
        }

        p {
          font-size: 16px;
          font-weight: 500;
          color: #ffffff;
          text-align: left;
        }
      }
    }
  }

  .cont_btn {
    padding: 20px 40px 30px;
    display: flex;
    justify-content: space-between;

    p {
      font-size: 16px;
      font-weight: 500;
      color: #ffffff;
      text-align: left;
    }

    a {
      color: #0b66c2;
      letter-spacing: 1.6px;
      text-transform: capitalize;
      box-shadow: 0 10px 20px #0586ceb3;
      border-radius: 74px;
      font-weight: 500;
      text-decoration: none;
      margin-bottom: 40px;
      border: none;
      text-align: center;
      padding: 15px 30px;

      background-color: #fff;
    }
  }

  @media (max-width: 567px) {
    padding: 50px 20px;

    .img_cont {
      width:100%;
      overflow:hidden;

      img {
        width: unset;
      }

      .cont_div{
        padding:40px 10px 0;
        .sub_cont_div{
         width:100%;
         flex:unset;
        }
      }

      .cont_btn {
        flex-wrap:wrap;
        gap:20px;
        padding:20px 20px 30px;
      }

    }
  }

  @media (min-width: 567px) and (max-width: 1024px) {
    padding: 50px 20px;

    .img_cont {
      width: 90%;
      .cont_div .sub_cont_div {
        flex: unset;
        width: 48%;
      }

      .cont_btn {
        a {
          padding: 15px;
        }
      }
    }
  }
`;
