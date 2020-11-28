document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("create-task-form").addEventListener("submit", function(e) {
    e.preventDefault();
    const field = document.getElementById("new-task-description")
    const task = field.value
    const listNode = document.getElementById("tasks")
    const newTaskNode = document.createElement("li")
    listNode.appendChild(newTaskNode).innerText = task
    field.value = ""
  })
});