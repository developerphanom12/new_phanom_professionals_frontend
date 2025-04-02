import React from "react";
import Section3 from "./Section3";
import Section2 from "./Section2";
import Section1 from "./Section1";
import { Helmet } from "react-helmet";
import Testimonial from "../HireShopify/Testimonial";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";
import Form from "../../../HomePages/Home/Formm";
export default function HireReactJs() {
  return (
    <div>
      <Helmet>
        <title>
        Hire Dedicated Reactjs Developers in India - Phanom
        </title>
        <meta
          name="description"
          content="Looking to  Hire Dedicated Reactjs Developers in India? Phanom Professionals is known for its expert team of Dedicated React Developers, ready to deliver exceptional results.
"
        />
      </Helmet>
      <Section1 />
      <Section2 />
      <Testimonial />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section3 />
      <Form />
    </div>
  );
}
