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
    loginButton.addEventListener("click", (e) => {
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
            .then(() => {
                formSubmit.remove();
                сreateToDoForm();
            }).catch((error) => console.log(error));
        
        // if (inputLogin.value !== ADMIN_LOGIN || inputPass.value !== ADMIN_PASSWORD) {
        //     h1.innerHTML = "ERROR";
        //     inputLogin.value = "";
        //     inputPass.value = "";
        //     return;
        // }

        // formSubmit.remove();
        // сreateToDoForm();
        // localStorage.setItem(ADMIN_LOGIN, "true");
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
    })
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
        formToDo.remove();
        // localStorage.removeItem(ADMIN_LOGIN);
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

        deleteButton.addEventListener("click", () => {

            // const spanText = li.querySelector('span').textContent;

            // const todos = JSON.parse(localStorage.getItem(TODO_KEY));

            // localStorage.setItem(TODO_KEY,  JSON.stringify(todos.filter(todo => todo !== spanText)));
            
            // li.remove(); 
                 
            // if (!document.querySelector(".toDo")){
            //     localStorage.removeItem(TODO_KEY);
            //     formToDo.appendChild(divNoToDo);
            // }
        })
        
        toDoTextTitle.addEventListener("click", () => {

            // const isCompleted = true;
            // if (isCompleted) {
            //     toDoTextTitle.style.textDecoration = "line-through";
            //     toDoTextDescription.style.textDecoration === "line-through";
            // }

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

        const li = createToDo(inputTitleToDo.value, inputDescriptionToDo.value);
        
        const isCompleted = false;
        const toDoTextTitle = li.querySelector('div')
        console.log(toDoTextTitle)
        const isCompletedTitle = toDoTextTitle.style.textDecoration === "line-through";
        if (isCompletedTitle){
             isCompleted = true;
        }

        // fetch("https://hono-cloudflare.onrender.com/todos", {
        //     method: "POST",
        //     credentials: "include",
        //     body: JSON.stringify({
        //         title: inputTitleToDo.value,
        //         description: inputDescriptionToDo.value,
        //         completed: isCompleted,
        //       }),
        //     headers: { "Content-Type": "application/json" },
        // })
        // .then((response) => response.json())
        // .then((data) => console.log(data))
        // .catch((error) => console.log(error));


        // const todos = JSON.parse(localStorage.getItem(TODO_KEY));

        // localStorage.setItem(TODO_KEY, JSON.stringify(todos ? [...todos, inputTitleToDo.value] : [inputTitleToDo.value]));
        
        inputTitleToDo.value = "";
        inputDescriptionToDo.value = "";
    })

    // Взятие TODO из local storage
    // const todos = JSON.parse(localStorage.getItem(TODO_KEY));

    // if (todos && todos.length) {
    //     divNoToDo.remove();
    //     todos.forEach(todo => createToDo(todo)); 
    // }


}


