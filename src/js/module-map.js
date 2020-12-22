/* eslint-disable no-underscore-dangle */
/* eslint-disable guard-for-in */
/* eslint-disable no-undef */
/* eslint-disable no-restricted-syntax */
import globalConst from "./globalData";
import { map } from "./service-template";
import * as json from "./countries.json";

/* MODULE TEMPLATE START */
// moduleTemplates.map.innerHTML = ` Сюда пойдет фрэйм карты `;
export const mymap = L.map("mapid").setView([15, 0], 2);

L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  maxZoom: 18,
  id: "mapbox/dark-v10",
  tileSize: 512,
  zoomOffset: -1,
  accessToken: "pk.eyJ1IjoiYW5kcmVpeWEiLCJhIjoiY2tpcnBqeGFmMGUyZTJ6bjRzdnlycjRpcyJ9.X_IoWStY2eEjv2duSjMIiA",
}).addTo(mymap);
/* MODULE TEMPLATE END */

const renderMap = () => {
  for (const key in json) {
    if (json[key].latlng !== undefined) {
      for (const k in globalConst.dataAPI.countryList) {
        if (json[key].name === globalConst.dataAPI.countryList[k].Country) {
          const circle = L.circle(json[key].latlng, {
            color: "red",
            fillColor: "#f03",
            fillOpacity: 0.5,
            radius: globalConst.dataAPI.countryList[k].TotalConfirmed / 10,
          }).addTo(mymap);
        }
        if (json[key].name === globalConst.currentRegion.name
          && globalConst.currentRegion.name === globalConst.dataAPI.countryList[k].Country) {
          mymap.setView(json[key].latlng, 5);
          const popup = L.popup()
            .setLatLng(json[key].latlng)
            .setContent(`${globalConst.currentRegion.name}` + "<br/>" + "<p>New сonfirmed cases: " + ` ${globalConst.dataAPI.countryList[k].NewConfirmed}` + "</p>")
            .openOn(mymap);
        }
      }
    }
  }
};
async function getCountry(lat, lng) {
  const apiCountryUrl = `https://api.opencagedata.com/geocode/v1/json?key=1b5423d072234774beccddea5b1967b8&q=${lat}+${lng}&pretty=1&language=en`;
  const res = await fetch(apiCountryUrl);
  const data = await res.json();
  return data;
}

function onMapClick(e) {
  getCountry(e.latlng.lat, e.latlng.lng).then((data) => {
    globalConst.currentRegion._name = data.results[0].components.country;
  });
}

mymap.on("click", onMapClick);

// legend popup

const mapLegend = document.createElement("div");
mapLegend.className = "map__legend";
const legendNav = document.createElement("div");
legendNav.className = "legend__nav";
const legendTitle = document.createElement("div");
legendTitle.className = "legend__title";
const legendClose = document.createElement("div");
legendClose.className = "legend__close";
const legendConfirmed = document.createElement("div");
legendConfirmed.className = "legend__confirmed";
const legendRecovered = document.createElement("div");
legendRecovered.className = "legend__recovered";

legendTitle.textContent = "Map Legend";
legendClose.textContent = "X";

legendConfirmed.textContent = "Confirmed cases - red cicles";
legendRecovered.textContent = "Recovered cases - white cicles";

mapLegend.append(legendNav, legendConfirmed, legendRecovered);
legendNav.append(legendTitle, legendClose);

map.append(mapLegend);

mapLegend.addEventListener("click", (e) => {
  if (e.target === legendClose) {
    legendConfirmed.classList.toggle("none");
    legendRecovered.classList.toggle("none");
    mapLegend.classList.toggle("none");
  }
});

export default renderMap;
