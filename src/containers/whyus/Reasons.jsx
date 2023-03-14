import React from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { Footer, Header, PageBanner } from '../../components';

import {content} from '../../utils/content.js';
import {banner_img} from '../../assets/index.js';
import defaultIMG from '../../assets/jl-logo.png';

import './Reasons.css';

const PAGE_NAME = 'whyus';
const DEFAULT_SERVICE_IMG = defaultIMG;

const Reasons = () => {
  const pageSlug = useParams();
  const navigate = useNavigate();
  
  const GET_CURRENT_SERVICEG = content.whyus.services.filter(item => item.slug === Object.values(pageSlug)[0]
  )[0];

  const OTHER_SERVICES = content.whyus.services.filter(item => item.slug !== GET_CURRENT_SERVICEG.slug);

  return (
    <div className={PAGE_NAME}>
      <Header/>
      <PageBanner banner_image={banner_img} title="Why choose us?" />
        <div className={PAGE_NAME+'__content section__padding'}>
          <div className='container mx-auto'>
            <div className={PAGE_NAME+'__content--feature'}>
              <div className={PAGE_NAME+'__content--feature--box'}>
                <img src={GET_CURRENT_SERVICEG.icon ? (process.env.PUBLIC_URL+GET_CURRENT_SERVICEG.icon) : (DEFAULT_SERVICE_IMG)} alt={GET_CURRENT_SERVICEG.title} />
                <p className='service__title'>{GET_CURRENT_SERVICEG.title}</p>
                <p>{GET_CURRENT_SERVICEG.content}</p>
              </div>
            </div>
            <div className={PAGE_NAME+'__content--others'}>
              <div className={PAGE_NAME+'__content--others--container'}>
                {
                  OTHER_SERVICES.map((item,i) => (
                    <div className={PAGE_NAME+'__content--others--box'} key={item+i} onClick={()=> navigate(`/whyus/${item.slug}`)}>
                      <img src={item.icon ? (process.env.PUBLIC_URL+item.icon) : (DEFAULT_SERVICE_IMG)} alt={item.title} />
                      <p className='service__title'>{item.title}</p>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      <Footer/>
    </div>
  )
}

export default Reasons