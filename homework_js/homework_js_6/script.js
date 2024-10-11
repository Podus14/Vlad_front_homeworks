const ADMIN_LOGIN = 'admin'
const ADMIN_PASSWORD = '1234'
const TODO_KEY = "ToDos"

//Создание формы логин пароль
const createInitialForm = () => {
    const formSubmit = document.createElement("form");

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
    submitButton.addEventListener("click", (e) => {
        e.preventDefault();
        if (inputLogin.value !== ADMIN_LOGIN || inputPass.value !== ADMIN_PASSWORD) {
            h1.innerHTML = "ERROR";
            inputLogin.value = "";
            inputPass.value = "";
            return;
        }
        formSubmit.remove();
        сreateToDoForm();
        localStorage.setItem(ADMIN_LOGIN, "true");
    });
}

const body = document.querySelector("body");
body.onload = () => {
    if (localStorage.getItem(ADMIN_LOGIN) === "true") {
        сreateToDoForm();
        return;
    }
    createInitialForm();
}

//Создание формы to do
const сreateToDoForm = () => {
    const formToDo = document.createElement("form");

    const inputTextToDo = document.createElement("input");
    inputTextToDo.placeholder = "New todo";
    inputTextToDo.style.display = "block";

    const toDoButton = document.createElement("button");
    toDoButton.innerHTML = "Add new todo";

    const toDoUl = document.createElement("ul");
    toDoUl.style.listStyleType = "none";
    
    const divNoToDo = document.createElement("div");
    divNoToDo.innerHTML = "No todos yet";

    const logoutDoButton = document.createElement("button");
    logoutDoButton.innerHTML = "Logout";

    logoutDoButton.addEventListener("click", () => {
        formToDo.remove();
        localStorage.removeItem(ADMIN_LOGIN);
        createInitialForm();
    })


    formToDo.append(inputTextToDo, toDoButton, logoutDoButton, toDoUl, divNoToDo);
    body.appendChild(formToDo);
   
    
    // Добавление to do, их удаление, зачеркивание текста
    const createToDo = (textToDo) => {
        const li = document.createElement("li");
        li.classList.add("toDo");

        const toDoTextSpan = document.createElement("span");
        toDoTextSpan.innerHTML = textToDo;

        const deleteButton = document.createElement("button");
        deleteButton.innerHTML = " X";

        li.append(toDoTextSpan, deleteButton);
        toDoUl.appendChild(li);

        deleteButton.addEventListener("click", () => {

            const spanText = li.querySelector('span').textContent;

            const todos = JSON.parse(localStorage.getItem(TODO_KEY));

            localStorage.setItem(TODO_KEY,  JSON.stringify(todos.filter(todo => todo !== spanText)));
            
            li.remove(); 
                 
            if (!document.querySelector(".toDo")){
                localStorage.removeItem(TODO_KEY);
                formToDo.appendChild(divNoToDo);
            }
        })
        
        toDoTextSpan.addEventListener("click", () => {
            const isCompleted = toDoTextSpan.style.textDecoration === "line-through";
            toDoTextSpan.style.textDecoration = isCompleted ? "none" : "line-through";
        })
    }

    // Добавление to do  через кнопку, их удаление, зачеркивание текста
    toDoButton.addEventListener("click", (e) => {
        e.preventDefault();
        if (inputTextToDo.value.trim() === "") return;
        
        divNoToDo.remove();

        createToDo(inputTextToDo.value);

        const todos = JSON.parse(localStorage.getItem(TODO_KEY));

        localStorage.setItem(TODO_KEY, JSON.stringify(todos ? [...todos, inputTextToDo.value] : [inputTextToDo.value]));
        
        inputTextToDo.value = "";
    })

    // Взятие TODO из local storage
    const todos = JSON.parse(localStorage.getItem(TODO_KEY));

    if (todos && todos.length) {
        divNoToDo.remove();
        todos.forEach(todo => createToDo(todo)); 
    }
}


