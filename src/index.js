document.addEventListener("DOMContentLoaded", () => {
  const submitButton = document.getElementById("submit-button");
  const newTaskDescription = document.getElementById("new-task-description");
  let taskCounter = 0;

  submitButton.addEventListener("click", (submitButtonClick) => {
    let task = newTaskDescription.value;
    if (task === "") {
      alert("Blank tasks aren't real tasks.")
    } else {
      taskCounter++;
      document.getElementById("tasks").innerHTML += `<li id="task-${taskCounter}"><span class="delete-tasks" id="delete-task-${taskCounter}">x</span>&nbsp;&nbsp;${task}</li>`;
      newTaskDescription.value = "";
    }
    submitButtonClick.preventDefault();
  });

  document.addEventListener("click", (clickEvent) => {
    if (clickEvent.target.className === "delete-tasks") {
      clickEvent.target.closest("li").remove();
    }
  });
});
