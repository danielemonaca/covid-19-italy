import React from 'react';
import './navbar-css/navbar-css.css';
import { ICONS } from '../constants';
import { Link } from 'react-router-dom';

function StatsIcon(active) {
  return (
    <div className='marginIcon'>
      {console.log('isActive?', active)}
      <Link to='/stats'>
        <div
          className={
            active.active
              ? 'icon-circle icon-circle-a noHover'
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
            {ICONS.STATS}
          </svg>
        </div>
      </Link>
    </div>
  );
}

export default StatsIcon;
