import React from 'react'
import './Navbar.css'

import whiteLogo from '../sources/white-logo.png'

const Navbar = () => {
  return (
    <nav className='navbars'>
      <div className="left-side">
        <img src={whiteLogo} alt='dipstrategy' className='white-logo' />
      </div>

      <div className="right-side">
        <ul>
          <li>home</li><span></span>
          <li>services</li><span></span>
          <li>work flow</li><span></span>
          <li>portfolio</li><span></span>
          <li>about us</li><span></span>
          <li>our value</li><span></span>
          <li id='phone'>+62 21 858 3944</li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar