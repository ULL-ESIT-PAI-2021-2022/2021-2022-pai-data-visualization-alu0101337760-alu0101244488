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
 * @desc Data for the fourth example of the aemet dataset
 *       add a second dataset to compare with the first one
 *       
 * @see {@link https://github.com/ULL-ESIT-PAI-2021-2022/2021-2022-pai-data-visualization-alu0101337760-alu0101244488}
 * @license GPLv3
 */

'use strict';

/** @desc import AEMET datasets */
import { AEMET_TENERIFE_NORTH } from '../aemet-datasets/aemet-tenerife-north-airport.js';
import { AEMET_TENERIFE_SOUTH } from '../aemet-datasets/aemet-tenerife-south-airport.js';

/**
 * @desc Function to get the number of rainy days each month
 *       on an AEMET dataset
 * @param {Object} aemetDataset dataset from aemet
 * @returns {Array<Number>} rainy days per month
 */
function getRainPerMonth(aemetDataset) {
  let dataset = aemetDataset.slice(0, -1);
  let rainDaysPerMonth = [];
  for (let month of aemetDataset) {
    rainDaysPerMonth.push(month.n_llu);
  }
  return rainDaysPerMonth;
}

/** @desc Obtain the number of rainy days in every month  for both datasets*/
const TENERIFE_NORTH_RAIN_PER_MONTH = getRainPerMonth(AEMET_TENERIFE_NORTH);
const TENERIFE_SOUTH_RAIN_PER_MONTH = getRainPerMonth(AEMET_TENERIFE_SOUTH);

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


/** @desc setup datasets from Tenerife North and South */
const DATASETS = [
  {
    label: 'Tenerife North',
    data: TENERIFE_NORTH_RAIN_PER_MONTH,
    backgroundColor: 'RED'
  },
  {
    label: 'Tenerife South',
    data: TENERIFE_SOUTH_RAIN_PER_MONTH,
    backgroundColor: 'BLUE'
  }
]

/** @desc Data for the configuration of the chart */
export const DATA = {
  labels: MONTHS,
  datasets: DATASETS
};