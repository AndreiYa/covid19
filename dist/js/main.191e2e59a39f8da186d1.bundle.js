(globalThis.webpackChunkwebpack5=globalThis.webpackChunkwebpack5||[]).push([[179],{824:(e,t,n)=>{"use strict";var a=n(379),o=n.n(a),r=n(463),c={insert:"head",singleton:!1};o()(r.Z,c);r.Z.locals;const s=document.body,l=document.createElement("header");l.id="pageHeader",s.appendChild(l);const i=document.createElement("div");i.id="cases",s.appendChild(i);const d=document.createElement("div");d.id="map",s.appendChild(d);const u=document.createElement("div");u.id="global",s.appendChild(u);const m=document.createElement("div");m.id="date",s.appendChild(m);const p=document.createElement("div");p.id="schedule",s.appendChild(p);const f=document.createElement("footer");f.id="pageFooter",s.appendChild(f);const h={header:l,mainTable:i,map:d,localTable:u,date:m,chart:p,footer:f};h.map.innerHTML=" Сюда пойдет фрэйм карты ";const v=()=>{console.log("map: ",se.currentRegion.name),h.map.innerHTML=` ${se.currentRegion.name} `},g={modes:["Cases","Deaths","Recovered"],unit:!1,last:!1,currentMode:{mode:0,set _mode(e){var t;this.mode=e,t=this.mode,k.style.transform=`translateX(-${33.33*t}%)`,_.textContent=`${g.modes[t]} (${se.currentRegion.name?se.currentRegion.name:"global"})`}}},b=document.createElement("div");b.className="global-info-select";const y=document.createElement("div"),C=document.createElement("span");C.className="select-title",C.textContent="Per 100K",y.append(C);const E=document.createElement("label");E.className="switch";const I=document.createElement("input");I.addEventListener("change",(function(e){g.unit=e.currentTarget.checked,z()})),I.setAttribute("type","checkbox"),E.append(I);const N=document.createElement("span");N.className="slider",E.append(N),y.append(E),b.append(y);const x=document.createElement("div"),A=document.createElement("span");A.className="select-title",A.textContent="Last day",x.append(A);const T=document.createElement("label");T.className="switch";const w=document.createElement("input");w.addEventListener("change",(function(e){g.last=e.currentTarget.checked,z()})),w.setAttribute("type","checkbox"),T.append(w);const M=document.createElement("span");M.className="slider",T.append(M),x.append(T),b.append(x),h.localTable.append(b);const R=document.createElement("div");R.className="global-info",h.localTable.append(R);const L=document.createElement("div");L.className="global-info-changer";const P=document.createElement("span");P.id="changer-left",P.className="changer material-icons",P.textContent="navigate_before",L.append(P),P.addEventListener("click",(()=>{J(-1)}));const _=document.createElement("div");_.id="changer-info",L.append(_);const $=document.createElement("span");$.id="changer-right",$.className="changer material-icons",$.textContent="navigate_next",L.append($),$.addEventListener("click",(()=>{J(1)})),h.localTable.appendChild(L);const k=document.createElement("div");k.className="global-info-inner";const S=document.createElement("div");S.className="global-info-box";const j=document.createElement("div");j.className="global-info-header",j.textContent="Global Cases";const H=document.createElement("span");H.className="header-num",H.textContent="...",j.append(H),S.append(j);const D=document.createElement("div");S.append(D),k.append(S);const U=document.createElement("div");U.className="global-info-box";const O=document.createElement("div");O.className="global-info-header",O.textContent="Global Deaths";const F=document.createElement("span");F.className="header-num",F.textContent="...",O.append(F),U.append(O);const K=document.createElement("div");U.append(K),k.append(U);const G=document.createElement("div");G.className="global-info-box";const B=document.createElement("div");B.className="global-info-header",B.textContent="Global Recovered";const Z=document.createElement("span");Z.className="header-num",Z.textContent="...",B.append(Z),G.append(B);const q=document.createElement("div");function J(e){g.currentMode.mode+e>2?g.currentMode._mode=0:g.currentMode.mode+e<0?g.currentMode._mode=2:g.currentMode._mode=g.currentMode.mode+e}function X(e,t,n){t.textContent="";const a=document.createElement("ul");if(e){const t=se.dataAPI.countryList;for(let o=0;o<t.length;o+=1)if(t[o].Country===e){const e=`${g.last?"New":"Total"}${n}`,r=document.createElement("li");r.className="country-details-li country-details-last",r.textContent=`${t[o].Country} - ${g.unit?t[o][e]/1e5:t[o][e]}`,a.append(r);break}}else se.dataAPI.countryList.forEach(((e,t)=>{const o=`${g.last?"New":"Total"}${n}`,r=document.createElement("li");r.className="country-details-li",t===se.dataAPI.countryList.length-1&&r.classList.add("country-details-last"),r.textContent=`${e.Country} - ${g.unit?e[o]/1e5:e[o]}`,a.append(r)}));t.append(a)}G.append(q),k.append(G),R.append(k);const z=()=>{_.textContent=`${g.modes[g.currentMode.mode]} (${se.currentRegion.name?se.currentRegion.name:"global"})`,g.last?g.unit?(H.textContent=`${Math.round(se.dataAPI.totalInfo.NewConfirmed/1e5)} per 100K`,F.textContent=Math.round(se.dataAPI.totalInfo.NewDeaths/1e3)/100+" per 100K",Z.textContent=`${Math.round(se.dataAPI.totalInfo.NewRecovered/1e5)} per 100K`):(H.textContent=se.dataAPI.totalInfo.NewConfirmed,F.textContent=se.dataAPI.totalInfo.NewDeaths,Z.textContent=se.dataAPI.totalInfo.NewRecovered):g.unit?(H.textContent=`${Math.round(se.dataAPI.totalInfo.TotalConfirmed/1e5)} per 100K`,F.textContent=`${Math.round(se.dataAPI.totalInfo.TotalDeaths/1e5)} per 100K`,Z.textContent=`${Math.round(se.dataAPI.totalInfo.TotalRecovered/1e5)} per 100K`):(H.textContent=se.dataAPI.totalInfo.TotalConfirmed,F.textContent=se.dataAPI.totalInfo.TotalDeaths,Z.textContent=se.dataAPI.totalInfo.TotalRecovered),X(se.currentRegion.name,D,"Confirmed"),X(se.currentRegion.name,K,"Deaths"),X(se.currentRegion.name,q,"Recovered")},Q=z,V=document.createElement("div");V.className="schedule-place",V.innerHTML="API schedule",h.chart.appendChild(V);const W=()=>{console.log("chart: ",se.currentRegion.name),V.innerHTML=`${se.currentRegion.name}`},Y=document.createElement("time");Y.setAttribute("datetime","<дата и время>"),Y.innerHTML="Date",h.date.appendChild(Y);const ee=()=>{console.log("date: ",se.currentRegion.name),Y.innerHTML=`${se.dataAPI.lastUpdate}`},te=document.createElement("div");te.className="global-cases",te.innerHTML='\n<h4 class="title-text">Global Cases</h4>\n<span class="global-cases__count">72 948 590</span>\n',h.mainTable.appendChild(te);const ne=document.createElement("div");ne.className="cases-by",ne.innerHTML='\n      <h4 class="title-text">Cases by Country/Region/Sovereignty</h4>\n      ',h.mainTable.appendChild(ne);const ae=document.createElement("ul");ae.className="cases-by__list",ne.appendChild(ae);const oe=[v,function(){console.log("mainTable: ",se.dataAPI)},Q,W,ee],re=()=>{oe.forEach((e=>e()))},ce={currentRegion:{name:void 0,get _name(){return console.log("getter!"),this.name},set _name(e){console.log("setter!"),this.name=e,re()}},dataAPI:{lastUpdate:[],totalInfo:{},countryList:[],countryFlag:[]}};(async function(){const e=await fetch("https://api.covid19api.com/summary");return await e.json()})().then((e=>{for(const t in e.Global)ce.dataAPI.totalInfo[t]=e.Global[t];for(const t in e.Countries)ce.dataAPI.countryList[t]=e.Countries[t];ce.dataAPI.lastUpdate=e.Date,ce.currentRegion._name=void 0,se.dataAPI.countryList.forEach((e=>{const t=document.createElement("li"),n=document.createElement("div"),a=document.createElement("div"),o=document.createElement("div");t.className="country__item-wrapper",n.className="country__item-name",a.className="country__item-stat",o.className="country__item-flag",t.setAttribute("country",e.Country),n.textContent=e.Country,a.textContent=e.TotalConfirmed,ae.append(t),t.append(o,n,a),se.dataAPI.countryFlag.forEach((e=>{t.getAttribute("country")===e.name&&(o.style.background=`url("${e.flag}") center center/cover no-repeat`)}))})),document.querySelectorAll(".country__item-wrapper").forEach((e=>{e.addEventListener("click",(e=>{se.currentRegion._name=e.currentTarget.getAttribute("country")}))}))})),async function(){const e=await fetch("https://restcountries.eu/rest/v2/all?fields=name;population;flag");return await e.json()}().then((e=>{for(const t in e)ce.dataAPI.countryFlag[t]=e[t]})).catch((e=>{console.log("Oops!: ",e)}));const se=ce;h.header.innerHTML="Header",h.footer.innerHTML="Footer"},463:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var a=n(15),o=n.n(a),r=n(645),c=n.n(r)()(o());c.push([e.id,"","",{version:3,sources:[],names:[],mappings:"",sourceRoot:""}]);const s=c},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,a){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(a)for(var r=0;r<this.length;r++){var c=this[r][0];null!=c&&(o[c]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);a&&o[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),t.push(l))}},t}},15:e=>{"use strict";function t(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],a=!0,o=!1,r=void 0;try{for(var c,s=e[Symbol.iterator]();!(a=(c=s.next()).done)&&(n.push(c.value),!t||n.length!==t);a=!0);}catch(e){o=!0,r=e}finally{try{a||null==s.return||s.return()}finally{if(o)throw r}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return n(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}e.exports=function(e){var n=t(e,4),a=n[1],o=n[3];if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(o)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),s="/*# ".concat(c," */"),l=o.sources.map((function(e){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(e," */")}));return[a].concat(l).concat([s]).join("\n")}return[a].join("\n")}},379:(e,t,n)=>{"use strict";var a,o=function(){return void 0===a&&(a=Boolean(window&&document&&document.all&&!window.atob)),a},r=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),c=[];function s(e){for(var t=-1,n=0;n<c.length;n++)if(c[n].identifier===e){t=n;break}return t}function l(e,t){for(var n={},a=[],o=0;o<e.length;o++){var r=e[o],l=t.base?r[0]+t.base:r[0],i=n[l]||0,d="".concat(l," ").concat(i);n[l]=i+1;var u=s(d),m={css:r[1],media:r[2],sourceMap:r[3]};-1!==u?(c[u].references++,c[u].updater(m)):c.push({identifier:d,updater:v(m,t),references:1}),a.push(d)}return a}function i(e){var t=document.createElement("style"),a=e.attributes||{};if(void 0===a.nonce){var o=n.nc;o&&(a.nonce=o)}if(Object.keys(a).forEach((function(e){t.setAttribute(e,a[e])})),"function"==typeof e.insert)e.insert(t);else{var c=r(e.insert||"head");if(!c)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");c.appendChild(t)}return t}var d,u=(d=[],function(e,t){return d[e]=t,d.filter(Boolean).join("\n")});function m(e,t,n,a){var o=n?"":a.media?"@media ".concat(a.media," {").concat(a.css,"}"):a.css;if(e.styleSheet)e.styleSheet.cssText=u(t,o);else{var r=document.createTextNode(o),c=e.childNodes;c[t]&&e.removeChild(c[t]),c.length?e.insertBefore(r,c[t]):e.appendChild(r)}}function p(e,t,n){var a=n.css,o=n.media,r=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),r&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleSheet)e.styleSheet.cssText=a;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(a))}}var f=null,h=0;function v(e,t){var n,a,o;if(t.singleton){var r=h++;n=f||(f=i(t)),a=m.bind(null,n,r,!1),o=m.bind(null,n,r,!0)}else n=i(t),a=p.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return a(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;a(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=l(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var a=0;a<n.length;a++){var o=s(n[a]);c[o].references--}for(var r=l(e,t),i=0;i<n.length;i++){var d=s(n[i]);0===c[d].references&&(c[d].updater(),c.splice(d,1))}n=r}}}}},0,[[824,666]]]);