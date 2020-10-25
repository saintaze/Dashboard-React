import React from 'react'
import './Profile.scss'

import avatar from '../../assets/images/a-1.png'

export default function Profile() {
  return (
    <div className="Profile">
      <h2 className="Profile__heading">My Profile</h2>
      <div className="Profile__img-box">
        <img draggable="false" className="Profile__img" src={avatar} alt="avatar"/>
      </div>
      <p className="Profile__name">Andrew</p>
      <div className="Profile__actions">
        <i class="fas fa-plus Profile__action"></i>
        <i class="fas fa-minus Profile__action"></i>
      </div>
      <p className="Profile__text">upload a new profile picture</p>
    </div>
  )
}
