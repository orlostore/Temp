/* ===================== STATE ===================== */
let cart = [];
let currentCategory = "All";

/* ===================== ELEMENTS ===================== */
const searchInput = document.querySelector(".search-input");
const searchBtn = document.querySelector(".search-btn");
const productsGrid = document.querySelector(".products-grid");
const heroSection = document.querySelector(".hero");
const cartSidebar = document.querySelector(".cart-sidebar");
const cartIcon = document.querySelector(".cart-icon");
const cartCount = document.querySelector(".cart-count");
const logo = document.querySelector(".logo-img");

/* ===================== PRODUCTS ===================== */
const products = [
  {
    id: 1,
    name: "Cable Management Kit",
    category: "Workspace",
    price: 65,
    icon: "📦"
  },
  {
    id: 2,
    name: "Wireless Charging Stand",
    category: "Phone Accessories",
    price: 120,
    icon: "📱"
  },
  {
    id: 3,
    name: "LED Strip Lights",
    category: "Home",
    price: 95,
    icon: "💡"
  },
  {
    id: 4,
    name: "Laptop Stand",
    category: "Workspace",
    price: 110,
    icon: "💻"
  }
];

/* ===================== RENDER ===================== */
function renderProducts(list) {
  productsGrid.innerHTML = "";

  list.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML = `
      <div class="product-image">${product.icon}</div>
      <div class="product-info">
        <div class="product-title">${product.name}</div>
        <div class="product-price">${product.price} AED</div>
        <button class="add-to-cart">Add to Cart</button>
      </div>
    `;

    card.querySelector(".add-to-cart").addEventListener("click", () => {
      addToCart(product);
    });

    productsGrid.appendChild(card);
  });
}

/* ===================== CART ===================== */
function addToCart(product) {
  cart.push(product);
  cartCount.textContent = cart.length;
  openCart(); // 🔥 FIX #3
}

function openCart() {
  cartSidebar.classList.add("active");
}

function closeCart() {
  cartSidebar.classList.remove("active");
}

/* ===================== SEARCH ===================== */
function runSearch() {
  const query = searchInput.value.toLowerCase().trim();

  if (!query) {
    heroSection.style.display = "block";
    renderProducts(products);
    return;
  }

  heroSection.style.display = "none";

  const results = products.filter(p =>
    p.name.toLowerCase().includes(query)
  );

  renderProducts(results);
}

/* 🔥 FIX #2 — ENTER KEY SUPPORT */
searchInput.addEventListener("keydown", e => {
  if (e.key === "Enter") {
    runSearch();
  }
});

searchBtn.addEventListener("click", runSearch);

/* ===================== LOGO CLICK (HOME) ===================== */
/* 🔥 FIX #1 */
logo.addEventListener("click", () => {
  searchInput.value = "";
  heroSection.style.display = "block";
  renderProducts(products);
  window.scrollTo({ top: 0, behavior: "smooth" });
});

/* ===================== CART ICON ===================== */
cartIcon.addEventListener("click", openCart);

/* ===================== INIT ===================== */
renderProducts(products);
