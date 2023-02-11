import React from 'react';
import {Header,HomeBanner,About, WhyUS} from '../components/index';

const PAGE_NAME = `page-home`;


const Home = () => {
  return (
    <div className={PAGE_NAME}>
      <Header/>
      <HomeBanner/>
      <About/>
      <WhyUS/>
    </div>
  )
}

export default Home