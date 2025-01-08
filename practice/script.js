let form = document.querySelector("#taskForm");
let input = document.querySelector("#taskInput");
let button = document.querySelector(".addBtn");
let allTasksList = document.querySelector("#allTasksList");
let completedTasksList = document.querySelector("#completedTasksList");
let activeTasksList = document.querySelector("#activeTasksList");


form.addEventListener("submit", (e) => {
    e.preventDefault();
    let task = input.value; // get input value
    let taskData = JSON.parse(localStorage.getItem("taskData")) || [];
    taskData.push({ task, completed: false });
    localStorage.setItem("taskData", JSON.stringify(taskData));
    input.value = "";

    show()
})

function show() {
    let taskData = JSON.parse(localStorage.getItem("taskData")) || [];
    let allTasks = "";
    let completedTasks = "";
    let activeTasks = "";

    // taskData.map((item, index) => {
    //     console.log(item.task);
    //     console.log(item.completed);
    // })

    taskData.map((item, index) => {
        allTasks += `
        <li class="list-group-item d-flex align-items-center border-0 mb-2 rounded"
                style="background-color: #f4f6f7;" data-index="${index}">
        <input class="form-check-input me-2" type="checkbox" ${item.completed ? "checked" : ""} onchange="toggle(${index})" />
        <span style="${item.completed ? "text-decoration: line-through;" : ""}">${item.task}</span>
        <i class="fa-regular fa-circle-xmark ms-auto text-danger" style="cursor: pointer;" onclick="removeTask(${index})"></i>
        </li>   `

        if (!item.completed) {
            activeTasks += `
            <li class="list-group-item d-flex align-items-center border-0 mb-2 rounded"
                            style="background-color: #f4f6f7;" data-index="${index}">
                <input class="form-check-input me-2" type="checkbox" onchange="toggle(${index})" />
                <span >${item.task}</span>
            </li>
            `
        }

        if (item.completed) {
            completedTasks += `
            <li class="list-group-item d-flex align-items-center border-0 mb-2 rounded"
                                            style="background-color: #f4f6f7;" data-index="${index}">
            <input class="form-check-input me-2" type="checkbox" checked onchange="toggle(${index})"/>
            <span style="${item.completed ? "text-decoration: line-through;": ""}">${item.task}</span>
            </li>
            `
        }
    })

    allTasksList.innerHTML = allTasks;
    activeTasksList.innerHTML = activeTasks;
    completedTasksList.innerHTML = completedTasks;
}

function toggle(index) {
    let taskData = JSON.parse(localStorage.getItem("taskData"));
    taskData[index].completed = !taskData[index].completed;
    localStorage.setItem("taskData", JSON.stringify(taskData));
    show();
}

function removeTask(index) {
    let taskData = JSON.parse(localStorage.getItem("taskData"));
    taskData.splice(index, 1)
    localStorage.setItem("taskData", JSON.stringify(taskData));
    show();
}