/* eslint-disable */

import renderAll from "./service-renderContent";
import * as mainTable from './module-mainTable';

const globalConst = {
    currentRegion: {
        name: undefined,
        get _name() {
            console.log('getter!');
            return this.name;
        },
        set _name(value) {
            console.log('setter!');
            this.name = value;
            renderAll();
        }
    },
    dataAPI: {
        lastUpdate: [],
        totalInfo: {},
        countryList: [],
        countryFlag: [],
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
    }
    globalConst.dataAPI.lastUpdate = data.Date;
    globalConst.currentRegion._name = undefined;
    //need add sort func
    mainTable.makeCountryList();
});

export async function getFlag() {
    const apiCountryFlag = "https://restcountries.eu/rest/v2/all?fields=name;population;flag";
    const resFlag = await fetch(apiCountryFlag);
    const dataFlag = await resFlag.json();

    return dataFlag;
}

getFlag().then((dataFlag) => {
        for (const key in dataFlag) {
            // console.log(dataFlag[key])
            globalConst.dataAPI.countryFlag[key] = dataFlag[key];
        }
    })
    .catch(err => {
        console.log('Oops!: ', err);
    });

export default globalConst;