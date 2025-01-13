tbody = document.querySelector("tbody");

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
        tbody.innerHTML = taskList;
    })
}
displayTaskHistory();

function removeTask(id) {
    let taskHistory = JSON.parse(localStorage.getItem("taskListHistory")) || [];
    taskHistory.splice(id, 1);
    localStorage.setItem("taskListHistory", JSON.stringify(taskHistory));
    displayTaskHistory();
}

function restoreTask(id) {
    let taskHistory = JSON.parse(localStorage.getItem("taskListHistory")) || [];
    let taskList = JSON.parse(localStorage.getItem("taskList")) || [];
    let deletedTask = taskHistory[id];
    taskList.push(deletedTask);
    localStorage.setItem("taskList", JSON.stringify(taskList));
    taskHistory.splice(id, 1);
    localStorage.setItem("taskListHistory", JSON.stringify(taskHistory))
    displayTaskHistory();
}