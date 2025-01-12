let user_form = document.querySelector(".user_form");
let user_id = document.querySelector(".user_id");
let user_name = document.querySelector(".user_name");

user_form.addEventListener("submit", (e) => {
    e.preventDefault();
    let user_detail = {
        user_id: user_id.value,
        user_name: user_name.value
    }
    let user_list = JSON.parse(localStorage.getItem("user_list")) || [];
    user_list.push(user_detail);
    localStorage.setItem("user_list", JSON.stringify(user_list));

    user_id.value = "";
    user_name.value = "";


})