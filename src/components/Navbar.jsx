import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <h1>Math Magicians</h1>
    <div>
      <Link to="/home">Home</Link>
      <Link to="/calculator">Calculator</Link>
      <Link to="/quotes">Quotes</Link>
    </div>
  </nav>
);

export default Navbar;
