document.addEventListener("DOMContentLoaded", () => {
  // your code here

  // get what you need
  const main = document.querySelector("#main-content");
  const taskForm = document.querySelector("#create-task-form");
  const taskList = document.querySelector("#tasks");

  // stop submit button from redirecting
  taskForm.addEventListener("submit", function (e) {
    e.preventDefault();
    // user input
    const newTask = document.querySelector("#new-task-description").value
    // put it on the DOM where?
    const taskItem = document.createElement("li")
    // what are we putting on the dom?
    taskItem.innerHTML += `${newTask} 
    <button data-action="delete" >Remove</button>`
    // append to list
    taskList.appendChild(taskItem)
    // reset form 
    taskForm.reset()
  })
  // this is for the delete for each task
  taskList.addEventListener("click", function (e) {
    // if logic finds target you set
    if (e.target.dataset.action === "delete") {
      // and removes it
      e.target.parentElement.remove()
    }
  })
 });