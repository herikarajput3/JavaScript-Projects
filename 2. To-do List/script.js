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

    taskData.map((items) => {
        result += `
        <li class="list-group-item d-flex align-items-center border-0 mb-2 rounded"
                                            style="background-color: #f4f6f7;" onclick="toggle(this)">    
            <input class="form-check-input me-2" type="checkbox" value="" aria-label="..." />
                                            ${items.task}
        </li>`
    })

    allTasksList.innerHTML = result;
}

function toggle(element) {
    let checkbox = document.querySelector(".form-check-input");
    if (checkbox.checked) {
        element.style.textDecorationLine = "line-through";
    } else {
        element.style.textDecorationLine = "none";
    }

    // element.checked = true;
    // element.checked = false;

}



