import React from "react";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";
import Section7 from "./Section7";
import Section8 from "./Section8";
import Testimonial from "../../HireDeveloper/HireShopify/Testimonial";
import { Helmet } from "react-helmet";
import Form from "../../../HomePages/Home/Formm";

export default function HireSeoExpert() {
  return (
    <div>
      <Helmet>
        <title>
        Hire Seo Experts In India | Hire Dedicated SEO Specialist
        </title>
        <meta
          name="description"
          content="Hire Seo Experts in India through Phanom Professionals. With 5+ years of experience, we deliver exceptional SEO services globally with a proven track record.
"
        />
      </Helmet>
      <Section1 />
      <Section2 />
      <Testimonial />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Form />
    </div>
  );
}
