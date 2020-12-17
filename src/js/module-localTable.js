/* eslint-disable */
import globalConst from "./globalData";

import moduleTemplates from './service-template';


/* MODULE TEMPLATE START */
const globalInfo = document.createElement('div');
globalInfo.className = 'global-info';
moduleTemplates.localTable.appendChild(globalInfo);

//Deaths
const globalDeaths = document.createElement('div');
globalDeaths.className = 'global-deaths';
globalDeaths.innerHTML = `
      <h4 class="title-text">Global Cases</h4>
      <span class="global-cases__count">72 948 590</span>
      `
globalInfo.appendChild(globalDeaths)
const globalDeathList = document.createElement('ul');
globalDeathList.className = 'global-death__list';
globalDeathList.innerHTML = `
      <li class="global-death__country">
        <span class="global-death-count">16 520 083</span>
        <span class="global-death-name">US</span>
      </li>
      `
globalDeaths.appendChild(globalDeathList)

//Recovered
const globalRecovered = document.createElement('div');
globalRecovered.className = 'global-recovered';
globalRecovered.innerHTML = `
      <h4 class="title-text">Global Recovered</h4>
      <span class="global-recovered__count">41 339 537</span>
      `
globalInfo.appendChild(globalRecovered);
const globalRecoveredList = document.createElement('ul');
globalRecoveredList.className = 'global-recovered__list';
globalRecoveredList.innerHTML = `
      <li class="global-recovered__country">
        <span class="global-recovered-count">16 520 083</span>
        <span class="global-recovered-name">US</span>
      </li>
      `
globalRecovered.appendChild(globalRecoveredList);
/* MODULE TEMPLATE END */

const renderLocalTable = () => {
    //if we use append => we should remove childs
    console.log('localTable: ', globalConst.currentRegion.name);
    globalDeathList.innerHTML = `
      <li class="global-death__country">
        <span class="global-death-count">${globalConst.currentRegion.name}</span>
      </li>
      `
    globalRecoveredList.innerHTML = `
      <li class="global-recovered__country">
        <span class="global-recovered-count">${globalConst.currentRegion.name}</span>
      </li>
      `
}

export default renderLocalTable;