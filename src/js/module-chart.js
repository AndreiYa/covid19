/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable import/no-cycle */
import globalConst from "./globalData";

import moduleTemplates from "./service-template";

/* MODULE TEMPLATE START */
const schedulePlace = document.createElement("div");
schedulePlace.className = "schedule-place";
schedulePlace.innerHTML = "API schedule";
moduleTemplates.chart.appendChild(schedulePlace);
/* MODULE TEMPLATE END */

const myCart = document.createElement("canvas");
myCart.id = "myChart";
myCart.style.width = `${100}%`;
myCart.style.height = `${150}px`;

schedulePlace.append(myCart);
const ctx = document.getElementById("myChart").getContext("2d");

export async function getChartData(url) {
  const apiCountryUrl = url;
  const res = await fetch(apiCountryUrl);
  const data = await res.json();
  return data;
}

function makeTable(dataInfo) {
  const arrDate = [];
  const arrPeople = [];
  for (let i = 0; i < dataInfo.length; i += 1) {
    const element = dataInfo[i].Date;
    const newEl = new Date(element);
    arrDate.push(newEl.toLocaleDateString());
  }
  for (let i = 0; i < dataInfo.length; i += 1) {
    const element = dataInfo[i].Deaths;
    arrPeople.push(element);
  }

  const chart = new Chart(ctx, {
    type: "line",
    data: {
      labels: arrDate,
      datasets: [{
        label: "Cases",
        backgroundColor: "red",
        borderColor: "red",
        data: arrPeople,
      }],
    },

    // Configuration options go here
    options: {},
  });
}

const renderChart = () => {
  let url;
  const D = new Date(globalConst.dataAPI.lastUpdate);
  D.setDate(D.getDate() - 29);
  if (globalConst.currentRegion.name) {
    url = `https://api.covid19api.com/country/${globalConst.currentRegion.name}?from=${D.toISOString()}&to=${globalConst.dataAPI.lastUpdate}`;
  } else {
    url = `https://api.covid19api.com/world?from=${D.toISOString()}&to=${globalConst.dataAPI.lastUpdate}`;
  }
  getChartData(url)
    .then((dataInfo) => {
      makeTable(dataInfo);
    }).catch((err) => {
      console.log(err);
    });
};

export default renderChart;
