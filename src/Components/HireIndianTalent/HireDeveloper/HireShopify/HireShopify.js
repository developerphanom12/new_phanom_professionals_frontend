import React from "react";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";
import Testimonial from "./Testimonial";
import { Helmet } from "react-helmet";
import Form from "../../../HomePages/Home/Formm";

export default function HireShopify() {
  return (
    <div>
      <Helmet>
        <title>
        Hire Shopify Developers in India | Expert Shopify Developer

        </title>
        <meta
          name="description"
          content=" With Phanom Professionals, you can Hire Shopify Developers in India. Our Expert Shopify Developer studies your business idea for  dependable and expandable web design.
"
        />
      </Helmet>
      <Section1/>
      <Section2/>
      <Testimonial/>
      <Section4/>
      <Section5/>
      <Section6/>
      <Section3/>
      <Form/>
    </div>
  );
}
