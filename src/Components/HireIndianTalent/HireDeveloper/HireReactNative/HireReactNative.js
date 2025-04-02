import React from 'react'
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'
import Section4 from './Section4'
import Section5 from './Section5'
import Section6 from './Section6'
import { Helmet } from "react-helmet";
import Testimonial from '../HireShopify/Testimonial'
import Section7 from './Section7'
import Section8 from './Section8'
import Form from '../../../HomePages/Home/Formm'

export default function HireReactNative() {
  return (
    <div>
      <Helmet>
        <title>Hire Dedicated React Native Developers in India 
        </title>
        <meta
          name="description"
          content=" Hire Dedicated React Native Developers in India and full-stack native programmers. Phanom Professionals delivers innovative software development solutions.
"
        />
      </Helmet>
        <Section1/>
        <Section2/>
        <Testimonial/>
        <Section3/>
        <Section4/>
        <Section5/>
        <Section6/>
        <Section7/>
        <Section8/>
        <Form/>
    </div>
  )
}
