import React from "react";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section5 from "./Section5";
import Section4 from "./Section4";
import Section3 from "./Section3";
import { Helmet } from "react-helmet";
import Testimonial from "../HireShopify/Testimonial";
import Section6 from "./Section6";
import Section7 from "./Section7";
import Section8 from "./Section8";
import Section9 from "./Section9";
import Section10 from "./Section10";
import Section11 from "./Section11";
import Form from "../../../HomePages/Home/Formm";

export default function HireMobileApp() {
  return (
    <div>
      <Helmet>
        <title>
           Hire Mobile App Developers In India
        </title>
        <meta
          name="description"
          content=" Through Phanom Professionals you can Hire Expert Mobile App Developers in India. With 5+ years of experience, we create high-quality, stellar, custom apps for all platforms. 
"
        />
      </Helmet>
      <Section1/>
      <Section2/>
      <Testimonial/>
      <Section3/>
      <Section4/>
      <Section5/>
      <Section6/>
      <Section7/>
      <Section8/>
      <Section9/>
      <Section10/>
      <Section11/>
      <Form />
    </div>
  );
}
