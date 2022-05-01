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
 * @desc Export configuration for the bar chart example where
 *       the data is in other file
 *
 * @see {@link https://github.com/ULL-ESIT-PAI-2021-2022/2021-2022-pai-data-visualization-alu0101337760-alu0101244488}
 * @license GPLv3
 */

'use strict';

/** @desc import data object */
import {DATA} from './setup.js';

/**
 * @desc Type of chart to represent
 * @see {@link https://https://www.chartjs.org/docs/latest/} to see all avalible types
 */
const TYPE = 'bar';

/** @desc Export configuartion of the chart */
export const CONFIG = {
  type: TYPE,
  data: DATA,
  options: {responsive: true, maintainAspectRatio: false}
};