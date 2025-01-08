let form = document.querySelector("#taskForm");
let input = document.querySelector("#taskInput");
let button = document.querySelector(".addBtn");
let allTasksList = document.querySelector("#allTasksList");
let completedTasksList = document.querySelector("#completedTasksList");
let activeTasksList = document.querySelector("#activeTasksList");


form.addEventListener("submit", (e) => {
    e.preventDefault();

    // const task = {
    //     task: input.value
    // }

    const task = input.value.trim(); // Get the task value

    let taskData = JSON.parse(localStorage.getItem("taskData")) || [];
    taskData.push({ task, completed: false });
    localStorage.setItem("taskData", JSON.stringify(taskData));

    input.value = "";
    show()

})

function show() {

    let taskData = JSON.parse(localStorage.getItem("taskData")) || [];

    let allTasks = "";
    let activeTasks = "";
    let completedTasks = "";

    taskData.map((item, index) => {
        // allTasks += `
        // <li class="list-group-item d-flex align-items-center border-0 mb-2 rounded"
        //                                     style="background-color: #f4f6f7;" data-index = "${index}">   
        //             <input class="form-check-input me-2" type="checkbox" onchange=toggle(this) />
        //                     ${items.task}
        // </li>`
        allTasks += `
        <li class="list-group-item d-flex align-items-center border-0 mb-2 rounded"
            style="background-color: #f4f6f7;" data-index="${index}">
            <input class="form-check-input me-2" type="checkbox" ${item.completed ? "checked" : ""} 
                onchange="toggle(${index})">
            <span style="${item.completed ? "text-decoration: line-through;" : ""}">${item.task}</span>

            <i class="fa-regular fa-circle-xmark ms-auto text-danger" style="cursor: pointer;" onclick="removeTask(${index})"></i>
        </li>`

        if (!item.completed) {
            activeTasks += `
        <li class="list-group-item d-flex align-items-center border-0 mb-2 rounded"
            style="background-color: #f4f6f7;">
            <input class="form-check-input me-2" type="checkbox" 
                onchange="toggle(${index})">
            <span>${item.task}</span>
        </li>`;
        }

        if (item.completed) {
            completedTasks += `
        <li class="list-group-item d-flex align-items-center border-0 mb-2 rounded"
            style="background-color: #f4f6f7;>
            <input class="form-check-input me-2" type="checkbox" checked 
                onchange="toggle(${index})">
            <span style="text-decoration: line-through;">${item.task}</span>
        </li>`;
        }
    });

    allTasksList.innerHTML = allTasks;
    activeTasksList.innerHTML = activeTasks;
    completedTasksList.innerHTML = completedTasks;

}

// function toggle(checkbox) {
//     const listItem = checkbox.closest(".list-group-item");
//     // const listItem = document.querySelector(".list-group-item"); // It will not work because it selects only 1st task.
//     // We have to select multiple task so that we use closest to select task 

//     if (checkbox.checked) {
//         listItem.style.textDecoration = "line-through";

//     } else {
//         listItem.style.textDecoration = "none";
//     }
// }

function toggle(index) {
    let taskData = JSON.parse(localStorage.getItem("taskData")); // Get tasks from storage
    taskData[index].completed = !taskData[index].completed;
    localStorage.setItem("taskData", JSON.stringify(taskData)); // Save changes
    show(); 
}

function removeTask(index) {
    let taskData = JSON.parse(localStorage.getItem("taskData")) || [];
    taskData.splice(index, 1);
    localStorage.setItem("taskData", JSON.stringify(taskData));
    show();
}





