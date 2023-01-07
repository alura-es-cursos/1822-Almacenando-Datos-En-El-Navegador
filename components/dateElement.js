export default (date) => {
    const dateElemento = document.createElement('li');
    dateElemento.classList.add('date');
    dateElemento.innerHTML = date;
    return dateElemento;
};