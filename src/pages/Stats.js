import React, { useEffect, Component } from 'react';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import './style/Stats.css';
import { ICONS } from '../constants';
import CountUp from 'react-countup';
import ChartVirus from '../ChartVirus';

class Stats extends Component {
  constructor() {
    super();
    this.state = {
      infected: 0,
      death: 0,
      recovered: 0,
    };
  }
  //<p className='someMargin'>{this.state.death}</p>

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
      recovered: lastStats.recovered,
    });
  }

  render() {
    return (
      <div>
        <header>
          <Navbar />
        </header>

        <body>
          <div className='centeringTitle'>
            <h2>Statistiche italiane coronavirus</h2>
          </div>
          <div class='container'>
            <div class='item contaminated-item'>
              <svg
                style={{ marginTop: 10 }}
                xmlns='http://www.w3.org/2000/svg'
                width='80'
                height='80'
                fill='white'
              >
                {ICONS.VIRUS}
              </svg>
              <p className='lessMargin'> Infettati </p>
              <CountUp
                delay={2}
                end={this.state.infected}
                style={{ fontSize: '40pt' }}
              />
            </div>

            <div class='item deaths-item'>
              <svg
                style={{ marginTop: 10 }}
                xmlns='http://www.w3.org/2000/svg'
                width='80'
                height='80'
                fill='white'
              >
                {ICONS.RIP}
              </svg>
              <p className='lessMargin'>Morti</p>
              <CountUp
                delay={2}
                end={this.state.death}
                style={{ fontSize: '40pt' }}
              />
            </div>

            <div class='item recovered-item'>
              <svg
                style={{ marginTop: 10 }}
                xmlns='http://www.w3.org/2000/svg'
                width='80'
                height='80'
                fill='white'
              >
                {ICONS.BANDAID}
              </svg>
              <p className='lessMargin'>Guariti</p>
              <CountUp
                delay={2}
                end={this.state.recovered}
                style={{ fontSize: '40pt' }}
              />
            </div>
          </div>
        </body>
        <footer>
          <div className='footerFixed'>
            <Footer />
          </div>
        </footer>
      </div>
    );
  }
}
export default Stats;
