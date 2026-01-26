// Get product slug from URL
const params = new URLSearchParams(window.location.search);
const slug = params.get("product");

// Find product
const product = products.find(p => p.slug === slug);

if (!product) {
  document.body.innerHTML = "<h2 style='text-align:center;padding:3rem;'>Product not found</h2>";
  throw new Error("Product not found");
}

// Fill product data
document.getElementById("productTitle").innerText = product.name;
document.getElementById("productCategory").innerText = product.category;
document.getElementById("productDescription").innerText = product.description;
document.getElementById("productPrice").innerText = product.price + " AED";

// Display images
const gallery = document.getElementById("gallery");
gallery.innerHTML = product.images
  .map(img => `<img src="${img}" alt="${product.name}" style="font-size:80px; text-align:center; display:block; margin:1rem auto;">`)
  .join("");

// Add to cart functionality (uses same cart logic as main page)
document.getElementById("addToCartBtn").onclick = () => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const item = cart.find(i => i.id === product.id);
  if (item) {
    item.quantity++;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  
  // Update cart count if element exists
  const cartCount = document.getElementById("cartCount");
  if (cartCount) {
    const totalItems = cart.reduce((s, i) => s + i.quantity, 0);
    cartCount.textContent = totalItems;
  }
  
  alert(`${product.name} added to cart!`);
};

// Initialize cart count on page load
window.addEventListener('DOMContentLoaded', () => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartCount = document.getElementById("cartCount");
  if (cartCount) {
    const totalItems = cart.reduce((s, i) => s + i.quantity, 0);
    cartCount.textContent = totalItems;
  }
});
