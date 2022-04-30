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
 * @desc Configuration of the first example of the aemet dataset
 *       
 * @see {@link https://github.com/ULL-ESIT-PAI-2021-2022/2021-2022-pai-data-visualization-alu0101337760-alu0101244488}
 * @license GPLv3
 */

'use strict';

import { DATA } from './setup.js';

/** @desc Type of chart to represent */
const TYPE = 'bar';

/** @desc Export configuration of the chart */
export let CONFIG = {
  type: TYPE,
  data: DATA
};