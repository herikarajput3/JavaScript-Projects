let userContainer = document.querySelector("#userContainer");
let saveBtn = document.querySelector(".saveBtn");

function displayUserList() {
    let userDetails = JSON.parse(localStorage.getItem("user_list"));

    let user_list = "";

    if (userDetails.length === 0) {
        userContainer.innerHTML = `
        <div class="col-md-6">
                <h1 class="text-center fw-bold text-dark">No Data Found</h1>
        </div>
             `
    }

    userDetails.map((items, index) => {
        user_list += `
        <div class="col-4 ">
        <div class="card my-3">
            <div class="card-body">
                <h5 class="card-title">User ID: ${items.user_id}</h5>
                <p class="card-text">User Name: ${items.user_name}</p>
                <button type="button" class="btn btn-primary" onclick="updateUser(${index})" data-bs-toggle="modal"
                                data-bs-target="#exampleModal">Edit</button>
                <button class="btn btn-danger" onclick="deleteTask(${index})">Delete</button>
            </div>
        </div>    
        </div>    
        `
    });
    userContainer.innerHTML = user_list;
}
displayUserList();