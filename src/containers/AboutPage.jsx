import React from 'react';
import {Header, Footer, PageBanner} from '../components/index';
import { useMediaQuery } from 'react-responsive';
import {content} from '../utils/content.js';
import { banner_img } from '../assets/index.js';

const ABOUT_IMG = '/assets/images/about.png';

const PAGE_NAME = 'pageabout';
const phone_no = content.homeCTA.phone;
const btn_text = content.homeCTA.button;

const Home = () => {
  const isMobile = useMediaQuery({ maxWidth: 550 })

  return (
    <div className={PAGE_NAME}>
      <Header/>
      <PageBanner banner_image={banner_img} title={content.about.h2} />
        <div className={PAGE_NAME+'__content section__padding'}>
          <div className='container mx-auto'>
            <div className={PAGE_NAME + '__content--body'}>
              <div className={PAGE_NAME + '__image mx-auto md:float-right'}>
                <img src={ABOUT_IMG} alt="About" width={isMobile ? (250) : (540)} height={isMobile ? (263) : (570)} className={PAGE_NAME + '__image--img'}/>
              </div>
              
            
              <h2>Dr. Jin young Lim (chiropractor)</h2>

              <p>He has always been passionate about sports and fitness and was determined to find a way to help others who were suffering from injuries and pain.</p>

              <p>After graduating from Macquarie University with a Masters of Chiropractic, he decided to put his knowledge and skills to use by starting his own mobile chiropractic service. He recognized that not everyone had access to traditional clinics and wanted to make sure that everyone had access to the same level of care. His mobile service makes it easy for those who have less mobility or access to transportation to receive the treatments they need.</p>

              <p>He strongly believes in empowering people to take control of their own health and wellness by educating them about the benefits of chiropractic care and other natural treatments. </p>

              <p>He will visit patient's houses, office and other location as per the convenience and need of the patients, with his portable tables, tools and equipment.</p>

              <p>He is passionate about helping people lead healthier, more active lives and is dedicated to providing the highest level of care to his patients. With his background, training and experience, he is committed to helping his patients improve their quality of life through natural, holistic care.</p>
              
              <a href={'tel:'+phone_no} className="btn btn-primary">{btn_text}</a>
            </div>
          </div>
        </div>
      <Footer/>
    </div>
  )
}

export default Home