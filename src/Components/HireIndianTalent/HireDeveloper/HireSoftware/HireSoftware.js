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
import Form from "../../../HomePages/Home/Formm";

export default function HireSoftware() {
  return (
    <div>
      <Helmet>
        <title>Hire Dedicated Software Developers in india</title>
        <meta
          name="description"
          content="Hire dedicated software developers in India from our expert team. We provide customized solutions and always deliver projects on time. Contact us today!
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
      <Section3 />
      <Form />
    </div>
  );
}
