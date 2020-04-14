import React from 'react';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';

function Donate() {
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
        <h1 style={{ fontSize: '3em' }}>DONATE</h1>
        <h1 style={style}>WORK IN PROGRESS(REQUESTING API FROM THIRD-PARTY)</h1>
        <Footer />
      </body>
    </div>
  );
}

export default Donate;
