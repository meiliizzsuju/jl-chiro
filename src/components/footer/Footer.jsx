import React from 'react';

import './footer.css';

import logo from '../../assets/jl-logo.png';

const Footer = () => {
  const thisYear = new Date().getFullYear();

  const FB_LINK = 'https://www.facebook.com/mana.deewhy/';
  const IG_LINK = 'https://www.instagram.com/mana.wellness.deewhy/';
  const credit_link = 'http://tichatin.com/';


  return (
    <footer className='footer'>
      <div className='footer__main text-center section__padding'>
        <img src={logo} alt="Footer Logo" className='footer__main--logo'/>
        <ul>
          <li>
            <a href="tel:0280187443" className="m-1 mx-2" aria-label='Call 02 8018 7443'>(02) 8018 7443</a>
          </li>
          <li>
            <a href={FB_LINK} target="_blank" rel="noreferrer">
              Facebook
            </a>
          </li>
          <li>
            <a href={IG_LINK} target="_blank" rel="noreferrer">
              Instagram
            </a>
          </li>
        </ul>
      </div>
      
      <div className='footer__credit text-center'>
        <span aria-label={'© '+thisYear+' by Ticha Tin'}>© {thisYear} JL Chiro</span>
      </div>
    </footer>
  )
}

export default Footer