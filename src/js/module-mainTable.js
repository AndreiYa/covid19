/* eslint-disable */
import globalConst from './globalData';
import moduleTemplates from './service-template';


/* MODULE TEMPLATE START */
const casesInfo = document.createElement('div');
casesInfo.className = 'global-cases';
casesInfo.innerHTML = `
<h4 class="title-text">Global Cases</h4>
<span class="global-cases__count">72 948 590</span>
`
moduleTemplates.mainTable.appendChild(casesInfo);

const casesBy = document.createElement('div');
casesBy.className = 'cases-by';
casesBy.innerHTML = `
      <h4 class="title-text">Cases by Country/Region/Sovereignty</h4>
      `
moduleTemplates.mainTable.appendChild(casesBy);
const casesByList = document.createElement('ul');
casesByList.className = 'cases-by__list';
//li elements
casesByList.innerHTML = `
   <li class="cases-by__country country">
     <span class="country-count">16 520 083</span>
     <span class="country-name">US</span>
   </li>
   `
casesBy.appendChild(casesByList);
/* MODULE TEMPLATE END */


const renderMainTable = () => {
    console.log('mainTable: ', globalConst.dataAPI);
    casesInfo.innerHTML = `
        <h4 class="title-text">Global Cases</h4>
        <span class="global-cases__count">${globalConst.currentRegion.name}</span>
    `
}

export default renderMainTable;