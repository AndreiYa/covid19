/* eslint-disable */
import moduleTemplates from './service-template';
import globalConst from "./globalData";

/* MODULE TEMPLATE START */
// moduleTemplates.header.innerHTML = `<span class="covid-logo material-icons"> coronavirus </span> COVID-19 Dashboard by BEST JS DEV TEAM`

const headerLogoWrapper = document.createElement("div");
headerLogoWrapper.className = "logo__wrapper";
const headerLogo = document.createElement("span");
headerLogo.className = "covid-logo material-icons";
headerLogo.textContent = "coronavirus";
const headerTitle = document.createElement("h4");
headerTitle.textContent = "COVID-19 Dashboard by BEST JS DEV TEAM";
const searchWrapper = document.createElement("div");
searchWrapper.className = "search__wrapper";
const searchInput = document.createElement("input");
searchInput.className = "search__input";
const searchBtn = document.createElement("div");
searchBtn.className = "search__btn";
searchBtn.textContent = "Search";

searchWrapper.append(searchInput, searchBtn);
headerLogoWrapper.append(headerLogo, headerTitle);
moduleTemplates.header.append(headerLogoWrapper, searchWrapper);

/* MODULE TEMPLATE END */
    
searchBtn.addEventListener("click", () => {
    console.log(searchInput.value);
    if (searchInput.value !== "") {
        let newStr = searchInput.value[0].toUpperCase() + searchInput.value.slice(1);
        globalConst.currentRegion._name = newStr;
    }
});