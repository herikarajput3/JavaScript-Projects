let taskContainer = document.querySelector("#taskContainer");
let saveBtn = document.querySelector(".saveBtn");

function displayTaskList() {
    let taskDetail = JSON.parse(localStorage.getItem("taskList")) || [];
    let taskList = "";

    // If no tasks are found
    if (taskDetail.length === 0) {
        taskContainer.innerHTML = `
            <div class="col-md-6">
                <h1 class="text-center fw-bold text-dark">No Task Found</h1>
            </div>  `
    }

    taskDetail.map((items, index) => {
        taskList += `
        <div class="col-lg-4 col-md-6 col-12 d-flex justify-content-center">
            <div class="card my-3">
            <div class="card-body">
                <h5 class="card-title">Task Name: ${items.taskName}</h5>
                <p class="card-text">Task Desc: ${items.taskDesc}</p>
                <p class="card-text">Task Status: ${items.taskStatus}</p>
                <p class="card-text">Task Assignee to: ${items.user}</p>
                <button type="button" class="btn btn-primary" onclick="updateTask(${index})" data-bs-toggle="modal"
                                data-bs-target="#exampleModal">Edit</button>
                <button  class="btn btn-danger" onclick="deleteTask(${index})">Delete</button>
            </div>
            </div>
        </div>
            `;
    });

    taskContainer.innerHTML = taskList;
}
displayTaskList();

function updateTask(id) {
    let taskList = JSON.parse(localStorage.getItem("taskList"));

    taskName.value = taskList[id].taskName;
    taskDesc.value = taskList[id].taskDesc;
    taskStatus.value = taskList[id].taskStatus;
    user.value = taskList[id].user;

    saveBtn.addEventListener("click", (e) => {
        e.preventDefault();
        // Change the values

        let taskDetail = {
            taskName: taskName.value,
            taskDesc: taskDesc.value,
            taskStatus: taskStatus.value,
            user: user.value
        }

        taskList.splice(id, 1, taskDetail);
        localStorage.setItem("taskList", JSON.stringify(taskList));

        displayTaskList()

    })
}

function deleteTask(id) {
    let taskList = JSON.parse(localStorage.getItem("taskList"));
    let taskHistory = JSON.parse(localStorage.getItem("taskListHistory")) || [];
    let deletedTask = taskList[id];

    taskHistory.push(deletedTask);
    localStorage.setItem("taskListHistory", JSON.stringify(taskHistory));
    taskList.splice(id, 1);
    localStorage.setItem("taskList", JSON.stringify(taskList));
    displayTaskList();

}
