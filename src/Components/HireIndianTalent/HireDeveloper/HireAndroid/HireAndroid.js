import React from 'react'
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'
import { Helmet } from "react-helmet";
import Testimonial from '../HireShopify/Testimonial'
import Section4 from './Section4'
import Section5 from './Section5'
import Form from '../../../HomePages/Home/Formm';

export default function HireAndroid() {
  return (
    <div>
      <Helmet>
        <title>Hire Dedicated Android App Developers in India 

        </title>
        <meta
          name="description"
          content=" Hire dedicated Android app developers in India for custom mobile app solutions. For tailored development, hire an Android expert. Contact us today!
"
        />
      </Helmet>
        <Section1/>
        <Section2/>
        <Testimonial/>
        <Section4/>
        <Section5/>
        <Section3/>
        <Form/>
    </div>
  )
}
