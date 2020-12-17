/* eslint-disable no-restricted-syntax */
/* eslint-disable no-console */
import * as global from "./globalData";
import * as json from "./countries.json";

const blockInfo = document.createElement("div");
const countryTitle = document.createElement("div");
const countryPopulation = document.createElement("div");
const newConfirmed = document.createElement("div");
const newDeaths = document.createElement("div");
const newRecovered = document.createElement("div");
const totalConfirmed = document.createElement("div");
const totalDeaths = document.createElement("div");
const totalRecovered = document.createElement("div");

blockInfo.className = "info__wrapper";
countryTitle.className = "info__title";
countryPopulation.className = "info__population";
newConfirmed.className = "info__new-confirmed";
newDeaths.className = "info__new-deaths";
newRecovered.className = "info__new-recovered";
totalConfirmed.className = "info__total-confirmed";
totalDeaths.className = "info__total-deaths";
totalRecovered.className = "info__total-recovered";

document.body.append(blockInfo);
blockInfo.append(countryTitle,
  countryPopulation,
  newConfirmed,
  newDeaths,
  newRecovered,
  totalConfirmed,
  totalDeaths,
  totalRecovered);

export const mymap = L.map("mapid").setView([45, 0], 1);
// var mymap = L.map('mapid').setView([51.505, -0.09], 1);

L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  // attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  id: "mapbox/dark-v10",
  tileSize: 512,
  zoomOffset: -1,
  accessToken: "pk.eyJ1IjoiYW5kcmVpeWEiLCJhIjoiY2tpcnBqeGFmMGUyZTJ6bjRzdnlycjRpcyJ9.X_IoWStY2eEjv2duSjMIiA",
}).addTo(mymap);

function showInfo(country) {
  for (const key in json) {
    if (json[key].name === country) {
      mymap.setView(json[key].latlng, 5);
    }
  }
  global.getData().then((data) => {
    global.getFlag().then((dataFlag) => {
      for (const key in data.Countries) {
        if (country === data.Countries[key].Country) {
          countryTitle.textContent = `${data.Countries[key].Country}`;
          newConfirmed.textContent = `New Confirmed Cases: ${data.Countries[key].NewConfirmed}`;
          newDeaths.textContent = `New Deaths Cases: ${data.Countries[key].NewDeaths}`;
          newRecovered.textContent = `New Recovered Cases: ${data.Countries[key].NewRecovered}`;
          totalConfirmed.textContent = `Total Confirmed: ${data.Countries[key].TotalConfirmed}`;
          totalDeaths.textContent = `Total Deaths: ${data.Countries[key].TotalDeaths}`;
          totalRecovered.textContent = `Total Recovered: ${data.Countries[key].TotalRecovered}`;
        }
      }
    });
  });
}

export default showInfo;
