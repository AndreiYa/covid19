/* eslint-disable */
import globalConst from "./globalData";

import moduleTemplates from './service-template';


/* MODULE TEMPLATE START */

const schedulePlace = document.createElement('div');
schedulePlace.className = 'schedule-place';
moduleTemplates.chart.appendChild(schedulePlace);
const resizer = document.createElement("div");
resizer.className = "box-resizer";
resizer.innerHTML = "<span class='material-icons'> fullscreen_exit </span>";
moduleTemplates.chart.append(resizer);
resizer.addEventListener("click", () => {
    moduleTemplates.chart.classList.toggle("box-full");
});
const scheduleDeath = document.createElement('div');
scheduleDeath.className = 'schedule-death';
scheduleDeath.style.display = 'inline-block';

const scheduleConfirmed = document.createElement('div');
scheduleConfirmed.className = 'schedule-confirmed';
scheduleConfirmed.style.display = 'inline-block';

const scheduleRecovered = document.createElement('div');
scheduleRecovered.className = 'schedule-recovered';
scheduleRecovered.style.display = 'inline-block';

moduleTemplates.chart.appendChild(scheduleDeath);
moduleTemplates.chart.appendChild(scheduleConfirmed);
moduleTemplates.chart.appendChild(scheduleRecovered);
/* MODULE TEMPLATE END */

const myChartDeath = document.createElement('canvas');
const myChartConfirmed = document.createElement('canvas');
const myChartRecovered = document.createElement('canvas');
myChartDeath.id = 'myChartDeath';
myChartConfirmed.id = 'myChartConfirmed';
myChartRecovered.id = 'myChartRecovered';
myChartDeath.style.width = 100 + '%';
myChartConfirmed.style.width = 100 + '%';
myChartRecovered.style.width = 100 + '%';
myChartDeath.style.height = 150 + 'px';
myChartConfirmed.style.height = 150 + 'px';
myChartRecovered.style.height = 150 + 'px';
myChartDeath.style.display = 'inline-block';
myChartConfirmed.style.display = 'inline-block';
myChartRecovered.style.display = 'inline-block';

scheduleDeath.append(myChartDeath)
scheduleConfirmed.append(myChartConfirmed)
scheduleRecovered.append(myChartRecovered)
let ctxDeath = document.getElementById('myChartDeath').getContext('2d');
let ctxConfirmed = document.getElementById('myChartConfirmed').getContext('2d');
let ctxRecovered = document.getElementById('myChartRecovered').getContext('2d');


export async function getChartData(url) {
    const apiCountryUrl = url;
    const res = await fetch(apiCountryUrl);
    const data = await res.json();
    return data;
};


function makeTableDeath(dataInfo) {
    const arrDate = [];
    const arrPeopleDeaths = [];
    for (let i = 0; i < dataInfo.length; i++) {
        //Date
        const elDate = dataInfo[i].Date;
        const newEl = new Date(elDate)
        arrDate.push(newEl.toLocaleDateString());

        //Death
        const elDeath = dataInfo[i].Deaths;
        arrPeopleDeaths.push(elDeath);
    }


    let chart = new Chart(ctxDeath, {
        type: 'line',
        data: {

            labels: arrDate,
            datasets: [{
                label: 'Death',
                backgroundColor: 'red',
                borderColor: 'red',
                data: arrPeopleDeaths
            }]
        },
        options: {}
    });
}

function makeTableConfirmed(dataInfo) {
    const arrDate = [];
    const arrPeopleConfirmed = [];
    for (let i = 0; i < dataInfo.length; i++) {
        //Date
        const elDate = dataInfo[i].Date;
        const newEl = new Date(elDate)
        arrDate.push(newEl.toLocaleDateString());

        // //Confirmed
        const elConfirmed = dataInfo[i].Confirmed;
        arrPeopleConfirmed.push(elConfirmed);
    }


    let chart = new Chart(ctxConfirmed, {
        type: 'line',
        data: {

            labels: arrDate,
            datasets: [{
                label: 'Confirmed',
                backgroundColor: 'yellow',
                borderColor: 'yellow',
                data: arrPeopleConfirmed
            }]
        },
        options: {}
    });
}

function makeTableRecovered(dataInfo) {
    const arrDate = [];
    const arrPeopleRecovered = [];
    for (let i = 0; i < dataInfo.length; i++) {
        //Date
        const elDate = dataInfo[i].Date;
        const newEl = new Date(elDate)
        arrDate.push(newEl.toLocaleDateString());

        // //Recovered
        const elRecovered = dataInfo[i].Recovered;
        arrPeopleRecovered.push(elRecovered);
    }


    let chart = new Chart(ctxRecovered, {
        type: 'line',
        data: {

            labels: arrDate,
            datasets: [{
                label: 'Recovered',
                backgroundColor: 'green',
                borderColor: 'green',
                data: arrPeopleRecovered
            }]
        },
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
            console.log(dataInfo);
            makeTableDeath(dataInfo);
            makeTableConfirmed(dataInfo);
            makeTableRecovered(dataInfo);
        }).catch((err) => {
            console.log(err);
        });;
}

export default renderChart;