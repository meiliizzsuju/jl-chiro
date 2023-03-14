import React from 'react';
import {content} from '../../utils/content';
import './HomeBanner.css'
import BANNER_IMG from '../../assets/home-banner.png'

const HomeBanner = () => {

  return (
    <section id='#jl-banner' className='home-banner section__padding flex items-center align-center text-center' style={{ backgroundImage: `url(${BANNER_IMG})` }}>
      <div className='container mx-auto md:text-right'>
        <h1 dangerouslySetInnerHTML={{__html: content.banner.h1}}></h1>
      </div>
    </section>
  )
}

export default HomeBanner