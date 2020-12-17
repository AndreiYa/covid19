/* eslint-disable no-restricted-syntax */
/* eslint-disable no-unused-vars */
/* eslint-disable guard-for-in */
import * as global from "./globalData";
import showInfo from "./descr";

const countryListWrapper = document.createElement("div");
countryListWrapper.className = "country__wrapper";
document.body.append(countryListWrapper);

function makeCountryList() {
  global.getFlag().then((dataFlag) => {
    // console.log(dataFlag)
    global.getData().then((data) => {
      // console.log(data)
      for (const key in data.Countries) {
        const countryItem = document.createElement("div");
        const countryName = document.createElement("div");
        const countryStat = document.createElement("div");
        const countryFlag = document.createElement("div");

        countryItem.className = "country__item-wrapper";
        countryName.className = "country__item-name";
        countryStat.className = "country__item-stat";
        countryFlag.className = "country__item-flag";

        countryItem.setAttribute("country", data.Countries[key].Country);
        countryName.textContent = data.Countries[key].Country;
        countryStat.textContent = data.Countries[key].TotalConfirmed;

        countryListWrapper.append(countryItem);
        countryItem.append(countryFlag, countryName, countryStat);
      
        for (const k in dataFlag) {
          if (countryItem.getAttribute("country") === dataFlag[k].name) {
            countryFlag.style.background = `url("${dataFlag[k].flag}") center center/cover no-repeat`;
          }
        }
      }
      const country = document.querySelectorAll(".country__item-wrapper");
      country.forEach((item) => {
        item.addEventListener("click", (e) => {
          const target = e.target.parentNode.getAttribute("country");
          showInfo(target);
        });
      });
    });
  });
}
makeCountryList();
