const products = [
    { productName: "Vegetable", description: "Very nutrious", price: 1000 },
    { productName: "Fruits", description: "very healthy", price: 800 },
    { productName: "ice cream", description: "Sweet but eat in moderation!", price: 600 },
];

function fetchProducts() {
    return products.map(product => ({
        name: product.productName,
        description: product.description,
        price: product.price
    }));
}

function displayProducts() {
    const container = document.getElementById('products-container');
    
    fetchProducts().forEach(product => {
        const card = document.createElement('div');
        card.innerHTML = `
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>$${product.price}</p>
            
        `;
        container.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', displayProducts);