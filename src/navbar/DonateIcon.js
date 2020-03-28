import React from 'react';
import { ICONS } from '../constants';
import './navbar-css/navbar-css.css';
import { Link } from 'react-router-dom';

function DonateIcon(active) {
  return (
    <div className='marginIcon'>
      {console.log('isActive?', active.active)}
      <Link to='/donate'>
        <div
          className={
            active.active
              ? 'icon-circle icon-circle-a'
              : 'icon-circle icon-circle-n'
          }
        >
          <svg
            className='forSvg'
            xmlns='http://www.w3.org/2000/svg'
            width='40'
            height='40'
            fill={active.active ? 'white' : '#282C34'}
          >
            {ICONS.DONATE}
          </svg>
        </div>
      </Link>
    </div>
  );
}

export default DonateIcon;
