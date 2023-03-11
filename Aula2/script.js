import deleteIcon from "./deleteIcon.js";
import checkComplete from "./checkComplete.js";


( () => {
    const btn = document.querySelector("[data-form-btn]");
/*
//Arrow funtion o funciones anonimas son representadas con una =>
btn.addEventListener("click", (evento) => {
    evento.preventDefault();
    const input = document.querySelector("[data-form-input]");
    console.log(input.value);
});

*/

//

const createTask = evento => {
    evento.preventDefault();
    const input = document.querySelector('[data-form-input]');
    const value = input.value;
    const list = document.querySelector("[data-list]"); //padre  //el data es  un identificador
    const task = document.createElement('li'); //hijo
    task.classList.add("card"); //Agrega una clase de css a un elemento

    input.value= "";
    //backticks  | el ${} es una plantilla
    const taskContent = document.createElement("div");
    taskContent.appendChild(checkComplete());
    const titleTask = document.createElement("span");
    titleTask.classList.add("task");
    titleTask.innerText=value;
    taskContent.appendChild(titleTask);

    //task.innerHTML = content;
    task.appendChild(taskContent);
    task.appendChild(deleteIcon());
    list.appendChild(task); //appendChild agrega un elemento hijo al padre

};


btn.addEventListener('click', createTask);


})();