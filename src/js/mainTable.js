/* eslint-disable no-console */
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

for (let i = 0; i < 6; i += 1) {
  const globalItem = document.createElement("div");
  const globalItemTitle = document.createElement("div");
  const globalItemData = document.createElement("div");

  globalItem.className = "global__item";
  globalItemData.className = "global__item-title";
  globalItemData.classList = "global__item-data";

  globalItemWrapper.append(globalItem);
  globalItem.append(globalItemTitle, globalItemData);
}

async function getData() {
  const apiCountryUrl = "https://api.covid19api.com/summary";
  const res = await fetch(apiCountryUrl);
  const data = await res.json();
  console.log(data);
  console.log(data.Date);
  lastUpdateData.textContent = data.Date;
}

getData();
