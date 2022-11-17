//este archivo va a leer las tareas almacenadas y mostrarlas en pantalla al abrir la página
import { createTask } from "./taskList.js";
export const readTasks = () =>{

    //accedemos al ul del index que nos permite agregar las tareas almacenadas
    const list = document.querySelector('[data-list]');
    console.log(list)

    //entramos a localStorage y buscamos la llave "tasks" q almacena nuestras tareas
    //si viene vacio (nulo) que tenga el valor de un array vacio
    const taskList = JSON.parse(localStorage.getItem("tasks")) || []; 

    //console.log(taskList)

    //recorremos ese array de tareas "taskList"
    //esta funcion anonima usando forEach, separan los elementos del array en objetos  
    taskList.forEach((task) => {
        //console.log(createTask(task))

        //para cada task la pasamos a la lista que contiene la tarea
        //a la ul le pasamos la task que contiene los array con informacion
        list.appendChild(createTask(task))
        
    }); 


}