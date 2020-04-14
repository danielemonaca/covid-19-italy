import React from 'react';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import NewsFeed from '../NewsFeed';
import { withRouter } from 'react-router-dom';

function News() {
  const style = {
    margin: '0 auto',
    marginBottom: '80%',
    color: 'white',
  };

  return (
    <div>
      <header>
        <Navbar />
      </header>
      <body>
        <h1 style={{ fontSize: '3em' }}>NEWS</h1>
        <h1 style={style}>WORK IN PROGRESS(REQUESTING API)</h1>
        <Footer />
      </body>
    </div>
  );
}

export default News;
