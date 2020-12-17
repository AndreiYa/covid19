/* eslint-disable */
import globalConst from "./globalData";

import moduleTemplates from './service-template';


/* MODULE TEMPLATE START */
const dateTimeBlock = document.createElement('time');
dateTimeBlock.setAttribute('datetime', '<дата и время>');
dateTimeBlock.innerHTML = `Date`
moduleTemplates.date.appendChild(dateTimeBlock);
/* MODULE TEMPLATE END */

const renderDate = () => {
    console.log('date: ', globalConst.currentRegion.name);
    dateTimeBlock.innerHTML = `${globalConst.dataAPI.lastUpdate}`
}

export default renderDate;