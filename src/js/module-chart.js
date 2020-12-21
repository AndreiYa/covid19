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
    let url;
    const D = new Date;
    D.setDate(D.getDate() - 29);
    if (globalConst.currentRegion.name) {
        url = `https://api.covid19api.com/country/${globalConst.currentRegion.name}?from=${D.toISOString()}&to=${globalConst.dataAPI.lastUpdate}`;
    } else {
        url = `https://api.covid19api.com/world?from=${D.toISOString()}&to=${globalConst.dataAPI.lastUpdate}`;
    }
    getChartData(url)
        .then((data) => {
            console.log(`${globalConst.currentRegion.name ? globalConst.currentRegion.name : 'All countries'}: `, data);

            // makeTable(data);
        }).catch((err) => {
            console.log(err);
        });;
}

export default renderChart;