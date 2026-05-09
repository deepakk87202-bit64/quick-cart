/* ============================================================
   QuickCart – script.js
   Author  : Deepak
   Features: Theme Toggle, Slider, Cart, Products, Timer, Modal
   ============================================================ */

'use strict';

/* ── PRODUCT DATA ─────────────────────────────────────────── */
const ALL_PRODUCTS = [
  // WOMEN
  { id:1,  name:"Embroidered Floral Kurti",       brand:"QuickStyle",  category:"women",      price:399,  original:899,  rating:4.5, reviews:2340, badge:"Best Seller", image:"https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400&q=80", sizes:["XS","S","M","L","XL"] },
  { id:2,  name:"Georgette Banarasi Saree",        brand:"Ethnic Hub",  category:"women",      price:799,  original:1999, rating:4.7, reviews:1820, badge:"Trending",    image:"https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=400&q=80", sizes:["Free"] },
  { id:3,  name:"Cotton Anarkali Suit",            brand:"FashionQ",    category:"women",      price:599,  original:1299, rating:4.3, reviews:980,  badge:"Sale",        image:"https://images.unsplash.com/photo-1594938298603-c8148c4b5d2a?w=400&q=80", sizes:["S","M","L","XL","XXL"] },
  { id:4,  name:"Chiffon Wrap Dress",              brand:"StyleUp",     category:"women",      price:449,  original:999,  rating:4.6, reviews:1560, badge:"New",         image:"https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&q=80", sizes:["XS","S","M","L"] },
  { id:5,  name:"Printed Palazzo Pants",           brand:"ComfortWear", category:"women",      price:299,  original:699,  rating:4.4, reviews:760,  badge:"Sale",        image:"https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&q=80", sizes:["S","M","L","XL"] },
  { id:6,  name:"Designer Lehenga Choli",          brand:"Ethnic Hub",  category:"women",      price:1299, original:3499, rating:4.8, reviews:2890, badge:"Trending",    image:"https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=400&q=80", sizes:["S","M","L","XL"] },

  // MEN
  { id:7,  name:"Slim Fit Cotton Shirt",           brand:"ManUp",       category:"men",        price:349,  original:799,  rating:4.5, reviews:3210, badge:"Best Seller", image:"https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&q=80", sizes:["S","M","L","XL","XXL"] },
  { id:8,  name:"Stretch Jogger Pants",            brand:"SportzQ",     category:"men",        price:499,  original:1099, rating:4.6, reviews:1470, badge:"Trending",    image:"https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80", sizes:["S","M","L","XL"] },
  { id:9,  name:"Linen Kurta Pyjama Set",          brand:"IndiaWear",   category:"men",        price:699,  original:1499, rating:4.7, reviews:2100, badge:"Best Seller", image:"https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&q=80", sizes:["S","M","L","XL","XXL"] },
  { id:10, name:"Denim Jacket Regular Fit",        brand:"ManUp",       category:"men",        price:999,  original:2199, rating:4.4, reviews:880,  badge:"New",         image:"https://images.unsplash.com/photo-1551537482-f2075a1d41f2?w=400&q=80", sizes:["S","M","L","XL"] },

  // KIDS
  { id:11, name:"Kids Cartoon Printed Tee",        brand:"KiddoWear",   category:"kids",       price:199,  original:499,  rating:4.6, reviews:1240, badge:"Best Seller", image:"https://images.unsplash.com/photo-1519457431-44ccd64a579b?w=400&q=80", sizes:["2-3Y","4-5Y","6-7Y","8-9Y"] },
  { id:12, name:"Boys Denim Shorts Set",           brand:"MiniStyle",   category:"kids",       price:349,  original:799,  rating:4.3, reviews:670,  badge:"Sale",        image:"https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=400&q=80", sizes:["3-4Y","5-6Y","7-8Y","9-10Y"] },

  // ELECTRONICS
  { id:13, name:"TWS Wireless Earbuds Pro",        brand:"SoundMax",    category:"electronics",price:799,  original:2499, rating:4.7, reviews:5620, badge:"Best Seller", image:"https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&q=80", sizes:[] },
  { id:14, name:"Smart Band Fitness Tracker",      brand:"FitTech",     category:"electronics",price:999,  original:2999, rating:4.5, reviews:3480, badge:"Trending",    image:"https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400&q=80", sizes:[] },
  { id:15, name:"Fast Charging 20W Adapter",       brand:"ChargePro",   category:"electronics",price:299,  original:699,  rating:4.6, reviews:7820, badge:"Sale",        image:"https://images.unsplash.com/photo-1609592424863-cfe67209e9ad?w=400&q=80", sizes:[] },
  { id:16, name:"Laptop Stand Adjustable",         brand:"DeskMate",    category:"electronics",price:599,  original:1399, rating:4.4, reviews:1930, badge:"New",         image:"https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&q=80", sizes:[] },

  // HOME
  { id:17, name:"Floral Bedsheet Set King Size",   brand:"HomeLux",     category:"home",       price:599,  original:1499, rating:4.5, reviews:2340, badge:"Best Seller", image:"https://images.unsplash.com/photo-1615529328331-f8917597711f?w=400&q=80", sizes:[] },
  { id:18, name:"Ceramic Coffee Mug Set of 4",     brand:"BrewLife",    category:"home",       price:349,  original:799,  rating:4.7, reviews:1850, badge:"Trending",    image:"https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=400&q=80", sizes:[] },

  // BEAUTY
  { id:19, name:"Vitamin C Face Serum 30ml",       brand:"GlowUp",      category:"beauty",     price:299,  original:699,  rating:4.6, reviews:4560, badge:"Best Seller", image:"https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&q=80", sizes:[] },
  { id:20, name:"Hair Mask Deep Conditioning",     brand:"TressQ",      category:"beauty",     price:199,  original:499,  rating:4.5, reviews:2890, badge:"Sale",        image:"https://images.unsplash.com/photo-1626897505254-e0f811aa9bf7?w=400&q=80", sizes:[] },

  // SPORTS
  { id:21, name:"Yoga Mat Anti-Slip 6mm",          brand:"FlexFit",     category:"sports",     price:499,  original:1199, rating:4.7, reviews:3420, badge:"Best Seller", image:"https://images.unsplash.com/photo-1592432678016-e910b452f9a2?w=400&q=80", sizes:[] },
  { id:22, name:"Running Shoes Lightweight",       brand:"SpeedX",      category:"sports",     price:999,  original:2499, rating:4.5, reviews:2100, badge:"New",         image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80", sizes:["6","7","8","9","10","11"] },

  // BAGS
  { id:23, name:"Women Tote Handbag PU Leather",   brand:"CarryQ",      category:"bags",       price:599,  original:1499, rating:4.6, reviews:1780, badge:"Trending",    image:"https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&q=80", sizes:[] },
  { id:24, name:"Men's Laptop Backpack 30L",       brand:"PackPro",     category:"bags",       price:799,  original:1999, rating:4.7, reviews:2650, badge:"Best Seller", image:"https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&q=80", sizes:[] },
];

/* ── STATE ────────────────────────────────────────────────── */
const state = {
  cart: JSON.parse(localStorage.getItem('qc_cart') || '[]'),
  wishlist: [],
  currentFilter: 'all',
  currentSort: 'default',
  currentView: 'grid',
  visibleCount: 12,
  currentSlide: 0,
  sliderInterval: null,
  isDark: localStorage.getItem('qc_theme') === 'dark',
};

/* ── INIT ─────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  applyTheme();
  renderProducts();
  renderFlashDeals();
  startSlider();
  startFlashTimer();
  updateCartBadge();
  handleScroll();
  window.addEventListener('scroll', handleScroll);
  document.addEventListener('click', handleOutsideClick);

  // Search on Enter
  const si = document.getElementById('searchInput');
  if (si) si.addEventListener('keydown', e => { if (e.key === 'Enter') handleSearch(); });
});

/* ─────────────────────────────────────────────────────────── */
/*  THEME TOGGLE                                               */
/* ─────────────────────────────────────────────────────────── */
function toggleTheme() {
  state.isDark = !state.isDark;
  applyTheme();
  localStorage.setItem('qc_theme', state.isDark ? 'dark' : 'light');
  showToast(state.isDark ? '🌙 Dark mode activated' : '☀️ Light mode activated', 'info');
}

function applyTheme() {
  document.documentElement.setAttribute('data-theme', state.isDark ? 'dark' : 'light');
}

/* ─────────────────────────────────────────────────────────── */
/*  HERO SLIDER                                                */
/* ─────────────────────────────────────────────────────────── */
function startSlider() {
  state.sliderInterval = setInterval(() => changeSlide(1), 5000);
}

function changeSlide(dir) {
  const slides = document.querySelectorAll('.slide');
  const dots   = document.querySelectorAll('.dot');
  slides[state.currentSlide].classList.remove('active');
  dots[state.currentSlide].classList.remove('active');
  state.currentSlide = (state.currentSlide + dir + slides.length) % slides.length;
  slides[state.currentSlide].classList.add('active');
  dots[state.currentSlide].classList.add('active');
  resetSliderTimer();
}

function goToSlide(idx) {
  const slides = document.querySelectorAll('.slide');
  const dots   = document.querySelectorAll('.dot');
  slides[state.currentSlide].classList.remove('active');
  dots[state.currentSlide].classList.remove('active');
  state.currentSlide = idx;
  slides[state.currentSlide].classList.add('active');
  dots[state.currentSlide].classList.add('active');
  resetSliderTimer();
}

function resetSliderTimer() {
  clearInterval(state.sliderInterval);
  state.sliderInterval = setInterval(() => changeSlide(1), 5000);
}

/* ─────────────────────────────────────────────────────────── */
/*  FLASH DEAL TIMER                                           */
/* ─────────────────────────────────────────────────────────── */
function startFlashTimer() {
  let total = 5 * 3600 + 47 * 60 + 33; // 5h 47m 33s remaining
  function tick() {
    if (total <= 0) { total = 8 * 3600; }
    const h = String(Math.floor(total / 3600)).padStart(2,'0');
    const m = String(Math.floor((total % 3600) / 60)).padStart(2,'0');
    const s = String(total % 60).padStart(2,'0');
    const th = document.getElementById('timerH');
    const tm = document.getElementById('timerM');
    const ts = document.getElementById('timerS');
    if (th) th.textContent = h;
    if (tm) tm.textContent = m;
    if (ts) ts.textContent = s;
    total--;
  }
  tick();
  setInterval(tick, 1000);
}

/* ─────────────────────────────────────────────────────────── */
/*  RENDER PRODUCTS                                            */
/* ─────────────────────────────────────────────────────────── */
function getFilteredSorted() {
  let list = state.currentFilter === 'all'
    ? [...ALL_PRODUCTS]
    : ALL_PRODUCTS.filter(p => p.category === state.currentFilter);

  switch (state.currentSort) {
    case 'price-asc':  list.sort((a,b) => a.price - b.price); break;
    case 'price-desc': list.sort((a,b) => b.price - a.price); break;
    case 'rating':     list.sort((a,b) => b.rating - a.rating); break;
    case 'newest':     list.sort((a,b) => b.id - a.id); break;
  }
  return list;
}

function renderProducts() {
  const grid = document.getElementById('productGrid');
  if (!grid) return;
  const list = getFilteredSorted().slice(0, state.visibleCount);
  if (list.length === 0) {
    grid.innerHTML = `<div class="no-results" style="grid-column:1/-1;text-align:center;padding:60px 20px;color:var(--text-muted)">
      <i class="fa-solid fa-box-open" style="font-size:3rem;margin-bottom:14px;opacity:.4"></i>
      <p style="font-size:1rem;font-weight:600">No products found</p>
    </div>`;
    return;
  }
  grid.innerHTML = list.map(productCard).join('');

  // Update load more button
  const btn = document.getElementById('loadMoreBtn');
  const all = getFilteredSorted();
  if (btn) btn.style.display = state.visibleCount >= all.length ? 'none' : 'inline-flex';
}

function productCard(p) {
  const discount = Math.round(((p.original - p.price) / p.original) * 100);
  const stars = starHTML(p.rating);
  const badgeClass = p.badge === 'New' ? 'new-badge' : p.badge === 'Trending' ? 'trending-badge' : '';
  return `
  <div class="product-card" data-id="${p.id}">
    <div class="product-image">
      <img src="${p.image}" alt="${p.name}" loading="lazy" onerror="this.src='https://via.placeholder.com/400x300?text=QuickCart'">
      ${p.badge ? `<span class="product-badge ${badgeClass}">${p.badge}</span>` : ''}
      <div class="product-wishlist" id="wl-${p.id}" onclick="toggleWishlist(${p.id}, this)">
        <i class="fa-regular fa-heart"></i>
      </div>
      <div class="product-actions">
        <button class="quick-view-btn" onclick="openModal(${p.id})">
          <i class="fa-regular fa-eye"></i> Quick View
        </button>
        <button class="quick-add-btn" onclick="addToCart(${p.id})">
          <i class="fa-solid fa-cart-plus"></i> Add
        </button>
      </div>
    </div>
    <div class="product-info">
      <div class="product-brand">${p.brand}</div>
      <div class="product-name">${p.name}</div>
      <div class="product-rating">
        <span class="stars">${stars}</span>
        <span class="rating-count">${p.rating} (${p.reviews.toLocaleString()})</span>
      </div>
      <div class="product-pricing">
        <span class="price-sale">₹${p.price.toLocaleString()}</span>
        <span class="price-original">₹${p.original.toLocaleString()}</span>
        <span class="price-discount">${discount}% off</span>
      </div>
      <button class="add-to-cart-btn" onclick="addToCart(${p.id})">
        <i class="fa-solid fa-cart-shopping"></i> Add to Cart
      </button>
    </div>
  </div>`;
}

function starHTML(rating) {
  let html = '';
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating))      html += '<i class="fa-solid fa-star"></i>';
    else if (i - rating < 1)          html += '<i class="fa-solid fa-star-half-stroke"></i>';
    else                              html += '<i class="fa-regular fa-star"></i>';
  }
  return html;
}

