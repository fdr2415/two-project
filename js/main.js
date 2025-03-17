let input = document.querySelector(".input");
let btn = document.querySelector(".btn");
let list = document.querySelector(".list");
let up = document.querySelector(".up");
let id;
let todo = [];

btn.addEventListener("click", () => {
  if (input.value) {
    todo.push(input.value);
    addToDo();
    input.value = "";
  }
});

up.addEventListener("click", () => {
  todo[id] = input.value;
  addToDo();
  input.value = "";
});

function addToDo() {
  list.innerHTML = "";
  todo.map((item) => {
    list.innerHTML += `<li>${item} <button class="edit">Edit</button> <button class="delete">delete</button></li>`;
    let deleteArr = document.querySelectorAll(".delete");
    let editArr = document.querySelectorAll(".edit");
    let deleteConvert = Array.from(deleteArr);
    let editConvert = Array.from(editArr);

    deleteConvert.map((dele, index) => {
      dele.addEventListener("click", () => {
        todo.splice(index, 1);
        addToDo();
      });
    });

    editConvert.map((edita, index) => {
      edita.addEventListener("click", () => {
        input.value = todo[index];
        id = index;
        addToDo();
      });
    });
  });
}
