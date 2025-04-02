import React from "react";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import { Helmet } from "react-helmet";
import Testimonial from "../HireShopify/Testimonial";
import Section5 from "./Section5";
import Section6 from "./Section6";
import Section7 from "./Section7";
import Section8 from "./Section8";
import Form from "../../../HomePages/Home/Formm";

export default function HireNodejs() {
  return (
    <div>
      <Helmet>
        <title>Hire Dedicated Node.js Developers in India - Phanom
        </title>
        <meta
          name="description"
          content=" Hire Dedicated Node.js Developers in India with Phanom Professionals. Our dedicated team delivers high-quality, scalable solutions tailored to your business needs."
        />
      </Helmet>
      <Section1/>
      <Section2/>
      <Testimonial/>
      <Section5/>
      <Section3/>
      <Section6/>
      <Section7/>
      <Section8/>
      <Section4/>
      <Form/>
    </div>
  );
}
