import React from 'react';
import { useNavigate } from 'react-router-dom';

import './Service.css'

const DEFAULT_SERVICE_IMG = 'http://via.placeholder.com/150x150';

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
          <img src={serviceObj.cover_image ? (process.env.PUBLIC_URL+serviceObj.cover_image) : (DEFAULT_SERVICE_IMG)} alt={title} />

          <span className='service__title'>{title}</span>
        </div>
    </>
  )
}

export default Service