import React from 'react';
import { useMediaQuery } from 'react-responsive';
import {content} from '../../utils/content';
import ABOUT_IMG from '../../assets/about.jpg';
import './about.css';

const About = () => {
  const isMobile = useMediaQuery({ maxWidth: 550 })

  return (
    <section id='#jl-about' className='about section__padding'>
      <div className='container mx-auto md:flex md:items-center'>
        <div className='about__content md:text-center'>
          {content.about.h2 && 
            (<h2 dangerouslySetInnerHTML={{__html:content.about.h2}}></h2>)
          }
          {content.about.suphead && 
            (<h3 dangerouslySetInnerHTML={{__html:content.about.suphead}}></h3>)
          }
          {content.about.desc && 
            (<p dangerouslySetInnerHTML={{__html:content.about.desc}}></p>)
          }
        </div>
        <div className='about__image'>
          <img src={ABOUT_IMG} alt="About" width={isMobile ? (250) : (540)}/>
        </div>
      </div>
    </section>
  )
}

export default About