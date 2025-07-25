const products = [
    { name: "Smartphone", price: 299, category: "electronics" },
    { name: "Laptop", price: 899, category: "electronics" },
    { name: "T-Shirt", price: 19, category: "clothing" },
    { name: "Jeans", price: 49, category: "clothing" },
    { name: "Headphones", price: 99, category: "electronics" },
];

function displayProducts(filteredProducts) {
    const grid = document.getElementById('productGrid');
    grid.innerHTML = '';
    filteredProducts.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <h3>${product.name}</h3>
            <p>Category: ${product.category}</p>
            <p>Price: $${product.price}</p>
        `;
        grid.appendChild(card);
    });
}

function filterProducts() {
    const category = document.getElementById('categoryFilter').value;
    const sortOption = document.getElementById('sortOption').value;
    let filtered = [...products];

    if (category !== "all") {
        filtered = filtered.filter(p => p.category === category);
    }

    if (sortOption === "price-asc") {
        filtered.sort((a, b) => a.price - b.price);
    } else if (sortOption === "price-desc") {
        filtered.sort((a, b) => b.price - a.price);
    }

    displayProducts(filtered);
}

document.addEventListener('DOMContentLoaded', () => {
    displayProducts(products);
});