import { AEMET_DATA } from '../aemet-data.js';
const AEMET = AEMET_DATA.slice(0, -1);

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];


const COLORS = [
  'blue',
  'green',
  'red',
  'pink',
  'purple',
  'yellow',
  'brown',
  'aqua',
  'greenyellow',
  'olive',
  'thistle',
  'seagreen'
]

let rains = [];
for (let month of AEMET) {
  rains.push(month.n_llu);
}

export const DATA = {
  labels: MONTHS,
  datasets: [{
    label: 'Rain per month',
    data: rains,
    backgroundColor: COLORS
  }]
};