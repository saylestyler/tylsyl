import React from 'react';
import Link from 'gatsby-link';

const Navbar = () => (
  <nav className='nav templateWrapper'>
    <ul>
      <li>
        <Link className='navbar-item' to='/'> Index </Link>
      </li>
      <li>
        <Link className='navbar-item' to='/about'> About </Link>
      </li>
      <li>
        <Link className='navbar-item' to='/tags'> Tags </Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
