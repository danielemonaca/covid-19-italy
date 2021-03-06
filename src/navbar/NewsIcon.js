import React from 'react';
import { ICONS } from '../constants';
import './navbar-css/navbar-css.css';
import { Link } from 'react-router-dom';

function NewsIcon(active) {
  return (
    <div className='marginIcon'>
      <Link to='/news'>
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
            {ICONS.NEWS}
          </svg>
        </div>
      </Link>
      {console.log('Pathname: ' + window.location.pathname)}
    </div>
  );
}

export default NewsIcon;
