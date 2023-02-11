import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import {content} from '../../utils/content';

import treat1 from '../../assets/conditions/lowerback.png';
import treat2 from '../../assets/conditions/headache.png';

import './Conditions.css';

const Conditions = ({buttonEnable}) => {
  const navigate = useNavigate();

  const isMobile = useMediaQuery({ maxWidth: 640 })

  return (
    <section className='jl-condition section__padding'>
      <div className='container mx-auto'>
        <h2 dangerouslySetInnerHTML={{__html: content.conditions.h2}}></h2>

        <div className='jl-condition__box'>
          <div className='jl-condition__box--item'>
            <img src={treat1} alt="Lower back pain" />
            <p>Lower back pain</p>
          </div>
          <div className='jl-condition__box--item'>
            <img src={treat2} alt="Headache" />
            <p>Headache</p>
          </div>
          <div className='jl-condition__box--item'>
            <img src={treat1} alt="Neck pain" />
            <p>Neck pain</p>
          </div>
          <div className='jl-condition__box--item'>
            <img src={treat1} alt="Frozen shoulder" />
            <p>Frozen shoulder</p>
          </div>
          <div className='jl-condition__box--item'>
            <img src={treat1} alt="Disc herniation" />
            <p>Disc herniation</p>
          </div>
          <div className='jl-condition__box--item'>
            <img src={treat1} alt="Hip pain" />
            <p>Hip pain</p>
          </div>
        </div>
        {
          buttonEnable ? (
          <div className='jl-condition__bottom text-center mt-6'>
            {isMobile ? (
              <button onClick={()=> navigate(`/treatments`)} 
              className="btn btn-primary mobile">
                <span>{content.conditions.button}</span>
              </button>
            ):(
              <button onClick={()=> navigate(`/treatments`)} className="jl-condition--button desktop">
                <span>{content.conditions.button}</span>
              </button>
            )}
          </div>
          ) : ('')
        }
      </div>
    </section>
  )
}

export default Conditions