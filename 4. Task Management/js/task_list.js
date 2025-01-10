let taskContainer = document.querySelector("#taskContainer");


function displayTaskList() {
    let taskData = JSON.parse(localStorage.getItem("taskList")) || [];
    let taskList = "";

    // If no tasks are found
    if (taskData.length === 0) {
        taskContainer.innerHTML = `
            <div class="col-md-6">
                <h1 class="text-center fw-bold text-dark">No Task Found</h1>
            </div>  `
    }

    taskData.map((items, index) => {
        taskList += `
        <div class="col-lg-4 col-md-6 col-12 d-flex justify-content-center">
            <div class="card my-3">
            <div class="card-body">
                <h5 class="card-title">Task Name: ${items.taskName}</h5>
                <p class="card-text">Task Desc: ${items.taskDesc}</p>
                <p class="card-text">Task Status: ${items.taskStatus}</p>
                <p class="card-text">Task Assignee to: ${items.user}</p>
                <a href="#" class="btn btn-primary" onclick="updateTask(this)">Edit</a>
                <a href="#" class="btn btn-danger" onclick="deleteTask(this)">Delete</a>
            </div>
            </div>
        </div>
            `;
    });

    taskContainer.innerHTML = taskList;
}
displayTaskList();

function updateTask(index) {
    let taskData = JSON.parse(localStorage.getItem("taskList"));
    

}
// updateTask()

function deleteTask(index) {
    let taskData = JSON.parse(localStorage.getItem("taskList"));

}
// deleteTask()