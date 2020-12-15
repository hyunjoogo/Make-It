"use strict";

const list = document.getElementById("list");
const listText = document.querySelector(".content-text");
const toDoInput = document.getElementById("add-text");
const toDoForm = document.querySelector(".toDoForm");
const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle";
const LINE_THROUGH = "lineThrough";

const TODOS_LS = "toDos";

const toDos = [];
let id = 0;

function completeToDo(element) {
  element.classList.toggle(CHECK);
  element.classList.toggle(UNCHECK);
  element.parentNode
    .querySelector(".content-text")
    .classList.toggle(LINE_THROUGH);
  toDos[element.id].done = toDos[element.id].done ? false : true;
}

function removeToDo(element) {
  element.parentNode.parentNode.removeChild(element.parentNode);
  console.log([element.id]);
  console.log(toDos[element.id]);
  toDos[element.id].trash = true;
}

function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

list.addEventListener("click", function (event) {
  const element = event.target;
  const elementJob = element.attributes.job.value;
  console.log(element);
  console.log(elementJob);
  if (elementJob == "complete") {
    completeToDo(element);
  } else if (elementJob == "delete") {
    removeToDo(element);
  }
  saveToDos();
});

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  toDoInput.value = "";
  if (currentValue) {
    addToDo(currentValue, id, false, false);
    const toDoObj = {
      name: currentValue,
      id: id,
      done: false,
      trash: false,
    };
    toDos.push(toDoObj);
    saveToDos();
    id++;
  }
}

function addToDo(toDo, id, done, trash) {
  if (trash) {
    return;
  }
  const DONE = done ? CHECK : UNCHECK;
  const LINE = done ? LINE_THROUGH : "";
  const text = `<li class="content-item">
                  <i class="far ${DONE} complete" job="complete" id="${id}"></i>
                  <p class="content-text ${LINE}">${toDo}</p>
                  <i class="far fa-trash-alt delete" job="delete" id="${id}"></i>
                </li>`;
  const position = "beforeend";
  list.insertAdjacentHTML(position, text);
}

function loadToDos() {
  const data = localStorage.getItem(TODOS_LS);
  console.log(data);
  if (data !== null) {
    const parseToDos = JSON.parse(data);
    console.log(parseToDos);
    toDos.push(parseToDos);
    console.log(toDos.push(parseToDos));
    console.log(toDos);
    parseToDos.forEach(function (toDo) {
      addToDo(toDo.name, toDo.id, toDo.done, toDo.trash);
    });
  }
}

toDoForm.addEventListener("submit", handleSubmit);

function init() {
  loadToDos();
}

init();
