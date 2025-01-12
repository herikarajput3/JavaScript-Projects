const form = document.querySelector("#form");
let taskName = document.querySelector(".taskName");
let taskDesc = document.querySelector(".taskDesc");
let taskStatus = document.querySelector("#taskStatus");
let user = document.querySelector("#user");
// let saveBtn = document.querySelector(".saveBtn");
// let taskID = null;

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
    taskStatus.value = "1";
    user.value = "Select Employee";


    // displayTaskList();
})

