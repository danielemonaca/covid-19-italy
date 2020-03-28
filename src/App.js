import React from 'react';
import './App.css';
import Stats from './pages/Stats';
import Donate from './pages/Donate';
import News from './pages/News';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <BrowserRouter>
          <div>
            <Route exact path='/' component={Stats} />
            <Route exact path='/stats' component={Stats} />
            <Route exact path='/news' component={News} />
            <Route exact path='/donate' component={Donate} />
          </div>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
