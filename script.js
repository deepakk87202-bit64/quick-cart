const themeToggle = document.getElementById('themeToggle');

// Theme Toggle

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');

    if(document.body.classList.contains('dark')){
        themeToggle.innerHTML = '☀️';
    }
    else{
        themeToggle.innerHTML = '🌙';
    }
});


// Smooth Button Animation
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'scale(1.05)';
    });

    button.addEventListener('mouseleave', () => {
        button.style.transform = 'scale(1)';
    });
});


// Demo Cart Alert
const cartButtons = document.querySelectorAll('.product-card button');

cartButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        alert('Product added to cart successfully!');
    });
});
