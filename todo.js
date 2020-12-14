'use strict';

const list = document.getElementById("list");
const listText = document.querySelector(".content-text");
const toDoInput = document.getElementById("add-text");
const toDoForm = document.querySelector(".toDoForm");
const CHECK = "fas fa-check-circle";
const UNCHECK = "far fa-circle";
const LINE_THROUGH = "lineThrough"

const TODOS_LS = 'toDos'

const toDos = [];
let id = 0;


function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  toDoInput.value = "";
  showToDo(currentValue);
  if(currentValue) {
    addToDo(currentValue, id, false, false);
    const toDoObj = {
      name: currentValue,
      id: id,
      done: false,
      trash: false
    }
    toDos.push(toDoObj);
    saveToDos();
    id++;
  }
}

function addToDo(toDo, id, done, trash) {
  if(trash) {return;}
  const DONE = done ? CHECK : UNCHECK;
  const LINE = done ? LINE_THROUGH : "";
  const text = `<li class="content-item">
                  <i class="${DONE} complete" job="complete" id="${id}"></i>
                  <p class="content-text ${LINE}">${toDo}</p>
                  <i class="far fa-trash-alt" job="complete" id="${id}"></i>
                </li>`
  const position = "beforeend";
  list.insertAdjacentHTML(position, text);
  
}

function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {
    const parseToDos = JSON.parse(loadedToDos);
    parseToDos.forEach(function(toDo) {
      addToDo(toDo.name);
    });
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
