/* eslint-disable */
import globalConst from "./globalData";

import moduleTemplates from './service-template';


/* MODULE TEMPLATE START */
const schedulePlace = document.createElement('div');
schedulePlace.className = 'schedule-place';
schedulePlace.innerHTML = `API schedule`;
moduleTemplates.chart.appendChild(schedulePlace);
/* MODULE TEMPLATE END */

const renderChart = () => {
    console.log('chart: ', globalConst.currentRegion.name);
    schedulePlace.innerHTML = `${globalConst.currentRegion.name}`;
}

export default renderChart;