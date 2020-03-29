import React, { useEffect, Component } from 'react';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import './style/Stats.css';
import { ICONS } from '../constants';

class Stats extends Component {
  constructor() {
    super();
    this.state = {
      infected: 0,
      death: 0,
      recovered: 0
    };
  }

  async componentDidMount() {
    const response = await fetch(
      'https://pomber.github.io/covid19/timeseries.json'
    );
    const data = await response.json();
    const lastStats = await data['Italy'].pop();
    this.gettingLastStats(lastStats);
  }

  gettingLastStats(lastStats) {
    this.setState({
      infected: lastStats.confirmed,
      death: lastStats.deaths,
      recovered: lastStats.recovered
    });
    console.log('ciao belli', lastStats);
  }

  render() {
    return (
      <div>
        <header>
          <Navbar />
        </header>

        <body>
          <div class='container'>
            <div class='item contaminated-item'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='80'
                height='80'
                fill='white'
              >
                {ICONS.VIRUS}
              </svg>
              <p className='someMargin'>{this.state.infected}</p>
            </div>
            <div class='item deaths-item'>
              <p class='deaths'>Morti</p>
              <p className='someMargin'>{this.state.death}</p>
            </div>
            <div class='item recovered-item'>
              <p class='recovered'>Guariti</p>
              <p className='someMargin'>{this.state.recovered}</p>
            </div>
          </div>

          <Footer />
        </body>
      </div>
    );
  }
}
export default Stats;
