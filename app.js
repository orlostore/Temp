const products = [
  { id: 1, name: "Cable Management Kit", price: 65 },
  { id: 2, name: "Wireless Charging Stand", price: 120 },
  { id: 3, name: "LED Strip Lights", price: 95 },
  { id: 4, name: "Laptop Stand", price: 110 }
];

const productsGrid = document.getElementById("productsGrid");
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const hero = document.getElementById("hero");

const cartSidebar = document.getElementById("cartSidebar");
const cartItems = document.getElementById("cartItems");
const cartCount = document.getElementById("cartCount");

let cart = [];

/* ===== RENDER PRODUCTS ===== */
function renderProducts(list) {
  productsGrid.innerHTML = "";
  list.forEach(p => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <h4>${p.name}</h4>
      <p>${p.price} AED</p>
      <button onclick="addToCart(${p.id})">Add to Cart</button>
    `;
    productsGrid.appendChild(div);
  });
}

/* ===== SEARCH ===== */
function searchProducts() {
  const q = searchInput.value.toLowerCase();
  hero.style.display = "none";
  renderProducts(products.filter(p => p.name.toLowerCase().includes(q)));
}

searchBtn.onclick = searchProducts;
searchInput.addEventListener("keydown", e => {
  if (e.key === "Enter") searchProducts();
});

/* ===== CART ===== */
function addToCart(id) {
  cart.push(products.find(p => p.id === id));
  cartCount.textContent = cart.length;
  openCart();
  renderCart();
}

function renderCart() {
  cartItems.innerHTML = cart.map(p => `<p>${p.name} – ${p.price} AED</p>`).join("");
}

function openCart() {
  cartSidebar.classList.add("open");
}

document.getElementById("cartIcon").onclick = openCart;
document.getElementById("closeCart").onclick = () =>
  cartSidebar.classList.remove("open");

/* ===== LOGO HOME ===== */
document.getElementById("logo").onclick = () => {
  hero.style.display = "block";
  searchInput.value = "";
  renderProducts(products);
};

/* INIT */
renderProducts(products);
