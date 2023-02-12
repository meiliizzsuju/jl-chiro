import React from 'react';
import { useNavigate } from 'react-router-dom';

import './Service.css'
import defaultIMG from '../../assets/jl-logo.png';

const DEFAULT_SERVICE_IMG = defaultIMG;

const Service = ({title,slug,serviceObj,classPrefix}) => {
  const navigate = useNavigate();

  let getClassPrefix = () => {
    if(!classPrefix || classPrefix === undefined) return '';
    return classPrefix = classPrefix + '__'
  }

  const classPrefixVal = getClassPrefix()


  return (
    <>
        <div onClick={()=> navigate(`/whyus/${slug}`)}
          className={classPrefixVal+'service service'}
        >
          <div className='service__icon'>
            <img src={serviceObj.icon ? (process.env.PUBLIC_URL+serviceObj.icon) : (DEFAULT_SERVICE_IMG)} alt={title} />
          </div>

          <span className='service__title'>{title}</span>
        </div>
    </>
  )
}

export default Service