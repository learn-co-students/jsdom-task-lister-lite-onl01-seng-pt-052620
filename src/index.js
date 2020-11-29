document.addEventListener("DOMContentLoaded", () => {
  // your code here
});


const taskForm = document.querySelector("#create-task-form")
const taskList = document.querySelector("#tasks")

taskForm.addEventListener("submit", function(e) {
  e.preventDefault()
  const newTask = document.querySelector("#new-task-description").value

  // Add 'li' using innerHTML and +=
  // NOTE: this method effects the DOM immediately so the DOM will react to the innerHTML being reset
  // Also has security drawbacks

  taskList.innerHTML += `
      <li> ${newTask} 
        <button data-action="delete">X</button>
      </li>
      `

  // Add 'li' using createElement, innerText and appendChild
  // Preferred method

  // const taskItem = document.createElement("li")
  // taskItem.innerText = newTask 
  // taskList.appendChild(taskItem)

  taskForm.reset()

  taskList.addEventListener("click", function(e) {
    if (e.target.dataset.action === "delete") {
      e.target.parentElement.remove()
    }
  })
})