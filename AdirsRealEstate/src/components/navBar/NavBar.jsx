import React, { useState } from 'react';
import './navBar.scss';

const NavBar = () => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src="/logo.png" alt="company-logo" />
          <span>KickAssRealEstate</span>
        </a>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact Us</a>
        <a href="/agents">Agents</a>
      </div>
      <div className="right">
        <a href="/sign-in">Sign In</a>
        <a href="/sign-up" className="sign-up">
          Sign Up
        </a>
        <div className="menuIcon">
          <img
            src="/menu.png"
            alt="menu-button"
            onClick={() => setIsSideMenuOpen(!isSideMenuOpen)}
          />
        </div>
        <div className={isSideMenuOpen ? 'mobileMenu active' : 'mobileMenu'}>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact Us</a>
          <a href="/agents">Agents</a>
          <a href="/sign-in">Sign In</a>
          <a href="/sign-up">Sign Up</a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
