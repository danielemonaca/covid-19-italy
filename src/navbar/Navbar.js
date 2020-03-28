import React from 'react';
import DonateIcon from './DonateIcon';
import NewsIcon from './NewsIcon';
import StatsIcon from './StatsIcon';
import './navbar-css/navbar-css.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='navbar'>
      <Link to='/stats'>
        <StatsIcon className='iconComponent' />
      </Link>
      <Link to='/news'>
        <NewsIcon className='iconComponent' />
      </Link>
      <Link to='/donate'>
        <DonateIcon className='iconComponent' />
      </Link>
    </div>
  );
}

export default Navbar;
