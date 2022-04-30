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
 * @desc Data for the third example of the aemet dataset
 *       add color to columns
 *       
 * @see {@link https://github.com/ULL-ESIT-PAI-2021-2022/2021-2022-pai-data-visualization-alu0101337760-alu0101244488}
 * @license GPLv3
 */

'use strict';

/** @desc import AEMET dataset and remove last element */
import { AEMET_TENERIFE_NORTH } from '../aemet-datasets/aemet-tenerife-north-airport.js';
const TENERIFE_NORTH_DATA = AEMET_TENERIFE_NORTH.slice(0, -1);

/** @desc Obtain the number of rainy days in every month */
let data = [];
for (let month of TENERIFE_NORTH_DATA) {
  data.push(month.n_llu);
}

/**@desc labels for the columns representing each month */
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

/** @desc Color of each column */
const COLORS = [
  'grey', 
  'grey',
  'grey', 
  'grey',
  'blue', 
  'grey',
  'grey', 
  'grey',
  'grey', 
  'grey',
  'grey', 
  'grey'
];

/** @desc Data for the configuration of the chart */
export const DATA = {
  labels: MONTHS,
  datasets: [{
    label: 'Rain per month',
    data: data,
    backgroundColor: COLORS
  }]
};