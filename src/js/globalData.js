/* eslint-disable no-underscore-dangle */
/* eslint-disable no-use-before-define */
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-cycle */
import renderAll from "./service-renderContent";
<<<<<<< HEAD
import * as mainTable from "./module-mainTable";
import moduleTemplates from "./service-template";

const globalConst = {
  currentRegion: {
    name: undefined,
    set _name(value) {
      this.name = value;
      renderAll();
    },
  },
  currentInfoType: {
    name: {
      name: "TotalConfirmed",
      color: "orange",
    },
    set _name(value) {
      this.name = value;
      renderAll();
    },
  },
  currentChartType: "Confirmed",
  dataAPI: {
    lastUpdate: [],
    totalInfo: {},
    countryList: [],
    countryFlag: [],
    countryNames: [],
  },
=======
import * as mainTable from './module-mainTable';
import moduleTemplates from "./service-template";

const globalConst = {
    currentRegion: {
        name: undefined,
        set _name(value) {
            this.name = value;
            renderAll();
        }
    },
    currentInfoType: {
        name: {
            name: "TotalConfirmed",
            color: "orange"
        },
        set _name(value) {
            this.name = value;
            renderAll();
        }
    },
    currentChartType: "Confirmed",
    dataAPI: {
        lastUpdate: [],
        totalInfo: {},
        countryList: [],
        countryFlag: [],
        countryNames: [],
    }
>>>>>>> 4a6eec1b5c2eecc757dc94d87fef3718d01c9fef
};

export async function getData() {
  const apiCountryUrl = "https://api.covid19api.com/summary";
  const res = await fetch(apiCountryUrl);
  const data = await res.json();
  return data;
}

getData().then((data) => {
<<<<<<< HEAD
  for (const key in data.Global) {
    globalConst.dataAPI.totalInfo[key] = data.Global[key];
  }
  for (const key in data.Countries) {
    globalConst.dataAPI.countryList[key] = data.Countries[key];
    globalConst.dataAPI.countryNames.push(data.Countries[key].Country);
  }
  globalConst.dataAPI.lastUpdate = data.Date;

  getFlag().then((dataFlag) => {
    for (const key in dataFlag) {
      globalConst.dataAPI.countryFlag[key] = dataFlag[key];
=======
    for (const key in data.Global) {
        globalConst.dataAPI.totalInfo[key] = data.Global[key];
    }
    for (const key in data.Countries) {
        globalConst.dataAPI.countryList[key] = data.Countries[key];
        globalConst.dataAPI.countryNames.push(data.Countries[key].Country);
>>>>>>> 4a6eec1b5c2eecc757dc94d87fef3718d01c9fef
    }

<<<<<<< HEAD
    globalConst.currentRegion._name = undefined;
    setTimeout(() => {
      if (globalConst.dataAPI.totalInfo.TotalConfirmed === 0) {
        moduleTemplates.loading.style.backgroundImage = "none";
        moduleTemplates.loading.textContent = "Oops!\n API сломался... Попробуйте позже!";
      } else moduleTemplates.loading.style.display = "none";
    }, 2000);
  })
    .catch((err) => {
      moduleTemplates.loading.style.backgroundImage = "none";
      moduleTemplates.loading.textContent = "Oops!\n Проблемы с API. Попробуйте позже!";
    });
  // need add sort func
  // mainTable.makeCountryList();
})
  .catch((err) => {
    moduleTemplates.loading.style.backgroundImage = "none";
    moduleTemplates.loading.textContent = "Oops!\n Проблемы с API. Попробуйте позже!";
  });
=======
    getFlag().then((dataFlag) => {

            for (const key in dataFlag) {
                globalConst.dataAPI.countryFlag[key] = dataFlag[key];
            }

            globalConst.currentRegion._name = undefined;
            setTimeout(() => {
                if (globalConst.dataAPI.totalInfo.TotalConfirmed === 0) {
                    moduleTemplates.loading.style.backgroundImage = 'none';
                    moduleTemplates.loading.textContent = `Oops!\n API сломался... Попробуйте позже!`;
                }
                else moduleTemplates.loading.style.display = "none";
            }, 2000);
        })
        .catch(err => {
            moduleTemplates.loading.style.backgroundImage = 'none';
            moduleTemplates.loading.textContent = `Oops!\n ${err}`;
        });
    //need add sort func
    //mainTable.makeCountryList();
})
.catch(err => {
    moduleTemplates.loading.style.backgroundImage = 'none';
    moduleTemplates.loading.textContent = `Oops!\n ${err}`;
});;
>>>>>>> 4a6eec1b5c2eecc757dc94d87fef3718d01c9fef

export async function getFlag() {
  const apiCountryFlag = "https://restcountries.eu/rest/v2/all?fields=name;population;flag";
  const resFlag = await fetch(apiCountryFlag);
  const dataFlag = await resFlag.json();

  return dataFlag;
}

<<<<<<< HEAD
export default globalConst;
=======
export default globalConst;
>>>>>>> 4a6eec1b5c2eecc757dc94d87fef3718d01c9fef
