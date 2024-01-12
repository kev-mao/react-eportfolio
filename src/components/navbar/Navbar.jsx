import React, {useState} from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.jpg';
import './navbar.css';

const Menu = () => (
  <>
  <p><a href="#home">About</a></p>
  <p><a href="#experience">Experience</a></p>
  <p><a href="#projects">Projects</a></p>
  <p><a href="#contact">Contact</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className = "name__navbar">
        <div className = "name__navbar-links_logo">
          <a href="#top"><img src={logo} alt="logo" />  </a>
        </div>
      <div className = "name__navbar-links">
        <div className = "name__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="name__toggle-menu">
        {toggleMenu
          ? <RiCloseLine color="#121212" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#121212" size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className="name__navbar-menu_container fade-in-top">
            <div className="name__navbar-menu_container-links">
              <Menu />
            </div>
          </div>
        )}

      </div>
    </div>
  )
}

export default Navbar