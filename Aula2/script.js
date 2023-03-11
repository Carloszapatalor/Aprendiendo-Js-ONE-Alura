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
    const content = 
    `
    <div>
        <i class="far fa-check-square icon"></i>
            <span class="task">${value}</span> 
    </div>
        <i class="fas fa-trash-alt trashIcon icon"></i>
    `;

    task.innerHTML = content;
    list.appendChild(task); //appendChild agrega un elemento hijo al padre
    console.log(content);

};


btn.addEventListener('click', createTask);
