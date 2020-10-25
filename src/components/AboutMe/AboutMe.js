import React from 'react'
import './AboutMe.scss'

export default function AboutMe() {
  return (
    <div className="AboutMe" id="lol">
      <h2 className="AboutMe__heading">About Me</h2>
      <div className="AboutMe__text-box">
        <p className="AboutMe__text">I am a person who is positive about every aspect of life. There are many things I like to do, to see, and to experience. I like to read. I like to dance and I like to sing as well</p>
        <p className="AboutMe__text">My bedroom at home offers a great symbol of who I am and what is important to me. The walls are simply painted.</p>

        <p className="AboutMe__text">I always wanted to be a great writer, like Victor Hugo who wrote "Les Miserable", or like Roman Roland.</p>
        <p className="AboutMe__text">I like to see the sunrise in the morning, I like to see the moonlight at night; I like to feel the music flowing on my face.</p>
        <p className="AboutMe__text">I enjoy meeting new people and finding ways to help them have an uplifting experience. I have had a variety of customer service opportunities.</p>
      </div>
      
      <div className="AboutMe__actions">
        <i className="fas fa-pen AboutMe__action"></i>
        <span className="AboutMe__action-text">Edit Bio</span>
      </div>
    </div>
  )
}
