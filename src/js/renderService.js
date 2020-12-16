/* eslint-disable */

import renderMap from "./MapModule";
import renderMainTable from "./mainTable";

const renderModules = [
    renderMap,
    renderMainTable
]

const renderAll = () => {
    renderModules.forEach((el) => el());
}

export default renderAll;