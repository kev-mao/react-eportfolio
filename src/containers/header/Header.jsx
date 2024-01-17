import React from 'react';
import './header.css';
import headshot from "../../assets/kev_image_transparent.png";
import { TypeAnimation } from 'react-type-animation';

const Header = () => {
  return (
    <div className = "name__header section__padding" id="home">
      <div className = "name__header-content">
        <h1 className="header__text"> 
        <TypeAnimation
          preRenderFirstString={true}
          sequence={[
            300,
            "Hi,",
            "Hi, I'm Kevin Mao." 
          ]}
      wrapper="span"
      speed={30}
      cursor={false}
      />
    </h1>
    
        <p><TypeAnimation
          sequence={[
            2000,
            "I am a Computer Engineering student at UWaterloo." 
          ]}
      wrapper="span"
      speed={50}
      cursor={false}
      />
      </p>
      </div>
      <div className="name__header-image">
        <img src={headshot} alt="headshot"/>
      </div>
    </div>
  )
}

export default Header