/* ─────────────────────────────────────────────────────────── */
/*  FLASH DEALS                                                */
/* ─────────────────────────────────────────────────────────── */
function renderFlashDeals() {
  const container = document.getElementById('flashProducts');
  if (!container) return;
  const deals = ALL_PRODUCTS.filter(p => ((p.original - p.price)/p.original) >= 0.55).slice(0, 6);
  container.innerHTML = deals.map(p => {
    const disc = Math.round(((p.original - p.price)/p.original)*100);
    return `
    <div class="product-card" style="min-width:0">
      <div class="product-image" style="height:180px">
        <img src="${p.image}" alt="${p.name}" loading="lazy" onerror="this.src='https://via.placeholder.com/400x300?text=QuickCart'">
        <span class="product-badge">${disc}% OFF</span>
        <div class="product-wishlist" onclick="toggleWishlist(${p.id},this)"><i class="fa-regular fa-heart"></i></div>
      </div>
      <div class="product-info">
        <div class="product-brand">${p.brand}</div>
        <div class="product-name" style="-webkit-line-clamp:1">${p.name}</div>
        <div class="product-pricing">
          <span class="price-sale">₹${p.price.toLocaleString()}</span>
          <span class="price-original">₹${p.original.toLocaleString()}</span>
        </div>
        <button class="add-to-cart-btn" onclick="addToCart(${p.id})">
          <i class="fa-solid fa-cart-plus"></i> Add to Cart
        </button>
      </div>
    </div>`;
  }).join('');
}

