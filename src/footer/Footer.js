import React from 'react';
import InstagramIcon from './InstagramIcon';
import GitHubIcon from './GitHubIcon';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div>
      <p className='writtenCredit'>
        Creato e distribuito gratuitamente da{' '}
        <a
          href='http://www.danielemonaca.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          Daniele Monaca
        </a>
      </p>
      <div className='footer'>
        <div className='deeperFooter'>
          <a
            href='https://www.instagram.com/daniele_monaca/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <InstagramIcon />
          </a>
          <a
            href='https://github.com/danielemonaca'
            target='_blank'
            rel='noopener noreferrer'
          >
            <GitHubIcon />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
