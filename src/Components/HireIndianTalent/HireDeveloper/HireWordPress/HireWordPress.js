import React from "react";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import { Helmet } from "react-helmet";
import Testimonial from "../HireShopify/Testimonial";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";
import Section7 from "./Section7";
import Section8 from "./Section8";
import Form from "../../../HomePages/Home/Formm";

export default function HireWordPress() {
  return (
    <div>
      <Helmet>
        <title> Hire WordPress Developers In India </title>
        <meta
          name="description"
          content=" Phanom Professionals offers top 1% WordPress developers. Hire Dedicated PHP Experts in India to create secure, scalable, and SEO-friendly websites.
"
        />
      </Helmet>
      <Section1 />
      <Section2 />
      <Testimonial />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Section3 />
      <Form />
    </div>
  );
}
