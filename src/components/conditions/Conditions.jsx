import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import {content} from '../../utils/content';

import treat1 from '../../assets/conditions/lower-back-pain.svg';
import treat2 from '../../assets/conditions/headache.svg';
import treat3 from '../../assets/conditions/neckpain.svg';
import treat4 from '../../assets/conditions/frozen-sholder.svg';
import treat5 from '../../assets/conditions/disc-herniation.svg';
import treat6 from '../../assets/conditions/hip-pain.svg';

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
            <img src={treat1} alt="Lower back pain" width={isMobile ? (100) : (195)} height={isMobile ? (100) : (195)}/>
            <p>Lower back pain</p>
          </div>
          <div className='jl-condition__box--item'>
            <img src={treat2} alt="Headache" />
            <p>Headache</p>
          </div>
          <div className='jl-condition__box--item'>
            <img src={treat3} alt="Neck pain" />
            <p>Neck pain</p>
          </div>
          <div className='jl-condition__box--item'>
            <img src={treat4} alt="Frozen shoulder" />
            <p>Frozen shoulder</p>
          </div>
          <div className='jl-condition__box--item'>
            <img src={treat5} alt="Disc herniation" />
            <p>Disc herniation</p>
          </div>
          <div className='jl-condition__box--item'>
            <img src={treat6} alt="Hip pain" />
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