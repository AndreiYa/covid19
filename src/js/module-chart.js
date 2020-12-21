/* eslint-disable */
import globalConst from "./globalData";

import moduleTemplates from './service-template';


/* MODULE TEMPLATE START */
const schedulePlace = document.createElement('div');
schedulePlace.className = 'schedule-place';
schedulePlace.innerHTML = `API schedule`;
moduleTemplates.chart.appendChild(schedulePlace);
/* MODULE TEMPLATE END */

const myCart = document.createElement('canvas');
myCart.id = 'myChart';
myCart.style.width = 100 + '%';
myCart.style.height = 150 + 'px';

schedulePlace.append(myCart)
let ctx = document.getElementById('myChart').getContext('2d');


export async function getChartData(url) {
    const apiCountryUrl = url;
    const res = await fetch(apiCountryUrl);
    const data = await res.json();
    return data;
};

function makeTable(dataInfo) {
    const arrDate = []
    for (let i = 0; i < dataInfo.length; i++) {
        const element = dataInfo[i].Date;
        arrDate.push(element);
        // return arrDate;
    }
    console.log(arrDate);

    let chart = new Chart(ctx, {
        
        // The type of chart we want to create
        type: 'line',

        // The data for our dataset
        data: {
            labels: ['zydfhm', 'sasdasd', 'wdasd'], 
            datasets: [{
                label: 'Cases', 
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',

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
        .then((dataInfo) => {
            console.log(`${globalConst.currentRegion.name ? globalConst.currentRegion.name : 'All countries'}: `, dataInfo);
            makeTable(dataInfo);
        }).catch((err) => {
            console.log(err);
        });;
}

export default renderChart;