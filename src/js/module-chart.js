/* eslint-disable */
import globalConst from "./globalData";

import moduleTemplates from './service-template';


/* MODULE TEMPLATE START */
const schedulePlace = document.createElement('div');
schedulePlace.className = 'schedule-place';
schedulePlace.innerHTML = `API schedule`;
moduleTemplates.chart.appendChild(schedulePlace);
/* MODULE TEMPLATE END */

export async function getChartData(url) {
    const apiCountryUrl = url;
    const res = await fetch(apiCountryUrl);
    const data = await res.json();
    return data;
};

function makeTable(data) {
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',

        // The data for our dataset
        data: {
            labels: ['September', 'October', 'November', 'December'], //сюда у нас должно пойти Date
            datasets: [{
                label: 'Cases', //Сюда идет название графика, то, по чему будут показатели
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                //в зависимости от страны сюда будет лететь Месяц(ось Х), количество человек(ось У)
                //     data: [{
                //       x: new Date(),
                //       y: 1
                //   }, {
                //       t: new Date(),
                //       y: 2000000
                //   }]
                data: [0, 200000, 15000, 80000]

            }]
        },

        // Configuration options go here
        options: {}
    });
}

const renderChart = () => {
    let url;
    if (globalConst.currentRegion.name) {
        url = `https://api.covid19api.com/country/${globalConst.currentRegion.name}?from=2020-10-10T00:00:00Z&to=2020-10-11T00:00:00Z`;
    } else {
        url = `https://api.covid19api.com/world?from=2020-10-10T00:00:00Z&to=2020-11-11T00:00:00Z`;
    }
    getChartData(url)
        .then((data) => {
            console.log(`${globalConst.currentRegion.name ? globalConst.currentRegion.name : 'All countries'}: `, data);

            makeTable(data);
        }).catch((err) => {
            console.log(err);
        });;
}

export default renderChart;