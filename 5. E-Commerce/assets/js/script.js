let productRow = document.querySelector("#productRow");
const API_URL = "https://fakestoreapi.com/products";
let allProducts = [];

const fetchProducts = async () => {
    try {
        // loader
        let skeleton = `
        <div class="col-md-3 mb-4">
            <div class="border rounded p-3 d-flex flex-column">
                <div class="product-image bg-body-secondary rounded" style="aspect-ratio: 1;"></div>
                    <div class="p-3 d-flex flex-column flex-grow-1">
                        <div class="product-title h-4 bg-body-secondary rounded w-75"></div>
                        <div class="card-text h-4 bg-body-secondary rounded w-100 mt-2"></div>
                        <div class="product-price h-4 bg-body-secondary rounded w-50 mt-2"></div>
                        <div class="h-10 bg-body-secondary rounded mt-2"></div>
                    </div>
                </div>
            </div>
        </div> 
        `;
        productRow.innerHTML = skeleton.repeat(8);

        // fetch data from URL
        const data = await fetch(API_URL);

        if (!data.ok) {
            console.log(`Error!! status: ${data.status}`);
        }

        allProducts = await data.json();

        let productCard = "";
        productRow.innerHTML = "";
        allProducts.map((product) => {
            productCard += `
            <div class="col-md-3 mb-4">
                <div class="product-card border rounded p-3 d-flex flex-column">
                    <img src="${product.image}" class="product-image img-fluid rounded" alt="${product.title}">
                    <div class="p-3 d-flex flex-column flex-grow-1">
                        <h5 class="product-title">${product.title}</h5>
                        <p class="card-text">${product.description}</p>
                        <p class="product-price fw-bold">Price: &dollar;${product.price}</p>
                        <button class="btn btn-primary mt-auto" onclick="addToCart(${product.id})">Add to Cart</button>
                    </div>
                </div>
            </div>`;

            productRow.innerHTML = productCard;
        });

    } catch (error) {
        productRow.innerHTML = `<p class="text-danger">Failed to load products. Please try again later.</p>`;
        console.error("Error fetching products:", error);
    }


}

fetchProducts();


let cartItems = document.querySelector("#cartItems"); // From cart.html
let cartBtn = document.querySelector(".cartBtn");

function addToCart(productID) {

    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Product details
    const product = allProducts.find((item) => {
        return item.id === productID;
    })

    // if product exist
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    // alert(`${product.title} is added to the cart`)
    cartCount();
}

function cartCount() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    let total = 0
    cart.forEach(counter => {
        total += counter.quantity;
    });

    document.querySelector("#cartCount").textContent = total;

}




