import React from 'react'
import logo from '../../assets/images/logo.png'
import './Navbar.scss'

export default function Navbar() {
  return (
    <div className="Navbar">
      <div className="Navbar__logo-box">
        <img src={logo} alt="Logo" className="Navbar__logo"/>
      </div>
      <ul className="Navbar__actions">
        <li className="Navbar__item">
          <i className="Navbar__icon" class="fas fa-globe-americas"></i>
          <span className="Navbar__lang">EN</span>
        </li>
        <li className="Navbar__item">
          <i className="Navbar__icon" class="fas fa-envelope"></i>
        </li>
        <li className="Navbar__item">
          <i className="Navbar__icon" class="fas fa-bell"></i>
        </li>
      </ul>
    </div>
  )
}
