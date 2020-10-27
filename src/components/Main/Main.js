import React from 'react'

import TabMenu from '../TabMenu/TabMenu'
import Profile from '../Profile/Profile'
import AboutMe from '../AboutMe/AboutMe'
import Footer from '../Footer/Footer'

import './Main.scss'

const Main = () => {
  return (
    <div className="Main">
      <div className="Main__content">
        <div className="Main__left">
          <div className="Main__header">
            <h1 className="Main__title">My Account</h1>
            <p className="Main__subtitle">
              You can change your account settings here
            </p>
          </div>
          <TabMenu />
        </div>
        <div className="Main__right">
          <Profile />
          <AboutMe />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Main
