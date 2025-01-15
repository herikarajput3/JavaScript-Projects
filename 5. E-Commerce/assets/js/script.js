let productRow = document.querySelector("#productRow");
const API_URL = "https://fakestoreapi.com/products";


fetch(API_URL)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(products => {
        productRow.innerHTML = "";
        let productCard = "";

        products.map(product => {
            productCard += `
            <div class="col-md-3 mb-4">
                <div class="product-card">
                <img src="${product.image}" class="product-image img-fluid" alt="${product.title}">
                    <div class="p-3">
                        <h5 class="product-title">${product.title}</h5>
                        <p class="card-text">${product.description.substring(0, 100)}...</p>
                        <p class="product-price"> &dollar;${product.price}</p>
                        <button class="btn btn-primary">Add to Cart</button>
                    </div>
                </div>
            </div>`

            productRow.innerHTML = productCard;
        });
    })
