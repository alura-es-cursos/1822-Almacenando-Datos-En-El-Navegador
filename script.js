//ahora este archivo solo escucha el boton y manda a llamar una funcion cada vez que es presionado

import { addTask } from "./components/taskList.js";
import { readTasks } from "./components/readTasks.js";

const btn = document.querySelector('[data-form-btn]');


//btn.addEventListener('click', createTask); esto lo modificamos con arrow function addTask. ya no crea la task, la agrega
btn.addEventListener('click', addTask);

//aquí mandamos a llamar la función que devulve el contenido del array a la pantalla.
readTasks();