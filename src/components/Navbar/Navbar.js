import React from 'react'

import logo from '../../assets/images/logo.png'

import './Navbar.scss'


const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="Navbar__logo-box">
        <img draggable="false" src={logo} alt="Logo" className="Navbar__logo"/>
      </div>
      <ul className="Navbar__actions">
        <li className="Navbar__item">
          <i className="fas fa-globe-americas Navbar__icon"></i>
          <span className="Navbar__lang">EN</span>
        </li>
        <li className="Navbar__item">
          <i className="fas fa-envelope Navbar__icon"></i>
        </li>
        <li className="Navbar__item">
          <i className="fas fa-bell Navbar__icon"></i>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
