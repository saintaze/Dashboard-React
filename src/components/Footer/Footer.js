import React from 'react'

import './Footer.scss'

const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footer__copyright">
        <i className="far fa-copyright Footer__icon"></i>
        <span className="Footer__year">2020</span>
        <a href="#" className="Footer__brand">
          InnoLoft
        </a>
      </div>
      <div className="footer__links">
        <a href="#" className="Footer__link">
          Creative Team
        </a>
        <a href="#" className="Footer__link">
          About Us
        </a>
        <a href="#" className="Footer__link">
          Blog
        </a>
        <a href="#" className="Footer__link">
          MIT License
        </a>
      </div>
    </div>
  )
}

export default Footer
