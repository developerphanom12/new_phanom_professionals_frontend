import React from "react";
import { Section1 } from "./Section1";
import { Section2 } from "./Section2";
import { Section4 } from "./Section4";
import { Section5 } from "./Section5";
import { Section6 } from "./Section6";
import { Section7 } from "./Section7";
import { Section8 } from "./Section8";
import { SubNavbar } from "./SubNavbar";
import { Section9 } from "./Section9";
import { Section10 } from "./Section10";
import { Section12 } from "./Section12";
import { Helmet } from "react-helmet";
import { SliderPage } from "../Service/SliderPage";

export const WebDevelopment = () => {
  return (
    <div>
      <Helmet>
        <title>Offshore Website Development Services in India</title>

        <meta
          name="description"
          content="We are a Leading Offshore Website Development Service in India, specializing in responsive, user-friendly, and 100% mobile-friendly websites. Reach out for top-notch designs!"
        />
      </Helmet>

      <SubNavbar />
      <Section1 />
      <Section2 />
      <SliderPage />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Section9 />
      <Section10 />

      {/* <Testimonial/> */}

      <Section12 />
    </div>
  );
};
