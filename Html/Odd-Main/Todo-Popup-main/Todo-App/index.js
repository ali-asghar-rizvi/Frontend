var todoInput = document.querySelector(".todo-input");
var todoSubmit = document.querySelector(".todo-submit");
var todoList = document.querySelector(".todo-list");


let addTodo = (e) => {

    e.preventDefault()

    // creating todoDiv //
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todoDiv");

    // creating LI //
    const todoLi = document.createElement("li");
    todoLi.innerText = todoInput.value;
    todoLi.classList.add("todoLi");

    // Todo AppendChild //
    todoDiv.appendChild(todoLi);

    // Check Button //
    const completeButton = document.createElement("button");
    completeButton.innerHTML = `<i class="fas fa-check"></i>`;
    completeButton.classList.add("completeButton");
    todoDiv.appendChild(completeButton);

    // Check Button //
    const trashButton = document.createElement("button");
    trashButton.innerHTML = `<i class="fas fa-trash"></i>`;
    trashButton.classList.add("trashButton");
    todoDiv.appendChild(trashButton);

    //Combine All Child in the ul //
    todoList.appendChild(todoDiv);

};

let deleteTodo = (e) => {

    const item = e.target;

    // Delete Todo //
    if (item.classList[0] === "trashButton") {
        const todo = item.parentElement;
        todo.classList.add("fall");
        todo.addEventListener("transitionend", () => {
            todo.remove();
        }
        )
    }


    if (item.classList[0] === "completeButton") {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    };
}



// Calling  Events //

todoSubmit.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteTodo);

