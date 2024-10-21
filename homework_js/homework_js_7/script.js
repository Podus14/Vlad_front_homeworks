const ADMIN_LOGIN = 'admin'
const ADMIN_PASSWORD = '1234'
const TODO_KEY = "ToDos"

//Создание формы логин пароль
const createInitialForm = () => {
    const formSubmit = document.createElement("form");

    const h1 = document.createElement("h1");
    h1.innerHTML = "HELLO!";
    
    const inputName = document.createElement("input");
    inputName.type = "text";
    inputName.placeholder = "name";
    inputName.style.display = "block";

    const inputLogin = document.createElement("input");
    inputLogin.type = "text";
    inputLogin.placeholder = "login";
    inputLogin.style.display = "block";

    const inputPass = document.createElement("input");
    inputPass.type = "password";
    inputPass.placeholder="password";
    inputPass.style.display = "block";

    const loginButton = document.createElement("button");
    loginButton.innerHTML = "Login";

    const registerButton = document.createElement("button");
    registerButton.innerHTML = "Register";

    formSubmit.append(h1,inputName, inputLogin, inputPass, loginButton, registerButton);

    body.appendChild(formSubmit);

    // Отправка формы, если же логин админ и пароль 1234, то появляется to do форма, если нет, то ошибка
    loginButton.addEventListener("click", e => {
        e.preventDefault();
        fetch("https://hono-cloudflare.onrender.com/auth/login", {
            method: "POST",
            credentials: "include",
            body: JSON.stringify({
                email: inputLogin.value,
                password: inputPass.value,
              }),
            headers: { "Content-Type": "application/json" },
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.success !== false){
                    formSubmit.remove();
                    сreateToDoForm();
                }
                h1.innerHTML = "ERROR!";
            }).catch((error) => console.log(error));
    });
    registerButton.addEventListener("click", e => {
        e.preventDefault();
        fetch("https://hono-cloudflare.onrender.com/auth/register", {
            method: "POST",
            credentials: "include",
            body: JSON.stringify({
                name: inputName.value,
                email: inputLogin.value,
                password: inputPass.value,
              }),
            headers: { "Content-Type": "application/json" },
        })
        .then((response) => response.json())
        .then((data) => {
            if (data.success === false) h1.innerHTML = "ERROR!"
        })
        .catch((error) => console.log(error));
    })
}

const body = document.querySelector("body");
body.onload = () => {
    fetch("https://hono-cloudflare.onrender.com/auth/verify", {
        method: "GET",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
    })
    .then((response) => response.json())
    .then(data => data.message !== "Not Found" ? сreateToDoForm() : createInitialForm())
    .catch((error) => console.log(error));
}

//Создание формы to do
const сreateToDoForm = () => {
    const formToDo = document.createElement("form");

    const inputTitleToDo = document.createElement("input");
    inputTitleToDo.placeholder = "Title";
    inputTitleToDo.style.display = "block";

    const inputDescriptionToDo = document.createElement("input");
    inputDescriptionToDo.placeholder = "Description";
    inputDescriptionToDo.style.display = "block";

    const toDoButton = document.createElement("button");
    toDoButton.innerHTML = "Add new todo";

    const toDoUl = document.createElement("ul");
    toDoUl.style.listStyleType = "none";
    
    const divNoToDo = document.createElement("div");
    divNoToDo.innerHTML = "No todos yet";

    const logoutDoButton = document.createElement("button");
    logoutDoButton.innerHTML = "Logout";

    logoutDoButton.addEventListener("click", () => {
        fetch("https://hono-cloudflare.onrender.com/auth/logout", {
            method: "GET",
            credentials: "include",
            headers: { "Content-Type": "application/json" },
        })
        .then((response) => response.json())
        .catch((error) => console.log(error));
        formToDo.remove();
        createInitialForm();
    })


    formToDo.append(inputTitleToDo, inputDescriptionToDo, toDoButton, logoutDoButton, toDoUl, divNoToDo);
    body.appendChild(formToDo);
    
    
    // Добавление to do, их удаление, зачеркивание текста
    const createToDo = (textToDoTitle, textToDoDescription) => {
        const li = document.createElement("li");
        li.classList.add("toDo");

        const toDoTextTitle = document.createElement("div");
        toDoTextTitle.innerHTML = "Title: " + textToDoTitle;

        const toDoTextDescription = document.createElement("div");
        toDoTextDescription.innerHTML = "Description: " + textToDoDescription;

        const deleteButton = document.createElement("button");
        deleteButton.innerHTML = " X";

        li.append(toDoTextTitle,toDoTextDescription, deleteButton);
        toDoUl.appendChild(li);

         deleteButton.addEventListener("click", (e) => {
            e.preventDefault()
         })
        
        toDoTextTitle.addEventListener("click", () => {

            const isCompletedTitle = toDoTextTitle.style.textDecoration === "line-through";
            toDoTextTitle.style.textDecoration = isCompletedTitle ? "none" : "line-through";


            const isCompletedDescription = toDoTextDescription.style.textDecoration === "line-through";
            toDoTextDescription.style.textDecoration = isCompletedDescription ? "none" : "line-through";
        })
        return li;
    }

    // Добавление to do  через кнопку, их удаление, зачеркивание текста
    toDoButton.addEventListener("click", (e) => {
        e.preventDefault();
        if (inputTitleToDo.value.trim() === "" || inputDescriptionToDo.value.trim() === "") return;
        
        divNoToDo.remove();

        createToDo(inputTitleToDo.value, inputDescriptionToDo.value);

        fetch("https://hono-cloudflare.onrender.com/todos", {
            method: "POST",
            credentials: "include",
            body: JSON.stringify({
                title: inputTitleToDo.value,
                description: inputDescriptionToDo.value,
                completed: false,
              }),
            headers: { "Content-Type": "application/json" },
        })
        .then((response) => response.json())
        .catch((error) => console.log(error));
        
        inputTitleToDo.value = "";
        inputDescriptionToDo.value = "";
    })

    fetch("https://hono-cloudflare.onrender.com/todos", {
        method: "GET",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
    })
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        data.forEach(todo => createToDo(todo.title, todo.description))
        divNoToDo.remove();
    })
    .catch((error) => console.log(error));

}


