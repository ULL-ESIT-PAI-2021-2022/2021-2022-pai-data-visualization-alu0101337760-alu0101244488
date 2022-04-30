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
 * @desc Configuration of the second example of the aemet dataset
 *       resizing the chart and font
 *       
 * @see {@link https://github.com/ULL-ESIT-PAI-2021-2022/2021-2022-pai-data-visualization-alu0101337760-alu0101244488}
 * @license GPLv3
 */

'use strict';

import { DATA } from './setup.js';

/** @desc Type of chart to represent */
const TYPE = 'bar';

/** @desc Plugins allows to override the default attributes of the chart */
const PLUGINS = {
  legend: {
    labels: {
      font: {
        size: 22
      }
    }
  }
};

/** @desc Option for the chart storing all the configurations */
const OPTIONS = {
  plugins: PLUGINS,
  responsive: true,
  maintainAspectRatio: false
};

/** @desc Export configuration of the chart */
export let CONFIG = {
  type: TYPE,
  data: DATA,
  options: OPTIONS
};