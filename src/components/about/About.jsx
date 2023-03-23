import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import {content} from '../../utils/content';
import './about.css';


const About = () => {
  const navigate = useNavigate();

  const isMobile = useMediaQuery({ maxWidth: 550 })

  return (
    <section id='#jl-about' className='about section__padding'>
      <div className='container mx-auto md:flex md:items-center'>
        <div className='about__content md:text-center'>
          {content.about.h2 && 
            (<h2 dangerouslySetInnerHTML={{__html:content.about.h2}}></h2>)
          }
          {content.about.suphead && 
            (<h3 dangerouslySetInnerHTML={{__html:content.about.suphead}} className="font-h3-xl"></h3>)
          }
          {content.about.desc && 
            (<p dangerouslySetInnerHTML={{__html:content.about.desc}}></p>)
          }

          <button onClick={()=> navigate(`/about`)} className="btn btn-trans">
            Read More
          </button>
        </div>
        <div className='about__image'>
          <img src="/assets/images/about.png" alt="Profile of Dr. Jin" width={isMobile ? (250) : (540)} height={isMobile ? (263) : (570)}/>
        </div>
      </div>
    </section>
  )
}

export default About