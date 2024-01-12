import React from 'react';
import './header.css';
import headshot from "../../assets/headshot.png";

const Header = () => {
  return (
    <div className = "name__header section__padding" id="home">
      <div className = "name__header-content">
        <h1 className="header__text">Hi, I'm Kevin Mao.</h1>
        <p>I am a Computer Engineering student at UWaterloo.</p>
      </div>
      <div className="name__header-image">
        <img src={headshot} alt="headshot"/>
      </div>
    </div>
  )
}

export default Header