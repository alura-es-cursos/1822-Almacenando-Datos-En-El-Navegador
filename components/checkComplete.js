const checkComplete = (id) => {
  const i = document.createElement('i');
  i.classList.add('far', 'fa-check-square', 'icon');
<<<<<<< HEAD
  i.addEventListener('click', (event) => completeTask(event, id));
=======
  i.addEventListener('click',(event) => completeTask(event, id));
>>>>>>> projectoInicial
  return i;
};
// Immediately invoked function expression IIFE
const completeTask = (event, id) => {
  const element = event.target;
  element.classList.toggle('fas');
  element.classList.toggle('completeIcon');
  element.classList.toggle('far');
<<<<<<< HEAD
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  const index = tasks.findIndex((item) => item.id === id);
  tasks[index]['complete'] = !tasks[index]['complete'];
  localStorage.setItem('tasks', JSON.stringify(tasks));
=======
  console.log('id check', id)
  const tasks = JSON.parse(localStorage.getItem("tasks"));
  const index = tasks.findIndex(item => item.id == id);
  console.log(index);
  tasks[index]["complete"] = !tasks[index]["complete"];
  localStorage.setItem("tasks", JSON.stringify(tasks));
>>>>>>> projectoInicial
};

export default checkComplete;
