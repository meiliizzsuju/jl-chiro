import React from 'react';
import {Header,HomeBanner} from '../components/index';

const PAGE_NAME = `page-home`;


const Home = () => {
  return (
    <div className={PAGE_NAME}>
      <Header/>
      <HomeBanner/>
    </div>
  )
}

export default Home