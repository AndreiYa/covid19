/* eslint-disable */

import renderMap from './module-map';
import renderMainTable from './module-mainTable';
import renderLocalTable from './module-localTable';
import renderChart from './module-chart';
import renderDate from './module-date';

const renderModules = [
    renderMap,
    renderMainTable,
    renderLocalTable,
    renderChart,
    renderDate
]

const renderAll = () => {
    renderModules.forEach((el) => el());
}

export default renderAll;