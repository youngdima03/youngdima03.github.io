const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = toDoForm.querySelector("#todo-form input");

let toDos = [];
const TODOS_KEY = "todos";

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(){
            const list = event.target.parentElement;
            list.remove();
            toDos = toDos.filter((toDo) => toDo.id !== parseInt(list.id));
            saveToDos();
}

function paintToDo(newToDo){
    const list = document.createElement("li")
    list.id = newToDo.id;
    const span = document.createElement("span")
    span.innerText = newToDo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteTodo);
    list.appendChild(span);
    list.appendChild(button);
    toDoList.appendChild(list);
}
function handleTDS(event){
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const newTDO = {
        text:newToDo,
        id: Date.now(),
    };
    toDos.push(newTDO);
    paintToDo(newTDO);
    saveToDos();
}

toDoForm.addEventListener("submit", handleTDS);
const savedTds = localStorage.getItem(TODOS_KEY);

console.log(savedTds);
if(savedTds !== null){
    const parsedTds = JSON.parse(savedTds);
    toDos = parsedTds;
    parsedTds.forEach(paintToDo);
}