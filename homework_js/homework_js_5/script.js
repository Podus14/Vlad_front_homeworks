const ADMIN_LOGIN = 'admin'
const ADMIN_PASSWORD = '1234'

//Создание формы логин пароль
const createInitialForm = () => {
    const formSubmit = document.createElement("form");
    formSubmit.setAttribute('onsubmit', 'return false;');

    const h1 = document.createElement("h1");
    h1.innerHTML = "HELLO!";

    const inputLogin = document.createElement("input");
    inputLogin.type = "text";
    inputLogin.placeholder = "login";
    inputLogin.style.display = "block";

    const inputPass = document.createElement("input");
    inputPass.type = "password";
    inputPass.placeholder="password";
    inputPass.style.display = "block";

    const submitButton = document.createElement("button");
    submitButton.innerHTML = "Submit";

    formSubmit.append(h1, inputLogin, inputPass, submitButton);

    body.appendChild(formSubmit);

    // Отправка формы, если же логин админ и пароль 1234, то появляется to do форма, если нет, то ошибка
    submitButton.addEventListener("click", () => {
    if (inputLogin.value !== ADMIN_LOGIN || inputPass.value !== ADMIN_PASSWORD) {
        h1.innerHTML = "ERROR";
        inputLogin.value = "";
        inputPass.value = "";
        return;
    }
    formSubmit.remove();
    сreateToDoForm();
    });
}

const body = document.querySelector("body");
body.onload = createInitialForm();

//Создание формы to do
const сreateToDoForm = () => {
    const formToDo = document.createElement("form");
    formToDo.setAttribute('onsubmit', 'return false;');

    const inputTextToDo = document.createElement("input");
    inputTextToDo.placeholder = "New todo";
    inputTextToDo.style.display = "block";

    const toDoButton = document.createElement("button");
    toDoButton.innerHTML = "Add new todo";

    const toDoUl = document.createElement("ul");
    toDoUl.style.listStyleType = "none";

    const divNoToDo = document.createElement("div");
    divNoToDo.innerHTML = "No todos yet";

    formToDo.append(inputTextToDo, toDoButton, toDoUl, divNoToDo);
    body.appendChild(formToDo);
    let id = 0;
    
    // Добавление to do, их удаление, зачеркивание текста
    toDoButton.addEventListener("click", () => {
        if (inputTextToDo.value.trim() === "") return;

        divNoToDo.remove();

        const li = document.createElement("li");
        li.classList.add("toDo");

        const toDoText = document.createElement("span");
        toDoText.innerHTML = inputTextToDo.value;

        const deleteButton = document.createElement("button");
        deleteButton.innerHTML = " X";

        id += 1;
        li.id = id;
        
        li.append(toDoText, deleteButton);
        toDoUl.appendChild(li);
        inputTextToDo.value = "";

        deleteButton.addEventListener("click", () => {
            li.remove();
            if (!document.querySelector(".toDo")){
                formToDo.appendChild(divNoToDo);
            }
        })
        
        toDoText.addEventListener("click", () => {
            const isCompleted = toDoText.style.textDecoration === "line-through";
            toDoText.style.textDecoration = isCompleted ? "none" : "line-through";
        })
    })
}


