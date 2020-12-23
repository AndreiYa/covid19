<<<<<<< HEAD
/* eslint-disable import/no-cycle */
import globalConst from "./globalData";
import moduleTemplates from "./service-template";
=======
import globalConst from "./globalData";
import moduleTemplates from './service-template';
>>>>>>> 4a6eec1b5c2eecc757dc94d87fef3718d01c9fef

/* MODULE TEMPLATE START */
moduleTemplates.date.textContent = "Last Updated at";
const dateTimeBlock = document.createElement("time");
dateTimeBlock.setAttribute("datetime", "<дата и время>");
dateTimeBlock.innerHTML = "Date";
moduleTemplates.date.appendChild(dateTimeBlock);
/* MODULE TEMPLATE END */

const renderDate = () => {
<<<<<<< HEAD
  dateTimeBlock.innerHTML = `${globalConst.dataAPI.lastUpdate}`;
};
=======
    dateTimeBlock.innerHTML = `${globalConst.dataAPI.lastUpdate}`
}
>>>>>>> 4a6eec1b5c2eecc757dc94d87fef3718d01c9fef

export default renderDate;