/* ─────────────────────────────────────────────────────────── */
/*  FILTER & SORT                                              */
/* ─────────────────────────────────────────────────────────── */
function filterProducts(category) {
  state.currentFilter = category;
  state.visibleCount  = 12;

  // Update filter tags
  document.querySelectorAll('.filter-tag').forEach(btn => {
    btn.classList.toggle('active', btn.onclick.toString().includes(`'${category}'`));
  });

  // Update category pills (active style)
  renderProducts();
  scrollToProducts();
}

function sortProducts() {
  const sel = document.getElementById('sortSelect');
  if (sel) { state.currentSort = sel.value; renderProducts(); }
}

function loadMoreProducts() {
  state.visibleCount += 8;
  renderProducts();
}

function setView(view) {
  state.currentView = view;
  const grid = document.getElementById('productGrid');
  const gb   = document.getElementById('gridBtn');
  const lb   = document.getElementById('listBtn');
  if (!grid) return;
  grid.classList.toggle('list-view', view === 'list');
  gb.classList.toggle('active', view === 'grid');
  lb.classList.toggle('active', view === 'list');
}

/* ─────────────────────────────────────────────────────────── */
/*  CART LOGIC                                                 */
/* ─────────────────────────────────────────────────────────── */
function addToCart(id) {
  const product = ALL_PRODUCTS.find(p => p.id === id);
  if (!product) return;
  const existing = state.cart.find(i => i.id === id);
  if (existing) {
    existing.qty++;
  } else {
    state.cart.push({ ...product, qty: 1 });
  }
  saveCart();
  updateCartBadge();
  updateCartSidebar();
  showToast(`🛒 "${product.name.substring(0,28)}..." added!`, 'cart');
}

