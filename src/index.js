document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.getElementById('create-task-form').addEventListener('click', function(event) {
    let textBox =  document.getElementById('new-task-description').value;
    let listText = document.getElementById('tasks')
  
    listText.innerText = textBox;
    event.preventDefault();
  }, false);});

  
