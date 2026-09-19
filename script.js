// ================================
// MIAA HUT SHOPPING CART
// ================================

let cart = [];


// ADD ITEM TO CART
function addToCart(name, price) {

    cart.push({
        name: name,
        price: price
    });

    updateCart();

    alert(name + " has been added to your cart! 🍕");
}


// UPDATE CART
function updateCart() {

    const cartCount =
        document.getElementById("cartCount");

    const cartItems =
        document.getElementById("cartItems");

    const cartTotal =
        document.getElementById("cartTotal");


    // Update number of items
    cartCount.textContent = cart.length;


    // Empty cart
    if (cart.length === 0) {

        cartItems.innerHTML = `
            <p class="empty-cart">
                Your cart is empty.
            </p>
        `;

        cartTotal.textContent = "0";

        return;
    }


    let total = 0;

    cartItems.innerHTML = "";


    // Show cart items
    cart.forEach(function(item, index) {

        total += item.price;


        cartItems.innerHTML += `

            <div class="cart-item">

                <span>
                    ${item.name}
                </span>

                <strong>
                    Rs. ${item.price}
                </strong>

            </div>

        `;

    });


    // Show total
    cartTotal.textContent = total;
}


// OPEN CART
function openCart() {

    document.getElementById(
        "cartOverlay"
    ).style.display = "flex";

}


// CLOSE CART
function closeCart() {

    document.getElementById(
        "cartOverlay"
    ).style.display = "none";

}


// OFFER BUTTON
function showOffer() {

    alert(
        "🎉 MIAA HUT SPECIAL OFFER!\n\n" +
        "You can get 20% OFF on large pizzas.\n\n" +
        "Use code: MIAA20"
    );

}


// CHECKOUT
function checkout() {

    if (cart.length === 0) {

        alert(
            "Your cart is empty! 🍕\n\n" +
            "Please add some delicious food first."
        );

        return;
    }


    let total = cart.reduce(
        function(sum, item) {
            return sum + item.price;
        },
        0
    );


    alert(
        "Thank you for ordering from MIAA HUT! ❤️\n\n" +
        "Your total is Rs. " + total +
        "\n\nCheckout/payment can be connected later."
    );

}