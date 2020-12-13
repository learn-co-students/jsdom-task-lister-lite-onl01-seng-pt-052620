
document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("submit", (e) => {
    e.preventDefault()
   let id= document.getElementById("new-task-description").value
   let id2= document.createElement("li")
   id2.innerHTML = id
   let list = document.getElementById("tasks")
   list.appendChild(id2)
  })
  // your code here
});
