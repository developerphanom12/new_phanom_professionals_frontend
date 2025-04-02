import React from 'react'
import Section2 from './Section2'
import Section1 from './Section1'
import Section3 from './Section3'
import { Helmet } from "react-helmet";
import Testimonial from '../HireShopify/Testimonial'
import Section4 from './Section4'
import Section5 from './Section5'
import Form from '../../../HomePages/Home/Formm';

export default function HireIOS() {
  return (
    <div>
      <Helmet>
        <title> Hire Dedicated IOS App Developer in India | IOS App Expert

        </title>
        <meta
          name="description"
          content=" Need to Hire a dedicated iOS app developer in India? Our experts provide custom iOS app development tailored to your business. Contact us today!
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
