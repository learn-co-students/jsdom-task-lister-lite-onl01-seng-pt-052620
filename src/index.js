const taskForm = document.querySelector("#create-task-form")
const taskList = document.querySelector("#tasks")

taskForm.addEventListener("submit", function(e) {
  e.preventDefault()
  // have the user input
  const newTask = document.querySelector("#new-task-description").value
  // add to dom
  taskList.innerHTML += `
    <li> ${newTask}
        <button data-action="delete"> delete </button>
    </li>
  `
  // const taskItem = document.createElement("li")
  // taskItem.innerText = newTask

  // taskList.appendChild(taskItem)
  taskForm.reset()
})

taskList.addEventListener("click", function(e) {
  if (e.target.dataset.action === "delete") {
    e.target.parentElement.remove()
  }
})