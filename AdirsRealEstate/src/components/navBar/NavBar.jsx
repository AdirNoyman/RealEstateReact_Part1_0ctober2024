import { useState } from 'react';
import './navBar.scss';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  return (
    <nav>
      <div className="left">
        <Link to={'/'} className="logo link">
          <img src="/logo.png" alt="company-logo" />
          <span>KickAssRealEstate</span>
        </Link>
        <Link to={"/"} className='link'>Home</Link>
        <Link to={"/about"} className='link'>About</Link>
        <Link to={"/contact"} className='link'>Contact Us</Link>
        <Link to={"/agents"} className='link'>Agents</Link>
      </div>
      <div className="right">
        <Link to={"/sign-in"} className='link'>Sign In</Link>
        <Link to={"/sign-up"} className="sign-up link">
          Sign Up
        </Link>
        <div className="menuIcon">
          <img
            src="/menu.png"
            alt="menu-button"
            onClick={() => setIsSideMenuOpen(!isSideMenuOpen)}
          />
        </div>
        <div className={isSideMenuOpen ? 'mobileMenu active' : 'mobileMenu'}>
          <Link to="/" className='link'>Home</Link>
          <Link to="/about" className='link'>About</Link>
          <Link to="/contact" className='link'>Contact Us</Link>
          <Link to="/agents" className='link'>Agents</Link>
          <Link to="/sign-in" className='link'>Sign In</Link>
          <Link to="/sign-up" className='link'>Sign Up</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
