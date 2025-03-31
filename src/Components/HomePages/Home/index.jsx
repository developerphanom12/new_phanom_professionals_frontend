import React from "react";
import { Section1 } from "./Section1";
import { Section2 } from "./Section2";
import { Section3 } from "./Section3";
import { Section4 } from "./Section4";
import { Section5 } from "./Section5";
import { Section6 } from "./Section6";
import { Section7 } from "./Section7";
import { Helmet } from "react-helmet";
import { SliderPage } from "../ServicePages/Service/SliderPage";
import { Section9 } from "./Section9";
// import DiscoveryPlanning from "./DiscoveryPlanning";
import Adarsh from "./Adarsh";
// import { VideoTestimonial } from "./VideoTestimonial";

export const Home = () => {
  return (
    <div>
      <Helmet>
        <title> Hire India's top talent | Biggest Indian talent network </title>

        <meta
          name="description"
          content="Discover top Indian talent with us. Hire the best software developers, designers, and more"
        />
      </Helmet>
      <Section1/>
      <SliderPage/>
      {/* <DiscoveryPlanning/> */}
      <Section2/>
      <Adarsh/>
      <Section3/>
      <Section4/>
      <Section5/>
      <Section6/>
      <Section7/>
      {/* <VideoTestimonials/> */}
      {/* <VideoTestimonial /> */}
      <Section9/>
      
      {/* <VideoTestimonial/> */}
    </div>
  );
};
