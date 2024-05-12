// Header.js
import React from 'react';
import { Nav } from 'react-bootstrap';
import '../style/Header.css';
import myImage from '../images/WhatsApp Image 2024-05-09 at 21.09.41_0b32db3e.jpg';

function Header() {
  return (
    <aside className="custom-sidebar">
      <div>
        <img src={myImage} className='pro-image' alt="Profile" />
        <h5 className='texts'>Fasna F F</h5>
        <h5 className='texts'>FullStack Developer</h5>
      </div>
      <Nav className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#experience">Projects</a>
        <a href="#contact">Contact</a>
      </Nav>
    </aside>
  );
}

export default Header;
