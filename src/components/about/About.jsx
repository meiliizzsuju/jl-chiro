import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import {content} from '../../utils/content';
import ABOUT_IMG from '../../assets/about.jpg';
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

          <button onClick={()=> navigate(`/what-to-expect`)} className="btn btn-trans">
            Read More
          </button>
        </div>
        <div className='about__image'>
          <img src={ABOUT_IMG} alt="About" width={isMobile ? (250) : (540)}/>
        </div>
      </div>
    </section>
  )
}

export default About