// MIAA HUT SHOPPING CART

let cart = [];

// Add item to cart
function addToCart(name, price) {
    cart.push({
        name: name,
        price: price
    });

    updateCart();

    alert(name + " has been added to your cart! 🍕");
}

// Update cart display
function updateCart() {
    const cartCount = document.getElementById("cartCount");
    const cartItems = document.getElementById("cartItems");
    const cartTotal = document.getElementById("cartTotal");

    if (!cartCount || !cartItems || !cartTotal) {
        console.log("Cart elements not found");
        return;
    }

    cartCount.textContent = cart.length;

    if (cart.length === 0) {
        cartItems.innerHTML =
            '<p class="empty-cart">Your cart is empty.</p>';

        cartTotal.textContent = "0";
        return;
    }

    cartItems.innerHTML = "";

    let total = 0;

    cart.forEach((item) => {
        total += item.price;

        const itemElement = document.createElement("p");
        itemElement.textContent =
            `${item.name} - Rs. ${item.price}`;

        cartItems.appendChild(itemElement);
    });

    cartTotal.textContent = total;
}

// Open cart popup
function openCart() {
    document.getElementById("cartOverlay").style.display = "flex";
}

// Close cart popup
function closeCart() {
    document.getElementById("cartOverlay").style.display = "none";
}

// Checkout
function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    alert("Order placed successfully! 🎉");

    cart = [];
    updateCart();
    closeCart();
}

// Offer button
function showOffer() {
    alert("🎁 Coupon Code: MIAA20");
}

// Run when page loads
window.onload = function () {
    updateCart();
};