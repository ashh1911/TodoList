document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.getElementById("add-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  addBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = taskText;

    span.addEventListener("click", () => {
      span.classList.toggle("completed");
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.className = "delete-btn";
    deleteBtn.addEventListener("click", () => {
      li.remove();
    });

    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskInput.value = "";
  });
});
