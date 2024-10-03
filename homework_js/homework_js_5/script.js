const body = document.querySelector("body");

//Создание формы логин пароль
const scriptJS = document.querySelector("script");
const newFormSubmit = document.createElement("form");
const newH1 = document.createElement("h1");
const newInputLogin = document.createElement("input");
const newInputPass = document.createElement("input");
const newSubmitButton = document.createElement("button");
newH1.innerHTML = "HELLO!";
newInputLogin.type = "text";
newInputLogin.placeholder = "login";
newInputLogin.style.display = "block";
newInputPass.type = "password";
newInputPass.style.display = "block";
newInputPass.placeholder="password";
newSubmitButton.innerHTML = "Submit";
newFormSubmit.setAttribute('onsubmit', 'return false;');
newFormSubmit.append(newH1, newInputLogin, newInputPass, newSubmitButton);

//Создание формы to do
const newFormToDo = document.createElement("form");
const newInputTextToDo = document.createElement("input");
const newToDoButton = document.createElement("button");
const newToDoUl = document.createElement("ul");
const newDiv = document.createElement("div");
let id_index = 0;
let numberOfToDo = 0;
let lineThrought = false;
newInputTextToDo.placeholder = "New todo";
newInputTextToDo.style.display = "block";
newToDoButton.innerHTML = "Add new todo";
newToDoUl.style.listStyleType = "none";
newDiv.innerHTML = "No todos yet";
newFormToDo.setAttribute('onsubmit', 'return false;');
newFormToDo.append(newInputTextToDo, newToDoButton, newToDoUl);


//Добавление формы логин пароль на сайт при заходе
body.appendChild(newFormSubmit);


// Отправка формы, если же логин админ и пароль 1234, то появляется to do форма, если нет, то ошибка
newSubmitButton.addEventListener("click", () => {
    if (newInputLogin.value === "admin" && newInputPass.value === "1234") {
        newFormSubmit.remove();
        if (id_index === 0) {
            newFormToDo.appendChild(newDiv);
        }
        body.appendChild(newFormToDo);
    }
    newH1.innerHTML = "ERROR";
 });

// Добавление to do, их удаление, зачеркивание текста
newToDoButton.addEventListener("click", () => {
    if (newInputTextToDo.value !== "") {
        newDiv.remove();
        const newLi = document.createElement("li");
        const newToDoText = document.createElement("span");
        const newDeleteButton = document.createElement("button");
        newToDoText.innerHTML = newInputTextToDo.value;
        newDeleteButton.innerHTML = " X";
        id_index += 1;
        numberOfToDo += 1;
        newLi.id = id_index;
        newLi.append(newDeleteButton, newToDoText);
        newToDoUl.appendChild(newLi);
        newDeleteButton.addEventListener("click", () => {
            newLi.remove();
            numberOfToDo -= 1;
            if (numberOfToDo === 0) {
                newFormToDo.appendChild(newDiv);
            }
        })
        newToDoText.addEventListener("click", () => {
            if (lineThrought) {
                newToDoText.style.textDecoration = "line-through";
                lineThrought = false;
            }
            else {
                newToDoText.style.textDecoration = "none";
                lineThrought = true;
            }
        })
    }
 })