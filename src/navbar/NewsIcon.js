import React from 'react';
import { ICONS } from '../constants';
import './navbar-css/navbar-css.css';

function NewsIcon() {
  return (
    <div className='icon-circle'>
      <svg
        className='forSvg'
        xmlns='http://www.w3.org/2000/svg'
        width='40'
        height='40'
      >
        {ICONS.NEWS}
      </svg>
    </div>
  );
}

export default NewsIcon;
