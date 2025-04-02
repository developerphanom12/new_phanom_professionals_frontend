import React from "react";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section6 from "./Section6";
import Section5 from "./Section5";
import { Helmet } from "react-helmet";
import Testimonial from "../../HireDeveloper/HireShopify/Testimonial";
import Section7 from "./Section7";
import Form from "../../../HomePages/Home/Formm";
export default function HireUiuxDesigner() {
  return (
    <div>
      <Helmet>
        <title> Hire UI Designers in India | UI UX Experts </title>
        <meta
          name="description"
          content="Transform your vision with Phanom Professionals—Hire UI Designers in India for exceptional UI/UX services. Connect with us today and elevate your design.
"
        />
      </Helmet>
      <Section1/>
      <Section2/>
      <Testimonial/>
      <Section3/>
      <Section4/>
      <Section5 />
      <Section6 />
      <Section7/>
      <Form />
    </div>
  );
}
