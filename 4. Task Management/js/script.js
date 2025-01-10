const form = document.querySelector("form");
let taskName = document.querySelector(".taskName");
let taskDesc = document.querySelector(".taskDesc");
let taskStatus = document.querySelector("#taskStatus");
let user = document.querySelector("#user");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let taskDetail = {
        taskName: taskName.value,
        taskDesc: taskDesc.value,
        taskStatus: taskStatus.options[taskStatus.selectedIndex].text,
        user: user.options[user.selectedIndex].value
    }

    let taskList = JSON.parse(localStorage.getItem("taskList")) || [];

    taskList.push(taskDetail);

    localStorage.setItem("taskList", JSON.stringify(taskList));

    taskName.value = "";
    taskDesc.value = "";

})

// function displayTaskList() {
//     let taskData = JSON.parse(localStorage.getItem("taskList")) || [];
//     let taskList = "";

//     // If no tasks are found
//     if (taskData.length === 0) {
//         taskContainer.innerHTML = `
//         <div class="col-md-6">
//             <h1 class="text-center fw-bold text-dark">No Task Found</h1>
//         </div>  `
//     }

//     taskData.map((items, index) => {
//         taskList += `
//     <div class="col-lg-4 col-md-6 col-12 d-flex justify-content-center">
//         <div class="card my-3">
//         <div class="card-body">
//             <h5 class="card-title">Task Name: ${items.taskName}</h5>
//             <p class="card-text">Task Desc: ${items.taskDesc}</p>
//             <p class="card-text">Task Status: ${items.taskStatus}</p>
//             <p class="card-text">Task Assignee to: ${items.user}</p>
//             <a href="#" class="btn btn-primary">Edit</a>
//             <a href="#" class="btn btn-danger">Delete</a>
//         </div>
//         </div>
//     </div>
//         `;
//     });

//     taskContainer.innerHTML = taskList;

//     if (taskContainer) {
//         displayTaskList();
//     }

// }