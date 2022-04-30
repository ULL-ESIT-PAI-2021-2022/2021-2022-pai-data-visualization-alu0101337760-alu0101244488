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
 * @desc Fourth example importing data from an AEMET station
 *       add a second dataset to compare with the first one
 *       
 * @see {@link https://github.com/ULL-ESIT-PAI-2021-2022/2021-2022-pai-data-visualization-alu0101337760-alu0101244488}
 * @license GPLv3
 */

'use strict';

import { CONFIG } from './config.js';
import { Chart, registerables } from './../../../node_modules/chart.js/dist/chart.esm.js';
Chart.register(...registerables);

let CTX = document.getElementById("myChart").getContext("2d");
let myChart = new Chart(CTX, CONFIG);