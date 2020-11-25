// document.addEventListener("DOMContentLoaded", () => {

//   // your code here
// });

// function getTaskItem() {
//   const input = document.getElementById('input');
//   input.addEventListener('click', function(event) {
//     let taskItem = document.getElementById('new-task-description').value;
//     return taskItem;
//   });
// }

const taskForm = document.getElementById("create-task-form")

const taskList = document.querySelector("#tasks")

taskForm.addEventListener("submit", function(e) {
  e.preventDefault()
  const taskItem = document.querySelector("#new-task-description").value

  const addItemList = document.createElement("li")
  addItemList.innerText = taskItem

  taskList.appendChild(addItemList)
  taskForm.reset()

})

