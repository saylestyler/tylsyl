import React from 'react';
import Link from 'gatsby-link';

const Navbar = () => (
  <nav>
    <div>
      <Link className='navbar-item' to='/'>Index</Link>
    </div>
    <div>
      <Link className='navbar-item' to='/about'>About</Link>
    </div>
  </nav>
);

export default Navbar;
