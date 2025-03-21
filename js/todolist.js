const form = document.querySelector(".container__form");
const lista = document.querySelector(".container__lista");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function renderTasks() {

  lista.innerHTML = null;

  tasks.forEach((task, index) => {
    const liElement = document.createElement("li");
    const liText = document.createTextNode(task);
    const deleteLi = document.createElement("span");
    const textDelete = document.createTextNode("x");

    deleteLi.appendChild(textDelete);
    deleteLi.addEventListener("click", () => {
      tasks.splice(index, 1);
      updateLocalStorage();
      renderTasks();
    });

    liElement.appendChild(liText);
    liElement.appendChild(deleteLi);
    lista.appendChild(liElement);
  })
}

function updateLocalStorage() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const newTask = e.target[0].value.trim();

  if(newTask) {
    tasks.push(newTask);
    updateLocalStorage();
    renderTasks();
    form.reset();
  }
});

renderTasks();
