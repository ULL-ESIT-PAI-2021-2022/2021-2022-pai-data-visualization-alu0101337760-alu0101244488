import { config } from './config.js';
import { Chart, registerables } from '../../../node_modules/chart.js/dist/chart.esm.js';
Chart.register(...registerables);

let ctx = document.getElementById("myChart").getContext("2d");
let myChart = new Chart(ctx, config);
