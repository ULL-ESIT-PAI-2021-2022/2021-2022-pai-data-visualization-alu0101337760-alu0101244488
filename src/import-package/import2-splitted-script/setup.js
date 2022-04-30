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
 * @desc Data exported for the simple example of a bar chart
 * @see {@link https://github.com/ULL-ESIT-PAI-2021-2022/2021-2022-pai-data-visualization-alu0101337760-alu0101244488}
 * @license GPLv3
 */

'use strict';

/** @desc Name of each column */
const LABELS = ['col1', 'col2', 'col3', 'col4'];

/** @desc  data or value to represent on each column */
const VALUES = [10, 9, 15, 7];

/** @desc Color of each column */
// It is possible to use hex, rgb, rgba format
const COLORS = [
  'blue', 
  'green',
  'red',
  'yellow' 
];

/** @desc Data structure to be exported and used in the chart */
export const DATA = {
  labels: LABELS,
  datasets: [{
    label: 'Num datos',
    data: VALUES,
    backgroundColor: COLORS
  }]
};