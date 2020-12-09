
document.addEventListener("submit", preventSubmit)


function preventSubmit(event){
  event.preventDefault()   //Prevent default behavior 
  const desc = document.getElementById("new-task-description")   //Make a constant and set it to the whole id input element  
  const list_item = document.createElement("li")  //Create an li element 
  list_item.innerHTML = desc.value   //Set the innerHTML of the list item equal to the value of desc 
  document.getElementById("tasks").appendChild(list_item)  //select the id and append the list_item to the DOM
}





// ## Deliverables:

// - As a user, I should be able to type a task into the input field.
// - As a user, I should be able to click some form of a submit button.
// - As a user, the task string that I provided should appear on the DOM after the submit button has been activated.