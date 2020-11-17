document.addEventListener("DOMContentLoaded", () => {
  // your code here

  document.addEventListener('submit', (e) => {
    e.preventDefault();

    const newUserTask = document.getElementById('new-task-description').value;
    const newListItem = document.createElement('li');
    newListItem.innerHTML = newUserTask;
    const masterTodoList = document.getElementById('list');
    masterTodoList.appendChild(newListItem);

  });

});
