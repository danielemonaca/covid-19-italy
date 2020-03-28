import React from 'react';
import { ICONS } from '../constants';
import './Footer.css';

function InstagramIcon() {
  return (
    <div className='singleElement'>
      <svg xmlns='http://www.w3.org/2000/svg' width='40' height='40'>
        {ICONS.INSTAGRAM}
      </svg>
    </div>
  );
}

export default InstagramIcon;
