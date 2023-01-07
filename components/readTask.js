import { createTask } from "./addTask.js";
import { uniqueDate, orderDates } from "../services/date.js";
import dateElemento from "./dateElement.js";

export const readTask = () => {
    const list = document.querySelector('[data-list]')
    const taskList = JSON.parse(localStorage.getItem('task')) || [];
    const dates = uniqueDate(taskList);

    orderDates(dates);
    dates.forEach(date => {
        const dateMoment = moment(date, 'DD/MM/YYYY');
        list.appendChild(dateElemento(date));
        taskList.forEach((task) => {
            const taskDate = moment(task.dateFormat, 'DD/MM/YYYY');
            const diff = dateMoment.diff(taskDate);
            if (diff == 0) {
                list.appendChild(createTask(task));
            }
        });
    });


}
