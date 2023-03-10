import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { content } from '../../utils/content.js';

import './header.css'
import logo from '../../assets/jl-logo.png';

const phone_no = content.homeCTA.phone;

const Menu = () =>{
  return (
    <>
    <ul>
      <li>
        <a href="/">
          Home
        </a>
      </li>
      <li>
        <a href="/about">
          About Dr. Jin
        </a>
      </li>
      <li>
        <a href="/treatments">
          Treatments
        </a>
      </li>
      <li>
        <a href="/contact">
          Contact
        </a>
      </li>
    </ul>
    </>
  )
}

const Header = () => {
  const isNotMobile = useMediaQuery({ minWidth: 767 })
  const isDeskTop = useMediaQuery({ minWidth: 1024 })
  const isNotDeskTop = useMediaQuery({ maxWidth: 1023 })
  const [navToggle, setnavToggle] = useState(false);

  return (
    <header className='header'>
      <div className='mx-auto'>
        <div className='header__wrapper w-full'>

          <Link
            to='/'
            className='block m-2 header-logo'
          >
            <img src={logo} alt="logo" 
            />
          </Link>

          {isNotMobile && (
            <nav className='header__nav'>
              {(navToggle & isNotDeskTop) 
                ? <button className='header__nav--icon toggled' onClick={() => {setnavToggle(false)}}></button>
                : <button className='header__nav--icon' onClick={() => {setnavToggle(true)}}></button>
              }
              {(navToggle & isNotDeskTop)
                ? Menu()
                : ''
              }
              {isDeskTop && Menu()}
              
            </nav>
          )}
          
          <div className='header__contact'>
            <a href={'tel:'+phone_no}
              className='m-1 mx-2 mt-4 btn btn-trans lg:ml-4'
            >
              Call Now
            </a>
          </div>
        </div>
        
      </div>
    </header>
  )
}

export default Header