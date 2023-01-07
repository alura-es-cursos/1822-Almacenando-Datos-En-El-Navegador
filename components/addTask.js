import checkComplete from "./checkComplete.js";
import deleteIcon from "./deleteIcon.js";
import { readTask } from "./readTask.js";

export const addTask = (evento) => {
    evento.preventDefault();

    const list = document.querySelector("[data-list]");
    const input = document.querySelector("[data-form-input]");
    const calendar = document.querySelector("[data-form-date]");

    const value = input.value;
    const date = calendar.value;
    const dateFormat = moment(date).format("DD/MM/YYYY");

    if (value == '' || date == '') {
        return
    }

    input.value = "";
    calendar.value = '';
    list.innerHTML = '';

    const completo = false;
    const taskObjeto = {
        value,
        dateFormat,
        completo,
        id: uuid.v4()
    }

    const taskList = JSON.parse(localStorage.getItem('task')) || [];
    taskList.push(taskObjeto);
    localStorage.setItem("task", JSON.stringify(taskList));
    readTask();
};

export const createTask = ({ value, dateFormat, completo, id }) => {
    const task = document.createElement("li");
    task.classList.add("card");

    const taskContent = document.createElement("div");
    const check = checkComplete(id)
    if (completo) {
        check.classList.toggle('fas');
        check.classList.toggle('completeIcon');
        check.classList.toggle('far');
    }
    const titleTask = document.createElement("span");
    titleTask.classList.add("task");
    titleTask.innerText = value;
    taskContent.appendChild(check);
    taskContent.appendChild(titleTask);

    const dateElemento = document.createElement("span");
    dateElemento.innerHTML = dateFormat;
    task.appendChild(taskContent);
    task.appendChild(dateElemento);
    task.appendChild(deleteIcon(id));

    return task;
};