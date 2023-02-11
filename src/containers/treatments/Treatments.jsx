import React from 'react';
import {Header, PageBanner, Footer, Conditions} from '../../components/index';

import './Treatments.css'
import banner_img from '../../assets/banner.jpg'


const PAGE_NAME = 'treatments';

const Treatments = () => {

  return (
    <div className={PAGE_NAME}>
      <Header/>
      <PageBanner banner_image={banner_img} title="Treatments and What to expect" />
        <Conditions />
        <div className={PAGE_NAME+'__content section__padding'}>
          <div className='container mx-auto'>
            <h2>First time seeing Chiro?</h2>
            <p>We got you covered, we will go trought step by step as below:</p>
            <ol className={PAGE_NAME+'__list'}>
              <li>
                <strong>Consultation:</strong> The chiropractor will ask you about your health history, any current symptoms, and any medications you are currently taking. They will also ask about your lifestyle, diet and exercise habits.
              </li>
              <li>
                <strong>Physical examination:</strong> The chiropractor will perform a physical examination, which may include testing your reflexes, range of motion, and muscle strength. They may also refer for X-rays or other imaging studies to get a better understanding of your condition.
              </li>
              <li>
                <strong>Treatment plan:</strong> Based on the information gathered during the consultation and examination, the chiropractor will develop a treatment plan. The plan may include adjustments (manipulation of the spine) to help alleviate any pain or discomfort you may be experiencing, as well as exercises and stretches to help improve your overall health and well-being.
              </li>
              <li>
                <strong>Treatment:</strong> The chiropractor will then perform the adjustments or any other technique they deem appropriate. Some people may feel some discomfort during the adjustments, but this is usually mild and temporary.
              </li>
              <li>
                <strong>Follow-up:</strong> After the first treatment, the chiropractor may schedule follow-up visits to monitor your progress and make any necessary adjustments to your treatment plan. The number of visits required will vary depending on the condition and how quickly you respond to the treatment.
              </li>
            </ol>
          </div>
        </div>
      <Footer/>
    </div>
  )
}

export default Treatments