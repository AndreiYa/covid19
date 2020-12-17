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
casesBy.appendChild(casesByList);

/* MODULE TEMPLATE END */

export function makeCountryList() {
    globalConst.dataAPI.countryList.forEach((el) => {
        const countryItem = document.createElement("li");
        const countryName = document.createElement("div");
        const countryStat = document.createElement("div");
        const countryFlag = document.createElement("div");

        countryItem.className = "country__item-wrapper";
        countryName.className = "country__item-name";
        countryStat.className = "country__item-stat";
        countryFlag.className = "country__item-flag";

        countryItem.setAttribute("country", el.Country);
        countryName.textContent = el.Country;
        countryStat.textContent = el.TotalConfirmed;

        casesByList.append(countryItem);
        countryItem.append(countryFlag, countryName, countryStat);

        globalConst.dataAPI.countryFlag.forEach((el) => {
            if (countryItem.getAttribute("country") === el.name) {
                countryFlag.style.background = `url("${el.flag}") center center/cover no-repeat`;
            }
        });
    });
    const country = document.querySelectorAll(".country__item-wrapper");
    country.forEach((item) => {
        item.addEventListener("click", (e) => {
            //const target = e.target.parentNode.getAttribute("country");
            //showInfo(target);
            globalConst.currentRegion._name = e.currentTarget.getAttribute('country');
        });
    });
}

export function renderMainTable() {
    console.log('mainTable: ', globalConst.dataAPI);
}