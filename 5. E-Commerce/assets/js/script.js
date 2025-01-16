const API_URL = "https://fakestoreapi.com/products";
let allProducts = [];

const fetchProducts = async () => {
    let productRow = document.querySelector("#productRow");
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
                        <button class="btn btn-primary mt-auto addToCart" data-product-id="${product.id}" >Add to Cart</button>
                    </div>
                </div>
            </div>`;
        });
        productRow.innerHTML = productCard;

        // Add event listeners for the "Add to Cart" buttons
        let addToCartBtns = document.querySelectorAll(".addToCart");
        addToCartBtns.forEach(button => {
            button.addEventListener("click", () => {
                const productID = button.getAttribute('data-product-id'); // Fix the selector here
                addToCart(productID);
            });
        });

    } catch (error) {
        productRow.innerHTML = `<p class="text-danger">Failed to load products. Please try again later.</p>`;
        console.error("Error fetching products:", error);
    }
};

fetchProducts();



