// Header.js
import React from 'react';
import { Nav } from 'react-bootstrap';
import '../style/Header.css';
import myImage from '../images/picture.jpg';

function Header() {
  return (
    <aside className="custom-sidebar">
      <div>
        <img src={myImage} className='pro-image' alt="Profile" />
        <h5 className='texts'>Fasna F F</h5>
        <h5 className='texts'>FullStack Developer</h5>
      </div>
      <Nav className="nav-links">
        <a href="#home">&#xF379; Home</a>
        <a href="#about">&#xf406; About</a>
        <a href="#skills">&#xf3a0; Skills</a>
        <a href="#experience">&#xf4ce; Projects</a>
        <a href="#contact">&#xf879; Contact</a>
      </Nav>
    </aside>
  );
}

export default Header;
