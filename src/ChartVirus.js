import { Doughnut, Bar } from 'react-chartjs-2';
import React, { Component } from 'react';

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: ['ciao', 'dio', 'cane'],
        datasets: [
          {
            label: 'Population',
            data: [12, 23, 14]
          }
        ]
      }
    };
  }

  render() {
    return (
      <div className='chart'>
        <h1>ciao</h1>
        <Bar data={this.state.chartData} />
      </div>
    );
  }
}

export default Chart;
