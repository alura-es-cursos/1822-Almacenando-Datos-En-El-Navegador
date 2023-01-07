import { readTask } from "./readTask.js";
const deleteIcon = (id) => {
  const i = document.createElement('i');
  i.classList.add('far', 'fa-trash-alt', 'trashIcon', 'icon');
  i.addEventListener('click', () => deleteTask(id));
  return i;
};

const deleteTask = (id) => {
  const li = document.querySelector('[data-list]');
  li.innerHTML = '';
  const task = JSON.parse(localStorage.getItem('task'));
  const index = task.findIndex((item) => item.id == id);
  task.splice(index, 1);
  localStorage.setItem('task', JSON.stringify(task))
  readTask();

};

export default deleteIcon;
