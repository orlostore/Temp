// Get product slug from URL
const params = new URLSearchParams(window.location.search);
const slug = params.get("product");

// Wait for products to load, then display
async function initProductPage() {
  // Wait for products to be loaded from Google Sheets
  let attempts = 0;
  while (products.length === 0 && attempts < 50) {
    await new Promise(resolve => setTimeout(resolve, 100));
    attempts++;
  }

  // Find product
  const product = products.find(p => p.slug === slug);

  if (!product) {
    document.body.innerHTML = "<h2 style='text-align:center;padding:2.4rem;'>Product not found</h2>";
    return;
  }

  // Fill product data
  document.getElementById("productTitle").innerText = product.name;
  document.getElementById("productCategory").innerText = product.category;

  // Build detailed description
  let descriptionHTML = `
    <h3 style="margin-top:1.2rem;">Description</h3>
    <p>${product.detailedDescription || product.description}</p>
  `;

  if (product.detailedDescriptionAr) {
    descriptionHTML += `<p class="arabic-text" style="margin-top:0.8rem; font-family: 'Almarai', sans-serif; direction: rtl; text-align: right;">${product.detailedDescriptionAr}</p>`;
  }

  if (product.colors) {
    descriptionHTML += `
      <div style="display:grid; grid-template-columns: 1fr 1fr; gap:1.6rem; margin-top:1.2rem;">
        <div>
          <h3 style="margin:0 0 0.6rem 0;">Available Colors</h3>
          <p style="margin:0;">${product.colors}</p>
        </div>
        <div style="text-align:right;">
          <h3 style="margin:0 0 0.6rem 0; font-family: 'Almarai', sans-serif;">الألوان المتاحة</h3>
          <p style="margin:0; font-family: 'Almarai', sans-serif; direction: rtl;">${product.colorsAr || ''}</p>
        </div>
      </div>
    `;
  }

  if (product.packaging) {
    descriptionHTML += `
      <div style="display:grid; grid-template-columns: 1fr 1fr; gap:1.6rem; margin-top:1.2rem;">
        <div>
          <h3 style="margin:0 0 0.6rem 0;">Packaging</h3>
          <p style="margin:0;">${product.packaging}</p>
        </div>
        <div style="text-align:right;">
          <h3 style="margin:0 0 0.6rem 0; font-family: 'Almarai', sans-serif;">التعبئة والتغليف</h3>
          <p style="margin:0; font-family: 'Almarai', sans-serif; direction: rtl;">${product.packagingAr || ''}</p>
        </div>
      </div>
    `;
  }

  if (product.specifications && product.specifications.length > 0) {
    descriptionHTML += `
      <div style="display:grid; grid-template-columns: 1fr 1fr; gap:1.6rem; margin-top:1.2rem;">
        <div>
          <h3 style="margin:0 0 0.6rem 0;">Specifications</h3>
          <p style="margin:0; line-height:2;">${product.specifications.join('<br>')}</p>
        </div>
        <div style="text-align:right;">
          <h3 style="margin:0 0 0.6rem 0; font-family: 'Almarai', sans-serif;">المواصفات</h3>
          <p style="margin:0; line-height:2; font-family: 'Almarai', sans-serif; direction: rtl;">${product.specificationsAr ? product.specificationsAr.join('<br>') : ''}</p>
        </div>
      </div>
    `;
  }

  document.getElementById("productDescription").innerHTML = descriptionHTML;
  document.getElementById("productPrice").innerText = product.price + " AED";

  // Display images - Amazon-style gallery
  const gallery = document.getElementById("gallery");

  if (product.images && product.images.length > 0) {
    // Check if images are URLs or emojis
    const isEmoji = !product.images[0].startsWith('http');
    
    let galleryHTML;
    if (isEmoji) {
      // Show emoji placeholder
      galleryHTML = `
        <div class="image-gallery">
          <div class="main-image-container" style="font-size: 100px; display: flex; align-items: center; justify-content: center; height: 300px; background: #f5f5f5; border-radius: 8px;">
            ${product.images[0]}
          </div>
        </div>
      `;
    } else {
      // Show actual images
      galleryHTML = `
        <div class="image-gallery">
          <div class="main-image-container">
            <img id="mainImage" src="${product.images[0]}" alt="${product.name}" class="main-product-image">
            <div class="zoom-hint">🔍 Click to zoom</div>
          </div>
          <div class="thumbnail-strip">
            ${product.images.map((img, index) => `
              <img src="${img}" 
                   alt="${product.name} ${index + 1}" 
                   class="thumbnail ${index === 0 ? 'active' : ''}" 
                   onclick="changeMainImage('${img}', ${index})"
                   style="cursor:pointer;">
            `).join('')}
          </div>
        </div>
      `;
    }
    
    gallery.innerHTML = galleryHTML;
  }

  // Setup add to cart button
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
    
    // Button turns green with "✓ Added!"
    const btn = document.getElementById("addToCartBtn");
    const originalText = btn.textContent;
    const originalBg = btn.style.background;
    
    btn.textContent = "✓ Added!";
    btn.style.background = "#28a745";
    
    setTimeout(() => {
      btn.textContent = originalText;
      btn.style.background = originalBg || "";
    }, 2000);
  };

  // Setup lightbox for images
  const mainImg = document.getElementById('mainImage');
  if (mainImg) {
    mainImg.style.cursor = 'zoom-in';
    mainImg.onclick = () => {
      const lightbox = document.createElement('div');
      lightbox.className = 'lightbox';
      lightbox.innerHTML = `
        <div class="lightbox-content">
          <span class="lightbox-close">&times;</span>
          <img src="${mainImg.src}" alt="${product.name}" class="lightbox-image">
        </div>
      `;
      document.body.appendChild(lightbox);
      document.body.style.overflow = 'hidden';
      
      lightbox.onclick = (e) => {
        if (e.target === lightbox || e.target.className === 'lightbox-close') {
          document.body.removeChild(lightbox);
          document.body.style.overflow = 'auto';
        }
      };
    };
  }
}

