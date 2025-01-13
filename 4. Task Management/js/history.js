let user_tbody = document.querySelector(".user_tbody");
let task_tbody = document.querySelector(".task_tbody");
let removeAllTasks = document.querySelector(".removeAllTasks");
let removeAllUser = document.querySelector(".removeAllUser");

function displayTaskHistory() {
    let taskHistory = JSON.parse(localStorage.getItem("taskListHistory")) || [];
    let taskList = "";

    taskHistory.map((items, index) => {
        taskList +=
            `
        <tr>
            <th scope="row">${index + 1}</th>
            <td>${items.taskName}</td>
            <td>${items.taskDesc}</td>
            <td>${items.taskStatus}</td>
            <td>${items.user}</td>
            <td>
                <button class="btn btn-danger mb-4 mb-lg-0" onclick="removeTask(${index})">Remove</button>
                <button class="btn btn-success" onclick="restoreTask(${index})">Restore</button>
            </td>
        </tr>
        `
        task_tbody.innerHTML = taskList;
    })
}
displayTaskHistory();

function displayUserHistory() {
    let userHistory = JSON.parse(localStorage.getItem("userHistory")) || [];
    let userList = "";

    userHistory.map((items, index) => {
        userList +=
            `
        <tr>
            <th scope="row">${index + 1}</th>
            <td>${items.user_id}</td>
            <td>${items.user_name}</td>
            <td>
                <button class="btn btn-danger mb-4 mb-lg-0" onclick="removeUser(${index})">Remove</button>
                <button class="btn btn-success" onclick="restoreUser(${index})">Restore</button>
            </td>
        </tr>
        `
        user_tbody.innerHTML = userList;
    })
}
displayUserHistory();

function removeTask(id) {
    let taskHistory = JSON.parse(localStorage.getItem("taskListHistory")) || [];
    taskHistory.splice(id, 1);
    localStorage.setItem("taskListHistory", JSON.stringify(taskHistory));
    location.reload();
    displayTaskHistory();
}

function removeUser(id) {
    let userHistory = JSON.parse(localStorage.getItem("userHistory")) || [];
    userHistory.splice(id, 1);
    localStorage.setItem("userHistory", JSON.stringify(userHistory));
    location.reload();
    displayUserHistory();
}

function restoreTask(id) {
    let taskHistory = JSON.parse(localStorage.getItem("taskListHistory")) || [];
    let taskList = JSON.parse(localStorage.getItem("taskList")) || [];
    let deletedTask = taskHistory[id];
    taskList.push(deletedTask);
    localStorage.setItem("taskList", JSON.stringify(taskList));
    taskHistory.splice(id, 1);
    localStorage.setItem("taskListHistory", JSON.stringify(taskHistory));
    location.reload();
    displayTaskHistory();
}

function restoreUser(id) {
    let userHistory = JSON.parse(localStorage.getItem("userHistory")) || [];
    let userList = JSON.parse(localStorage.getItem("user_list")) || [];
    let deletedUser = userHistory[id];
    userList.push(deletedUser);
    localStorage.setItem("user_list", JSON.stringify(userList));
    userHistory.splice(id, 1);
    localStorage.setItem("userHistory", JSON.stringify(userHistory));
    location.reload();
    displayUserHistory();
}

removeAllTasks.addEventListener("click", (e) => {
    localStorage.removeItem("taskListHistory");
    location.reload();
})

removeAllUser.addEventListener("click", (e) => {
    e.preventDefault();
    localStorage.removeItem("userHistory");
    location.reload();
})