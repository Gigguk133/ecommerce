// Product data array
const products = [
    {
        name: "Plain Black Hoodie",
        price: 2513,
        image: "black hoodie.jpg"
    },
    {
        name: "Plain Brown Hoodie",
        price: 2513,
        image: "brown hoodie.jpg"
    },
    {
        name: "Bluetooth Speaker",
        price: 2513,
        image: "grey hoodie.webp"
    },
    
];

// Shopping cart array
let cart = [];

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
});

// Render products to the DOM
function renderProducts() {
    const productsContainer = document.getElementById('products');
    
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'product';
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>₱${product.price.toFixed(2)}</p>
            </div>
            <button class="add-to-cart">Add to Cart</button>
        `;

        productElement.querySelector('.add-to-cart')
            .addEventListener('click', () => addToCart(product));
        
        productsContainer.appendChild(productElement);
    });
}

// Add product to cart
function addToCart(product) {
    cart.push(product);
    updateCartDisplay();
}

// Update cart display
function updateCartDisplay() {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    
    // Clear current cart items
    cartItemsContainer.innerHTML = '';
    
    // Add current cart items
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <span>${item.name}</span>
            <span>₱${item.price.toFixed(2)}</span>
        `;
        cartItemsContainer.appendChild(cartItem);
    });

    // Calculate and display total
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    totalPriceElement.textContent = total.toFixed(2);
}
