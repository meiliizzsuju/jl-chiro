import React from 'react';
import { useParams } from 'react-router-dom';
import {Header} from '../../components/index';

import './service.css'



const PAGE_NAME = 'service-detail';

const Service = () => {
  const serviceId = useParams();



  return (
    <div className={PAGE_NAME}>
      <Header/>
      <div className='main'>
        {/* <PageBanner banner_image={current_service.banner_image} title={current_service.name} /> */}

        <div className={PAGE_NAME+'__content section__padding'}>



        </div>

        <div className={PAGE_NAME+'__bottom section__padding'}>

        </div>
        
      </div>
      {/* <Footer/> */}
    </div>
  )
}

export default Service