import React, { useState } from 'react';
import { Button } from './Button';
import './Navbar.css';
import Dropdown from './Dropdown';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import { FaBars } from 'react-icons/fa';

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };
  
  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          <img src={logo} style={{ height:"40px" }}/>
          <i class='fab fa-firstdraft' />
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas FaBars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/Browse_Fundraisers' className='nav-links' onClick={closeMobileMenu}>
              Browse Fundraisers
            </Link>
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
             
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Fundraise For <i className='fas fa-caret-down' />
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li className='nav-item'>
            <Link
              to='/how_it_works'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              How It Works
            </Link>
          </li>

          <li className='nav-item'>
            <Link
              to='/start_fundraiser'
              className='nav-links1'
              onClick={closeMobileMenu}
            >
              Start Fundraiser
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to={'/https://api.whatsapp.com/send?phone=917700975559'}
              className='nav-links-chat'
              onClick={closeMobileMenu}
            >
              Chat
            </Link>
          </li>
          <li>
            <Link
              to='/sign-up'
              className='nav-links-mobile'
              onClick={closeMobileMenu}
            >
              Sign Up
            </Link>
          </li>
          
        </ul>
        <Button />
      </nav>
    </>
  );
}

export default Navbar;
