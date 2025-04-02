import React from 'react'
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'
import Section4 from './Section4'
import Section5 from './Section5'
import { Helmet } from "react-helmet";
import Testimonial from '../HireShopify/Testimonial'
import Section6 from './Section6'
import Section7 from './Section7'
import Section8 from './Section8'
import Section9 from './Section9'
import Section10 from './Section10'
import Form from '../../../HomePages/Home/Formm'
export default function HirePHP() {
  return (
    <div>
      <Helmet>
        <title>Hire Expert PHP Developers in India
        </title>
        <meta
          name="description"
          content=" From Phanom Professionals you can Hire Expert PHP Developers in India. Get custom solutions for your business. Contact us now for a free quote and start today!"
        />
      </Helmet>
        <Section1/>
        <Section2/>
        <Testimonial/>
        <Section3/>
        <Section6/>
        <Section4/>
        <Section7/>
        <Section8/>
        <Section9/>
        <Section10/>
        <Section5/>
        <Form/>
    </div>
  )
}
