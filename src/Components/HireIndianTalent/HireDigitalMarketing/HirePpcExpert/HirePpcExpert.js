import React from "react";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import { Helmet } from "react-helmet";
import Testimonial from "../../HireDeveloper/HireShopify/Testimonial";
import Section6 from "./Section6";
import Section7 from "./Section7";
import Section8 from "./Section8";
import Form from "../../../HomePages/Home/Formm";

export default function HirePpcExpert() {
  return (
    <div>
      <Helmet>
        <title>Hire Pay Per Click Experts In India | Pay-Per-Click Experts
        </title>
        <meta
          name="description"
          content="Looking to Hire Pay Per Click Experts In India? Phanom Professionals offers 50+ top pros for 100% satisfaction in pay-per-click management. Let’s chat today!
"
        />
      </Helmet>
      <Section1/>
      <Section2/>
      <Testimonial/>
      <Section3/>
      <Section4/>
      <Section6/>
      <Section7/>
      <Section8/>
      <Section5/>
      <Form/>
    </div>
  );
}
