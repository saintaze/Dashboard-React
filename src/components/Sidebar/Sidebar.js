import React from 'react'
import './Sidebar.scss'

export default function Sidebar() {
  return (
    <div className="Sidebar">
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
