const url = "https://dog.ceo/api/breeds/image/random";

const showData = async () => {
    try {
        const response = await fetch(url);
        const result = await response.json();
        console.log("Data:", result);

        const image = result.message; // Dog image URL
        console.log("Image URL:", image);

        const dogImg = document.getElementById("dog-img");
        dogImg.src = image;

    } catch (error) {
        console.error("Error fetching dog data:", error);
    }
};

// Fetch initial dog data
showData();

// Change dog on button click
const changeDogBtn = document.getElementById("change-dog");
changeDogBtn.addEventListener("click", showData);
location.reload();