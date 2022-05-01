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

/** @desc Context of html element */
const CTX = document.getElementById('myChart').getContext('2d');

/** @desc create chart with context and configuration */
let myChart = new Chart(CTX, {
  type: 'line',
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
      label: 'Looping tension',
      data: [65, 59, 80, 81, 26, 55, 40],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
    }]
  },
  options: {
    plugins: {
      legend: {
        labels: {
          font: {size: 20},
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    animations: {
      tension: {
        duration: 500,
        easing: 'linear',
        from: 0.5,
        to: 0.1,
        loop: true,
      }
    },
    scales: {
      y: {
        min: 0,
        max: 100,
      }
    }
  }
});