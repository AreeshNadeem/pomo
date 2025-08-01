const taskInput = document.querySelector("#user-input");
const btn = document.querySelector("#add-btn");

btn.addEventListener("click", function () {
  let userInput = taskInput.value;
  if (userInput === "") return;

  const taskList = document.querySelector("#task-list");

  const taskItem = document.createElement("div");

  const span = document.createElement("span");
  span.textContent = userInput;

  const doneBtn = document.createElement("button");
  doneBtn.textContent = "done";
  doneBtn.addEventListener("click", function () {
    span.style.textDecoration = "line-through";
  });

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "remove";
  removeBtn.addEventListener("click", function () {
    taskItem.remove();
  });

  taskItem.appendChild(span);
  taskItem.appendChild(doneBtn);
  taskItem.appendChild(removeBtn);
  taskList.appendChild(taskItem);

  taskInput.value = "";
});
