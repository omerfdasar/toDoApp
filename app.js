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

function addingTodo(inputValue) {
  let eachTodo = document.createElement("div");
  let toDivision = document.createElement("div");

  let inclusiveButton = document.createElement("div");
  let remButton = document.createElement("button");

  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  let checkboxDiv = document.createElement("div");

  if (inputValue.length > 3) {
    // checkbox
    checkbox.classList.add("checkMarx");
    checkboxDiv.classList.add("checkmark");
    checkboxDiv.appendChild(checkbox);
    toDivision.appendChild(checkboxDiv);

    // content
    eachTodo.classList.add("content");
    toDivision.classList.add("todosDiv");
    eachTodo.innerText = inputValue;
    toDivision.appendChild(eachTodo);

    // button
    remButton.classList.add("removeButton", "button-62");
    inclusiveButton.classList.add("buttonOuter");
    remButton.innerText = "X";
    toDivision.appendChild(remButton);

    todosContainer.appendChild(toDivision);
  }
}

addButton.addEventListener("click", () => {
  toDoText = inputbox.value;
  let contents = document.getElementsByClassName("content");
  addingTodo(toDoText);
  if (inputbox.value.length > 3) {
    inputbox.value = "";
  }
  // overline the todos
  for (let i = 0; i < checkboxTicks.length; i++) {
    checkboxTicks[i].addEventListener("change", (e) => {
      if (e.target.checked) {
        contents[i].classList.add("line-through");
      } else {
        contents[i].classList.remove("line-through");
      }
    });
  }

  // deleting buttons
  for (let i = 0; i < removeButtons.length; i++) {
    removeButtons[i].addEventListener("click", (e) => {
      todosContainer.removeChild(e.target.parentElement);
      removeButtons.pop(i);
    });
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
    for (let i = 0; i < checkboxTicks.length; i++) {
      checkboxTicks[i].addEventListener("change", (e) => {
        if (e.target.checked) {
          contents[i].classList.add("line-through");
        } else {
          contents[i].classList.remove("line-through");
        }
      });
    }

    // deleting buttons
    for (let i = 0; i < removeButtons.length; i++) {
      removeButtons[i].addEventListener("click", (e) => {
        todosContainer.removeChild(removeButtons[i].parentElement);
        removeButtons.pop(i);
      });
    }
  }
});
