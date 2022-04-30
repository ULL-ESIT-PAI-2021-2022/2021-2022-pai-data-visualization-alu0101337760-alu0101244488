/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Aram Pérez Dios <aram.perez.dios.04@ull.edu.es>
 * @author Enrique Viña Alonso <enrique.vina.29@ull.edu.es>
 * @since Apr 28 2022
 * 
 * @desc Example of a line chart to show the basic structure
 *       of the Chart object of the Chart.js library
 * @see {@link https://github.com/ULL-ESIT-PAI-2021-2022/2021-2022-pai-data-visualization-alu0101337760-alu0101244488}
 * @license GPLv3
 */

'use strict';

/** @desc Data to to fill the chart */

/** @desc Structure of the dataset for the chart ot display */
const DATA = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [{
    label: 'Looping tension',
    data: [65, 59, 80, 81, 26, 55, 40],
    fill: false,
    borderColor: 'rgb(75, 192, 192)',
  }]
};



/** @desc Configuration of the chart */

/** @desc Type of chart to represent */
const TYPE = 'line';

/** @desc Configuration of the animation of the chart */
const ANIMATION = {
  tension: {
    duration: 1000,
    easing: 'linear',
    from: 0.3,
    to: 0.1,
    loop: true
  }
};

/** @desc Configuration of the scale of the chart */
const SCALE = {
  y: {
    min: 0,
    max: 100
  }
};

/** @desc Plugins allows to override the default attributes of the chart */
const PLUGINS = {
  legend: {
    labels: {
      font: {
        size: 20
      }
    }
  }
};

/** @desc Option for the chart storing all the configurations */
const OPTIONS = {
  plugins: PLUGINS,
  responsive: true,
  maintainAspectRatio: false,
  animations: ANIMATION,
  scales: SCALE
};

/** @desc Structure of the configuration and format of the chart */
const CONFIG = {
  type: TYPE,
  data: DATA,
  options: OPTIONS
};



/** @desc Context of html element */
const CTX = document.getElementById("myChart").getContext("2d");

/** @desc create chart with context and configuration */
let myChart = new Chart(CTX, CONFIG);