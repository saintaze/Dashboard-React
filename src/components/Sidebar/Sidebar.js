import React, {useState} from 'react'
import avatar  from '../../assets/images/a-1.png'

import './Sidebar.scss'

const Sidebar = () => {
  const [sideBarWidth, setSideBarWidth] = useState('35rem');
  const toggleSidebar = () => {
    const width = sideBarWidth === '35rem' ? '3rem' : '35rem'
    setSideBarWidth(width);
  }

  return (
    <div className="Sidebar" style={{width: sideBarWidth}}>
      <div className="Sidebar__menu-toggle">
        <i onClick={toggleSidebar} className="fas fa-bars"></i>
      </div>
      <div className="Sidebar__user">
        <div className="Sidebar__avatar-box">
          <img className="Sidebar__avatar" src={avatar} alt="avatar"/>
        </div>
        <div className="Sidebar__info">
          <div className="Sidebar__welcome">Welcome Andrew!</div>
          <div className="Sidebar__status"><span>Status:</span> Online</div>
        </div>
      </div>
      <ul className="Sidebar__menu">
        <li className="Sidebar__menu-item">
          <a href="" className="Sidebar__menu-link">
            <i className="fas fa-home Sidebar__menu-icon"></i>
            <span className="Sidebar__menu-text">Home</span>
          </a>
        </li>
        <li className="Sidebar__menu-item">
          <a href="" className="Sidebar__menu-link">
            <i className="fas fa-bullhorn Sidebar__menu-icon"></i>
            <span className="Sidebar__menu-text">My Acccount</span>
          </a>
        </li>
        <li className="Sidebar__menu-item">
          <a href="" className="Sidebar__menu-link">
            <i className="fas fa-building Sidebar__menu-icon"></i>
            <span className="Sidebar__menu-text">My Company</span>
          </a>
        </li>
        <li className="Sidebar__menu-item">
          <a href="" className="Sidebar__menu-link">
            <i className="fas fa-cog Sidebar__menu-icon"></i>
            <span className="Sidebar__menu-text">My Settings</span>
          </a>
        </li>
        <li className="Sidebar__menu-item">
          <a href="" className="Sidebar__menu-link">
            <i className="far fa-newspaper Sidebar__menu-icon"></i>
            <span className="Sidebar__menu-text">News</span>
          </a>
        </li>
        <li className="Sidebar__menu-item">
          <a href="" className="Sidebar__menu-link">
            <i className="fas fa-chart-area Sidebar__menu-icon"></i>
            <span className="Sidebar__menu-text">Analytics</span>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
