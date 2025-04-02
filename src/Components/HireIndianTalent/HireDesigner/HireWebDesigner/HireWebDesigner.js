import React from "react";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
// import Section5 from "./Section5";
import Section6 from "./Section6";
import { Helmet } from "react-helmet";
import Testimonial from "../../HireDeveloper/HireShopify/Testimonial";
import Section7 from "./Section7";
import Section8 from "./Section8";
import Section9 from "./Section9";
import Section10 from "./Section10";
import Form from "../../../HomePages/Home/Formm";

export default function HireWebDesigner() {
  return (
    <div>
      <Helmet>
        <title>
          Hire Web Designers in India | Dedicated Web Designer  
        </title>
        <meta
          name="description"
          content="Ready to build something great? Through Phanom Professionals, you can Hire Web Designers in India who turn ideas into stunning realities."
        />
      </Helmet>
      <Section1/>
      <Section2/>
      <Testimonial/>
      <Section3/>
      <Section7/>
      <Section8/>
      <Section9/>
      <Section10/>
      <Section4/>
      {/* <Section5/> */}
      <Section6/>
      <Form/>
    </div>
  );
}
