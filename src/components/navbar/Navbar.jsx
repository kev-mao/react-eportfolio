import React from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.jpg';
import './navbar.css';

const Navbar = () => {
  return (
    <div className = "name__navbar">
        <div className = "name__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
      <div className = "name__navbar-links">
        <div className = "name__navbar-links_container">
          <p><a href="#home">About</a></p>
          <p><a href="#experience">Experience</a></p>
          <p><a href="#projects">Projects</a></p>
          <p><a href="#contact">Contact</a></p>
        </div>

      </div>
    </div>
  )
}

export default Navbar