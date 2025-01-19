document.addEventListener("DOMContentLoaded", () => {

    cartShow();
    cartCount();

    let addToCartBtn = document.querySelectorAll(".addToCart");

    addToCartBtn.forEach(button => {
        button.addEventListener("click", () => {
            const productID = button.getAttribute('data-product-id');
            addToCart(productID);
        });
    });
});

function cartCount() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    let total = 0;
    cart.forEach(counter => {
        total += counter.quantity;
    });
    document.querySelector("#cartCount").textContent = total;
}

function addToCart(productID) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const product = allProducts.find((item) => item.id === parseInt(productID)); // Ensure correct comparison

    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`You successfully added ${product.title}to the cart`);
    cartCount();
    cartShow();
}

function cartShow() {
    let products = JSON.parse(localStorage.getItem("cart"));
    let cartRow = document.querySelector("#cartRow");

    if (!cartRow) {
        return;
    }

    if (products.length === 0) {
        cartRow.innerHTML = "<p>Your cart is empty</p>";
        return;
    }

    let cartProduct = "";
    let totalPrice = 0;

    // Render cart products and calculate the total price
    products.map((item) => {
        const productTotal = item.price * item.quantity;
        totalPrice += productTotal;

        cartProduct += `
        <div class="col-md-3 mb-4">
            <div class="product-card border rounded p-3 d-flex flex-column">
                <img src="${item.image}" class="product-image img-fluid rounded" alt="${item.title}">
                <div class="p-3 d-flex flex-column flex-grow-1">
                    <h5 class="product-title">${item.title}</h5>
                    <p class="card-text">${item.description}</p>
                    <p class="product-price fw-bold">Price: &dollar;${item.price}</p>
                    <p class="product-quantity p-2 d-flex justify-content-between fs-5" style="border-style: outset;">
                        <i class="fa-solid fa-plus btn" onclick="increaseQty(${item.id})"></i> 
                        ${item.quantity} 
                        <i class="fa-solid fa-minus btn" onclick="reduceQty(${item.id})"></i>
                    </p>
                    <button class="btn btn-danger mt-auto" onclick="removeFromCart(${item.id})">Remove</button>
                </div>
            </div>
        </div>`;
    });

    // Calculate delivery charges based on total price
    let deliveryCharges = totalPrice < 500 ? 50 : 0;
    let grandTotal = totalPrice + deliveryCharges;

    // Add total price, delivery charges, and grand total
    cartProduct += `
        <div class="col-12 mt-4">
            <div class="border p-3">
                <div class="d-flex justify-content-between">
                    <span>Items: </span>
                    <span>&dollar;${totalPrice.toFixed(2)}</span>
                </div>
                <div class="d-flex justify-content-between">
                    <span>Delivery Charges: </span>
                    <span>&dollar;${deliveryCharges}</span>
                </div>
                <hr>
                <div class="d-flex justify-content-between">
                    <strong>Total Price: </strong>
                    <strong>&dollar;${grandTotal.toFixed(2)}</strong>
                </div>

                <div class=" d-flex justify-content-center">
                <button class="btn btn-warning mt-3 w-50 d-flex justify-content-center rounded-pill" onclick="proceedToBuy()">Proceed to Buy</button>
                </div>
            </div>
        </div>
    `;

    cartRow.innerHTML = cartProduct;
}

function proceedToBuy() {
    alert("Order placed, thank you!");
    localStorage.removeItem("cart"); 
    cartCount(); 
    cartShow(); 
}

function increaseQty(id) {
    const cart = JSON.parse(localStorage.getItem("cart"));
    const item = cart.find((product) => product.id === id);
    if (item) {
        item.quantity += 1;
        localStorage.setItem("cart", JSON.stringify(cart));
        cartCount();
        cartShow();
    }
}

function reduceQty(id) {
    const cart = JSON.parse(localStorage.getItem("cart"));
    const item = cart.find((product) => product.id === id);
    if (item && item.quantity > 1) {
        item.quantity -= 1;
        localStorage.setItem("cart", JSON.stringify(cart));
        cartCount();
        cartShow();
    }
}

function removeFromCart(id) {
    const cart = JSON.parse(localStorage.getItem("cart"));
    const updatedCart = cart.filter(item => item.id !== id);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    cartCount();
    cartShow();
}
