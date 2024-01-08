// Sample product data (replace with your actual data)
const products = [
    { id: 1, name: 'Product 1', price: 19.99, image: 'product1.jpg' },
    { id: 2, name: 'Product 2', price: 29.99, image: 'product2.jpg' },
    // Add more products as needed
];

// Function to render product cards
function renderProducts() {
    const productList = document.getElementById('product-list');

    products.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('product-card');

        const img = document.createElement('img');
        img.src = product.image;
        img.alt = product.name;
        img.classList.add('product-img');

        const name = document.createElement('h2');
        name.textContent = product.name;

        const price = document.createElement('p');
        price.textContent = `$${product.price.toFixed(2)}`;

        const buyButton = document.createElement('a');
        buyButton.href = '#'; // Add actual link or use onClick event
        buyButton.textContent = 'Buy';
        buyButton.classList.add('button');

        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(price);
        card.appendChild(buyButton);

        productList.appendChild(card);
    });
}

// Call the function to render products when the page loads
window.onload = renderProducts;
