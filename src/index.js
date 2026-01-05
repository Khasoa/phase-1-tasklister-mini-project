document.addEventListener("DOMContentLoaded", () => {

//Connect the html form
const form = document.getElementById("create-task-form");

//Add an event listener to the form
form.addEventListener("submit", (event) => {
    event.preventDefault();
//Get the task decription from the form
    const task = event.target.querySelector("#new-task-description").value;
    buildToDo(task);

});

//Add item to list and display
function buildToDo(task) {
    const li = document.createElement("li");
    li.textContent = task;

    const tasklist = document.getElementById("tasks");
    tasklist.appendChild(li);
}
});
