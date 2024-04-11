document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get the task description from the input field
    const taskInput = document.getElementById("new-task-description");
    const taskDescription = taskInput.value.trim();

    // Check if the input field is not empty
    if (taskDescription !== "") {
      // Create a new list item and append it to the task list
      const listItem = document.createElement("li");
      listItem.textContent = taskDescription;
      
      // Create a delete button for each task
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.classList.add("delete-btn");
      listItem.appendChild(deleteButton);

      taskList.appendChild(listItem);

      // Clear the input field after adding the task
      taskInput.value = "";
    }
  });

  // Event listener to handle task deletion
  taskList.addEventListener("click", function(event) {
    if (event.target.classList.contains("delete-btn")) {
      event.target.parentElement.remove();
    }
  });
});