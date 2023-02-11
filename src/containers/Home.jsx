import React from 'react';
import {Header,HomeBanner,About, WhyUS, Conditions, Pricing, CTAPhone} from '../components/index';

import {content} from '../utils/content.js'

const PAGE_NAME = `page-home`;


const Home = () => {
  console.log(content.homeCTA)
  return (
    <div className={PAGE_NAME}>
      <Header/>
      <HomeBanner/>
      <About/>
      <WhyUS/>
      <Conditions/>
      <Pricing/>
      <CTAPhone title={content.homeCTA.text} button={content.homeCTA.button} phone_no={content.homeCTA.phone}/>
    </div>
  )
}

export default Home