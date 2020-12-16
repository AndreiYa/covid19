/* eslint-disable import/prefer-default-export */
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
/* eslint-disable no-console */
export async function getData() {
  const apiCountryUrl = "https://api.covid19api.com/summary";
  const res = await fetch(apiCountryUrl);
  const data = await res.json();

  return data;
}

export async function getFlag() {
  const apiCountryFlag = "https://restcountries.eu/rest/v2/all?fields=name;population;flag";
  const resFlag = await fetch(apiCountryFlag);
  const dataFlag = await resFlag.json();
  
  return dataFlag;
}

function globalDomElement() {
  const globalData = document.createElement("div");
  globalData.className = "global__data";
  document.body.append(globalData);

  const globalTitle = document.createElement("h3");
  globalTitle.className = "global__title";
  globalData.append(globalTitle);
  globalTitle.textContent = "Global Statistic";

  const globalItemWrapper = document.createElement("div");
  globalItemWrapper.className = "global__item-wrapper";
  globalData.append(globalItemWrapper);

  const lastUpdate = document.createElement("div");
  const lastUpdateTitle = document.createElement("div");
  const lastUpdateData = document.createElement("div");
  lastUpdate.className = "last__update-wrapper";
  lastUpdateData.className = "last__update-data";
  lastUpdateTitle.className = "last__update-title";
  lastUpdateTitle.textContent = "Last Update";
  document.body.append(lastUpdate);
  lastUpdate.append(lastUpdateTitle, lastUpdateData);
  getData().then((data) => {
    lastUpdateData.textContent = data.Date;
  });
}

globalDomElement();

function makeGlobalData() {
  getData().then((data) => {
    for (const key in data.Global) {
      const globalItem = document.createElement("div");
      const globalItemTitle = document.createElement("div");
      const globalItemData = document.createElement("div");

      globalItem.className = "global__item";
      globalItemTitle.className = "global__item-title";
      globalItemData.className = "global__item-data";

      globalItemTitle.textContent = key;
      globalItemData.textContent = data.Global[key];

      const globalItemWrapper = document.querySelector(".global__item-wrapper");
      globalItemWrapper.append(globalItem);
      globalItem.append(globalItemTitle, globalItemData);
    }
  });
}

makeGlobalData();
