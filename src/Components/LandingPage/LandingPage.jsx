import React from "react";
import { Section1 } from "./Section1";
import { Section2 } from "./Section2";
import { Section3 } from "./Section3";
import { Section5 } from "./Section5";
import { Section7 } from "./Section7";
import { Section8 } from "./Section8";
import { Section9 } from "./Section9";
import styled from "styled-components";
import { Section10 } from "./Section10";
import { SectionAdd } from "./SectionAdd";

export const LandingPage = () => {
  return (
    <Root>
      <Section1 />
      <Section2 />
      <Section3 />
      <SectionAdd/>
      {/* <Section4 />   */}
      <Section10/> 
      <Section5 />
      <Section9 />
      <Section7 />

 
  <Section8 />
      <div class="footer">
        <a href="/apply" target="_blank">Book Appointment </a>
      </div>
      
    </Root>
  );
};
const Root = styled.section`
  .footer {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    color: white;
    padding: 15px 0;
    backdrop-filter: blur(7.5px);
    background-color: #e5f5fbb3;
    display: flex;
    align-items: center;
    justify-content: space-around;

    /* p {
      font-size: 25px;
      font-weight: bold;
      background: linear-gradient(101deg, #012d64, #06b0ff);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      margin: 0;
    } */

    a {
      color: #fff;
      letter-spacing: 1.6px;
      text-transform: capitalize;
      background-image: linear-gradient(101deg, #012d64, #06b0ff);
      box-shadow: 0 10px 20px #0586ceb3;
      border-radius: 74px;
      font-weight: 500;
      text-decoration: none;
      border: none;
      text-align: center;
      padding: 15px 25px;
    }
  }

  @media (max-width: 567px) {
.footer p {
    font-size: 17px;

}
    .footer a {
       padding: 15px;
}
  }
`;
