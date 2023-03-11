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
    taskContent = document.createElement("div");
    taskContent.appendChild(checkComplete());
    const titleTask = document.createElement("span");
    titleTask.classList.add("task");
    titleTask.innerText=value;
    taskContent.appendChild(titleTask);
    const content = 
    `
    
        ${checkComplete()}
            <span class="task">${value}</span> 
    
        <i class="fas fa-trash-alt trashIcon icon"></i>
    `;

    //task.innerHTML = content;
    task.appendChild(taskContent);
    list.appendChild(task); //appendChild agrega un elemento hijo al padre
    console.log(content);

};


btn.addEventListener('click', createTask);

const checkComplete = () => {
    const i = document.createElement ("i"); // Donde i es el elemento
    i.classList.add("far", "fa-check-square", "icon"); 
    i.addEventListener('click', completeTask); 
    return i;
};

const completeTask = (event) =>{
    const element = event.target;
    element.classList.toggle('fas');
    element.classList.toggle("completeIcon");
    element.classList.remove ('far');

    
};
})();