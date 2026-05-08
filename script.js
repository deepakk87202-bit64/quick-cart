// Theme Toggle Logic
const themeBtn = document.getElementById('theme-toggle');
const body = document.body;

themeBtn.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    
    if (body.classList.contains('dark-theme')) {
        themeBtn.textContent = '☀️ Light Mode';
    } else {
        themeBtn.textContent = '🌙 Dark Mode';
    }
});

// Mock Data for Products (Similar to Meesho's variety)
const products = [
    { id: 1, name: "Modern Blue Watch", price: "₹499", img: "https://via.placeholder.com/200" },
    { id: 2, name: "Casual White Sneakers", price: "₹899", img: "https://via.placeholder.com/200" },
    { id: 3, name: "Minimalist Black Wallet", price: "₹299", img: "https://via.placeholder.com/200" },
    { id: 4, name: "Tech Backpack", price: "₹1,299", img: "https://via.placeholder.com/200" }
];

const grid = document.getElementById('product-grid');

// Function to render products
function displayProducts() {
    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p style="color: var(--primary-blue); font-weight: bold;">${product.price}</p>
            <button class="cta-btn" onclick="addToCart()">Add to Cart</button>
        `;
        grid.appendChild(card);
    });
}

let count = 0;
function addToCart() {
    count++;
    document.getElementById('cart-count').innerText = count;
}

// Initialize
displayProducts();
