// Toggle Light/Dark Mode
const modeToggle = document.getElementById('mode-toggle');
const body = document.body;

modeToggle.addEventListener('change', () => {
    body.classList.toggle('dark-theme');
});

// Sample Product Data
const products = [
    { name: "Blue Casual Shirt", price: "₹499", image: "https://via.placeholder.com/200x250/00a8e8/ffffff?text=Shirt" },
    { name: "Classic Watch", price: "₹1,299", image: "https://via.placeholder.com/200x250/1a1a1a/ffffff?text=Watch" },
    { name: "Running Shoes", price: "₹899", image: "https://via.placeholder.com/200x250/e3f2fd/1a1a1a?text=Shoes" },
    { name: "Wireless Earbuds", price: "₹1,599", image: "https://via.placeholder.com/200x250/00a8e8/ffffff?text=Audio" }
];

const container = document.getElementById('product-container');

// Function to render products
function loadProducts() {
    products.forEach(item => {
        const card = `
            <div class="product-card">
                <img src="${item.image}" alt="${item.name}">
                <h3>${item.name}</h3>
                <p style="color: var(--primary-blue); font-weight: bold; margin: 10px 0;">${item.price}</p>
                <button class="btn-primary" style="padding: 8px 15px; font-size: 0.8rem;">Add to Cart</button>
            </div>
        `;
        container.innerHTML += card;
    });
}

window.onload = loadProducts;