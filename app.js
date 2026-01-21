const products = [
  { id: 1, name: "Cable Management Kit", price: 65 },
  { id: 2, name: "Wireless Charging Stand", price: 120 },
  { id: 3, name: "LED Strip Lights", price: 95 },
  { id: 4, name: "Laptop Stand", price: 110 }
];

let cart = [];

const productsDiv = document.getElementById("products");
const cartDiv = document.getElementById("cart");
const cartItemsDiv = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const cartCount = document.getElementById("cartCount");

function renderProducts(list = products) {
  productsDiv.innerHTML = "";
  list.forEach(p => {
    productsDiv.innerHTML += `
      <div class="product">
        <h4>${p.name}</h4>
        <p>${p.price} AED</p>
        <button onclick="addToCart(${p.id})">Add to Cart</button>
      </div>
    `;
  });
}

function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  updateCart();
  toggleCart(true);
}

function updateCart() {
  cartItemsDiv.innerHTML = "";
  let total = 0;
  cart.forEach(item => {
    total += item.price;
    cartItemsDiv.innerHTML += `<p>${item.name} - ${item.price} AED</p>`;
  });
  cartTotal.textContent = total;
  cartCount.textContent = cart.length;
}

function toggleCart(forceOpen = false) {
  if (forceOpen) cartDiv.classList.add("open");
  else cartDiv.classList.toggle("open");
}

function searchProducts() {
  const term = document.getElementById("searchInput").value.toLowerCase();
  renderProducts(products.filter(p => p.name.toLowerCase().includes(term)));
}

document.getElementById("searchInput").addEventListener("keydown", e => {
  if (e.key === "Enter") searchProducts();
});

function goHome() {
  document.getElementById("searchInput").value = "";
  renderProducts();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function scrollToProducts() {
  document.querySelector(".container").scrollIntoView({ behavior: "smooth" });
}

/* POLICIES */
const policies = {
  shipping: "Delivery across UAE in 2–3 business days.",
  returns: "Returns accepted within 7 days.",
  privacy: "Your data is never shared.",
  terms: "Using ORLO means fair use and honesty."
};

function openPolicy(type) {
  document.getElementById("policyTitle").textContent = type.toUpperCase();
  document.getElementById("policyText").textContent = policies[type];
  document.getElementById("policyModal").style.display = "block";
}

function closePolicy() {
  document.getElementById("policyModal").style.display = "none";
}

renderProducts();
