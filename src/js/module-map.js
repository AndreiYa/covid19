/* eslint-disable */
import globalConst from "./globalData";

import moduleTemplates from './service-template';


/* MODULE TEMPLATE START */
moduleTemplates.map.innerHTML = ` Сюда пойдет фрэйм карты `;
/* MODULE TEMPLATE END */

const renderMap = () => {
    console.log('map: ', globalConst.currentRegion.name);
    moduleTemplates.map.innerHTML = ` ${globalConst.currentRegion.name} `;
}

export default renderMap;