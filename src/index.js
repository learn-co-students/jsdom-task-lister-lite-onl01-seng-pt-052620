document.addEventListener("DOMContentLoaded", function(){
  console.log('Dom has loaded');
});

const newTaskForm = document.getElementById('create-task-form'); // form
const newTaskDescription = document.getElementById('new-task-description'); // description field

const checklistContainer = document.getElementById('tasks') // new task will be child of this element

newTaskForm.addEventListener("submit", function(event) {
  event.preventDefault(); // prevent form from trying to submit

  const newListItem = document.createElement('li') // new list item
  newListItem.innerHTML = event.currentTarget[0].value
  checklistContainer.appendChild(newListItem)

  event.target.reset()
});





