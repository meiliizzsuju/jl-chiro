import React from 'react';
import {Header, PageBanner, Footer} from '../components/index';

import banner_img from '../assets/home-banner.png'


const PAGE_NAME = 'contact';

const Treatments = () => {

  return (
    <div className={PAGE_NAME}>
      <Header/>
      <PageBanner banner_image={banner_img} title="Contact" />
        <div className={PAGE_NAME+'__content section__padding'}>
          <div className='container mx-auto'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>
      <Footer/>
    </div>
  )
}

export default Treatments