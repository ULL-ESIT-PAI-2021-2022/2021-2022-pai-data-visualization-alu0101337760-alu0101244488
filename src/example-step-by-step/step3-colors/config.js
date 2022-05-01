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
 * @desc Configuration of the third example of the aemet dataset
 *       add color to columns
 *       
 * @see {@link https://github.com/ULL-ESIT-PAI-2021-2022/2021-2022-pai-data-visualization-alu0101337760-alu0101244488}
 * @license GPLv3
 */

'use strict';

import { DATA } from './setup.js';

/** @desc Type of chart to represent */
const TYPE = 'bar';

/** @desc Configuration of the font for labels */
const LABELS_FONT = {
  size: 18 
};

/** @desc Configuration of the font for labels */
const TICKS_FONT = {
  size: 16
};

/** @desc Plugins allows to override the default attributes of the chart */
const PLUGINS = {
  title: {
    display: true,
    text: 'Days with rain each month of 2021 in Tenerife North Airport',
    font: {
      size: 22
    }
  },
  legend: {
    labels: {
      font: LABELS_FONT
    }
  }
};

/** @desc Configuration of the scale of the chart */
const SCALE = {
  y: {
    min: 0,
    max: 25,
    title: {
      display: true,
      text: 'Days with rain',
      padding: 15,
      font: LABELS_FONT
    },
    ticks: {
      font: TICKS_FONT
    }
  },
  x: {
    title: {
      display: true,
      text: 'Month',
      padding: 15,
      font: LABELS_FONT
    },
    ticks: {
      font: TICKS_FONT
    }
  }
};

/** @desc Option for the chart storing all the configurations */
const OPTIONS = {
  plugins: PLUGINS,
  responsive: true,
  maintainAspectRatio: false,
  scales: SCALE
};

/** @desc Export configuration of the chart */
export let CONFIG = {
  type: TYPE,
  data: DATA,
  options: OPTIONS
};