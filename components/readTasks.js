import { createTask } from './addTask.js';
import { uniqueDates } from '../services/date.js';
import dateElement from './dateElement.js';

export const displayTasks = () => {
  const list = document.querySelector('[data-list]');
  const tasksList = JSON.parse(localStorage.getItem('tasks')) || [];
  const dates = uniqueDates(tasksList);

  dates.forEach((date) => {
    const dateMoment = moment(date, 'DD/MM/YYYY');
    list.appendChild(dateElement(date));
    tasksList.forEach((task) => {
      const taskDate = moment(task.dateFormat, 'DD/MM/YYYY');
      const diff = dateMoment.diff(taskDate);
      if (diff === 0) {
        list.appendChild(createTask(task));
      }
    });
  });
};
