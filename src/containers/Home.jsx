import React from 'react';
import {Header,HomeBanner,About, WhyUS, Conditions, Pricing, CTAPhone, Footer} from '../components/index';

import {content} from '../utils/content.js'

const PAGE_NAME = `page-home`;


const Home = () => {

  return (
    <div className={PAGE_NAME}>
      <Header/>
      <HomeBanner/>
      <WhyUS/>
      <Conditions buttonEnable={true}/>
      <About/>
      <Pricing/>
      <CTAPhone title={content.homeCTA.text} button={content.homeCTA.button} phone_no={content.homeCTA.phone}/>
      <Footer/>
    </div>
  )
}

export default Home