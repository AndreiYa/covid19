/* eslint-disable */

import renderAll from "./service-renderContent";
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
    dataAPI: {
        lastUpdate: [],
        totalInfo: {},
        countryList: [],
        countryFlag: [],
        countryNames: [],
    }
};

export async function getData() {
    const apiCountryUrl = "https://api.covid19api.com/summary";
    const res = await fetch(apiCountryUrl);
    const data = await res.json();
    return data;
};

getData().then((data) => {
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
            }

            globalConst.currentRegion._name = undefined;
            setTimeout(() => {
                moduleTemplates.loading.style.display = "none";
            }, 2000);
        })
        .catch(err => {
            console.log('Oops!: ', err);
            moduleTemplates.loading.style.backgroundImage = 'none';
            moduleTemplates.loading.textContent = `Oops!\n ${err}`;
        });
    //need add sort func
    //mainTable.makeCountryList();
})
.catch(err => {
    console.log('Oops!: ', err);
    moduleTemplates.loading.style.backgroundImage = 'none';
    moduleTemplates.loading.textContent = `Oops!\n ${err}`;
});;

export async function getFlag() {
    const apiCountryFlag = "https://restcountries.eu/rest/v2/all?fields=name;population;flag";
    const resFlag = await fetch(apiCountryFlag);
    const dataFlag = await resFlag.json();

    return dataFlag;
}

export default globalConst;