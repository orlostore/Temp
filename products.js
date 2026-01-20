// PRODUCT DATA - ADD UP TO 50 PRODUCTS HERE
// To add real product images, replace the emoji with: "images/product1.jpg"

const products = [
    {
        id: 1,
        name: "Cable Management Kit",
        description: "315 PCS Fast Adhesive Cable Organizer for Home and Office",
        price: 65,
        image: "📦"
    },
    {
        id: 2,
        name: "Wireless Charging Stand",
        description: "Fast charging stand compatible with all Qi devices",
        price: 120,
        image: "📱"
    },
    {
        id: 3,
        name: "LED Strip Lights",
        description: "RGB Smart LED Strip 5M with Remote Control",
        price: 95,
        image: "💡"
    },
    {
        id: 4,
        name: "Car Phone Holder",
        description: "Magnetic premium quality mount for dashboard",
        price: 85,
        image: "🚗"
    },
    {
        id: 5,
        name: "Bluetooth Speaker",
        description: "Portable wireless speaker with 12-hour battery",
        price: 150,
        image: "🔊"
    },
    {
        id: 6,
        name: "Laptop Stand",
        description: "Ergonomic aluminum adjustable laptop stand",
        price: 110,
        image: "💻"
    },
    {
        id: 7,
        name: "Desk Organizer",
        description: "Multi-compartment desk organizer with phone holder",
        price: 75,
        image: "📋"
    },
    {
        id: 8,
        name: "USB Hub",
        description: "7-Port USB 3.0 Hub with individual power switches",
        price: 90,
        image: "🔌"
    }
    // ADD MORE PRODUCTS HERE
    // Copy the format above and change id, name, description, price, and image
    // Example:
    // {
    //     id: 9,
    //     name: "Product Name",
    //     description: "Product description here",
    //     price: 99,
    //     image: "🎁"
    // },
];

// Load products on page load
function loadProducts() {
    const grid = document.getElementById('productsGrid');
    grid.innerHTML = products.map(product => `
        <div class="product-card">
            <div class="product-image">${product.image}</div>
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-price">${product.price} AED</div>
                <button class="add-to-cart" onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        </div>
    `).join('');
}

// Initialize products when page loads
document.addEventListener('DOMContentLoaded', loadProducts);