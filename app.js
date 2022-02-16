let inputbox = document.getElementById("input");
const addButton = document.getElementById("addButton");
let todosDisplay = document.getElementsByClassName("todos")[0];
const removeButton = document.getElementsByClassName("removeButton")[0];
const removeButtons = document.getElementsByClassName("removeButton");
let todosContainer = document.getElementsByClassName("todosContainer")[0];
let todosDivision = document.getElementsByClassName("todosDiv")[0];
let content = document.getElementsByClassName("content")[0];
let contents = document.getElementsByClassName("content");
let inputValue = inputbox.value;
let checkboxTicks = document.getElementsByClassName("checkmark");


// This functions add todo to todosContainer
function addingTodo(inputValue) {

  let eachTodo = document.createElement("div");
  let inclusiveButton = document.createElement("div");
  let remButton = document.createElement("button");
  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  let checkboxDiv = document.createElement("div");

  if (inputValue.length > 3) {

    let toDivision = document.createElement("div");

    // checkbox creating
    checkbox.classList.add("checkMarx");
    checkboxDiv.classList.add("checkmark");
    checkboxDiv.appendChild(checkbox);
    toDivision.appendChild(checkboxDiv);

    // content creating
    eachTodo.classList.add("content");
    toDivision.classList.add("todosDiv");
    eachTodo.innerText = inputValue;
    toDivision.appendChild(eachTodo);

    // checkbox event
    checkbox.addEventListener("click", (e) => {
      if (e.target.checked) {
        eachTodo.classList.add("line-through");
      } else {
        eachTodo.classList.remove("line-through");
      }
    });

    // remove button
    remButton.classList.add("removeButton", "button-62");
    inclusiveButton.classList.add("buttonOuter");
    remButton.innerText = "X";
    toDivision.appendChild(remButton);

    todosContainer.appendChild(toDivision);
    remButton.addEventListener("click", () => {
      toDivision.parentNode.removeChild(toDivision);
    });
  }
}

addButton.addEventListener("click", () => {
  toDoText = inputbox.value;
  let contents = document.getElementsByClassName("content");
  addingTodo(toDoText);
  if (inputbox.value.length > 3) {
    inputbox.value = "";
  }
});

inputbox.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    toDoText = inputbox.value;
    addingTodo(toDoText);
    if (inputbox.value.length > 3) {
      inputbox.value = "";
    }
    // overline the todos
  }
});
