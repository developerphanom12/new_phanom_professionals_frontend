import React from "react";
import Section5 from "./Section5";
import Section4 from "./Section4";
// import Section3 from "./Section3";
import Section1 from "./Section1";
import Section2 from "./Section2";
import { Helmet } from "react-helmet";
import Testimonial from "../../HireDeveloper/HireShopify/Testimonial";
import Section6 from "./Section6";
import Form from "../../../HomePages/Home/Formm";

export default function HireGraphic() {
  return (
    <div>
      <Helmet>
        <title> Hire Expert Graphic Designers in India - Phanom
        </title>
        <meta
          name="description"
          content="Looking to Hire Expert Graphic Designers in India? Our top talent creates stunning visuals for your business, from logos to marketing materials. Contact us today!
"
        />
      </Helmet>
      <Section1 />
      <Section2 />
      <Testimonial />
      {/* <Section3 /> */}
      <Section4 />
      <Section6 />
      <Section5 />
      <Form />
    </div>
  );
}
