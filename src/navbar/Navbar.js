import React from 'react';
import DonateIcon from './DonateIcon';
import NewsIcon from './NewsIcon';
import StatsIcon from './StatsIcon';
import './navbar-css/navbar-css.css';

function Navbar() {
  return (
    <div className='navbar'>
      <StatsIcon
        className='iconComponent'
        active={window.location.pathname === '/stats' ? true : false}
      />
      <NewsIcon
        className='iconComponent'
        active={window.location.pathname === '/news' ? true : false}
      />
      <DonateIcon
        className='iconComponent'
        active={window.location.pathname === '/donate' ? true : false}
      />
    </div>
  );
}

export default Navbar;
