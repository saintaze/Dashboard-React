import React from 'react'
import TabMenu from '../TabMenu/TabMenu'
import Profile from '../Profile/Profile'
import AboutMe from '../AboutMe/AboutMe'

import './Main.scss'

export default function Main() {
  return (
    <div className="Main">
      <div className="Main__content">
        <div className="Main__left">
          <h1 className="Main__title">My Account</h1>
          <p className="Main__subtitle">You can change your account settings here</p>
          <TabMenu />
        </div>
        <div className="Main__right">
          <Profile />
          <AboutMe />

        </div>
      </div>
    </div>
  )
}