function removeFromCart(id) {
  state.cart = state.cart.filter(i => i.id !== id);
  saveCart();
  updateCartBadge();
  updateCartSidebar();
  showToast('Item removed from cart', 'info');
}

function changeQty(id, delta) {
  const item = state.cart.find(i => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) { removeFromCart(id); return; }
  saveCart();
  updateCartBadge();
  updateCartSidebar();
}

function saveCart() {
  localStorage.setItem('qc_cart', JSON.stringify(state.cart));
}

function updateCartBadge() {
  const total = state.cart.reduce((s, i) => s + i.qty, 0);
  const badge = document.getElementById('cartBadge');
  if (badge) badge.textContent = total;
}

function updateCartSidebar() {
  const container = document.getElementById('cartItems');
  const footer    = document.getElementById('cartFooter');
  if (!container) return;

  if (state.cart.length === 0) {
    container.innerHTML = `
      <div class="empty-cart">
        <i class="fa-solid fa-cart-shopping"></i>
        <p>Your cart is empty!</p>
        <button onclick="toggleCart()">Start Shopping</button>
      </div>`;
    if (footer) footer.style.display = 'none';
    return;
  }

  container.innerHTML = state.cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-img">
        <img src="${item.image}" alt="${item.name}" onerror="this.src='https://via.placeholder.com/70?text=QC'">
      </div>
      <div>
        <div class="cart-item-brand">${item.brand}</div>
        <div class="cart-item-name">${item.name.substring(0,36)}...</div>
        <div class="cart-item-price">₹${(item.price * item.qty).toLocaleString()}</div>
        <div class="qty-control">
          <button class="qty-btn" onclick="changeQty(${item.id},-1)">−</button>
          <span class="qty-num">${item.qty}</span>
          <button class="qty-btn" onclick="changeQty(${item.id},1)">+</button>
        </div>
      </div>
      <span class="remove-item" onclick="removeFromCart(${item.id})">
        <i class="fa-solid fa-trash-can"></i>
      </span>
    </div>`).join('');

  const subtotal = state.cart.reduce((s, i) => s + i.price * i.qty, 0);
  const origTotal = state.cart.reduce((s, i) => s + i.original * i.qty, 0);
  const discount  = origTotal - subtotal;

  if (footer) footer.style.display = 'block';
  const cs = document.getElementById('cartSubtotal');
  const cd = document.getElementById('cartDiscount');
  const ct = document.getElementById('cartTotal');
  if (cs) cs.textContent = `₹${subtotal.toLocaleString()}`;
  if (cd) cd.textContent = `-₹${discount.toLocaleString()}`;
  if (ct) ct.textContent = `₹${subtotal.toLocaleString()}`;
}

function toggleCart() {
  const overlay = document.getElementById('cartOverlay');
  const sidebar = document.getElementById('cartSidebar');
  const isOpen  = sidebar.classList.contains('open');
  sidebar.classList.toggle('open');
  overlay.classList.toggle('open');
  document.body.style.overflow = isOpen ? '' : 'hidden';
  if (!isOpen) updateCartSidebar();
}

function checkout() {
  if (state.cart.length === 0) { showToast('Cart is empty!', 'error'); return; }
  showToast('🎉 Order placed successfully! Thank you, Deepak!', 'success');
  state.cart = [];
  saveCart();
  updateCartBadge();
  updateCartSidebar();
  toggleCart();
}

/* ─────────────────────────────────────────────────────────── */
/*  WISHLIST                                                   */
/* ─────────────────────────────────────────────────────────── */
function toggleWishlist(id, el) {
  el.classList.toggle('active');
  const isNowActive = el.classList.contains('active');
  el.innerHTML = isNowActive
    ? '<i class="fa-solid fa-heart"></i>'
    : '<i class="fa-regular fa-heart"></i>';
  if (isNowActive) {
    state.wishlist.push(id);
    showToast('❤️ Added to Wishlist!', 'info');
  } else {
    state.wishlist = state.wishlist.filter(w => w !== id);
    showToast('💔 Removed from Wishlist', 'info');
  }
  document.getElementById('wishlistBadge').textContent = state.wishlist.length;
}

/* ─────────────────────────────────────────────────────────── */
/*  PRODUCT QUICK VIEW MODAL                                   */
/* ─────────────────────────────────────────────────────────── */
function openModal(id) {
  const p = ALL_PRODUCTS.find(p => p.id === id);
  if (!p) return;
  const disc = Math.round(((p.original - p.price)/p.original)*100);
  const stars = starHTML(p.rating);
  const sizesHtml = p.sizes.length
    ? `<div style="margin-top:10px"><div style="font-size:.78rem;font-weight:700;color:var(--text-secondary);margin-bottom:8px;text-transform:uppercase;letter-spacing:.5px">Select Size</div>
       <div class="modal-sizes">${p.sizes.map(s=>`<button class="size-btn" onclick="this.parentNode.querySelectorAll('.size-btn').forEach(b=>b.classList.remove('active'));this.classList.add('active')">${s}</button>`).join('')}</div></div>`
    : '';

  document.getElementById('modalContent').innerHTML = `
    <div class="modal-body">
      <div class="modal-img">
        <img src="${p.image}" alt="${p.name}" onerror="this.src='https://via.placeholder.com/400x300?text=QuickCart'">
      </div>
      <div class="modal-details">
        <div class="modal-brand">${p.brand}</div>
        <div class="modal-name">${p.name}</div>
        <div class="modal-rating">
          <span class="stars">${stars}</span>
          <span style="font-size:.8rem;color:var(--text-muted);margin-left:6px">${p.rating} · ${p.reviews.toLocaleString()} reviews</span>
        </div>
        <div class="modal-price">
          ₹${p.price.toLocaleString()}
          <span class="price-original" style="font-size:1rem;margin-left:8px">₹${p.original.toLocaleString()}</span>
          <span class="price-discount" style="margin-left:8px">${disc}% off</span>
        </div>
        <div class="modal-desc">Premium quality ${p.name.toLowerCase()} from ${p.brand}. Crafted for comfort and style. Perfect for everyday wear. Free delivery on this item.</div>
        ${sizesHtml}
        <div style="display:flex;gap:10px;margin-top:8px">
          <button class="modal-add-btn" style="flex:1" onclick="addToCart(${p.id});closeModal()">
            <i class="fa-solid fa-cart-shopping"></i> Add to Cart
          </button>
          <button class="modal-add-btn" style="background:linear-gradient(135deg,#e84393,#c2185b)" onclick="toggleWishlist(${p.id},document.getElementById('wl-${p.id}')||this)">
            <i class="fa-regular fa-heart"></i>
          </button>
        </div>
      </div>
    </div>`;

  document.getElementById('modalOverlay').classList.add('open');
  document.getElementById('productModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.getElementById('productModal').classList.remove('open');
  document.body.style.overflow = '';
}

/* ─────────────────────────────────────────────────────────── */
/*  PROFILE DROPDOWN                                           */
/* ─────────────────────────────────────────────────────────── */
function toggleDropdown(id) {
  const dd = document.getElementById(id);
  if (!dd) return;
  const isOpen = dd.classList.contains('open');
  document.querySelectorAll('.dropdown-menu').forEach(d => d.classList.remove('open'));
  if (!isOpen) dd.classList.add('open');
}

function handleOutsideClick(e) {
  if (!e.target.closest('#profileBtn')) {
    document.querySelectorAll('.dropdown-menu').forEach(d => d.classList.remove('open'));
  }
}

/* ─────────────────────────────────────────────────────────── */
/*  MOBILE MENU                                                */
/* ─────────────────────────────────────────────────────────── */
function toggleMobileMenu() {
  const nav  = document.getElementById('navBar');
  const icon = document.getElementById('menuIcon');
  nav.classList.toggle('open');
  if (nav.classList.contains('open')) {
    icon.className = 'fa-solid fa-xmark';
  } else {
    icon.className = 'fa-solid fa-bars';
  }
}

/* ─────────────────────────────────────────────────────────── */
/*  SEARCH                                                     */
/* ─────────────────────────────────────────────────────────── */
function handleSearch() {
  const query = document.getElementById('searchInput')?.value.toLowerCase().trim();
  if (!query) { filterProducts('all'); return; }

  const grid = document.getElementById('productGrid');
  if (!grid) return;

  const results = ALL_PRODUCTS.filter(p =>
    p.name.toLowerCase().includes(query) ||
    p.brand.toLowerCase().includes(query) ||
    p.category.toLowerCase().includes(query)
  );

  if (results.length === 0) {
    grid.innerHTML = `
      <div style="grid-column:1/-1;text-align:center;padding:60px 20px;color:var(--text-muted)">
        <i class="fa-solid fa-magnifying-glass" style="font-size:3rem;margin-bottom:14px;opacity:.4"></i>
        <p style="font-size:1rem;font-weight:600">No results for "<strong>${query}</strong>"</p>
        <button onclick="filterProducts('all')" style="margin-top:16px;padding:10px 24px;background:var(--primary);color:#fff;border-radius:50px;font-weight:700">Clear Search</button>
      </div>`;
    return;
  }

  grid.innerHTML = results.map(productCard).join('');
  scrollToProducts();
  showToast(`Found ${results.length} result(s) for "${query}"`, 'info');
}

/* ─────────────────────────────────────────────────────────── */
/*  NEWSLETTER                                                 */
/* ─────────────────────────────────────────────────────────── */
function subscribeNewsletter() {
  const input = document.getElementById('newsletterEmail');
  const email = input?.value.trim();
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    showToast('⚠️ Please enter a valid email address!', 'error');
    return;
  }
  showToast(`✅ Subscribed successfully! Welcome to QuickCart, Deepak!`, 'success');
  if (input) input.value = '';
}

/* ─────────────────────────────────────────────────────────── */
/*  TOAST NOTIFICATIONS                                        */
/* ─────────────────────────────────────────────────────────── */
function showToast(message, type = 'success') {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const icons = { success:'fa-circle-check', error:'fa-circle-xmark', info:'fa-circle-info', cart:'fa-cart-shopping' };
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `<i class="fa-solid ${icons[type] || icons.info}"></i><span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('toast-out');
    toast.addEventListener('animationend', () => toast.remove());
  }, 3200);
}

/* ─────────────────────────────────────────────────────────── */
/*  SCROLL HELPERS                                             */
/* ─────────────────────────────────────────────────────────── */
function scrollToProducts() {
  const el = document.getElementById('productsSection');
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function handleScroll() {
  const header  = document.getElementById('mainHeader');
  const backBtn = document.getElementById('backToTop');
  const y = window.scrollY;

  if (header)  header.classList.toggle('scrolled', y > 60);
  if (backBtn) backBtn.classList.toggle('visible', y > 400);
}
