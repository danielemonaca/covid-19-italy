import React from 'react';
import { ICONS } from '../constants';
import './navbar-css/navbar-css.css';

function DonateIcon() {
  return (
    <div className='icon-circle'>
      <svg
        className='forSvg'
        xmlns='http://www.w3.org/2000/svg'
        width='40'
        height='40'
        fill='#282C34'
      >
        {ICONS.DONATE}
      </svg>
    </div>
  );
}

export default DonateIcon;
