const products = [
  { id: 1, name: "Cable Management Kit", price: 89, category: "Home", image: "📦" },
  { id: 2, name: "Laptop Stand", price: 129, category: "Home", image: "💻" },
  { id: 3, name: "Wireless Charger", price: 119, category: "Phone", image: "📱" },
  { id: 4, name: "Bluetooth Speaker", price: 159, category: "Electronics", image: "🔊" }
];

let cart = [];
let searching = false;

const grid = document.getElementById("productsGrid");
const filters = document.getElementById("categoryFilters");
const hero = document.getElementById("hero");
const about = document.getElementById("about");

function renderGrid(list, rowMode = false) {
  grid.innerHTML = "";
  list.forEach(p => {
    grid.innerHTML += rowMode
      ? `<div class="product-row">
           <div class="product-img">${p.image}</div>
           <div>
             <h3>${p.name}</h3>
             <p>${p.category}</p>
             <strong>${p.price} AED</strong>
           </div>
         </div>`
      : `<div class="product-card">
           <div>${p.image}</div>
           <h3>${p.name}</h3>
           <strong>${p.price} AED</strong>
         </div>`;
  });
}

function renderCategories() {
  const cats = ["All", ...new Set(products.map(p => p.category))];
  filters.innerHTML = cats.map(c =>
    `<button onclick="filterCategory('${c}')">${c}</button>`
  ).join("");
}

function filterCategory(cat) {
  searching = false;
  hero.style.display = "block";
  about.style.display = "block";
  renderGrid(cat === "All" ? products : products.filter(p => p.category === cat));
}

function searchProducts() {
  const term = document.getElementById("searchInput").value.toLowerCase();
  searching = true;
  hero.style.display = "none";
  about.style.display = "none";
  renderGrid(products.filter(p => p.name.toLowerCase().includes(term)), true);
}

document.getElementById("searchBtn").onclick = searchProducts;
document.getElementById("homeBtn").onclick = () => filterCategory("All");

function openPolicy(type) {
  const text = {
    shipping: "UAE delivery in 1–3 days.",
    returns: "7-day returns.",
    privacy: "Your data is safe.",
    terms: "Fair use applies."
  };
  document.getElementById("policyContent").innerHTML =
    `<h2>${type.toUpperCase()}</h2><p>${text[type]}</p>`;
  document.getElementById("policyModal").style.display = "block";
}

function closePolicy() {
  document.getElementById("policyModal").style.display = "none";
}

renderCategories();
renderGrid(products);
