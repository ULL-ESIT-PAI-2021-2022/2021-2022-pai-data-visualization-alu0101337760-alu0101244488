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
 * @desc Example of a bar chart with the library imported using 
 *       ecma6 sintax and configuration and data splitted into 
 *       multiple files
 *       
 * @see {@link https://github.com/ULL-ESIT-PAI-2021-2022/2021-2022-pai-data-visualization-alu0101337760-alu0101244488}
 * @license GPLv3
 */

'use strict';

/**
 * @desc Import library and library necesary plugins, also import 
 *       config file storing the configuration of the chart
 */

import { config } from './config.js';
import { Chart, registerables } from './../../../node_modules/chart.js/dist/chart.esm.js';
Chart.register(...registerables);

/**
 * @desc get context, creatte chart and display it using the configuration
 */
const CTX = document.getElementById('myChart').getContext('2d');
let myChart = new Chart(CTX, config);