import React from "react";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import { Helmet } from "react-helmet";
import Testimonial from "../HireShopify/Testimonial"; 
import Form from "../../../HomePages/Home/Formm";

export default function HireLaravel() {
  return (
    <div>
      <Helmet>
        <title>
          {" "}
          Hire Dedicated Laravel Developers in India - Phanom
        </title>
        <meta
          name="description"
          content=" Through Phanom Professionals, you can Hire Dedicated Laravel Developers In India who provide custom, high-quality solutions to meet your business needs.

"
        />
      </Helmet>

      <Section1 />
      <Section2 />
      <Testimonial/>
      <Section3 />
      <Section4 />
      <Section5 />
      <Form />
    </div>
  );
}
