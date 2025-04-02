import React from "react";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";
import Testimonial from "./Testimonial";
import { Helmet } from "react-helmet";
import Section7 from "./Section7";
import Form from "../../../HomePages/Home/Formm";

export default function ShopifyPublicApp() {
  return (
    <div>
      <Helmet>
        <title>
              Hire Expert Shopify Apps Developers in India - Phanom
        </title>
        <meta
          name="description"
          content="Hire Expert Shopify Apps Developers in India from Phanom Professionals. We create custom apps to elevate your clients experience and enhance your business."
        />
      </Helmet>
      <Section1/>
      <Section2/>
      <Testimonial/>
      <Section4/>
      <Section5/>
      <Section6/>
      <Section7/>
      <Section3/>
      <Form/>
    </div>
  );
}
