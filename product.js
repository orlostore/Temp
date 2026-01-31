// Get product slug from URL
const params = new URLSearchParams(window.location.search);
const slug = params.get("product");

// Convert number to Arabic numerals
function toArabicNumerals(num) {
  const arabicNums = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
  return String(num).split('').map(d => arabicNums[parseInt(d)] || d).join('');
}

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

  // Get threshold from app.js (will be available after app.js loads)
  const threshold = typeof FREE_DELIVERY_THRESHOLD !== 'undefined' ? FREE_DELIVERY_THRESHOLD : 75;
  
  // Update all threshold displays
  document.querySelectorAll('.threshold-value').forEach(el => el.textContent = threshold);
  document.querySelectorAll('.threshold-value-ar').forEach(el => el.textContent = toArabicNumerals(threshold));

  // =====================
  // DESKTOP VERSION
  // =====================
  document.getElementById("productTitle").innerText = product.name;
  document.getElementById("productCategory").innerText = product.category;

  // Build detailed description with bilingual header
  let descriptionHTML = `
    <h3 style="margin-top:1.2rem; display: flex; justify-content: space-between;">
      <span>Description</span>
      <span class="arabic-text" style="font-family: 'Almarai', sans-serif;">معلومات المنتج</span>
    </h3>
    <p>${product.detailedDescription || product.description}</p>
  `;

  if (product.detailedDescriptionAr || product.descriptionAr) {
    descriptionHTML += `<p class="arabic-text" style="margin-top:0.8rem; font-family: 'Almarai', sans-serif; direction: rtl; text-align: right;">${product.detailedDescriptionAr || product.descriptionAr}</p>`;
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

  // Desktop gallery
  const gallery = document.getElementById("gallery");
  if (product.images && product.images.length > 0) {
    const isEmoji = !product.images[0].startsWith('http');
    
    if (isEmoji) {
      gallery.innerHTML = `
        <div class="image-gallery">
          <div class="main-image-container" style="font-size: 100px; display: flex; align-items: center; justify-content: center; height: 300px; background: #f5f5f5; border-radius: 8px;">
            ${product.images[0]}
          </div>
        </div>
      `;
    } else {
      gallery.innerHTML = `
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
                   style="cursor:pointer; object-fit:contain;">
            `).join('')}
          </div>
        </div>
      `;
    }
  }

  // =====================
  // MOBILE VERSION
  // =====================
  document.getElementById("mobileProductTitle").innerText = product.name;
  document.getElementById("mobileProductTitleAr").innerText = product.nameAr || '';
  document.getElementById("mobileProductCategory").innerText = product.category;
  document.getElementById("mobileProductPrice").innerText = product.price + " AED";

  // Mobile carousel
  const mobileCarousel = document.getElementById("mobileCarousel");
  const mobileDots = document.getElementById("mobileDots");
  
  if (product.images && product.images.length > 0) {
    const isEmoji = !product.images[0].startsWith('http');
    
    if (isEmoji) {
      mobileCarousel.innerHTML = `
        <div class="mobile-carousel-slide">
          <div style="font-size: 80px;">${product.images[0]}</div>
        </div>
      `;
      mobileDots.innerHTML = '<div class="mobile-dot active"></div>';
    } else {
      // Create slides
      mobileCarousel.innerHTML = product.images.map((img, index) => `
        <div class="mobile-carousel-slide" data-index="${index}">
          <img src="${img}" alt="${product.name} ${index + 1}">
        </div>
      `).join('');
      
      // Create dots
      mobileDots.innerHTML = product.images.map((_, index) => `
        <div class="mobile-dot ${index === 0 ? 'active' : ''}" data-index="${index}"></div>
      `).join('');
      
      // Setup carousel scroll detection
      setupMobileCarousel();
      
      // Setup gallery click
      setupGalleryOverlay(product);
    }
  }

  // Mobile specs
  const specsSection = document.getElementById("mobileSpecsSection");
  if (product.specifications && product.specifications.length > 0) {
    specsSection.innerHTML = `
      <div class="mobile-specs-title">
        <span>Specifications</span>
        <span class="arabic-text">المواصفات</span>
      </div>
      ${product.specifications.map((spec, i) => `
        <div class="mobile-spec-row">
          <span class="mobile-spec-en">${spec}</span>
          <span class="mobile-spec-ar arabic-text">${product.specificationsAr && product.specificationsAr[i] ? product.specificationsAr[i] : ''}</span>
        </div>
      `).join('')}
    `;
  } else {
    specsSection.style.display = 'none';
  }

  // Mobile description (no header, just content)
  document.getElementById("mobileDescriptionEn").innerText = product.detailedDescription || product.description || '';
  document.getElementById("mobileDescriptionAr").innerText = product.detailedDescriptionAr || product.descriptionAr || '';

  // =====================
  // ADD TO CART BUTTONS
  // =====================
  const addToCartHandler = () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const item = cart.find(i => i.id === product.id);
    
    if (item) {
      item.quantity++;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
    
    localStorage.setItem("cart", JSON.stringify(cart));
    
    // Update cart counts
    const totalItems = cart.reduce((s, i) => s + i.quantity, 0);
    const cartCount = document.getElementById("cartCount");
    const bottomCartCount = document.getElementById("bottomCartCount");
    if (cartCount) cartCount.textContent = totalItems;
    if (bottomCartCount) bottomCartCount.textContent = totalItems;
    
    // Button feedback
    return true;
  };

  // Desktop button
  document.getElementById("addToCartBtn").onclick = function() {
    addToCartHandler();
    const btn = this;
    const originalText = btn.textContent;
    btn.textContent = "✓ Added!";
    btn.style.background = "#28a745";
    setTimeout(() => {
      btn.textContent = originalText;
      btn.style.background = "";
    }, 2000);
  };

  // Mobile button
  document.getElementById("mobileAddToCartBtn").onclick = function() {
    addToCartHandler();
    const btn = this;
    const originalText = btn.textContent;
    btn.textContent = "✓ Added! | تمت الإضافة";
    btn.style.background = "#28a745";
    setTimeout(() => {
      btn.textContent = originalText;
      btn.style.background = "";
    }, 2000);
  };

  // Desktop lightbox
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

// Mobile carousel scroll handler
function setupMobileCarousel() {
  const carousel = document.getElementById('mobileCarousel');
  const dots = document.querySelectorAll('.mobile-dot');
  
  carousel.addEventListener('scroll', () => {
    const scrollLeft = carousel.scrollLeft;
    const slideWidth = carousel.offsetWidth;
    const currentIndex = Math.round(scrollLeft / slideWidth);
    
    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === currentIndex);
    });
  });
  
  // Click on dot to scroll
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      carousel.scrollTo({
        left: index * carousel.offsetWidth,
        behavior: 'smooth'
      });
    });
  });
}

// Gallery overlay (click image to open full gallery)
function setupGalleryOverlay(product) {
  const carousel = document.getElementById('mobileCarousel');
  const overlay = document.getElementById('galleryOverlay');
  const galleryScroll = document.getElementById('galleryScroll');
  const closeBtn = document.getElementById('galleryClose');
  const bottomNav = document.getElementById('mobileBottomNav');
  
  // Click on carousel to open gallery
  carousel.addEventListener('click', () => {
    // Build vertical gallery
    galleryScroll.innerHTML = product.images.map((img, index) => `
      <div class="gallery-image-wrapper">
        <img src="${img}" alt="${product.name} ${index + 1}">
      </div>
    `).join('');
    
    // Show overlay, hide bottom nav
    overlay.classList.add('active');
    bottomNav.style.display = 'none';
    document.body.style.overflow = 'hidden';
  });
  
  // Close gallery
  closeBtn.addEventListener('click', () => {
    overlay.classList.remove('active');
    bottomNav.style.display = '';
    document.body.style.overflow = '';
  });
  
  // Also close on overlay background click
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      overlay.classList.remove('active');
      bottomNav.style.display = '';
      document.body.style.overflow = '';
    }
  });
}

// Change main image (desktop)
window.changeMainImage = function(imgSrc, index) {
  const mainImg = document.getElementById('mainImage');
  mainImg.src = imgSrc;
  
  document.querySelectorAll('.thumbnail').forEach((thumb, i) => {
    thumb.classList.toggle('active', i === index);
  });
};

// Initialize cart count on page load
window.addEventListener('DOMContentLoaded', () => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const totalItems = cart.reduce((s, i) => s + i.quantity, 0);
  
  const cartCount = document.getElementById("cartCount");
  const bottomCartCount = document.getElementById("bottomCartCount");
  if (cartCount) cartCount.textContent = totalItems;
  if (bottomCartCount) bottomCartCount.textContent = totalItems;
});

// Start loading product page
initProductPage();
