import React from 'react';
import Service from '../service/Service';
import {content} from '../../utils/content';

import './WhyUs.css'

const WhyUS = () => {
  console.log(content.whyus.services)
  
  return (
    <section className='jl-whyus section__padding'>
      <div className='container mx-auto'>
        <h2 dangerouslySetInnerHTML={{__html: content.whyus.h2}}></h2>

        <div className='jl-whyus__services'>
            {
              content.whyus.services.map((s,i) => (
                <Service title={s.title}
                slug={s.slug}
                  key={s.slug}
                  classPrefix='jl-whyus'
                  serviceObj={s}
                />
              ))
            }
        </div>
      </div>
    </section>
  )
}

export default WhyUS