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
    const arrDate = [];
    const arrPeople = [];
    for (let i = 0; i < dataInfo.length; i++) {
        const element = dataInfo[i].Date;
        // console.log(element.substr(5,5));
        // const newEl = element.substr(5,5)
        const newEl = new Date(element)
        arrDate.push(newEl.toLocaleDateString());

    }
    for (let i = 0; i < dataInfo.length; i++) {
        const element = dataInfo[i].Deaths;
        arrPeople.push(element)
    }

    let chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: arrDate, 
            datasets: [{
                label: 'Cases', 
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: arrPeople
            }]
        },

        // Configuration options go here
        options: {}
    });
}

const renderChart = () => {
    let url;
    const D = new Date(globalConst.dataAPI.lastUpdate);
    D.setDate(D.getDate() - 29)
    if (globalConst.currentRegion.name) {
        url = `https://api.covid19api.com/country/${globalConst.currentRegion.name}?from=${D.toISOString()}&to=${globalConst.dataAPI.lastUpdate}`;
    } else {
        url = `https://api.covid19api.com/world?from=${D.toISOString()}&to=${globalConst.dataAPI.lastUpdate}`;
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