let form = document.querySelector("#taskForm");
let input = document.querySelector("#taskInput");
let button = document.querySelector(".addBtn");
let allTasksList = document.querySelector("#allTasksList");


form.addEventListener("submit", (e) => {
    e.preventDefault();

    const task = {
        task: input.value
    }

    let taskData = JSON.parse(localStorage.getItem("taskData")) || [];
    taskData.push(task);
    localStorage.setItem("taskData", JSON.stringify(taskData));

    input.value = "";
    show()

})

function show() {
    let taskData = JSON.parse(localStorage.getItem("taskData"));
    let result = "";

    taskData.map((items, index) => {
        result += `
        <li class="list-group-item d-flex align-items-center border-0 mb-2 rounded"
                                            style="background-color: #f4f6f7;" data-index = "${index}">   
                    <input class="form-check-input me-2" type="checkbox" onchange=toggle(this) />
                            ${items.task}
        </li>`
    })

    allTasksList.innerHTML = result;
}

function toggle(checkbox) {
    const listItem = checkbox.closest(".list-group-item");
    // const listItem = document.querySelector(".list-group-item"); // It will not work because it selects only 1st task.
    // We have to select multiple task so that we use closest to select task 

    if (checkbox.checked) {
        listItem.style.textDecoration = "line-through";
    } else {
        listItem.style.textDecoration = "none";
    }
}



