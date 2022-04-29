import { DATA } from './setup.js';

const TYPE = 'bar';

export let config = {
  type: TYPE,
  data: DATA,
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
}