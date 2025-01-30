// const form = document.querySelector("form");
// const input = document.querySelector("#taskInput");
// const ul = document.querySelector("#ul");

// form.addEventListener("submit", (e) => {
//     e.preventDefault();

//     const taskText = input.value.trim();
//     if (taskText) {
//         const li = document.createElement("li");
//         li.style.display = "flex";
//         li.style.justifyContent = "space-between";
//         li.style.alignItems = "center";

//         li.innerHTML = `
//                     <span class="m-2">${taskText}</span>
//                     <div>
//                         <button class="btn btn-success btn-sm ms-2" id="done-btn">Done</button>
//                         <button class="btn btn-danger btn-sm ms-2" id="remove-btn">Remove</button>
//                     </div>
//                 `;
//         ul.appendChild(li);

//         const doneBtn = li.querySelector("#done-btn");
//         const removeBtn = li.querySelector("#remove-btn");

//         doneBtn.addEventListener("click", () => {
//             const span = li.querySelector("span");
//             span.style.textDecoration = "line-through";  // Apply line-through using inline style
//         });

//         removeBtn.addEventListener("click", () => {
//             li.remove();
//         });

//         input.value = "";
//     }
// });


let form = document.querySelector("form");
let input = document.querySelector("#taskInput");
let ul = document.querySelector("#ul");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const taskText = input.value.trim();

    let li = document.createElement("li");
    li.style.display = "flex";
    li.style.justifyContent = "space-between";
    li.style.alignItems = "center";
    li.innerHTML =
        `
        <span>${taskText}</span>
        <div>
            <button class="btn btn-success doneBtn" id="">Done</button>
            <button class="btn btn-danger removeBtn" id="">Remove</button>
        </div>
    `;

    ul.appendChild(li);
    input.value = "";

    const doneBtn = li.querySelector(".doneBtn");
    doneBtn.addEventListener("click", (e) => {
        e.preventDefault();
        let span = li.querySelector("span");
        span.style.textDecoration = "line-through";
    })

})