import React, { useState } from 'react'
import { Icon } from 'semantic-ui-react';
import '../App.css'

const NavBar = (props) => {

  const currentPath = window.location.pathname;

  const [hideMenu, setHideMenu] = useState(true);
  return (
    <nav className='nav-bar'>
      <div className='menu-name-container'>
        <div className='menu-title-first-line'>LAW OFFICES OF</div>
        <div className='menu-title-second-line'>{process.env.REACT_APP_NAME}</div>
      </div>
      <Icon className='menu-bars' onClick={() => setHideMenu(!hideMenu)} name='bars' size='big' />
      <ul className={`menu-list ${hideMenu ? 'hide-menu' : ''}`}>
        <li className={currentPath === '/' ? 'active-link' : ''}><a  href='#'>Home</a></li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
        <li>Location</li>
      </ul>
      
    </nav>

  )
};

export default NavBar;