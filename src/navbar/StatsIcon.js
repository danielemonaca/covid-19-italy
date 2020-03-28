import React from 'react';
import './navbar-css/navbar-css.css';
import { ICONS } from '../constants';

function StatsIcon() {
  /* const styles = {
    textAlign: 'center',
    verticalTextAlign: 'middle',
    margin: 'auto',
    marginTop: '20px'
  };*/

  return (
    <div className='icon-circle'>
      <svg
        className='forSvg'
        xmlns='http://www.w3.org/2000/svg'
        width='40'
        height='40'
        fill='#282C34'
      >
        {ICONS.STATS}
      </svg>
    </div>
  );
}

export default StatsIcon;
