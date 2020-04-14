import { Doughnut, Bar } from 'react-chartjs-2';
import React, { Component } from 'react';

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: ['just', 'a', 'test'],
        datasets: [
          {
            label: 'Population',
            data: [12, 23, 14],
          },
        ],
        backgroundColor: [
          'rgba(255,99,132,0.6)',
          'rgba(255,255,255,255)',
          'rgba(12,42,53,234)',
        ],
        fillColor: [
          'rgba(0,10,220,0.5)',
          'rgba(220,0,10,0.5)',
          'rgba(0,0,0,0.5)',
        ],
        strokeColor: 'rgba(220,220,220,0.8)',
        highlightFill: 'rgba(220,220,220,0.75)',
        highlightStroke: 'rgba(220,220,220,1)',
      },
    };
  }

  render() {
    return (
      <div className='chart'>
        <h1 style={{ color: 'white' }}>Graph work in progress</h1>
        <Bar
          style={{ backgroundColor: 'white' }}
          data={this.state.chartData}
          width='1'
          height='1'
        />
      </div>
    );
  }
}

export default Chart;
