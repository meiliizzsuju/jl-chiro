import React from 'react';
import { useMediaQuery } from 'react-responsive';
import {content} from '../../utils/content';
import './HomeBanner.css'
import BANNER_IMG from '../../assets/banner.jpg'

const HomeBanner = () => {
  const isMobile = useMediaQuery({ maxWidth: 550 })

  return (
    <section className='home-banner section__padding flex items-center align-center text-center' style={{ backgroundImage: `url(${BANNER_IMG})` }}>
      <div className='container mx-auto md:text-right'>
        <h1 dangerouslySetInnerHTML={{__html: content.banner.h1}}></h1>
      </div>
    </section>
  )
}

export default HomeBanner