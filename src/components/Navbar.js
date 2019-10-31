import React from 'react';
import Link from 'gatsby-link';

const Navbar = () => (
    <ul>
      <li>
        <Link className='navbar-item' to='/'>Index</Link>
      </li>
      <li>
        <Link className='navbar-item' to='/about'>About</Link>
      </li>
    </ul>
);

export default Navbar;
