import React from 'react';

import './footer.css';

import logo from '../../assets/jl-logo.png';

const Footer = () => {
  const thisYear = new Date().getFullYear();

  const FB_LINK = '#';
  const IG_LINK = '#';


  return (
    <footer className='footer'>
      <div className='footer__main text-center section__padding'>
        <a href='/' className='btn-nostyle'><img src={logo} alt="Footer Logo" className='footer__main--logo'/></a>
        <ul>
          <li>
            <a href="tel:0411229276" className="m-1 mx-2" aria-label='Call 0411 229 276'>0411 229 276</a>
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