// Function to change main image when thumbnail clicked
window.changeMainImage = function(imgSrc, index) {
  const mainImg = document.getElementById('mainImage');
  mainImg.src = imgSrc;
  
  // Update active thumbnail
  document.querySelectorAll('.thumbnail').forEach((thumb, i) => {
    thumb.classList.toggle('active', i === index);
  });
};

// Initialize cart count and cart icon click on page load
window.addEventListener('DOMContentLoaded', () => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartCount = document.getElementById("cartCount");
  const bottomCartCount = document.getElementById("bottomCartCount");
  
  const totalItems = cart.reduce((s, i) => s + i.quantity, 0);
  if (cartCount) cartCount.textContent = totalItems;
  if (bottomCartCount) bottomCartCount.textContent = totalItems;
  
  // Setup cart icon click (desktop)
  const cartIcon = document.getElementById("cartIcon");
  const closeCart = document.getElementById("closeCart");
  if (cartIcon) {
    cartIcon.onclick = () => {
      document.getElementById("cartSidebar").classList.toggle("active");
      if (typeof updateCart === 'function') updateCart();
    };
  }
  if (closeCart) {
    closeCart.onclick = () => {
      document.getElementById("cartSidebar").classList.remove("active");
    };
  }
  
  // Setup mobile bottom nav
  const bottomHomeBtn = document.getElementById("bottomHomeBtn");
  const bottomCartBtn = document.getElementById("bottomCartBtn");
  const bottomMenuBtn = document.getElementById("bottomMenuBtn");
  
  if (bottomHomeBtn) {
    bottomHomeBtn.onclick = () => {
      window.location.href = "index.html";
    };
  }
  
  if (bottomCartBtn) {
    bottomCartBtn.onclick = () => {
      document.getElementById("cartSidebar").classList.toggle("active");
      if (typeof updateCart === 'function') updateCart();
    };
  }
  
  if (bottomMenuBtn) {
    bottomMenuBtn.onclick = () => {
      toggleMobileMenuProduct();
    };
  }
});

// Mobile menu toggle for product page
function toggleMobileMenuProduct() {
  let overlay = document.querySelector('.mobile-menu-overlay');
  
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.className = 'mobile-menu-overlay';
    overlay.innerHTML = `
      <div class="mobile-menu">
        <a href="index.html#products"><span class="menu-en">🛍️ Shop</span> | <span class="menu-ar">تسوق</span></a>
        <a href="index.html#about"><span class="menu-en">ℹ️ About</span> | <span class="menu-ar">من نحن</span></a>
        <a href="index.html#contact"><span class="menu-en">📧 Contact</span> | <span class="menu-ar">اتصل بنا</span></a>
        <a href="index.html#terms"><span class="menu-en">📋 Terms</span> | <span class="menu-ar">الشروط</span></a>
      </div>
    `;
    document.body.appendChild(overlay);
    
    overlay.onclick = (e) => {
      if (e.target === overlay) {
        overlay.classList.remove('active');
      }
    };
  }
  
  overlay.classList.toggle('active');
}

// Start loading product page
initProductPage();
