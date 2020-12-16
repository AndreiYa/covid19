/* eslint-disable no-restricted-syntax */
/* eslint-disable no-console */
import * as global from "./globalData";

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

function showInfo(country) {
  global.getData().then((data) => {
    global.getFlag().then((dataFlag) => {
      // console.log(country);
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
