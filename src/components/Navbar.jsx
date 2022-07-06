import React from 'react';
import { Link } from 'react-router-dom';
import { HiMenu } from 'react-icons/hi';

const Navbar = () => (
  <nav className="navbar">
    <h1>Math Magicians</h1>
    <div className="desktop-nav">
      <Link to="/" className="link">Home</Link>
      <Link to="/calculator" className="link">Calculator</Link>
      <Link to="/quotes" className="link">Quotes</Link>
    </div>
    <button type="button" className="mobile-menu">
      <HiMenu color="#4d4c4c" size="1.8rem" />
    </button>
  </nav>
);

export default Navbar;
