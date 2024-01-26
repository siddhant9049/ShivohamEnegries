// src/components/MenuBackground.js
import React from 'react';
import './Navbar.css';

const MenuBackground = ({ isActive, onClick }) => {
  return (
    <div className={`menu-background ${isActive ? 'active' : ''}`} onClick={onClick}>
      <ul className="menu-links">
        <li>
          <a href="/" onClick={onClick}>
            Home
          </a>
        </li>
        <li>
          <a href="/about" onClick={onClick}>
            About
          </a>
        </li>
        <li>
          <a href="/services" onClick={onClick}>
            Services
          </a>
        </li>
        <li>
          <a href="/projects" onClick={onClick}>
            Projects
          </a>
        </li>
        <li>
          <a href="/contact" onClick={onClick}>
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default MenuBackground;
