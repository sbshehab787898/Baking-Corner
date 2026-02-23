// ========================
// Language System
// ========================
const translations = {
    en: {
        atelier: 'Bakery', collection: 'Shop', legacy: 'Our Story',
        concierge: 'Contact', staffPortal: 'Admin Login',
        heroSub: 'Baking Corner — Premium Bakery',
        heroDesc: 'Each creation is made from the finest ingredients to bring you the best dessert experience.',
        exploreAtelier: 'Explore Shop', ourHeritage: 'Our Story',
        philosophyOverline: 'Our Philosophy', philosophyTitle: 'Freshness & Quality Guaranteed.',
        philosophyDesc: 'We believe in using the best ingredients to create delicious memories for your special moments.',
        noCompromise: 'Fresh Daily.', qualityDesc: 'Only the best chocolate, fresh eggs, and high-quality flour are used in our kitchen.',
        boutiqueCorners: 'Categories',
        limitedEdition: 'Special Collection', gourmetShowcase: 'Top Picks',
        viewFullAtelier: 'View All Products', visitSection: 'See More',
        reserveItem: 'Order Now',
        orderInfoHeader: 'Order Form', orderNote: 'Confirmation',
        priceListHeader: 'Price List',
        deliveryPointHeader: 'Location', deliveryPoint: 'Nangalkot Bottol Square, Cumilla',
        whatsappContact: 'Order via WhatsApp', contactUs: 'Contact Us',
        aboutHeroOverline: 'Our History', ancientMethods: 'Quality Since Day One.',
        rareOrigins: 'Pure Ingredients', wholeness: 'Baking Love',
        contactHeroOverline: 'Contact Us', inquiryPortal: 'Send Message',
        fullName: 'Full Name', emailAddress: 'Email',
        inquiryCategory: 'Select Category', requirementDetails: 'Message Details',
        initCommunication: 'Send Details',
        globalPresence: 'Our Location', atelierHQ: 'Baking Corner HQ',
        privateAppointment: 'Visit Us', dailyLiaison: 'Open Daily',
        responseGuarantee: 'Quick Response',
        commandCenter: 'Dashboard', archiveCreation: 'Products',
        valuation: 'Sales', marketValuation: 'Total Sales',
        registerMasterpiece: 'Add Product', terminateAuthority: 'Logout',
        identityRank: 'Status'
    },
    bn: {
        atelier: 'বেকারি', collection: 'দোকান', legacy: 'আমাদের গল্প',
        concierge: 'যোগাযোগ', staffPortal: 'অ্যাডমিন লগইন',
        heroSub: 'বেকিং কর্নার — প্রিমিয়াম বেকারি',
        heroDesc: 'প্রতিটি মিষ্টান্ন সেরা উপাদান দিয়ে তৈরি করা হয় আপনার জন্য সেরা অভিজ্ঞতার জন্য।',
        exploreAtelier: 'দোকান দেখুন', ourHeritage: 'আমাদের গল্প',
        philosophyOverline: 'আমাদের দর্শন', philosophyTitle: 'তাজা এবং মানসম্মত খাবারের নিশ্চয়তা।',
        philosophyDesc: 'আমরা বিশ্বাস করি সেরা উপাদান ব্যবহার করে আপনার বিশেষ মুহূর্তের জন্য সুস্বাদু স্মৃতি তৈরি করতে।',
        noCompromise: 'প্রতিদিন ফ্রেশ।', qualityDesc: 'সেরা চকলেট, খামারের তাজা ডিম এবং উন্নত মানের আটা আমাদের রান্নাঘরে ব্যবহৃত হয়।',
        boutiqueCorners: 'ক্যাটালগ',
        limitedEdition: 'স্পেশাল কালেকশন', gourmetShowcase: 'সেরা পছন্দ',
        viewFullAtelier: 'সব পণ্য দেখুন', visitSection: 'আরো দেখুন',
        reserveItem: 'অর্ডার করুন',
        orderInfoHeader: 'অর্ডার ফর্ম', orderNote: 'নিশ্চিতকরণ',
        priceListHeader: 'মূল্য তালিকা',
        deliveryPointHeader: 'অবস্থান', deliveryPoint: 'নাঙ্গলকোট বটতল চত্বর, কুমিল্লা',
        whatsappContact: 'হোয়াটসঅ্যাপ অর্ডার', contactUs: 'যোগাযোগ করুন',
        aboutHeroOverline: 'ইতিহাস', ancientMethods: 'শুরু থেকেই মানসম্মত।',
        rareOrigins: 'বিশুদ্ধ উপাদান', wholeness: 'ভালোবাসার বেকিং',
        contactHeroOverline: 'যোগাযোগ', inquiryPortal: 'মেসেজ পাঠান',
        fullName: 'পুরো নাম', emailAddress: 'ইমেইল',
        inquiryCategory: 'ক্যাটাগরি নির্বাচন করুন', requirementDetails: 'বিস্তারিত',
        initCommunication: 'তথ্য পাঠান',
        globalPresence: 'আমাদের অবস্থান', atelierHQ: 'বেকিং কর্নার সদর দপ্তর',
        privateAppointment: 'দেখা করুন', dailyLiaison: 'প্রতিদিন খোলা',
        responseGuarantee: 'দ্রুত সাড়া',
        commandCenter: 'ড্যাশবোর্ড', archiveCreation: 'পণ্য',
        valuation: 'বিক্রয়', marketValuation: 'মোট বিক্রয়',
        registerMasterpiece: 'পণ্য যোগ করুন', terminateAuthority: 'লগআউট',
        identityRank: 'অবস্থা'
    },
    orderFields: {
        en: {
            name: '👤 Name',
            location: '📍 Location',
            mobile: '📱 Mobile',
            weight: '⚖️ Weight (kg)',
            flavor: '🍰 Flavor',
            design: '🎨 Design',
            deliveryDate: '📅 Delivery Date',
            advance: '💵 Advance Payment',
            bkash: '💳 Bkash No'
        },
        bn: {
            name: '👤 নাম',
            location: '📍 লোকেশন',
            mobile: '📱 মোবাইল নম্বর',
            weight: '⚖️ ওজন (কেজি)',
            flavor: '🍰 ফ্লেভার',
            design: '🎨 ডিজাইন',
            deliveryDate: '📅 ডেলিভারি তারিখ',
            advance: '💵 অগ্রিম পেমেন্ট',
            bkash: '💳 বিকাশ নম্বর'
        }
    },
    priceList: {
        en: [
            { name: '🍰 Vanilla Cake (1kg)', price: '৳600' },
            { name: '🍫 Chocolate Cake (1kg)', price: '৳700' },
            { name: '🍓 Strawberry Cake (1kg)', price: '৳800' },
            { name: '🍚 Rasmalai Cake (1kg)', price: '৳1,000' },
            { name: '🍩 Premium Chocolate Cake (1kg)', price: '৳1,200' },
            { name: '💍 Wedding Cake (per kg)', price: '৳1,500+' },
            { name: '🎂 Custom Design (extra)', price: '৳300–৳500' }
        ],
        bn: [
            { name: '🍰 ভ্যানিলা কেক (১কেজি)', price: '৳৬০০' },
            { name: '🍫 চকলেট কেক (১কেজি)', price: '৳৭০০' },
            { name: '🍓 স্ট্রবেরি কেক (১কেজি)', price: '৳৮০০' },
            { name: '🍚 রসমালাই কেক (১কেজি)', price: '৳১,০০০' },
            { name: '🍩 প্রিমিয়াম চকলেট কেক (১কেজি)', price: '৳১,২০০' },
            { name: '💍 ওয়েডিং কেক (প্রতি কেজি)', price: '৳১,৫০০+' },
            { name: '🎂 কাস্টম ডিজাইন (অতিরিক্ত চার্জ)', price: '৳৩০০–৳৫০০' }
        ]
    }
};

let currentLang = localStorage.getItem('lang') || 'en';

function getSetting(key, def) {
    const settings = JSON.parse(localStorage.getItem('siteSettings') || '{}');
    return settings[key] !== undefined ? settings[key] : def;
}

// ========================
// Site Customizer (applied on every page)
// ========================
function applySiteCustomizations() {
    const s = JSON.parse(localStorage.getItem('siteSettings') || '{}');

    // --- Theme Colors ---
    if (s.colorPrimary) {
        document.documentElement.style.setProperty('--primary', s.colorPrimary);
        // Derive lighter shade
        document.documentElement.style.setProperty('--primary-light', s.colorPrimary + '33');
    }
    if (s.colorAccent) {
        document.documentElement.style.setProperty('--accent', s.colorAccent);
        document.documentElement.style.setProperty('--primary-dark', s.colorAccent);
        document.documentElement.style.setProperty('--accent-dark', s.colorAccent);
        document.documentElement.style.setProperty('--accent-light', s.colorAccent + 'aa');
    }
    if (s.colorSecondary) {
        document.documentElement.style.setProperty('--secondary', s.colorSecondary);
    }

    // --- Hero Headline ---
    if (s.heroTitleEn) {
        document.querySelectorAll('.hero h1 [data-lang="en"]').forEach(el => {
            el.innerHTML = s.heroTitleEn;
        });
    }
    if (s.heroTitleBn) {
        document.querySelectorAll('.hero h1 [data-lang="bn"]').forEach(el => {
            el.innerHTML = s.heroTitleBn;
        });
    }

    // --- Site Tagline (sub-brand under logo) ---
    if (s.siteTagline) {
        document.querySelectorAll('.nav-logo-text span:last-child').forEach(el => {
            el.textContent = s.siteTagline;
        });
    }

    // --- Footer Copyright ---
    if (s.footerCopyright) {
        document.querySelectorAll('.footer-copy span:not(.sparkle)').forEach(el => {
            el.textContent = s.footerCopyright;
        });
    }
}

function t(key) {
    return translations[currentLang][key] || translations.en[key] || key;
}

function applyTranslations() {
    document.querySelectorAll('[data-t]').forEach(el => {
        const key = el.getAttribute('data-t');
        el.textContent = t(key);
    });
    document.querySelectorAll('[data-t-html]').forEach(el => {
        const key = el.getAttribute('data-t-html');
        el.innerHTML = t(key);
    });
    document.querySelectorAll('[data-t-placeholder]').forEach(el => {
        const key = el.getAttribute('data-t-placeholder');
        el.placeholder = t(key);
    });
    // Update lang-specific sections
    document.querySelectorAll('[data-lang]').forEach(el => {
        el.style.display = el.getAttribute('data-lang') === currentLang ? '' : 'none';
    });
    // Update lang button
    document.querySelectorAll('.lang-btn-text').forEach(el => {
        el.textContent = currentLang === 'en' ? 'বাংলা' : 'English';
    });
}

function toggleLang() {
    currentLang = currentLang === 'en' ? 'bn' : 'en';
    localStorage.setItem('lang', currentLang);
    applyTranslations();
    buildDynamicContent();
}

// ========================
// Navbar
// ========================
function initNavbar() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 60);
    });

    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    const closeMenu = document.getElementById('closeMenu');

    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('open');
            mobileMenu.classList.toggle('open');
            document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
        });
        if (closeMenu) {
            closeMenu.addEventListener('click', () => {
                hamburger.classList.remove('open');
                mobileMenu.classList.remove('open');
                document.body.style.overflow = '';
            });
        }
        mobileMenu.querySelectorAll('a').forEach(a => {
            a.addEventListener('click', () => {
                hamburger.classList.remove('open');
                mobileMenu.classList.remove('open');
                document.body.style.overflow = '';
            });
        });
    }

    // Active link
    const path = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a, .mobile-nav-links a').forEach(a => {
        const href = a.getAttribute('href');
        if (href === path || (path === '' && href === 'index.html')) {
            a.classList.add('active');
        }
    });

    // Lang toggle buttons
    document.querySelectorAll('.lang-toggle').forEach(btn => {
        btn.addEventListener('click', toggleLang);
    });
}

// ========================
// Scroll Animations
// ========================
function initAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right').forEach(el => {
        observer.observe(el);
    });
}

// ========================
// Dynamic Content Builders
// ========================
function buildPriceList(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const settings = JSON.parse(localStorage.getItem('siteSettings') || '{}');
    let list = translations.priceList[currentLang];

    if (settings.customPriceList && settings.customPriceList[currentLang]) {
        list = settings.customPriceList[currentLang];
    }

    // Currency symbol + position override
    const sym = settings.currencySymbol || null;
    const pos = settings.currencyPosition || 'before';

    container.innerHTML = list.map(item => {
        let priceText = item.price;
        if (sym) {
            // Strip any known currency symbols and reformat
            const numPart = item.price.replace(/[৳$€£₹¥₩]/g, '').trim();
            priceText = pos === 'after' ? numPart + sym : sym + numPart;
        }
        return `<div class="price-item">
      <span class="price-name">${item.name}</span>
      <span class="price-value">${priceText}</span>
    </div>`;
    }).join('');
}

function buildOrderFields(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const settings = JSON.parse(localStorage.getItem('siteSettings') || '{}');
    let fields = translations.orderFields[currentLang];

    if (settings.customOrderFields && settings.customOrderFields[currentLang]) {
        fields = settings.customOrderFields[currentLang];
    }

    container.innerHTML = Object.values(fields).map(f => `
    <div class="order-field">
      <label>${f}:</label>
    </div>
  `).join('');
}

function buildDynamicContent() {
    buildPriceList('priceList');
    buildOrderFields('orderFields');

    // Update Delivery Point
    const settings = JSON.parse(localStorage.getItem('siteSettings') || '{}');
    if (settings.storeAddress) {
        document.querySelectorAll('[data-t="deliveryPoint"]').forEach(el => {
            el.textContent = settings.storeAddress;
        });
    }
}

// Copy template
function copyTemplate() {
    const settings = JSON.parse(localStorage.getItem('siteSettings') || '{}');
    let fields = translations.orderFields[currentLang];
    if (settings.customOrderFields && settings.customOrderFields[currentLang]) {
        fields = settings.customOrderFields[currentLang];
    }

    const header = translations[currentLang].orderInfoHeader;
    const text = header + '\n\n' + Object.values(fields).map(f => `${f}: `).join('\n');
    navigator.clipboard.writeText(text).then(() => {
        alert(currentLang === 'bn' ? 'টেমপ্লেট কপি করা হয়েছে!' : 'Template Copied!');
    });
}

// ========================
// Shop Filter & Search
// ========================
const products = [
    { id: 1, name: 'Rose Velvet Dreams', price: 128, category: 'cakes', image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=600', description: 'A symphony of red velvet layered with rose-infused cream cheese.' },
    { id: 2, name: 'Gold Leaf Macarons', price: 86, category: 'macarons', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=600', description: 'Hand-piped shells filled with grand-cru chocolate ganache, adorned with 24k gold.' },
    { id: 3, name: 'Midnight Obsidian Torte', price: 215, category: 'cakes', image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&q=80&w=600', description: 'Seven layers of dark chocolate sponge, cognac syrup, and mousse.' },
    { id: 4, name: 'Ivory Lace Cake', price: 320, category: 'cakes', image: 'https://images.unsplash.com/photo-1542826438-bd32f43d626f?auto=format&fit=crop&q=80&w=600', description: 'Handcrafted sugar lace adorns this almond-scented ivory masterpiece.' },
    { id: 5, name: 'Champagne Choux', price: 72, category: 'pastries', image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&q=80&w=600', description: 'Ethereal pâte à choux filled with Dom Pérignon-infused diplomat cream.' },
    { id: 6, name: 'Bergamot Tart', price: 96, category: 'pastries', image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&q=80&w=600', description: 'Earl grey custard in a Breton shell, finished with bergamot jelly glaze.' },
    { id: 7, name: 'Pearl Truffle Collection', price: 145, category: 'chocolates', image: 'https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&q=80&w=600', description: 'A curated box of 12 hand-rolled grand-cru truffles.' },
    { id: 8, name: 'Saffron Cloud Cake', price: 265, category: 'cakes', image: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&q=80&w=600', description: 'Delicate sponge infused with Persian saffron, layered with clotted cream.' }
];

let activeFilter = 'all';
let searchQuery = '';

function filterProducts() {
    const grid = document.getElementById('productsGrid');
    if (!grid) return;
    const filtered = products.filter(p => {
        const matchCat = activeFilter === 'all' || p.category === activeFilter;
        const matchSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
        return matchCat && matchSearch;
    });
    grid.innerHTML = filtered.length ? filtered.map(p => {
        const settings = JSON.parse(localStorage.getItem('siteSettings') || '{}');
        const sym = settings.currencySymbol || '৳';
        const pos = settings.currencyPosition || 'before';
        const priceDisplay = pos === 'after' ? p.price + sym : sym + p.price;
        return `
    <div class="product-card fade-in visible">
      <div class="product-img">
        <img src="${p.image}" alt="${p.name}" loading="lazy">
        <div class="product-img-overlay"></div>
        <div class="product-badge">✦ ${p.category}</div>
      </div>
      <div class="product-body">
        <div class="product-header">
          <h3>${p.name}</h3>
          <span class="product-price">${priceDisplay}</span>
        </div>
        <p class="product-desc">"${p.description}"</p>
        <button class="product-btn" onclick="viewProduct(${p.id})" data-t="reserveItem">Reserve Item</button>
      </div>
    </div>`;
    }).join('') : '<p style="text-align:center;color:var(--text-muted);font-style:italic;grid-column:1/-1;padding:3rem">No masterpieces found.</p>';
    applyTranslations();
}

function initShopFilters() {
    document.querySelectorAll('.chip').forEach(chip => {
        chip.addEventListener('click', () => {
            document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            activeFilter = chip.getAttribute('data-filter');
            filterProducts();
        });
    });
    const searchInput = document.getElementById('shopSearch');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchQuery = e.target.value;
            filterProducts();
        });
    }
    filterProducts();
}

function viewProduct(id) {
    window.location.href = 'product.html?id=' + id;
}

// ========================
// Cart System
// ========================
let cart = JSON.parse(localStorage.getItem('cart') || '[]');

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function updateCartCount() {
    const total = cart.reduce((s, i) => s + i.qty, 0);
    document.querySelectorAll('.cart-count').forEach(el => {
        el.textContent = total;
        el.style.display = total ? 'flex' : 'none';
    });
}

function addToCart(id) {
    const product = products.find(p => p.id === id);
    if (!product) return;
    const existing = cart.find(i => i.id === id);
    if (existing) {
        existing.qty++;
    } else {
        cart.push({ id: product.id, name: product.name, price: product.price, image: product.image, qty: 1 });
    }
    saveCart();
    updateCartCount();
    renderCart();
    openCart();
}

function removeFromCart(id) {
    cart = cart.filter(i => i.id !== id);
    saveCart();
    updateCartCount();
    renderCart();
}

function changeQty(id, delta) {
    const item = cart.find(i => i.id === id);
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) removeFromCart(id);
    else { saveCart(); updateCartCount(); renderCart(); }
}

function renderCart() {
    const drawer = document.getElementById('cartDrawer');
    if (!drawer) return;
    const settings = JSON.parse(localStorage.getItem('siteSettings') || '{}');
    const sym = settings.currencySymbol || '৳';
    const pos = settings.currencyPosition || 'before';
    const fmt = (n) => pos === 'after' ? n + sym : sym + n;

    const body = drawer.querySelector('.cart-body');
    const footer = drawer.querySelector('.cart-footer');

    if (!cart.length) {
        body.innerHTML = `<div class="cart-empty">🛍️<p>Your basket is empty</p></div>`;
        footer.style.display = 'none';
        return;
    }

    const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
    body.innerHTML = cart.map(item => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.name}" class="cart-item-img">
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">${fmt(item.price)}</div>
        <div class="cart-item-qty">
          <button onclick="changeQty(${item.id},-1)">−</button>
          <span>${item.qty}</span>
          <button onclick="changeQty(${item.id},1)">+</button>
        </div>
      </div>
      <button class="cart-item-remove" onclick="removeFromCart(${item.id})">✕</button>
    </div>
  `).join('');

    footer.style.display = 'block';
    footer.querySelector('.cart-total-val').textContent = fmt(total);
}

function openCart() {
    let drawer = document.getElementById('cartDrawer');
    if (!drawer) {
        drawer = document.createElement('div');
        drawer.id = 'cartDrawer';
        drawer.innerHTML = `
      <div class="cart-overlay" onclick="closeCart()"></div>
      <div class="cart-panel">
        <!-- Cart Screen -->
        <div class="cart-screen" id="cartScreen">
          <div class="cart-head">
            <span>🛍️ Your Basket</span>
            <button onclick="closeCart()">✕</button>
          </div>
          <div class="cart-body"></div>
          <div class="cart-footer" style="display:none">
            <div class="cart-total">Total: <span class="cart-total-val"></span></div>
            <button class="cart-checkout-btn" onclick="showOrderForm()">✨ Proceed to Order</button>
            <button class="cart-clear-btn" onclick="clearCart()">Clear Basket</button>
          </div>
        </div>
        <!-- Order Form Screen -->
        <div class="checkout-screen" id="checkoutScreen" style="display:none">
          <div class="cart-head">
            <button onclick="hideOrderForm()" style="font-size:0.85rem;font-weight:700;color:#EC4899;letter-spacing:0.05em">← Back</button>
            <span>📝 Order Details</span>
            <button onclick="closeCart()">✕</button>
          </div>
          <div class="checkout-body">
            <div class="checkout-summary" id="checkoutSummary"></div>
            <form id="orderForm" onsubmit="submitOrder(event)">
              <div class="cf-group">
                <label class="cf-label">✦ Full Name *</label>
                <input type="text" class="cf-input" id="cfName" placeholder="Your full name" required />
              </div>
              <div class="cf-group">
                <label class="cf-label">✦ Mobile Number *</label>
                <input type="tel" class="cf-input" id="cfPhone" placeholder="01XXXXXXXXX" required />
              </div>
              <div class="cf-group">
                <label class="cf-label">✦ Delivery Address *</label>
                <input type="text" class="cf-input" id="cfAddress" placeholder="Your full address" required />
              </div>
              <div class="cf-group">
                <label class="cf-label">✦ Preferred Delivery Date &amp; Time *</label>
                <input type="datetime-local" class="cf-input" id="cfDate" required />
              </div>
              <div class="cf-group">
                <label class="cf-label">✦ Payment Method *</label>
                <select class="cf-input" id="cfPayment" onchange="toggleBkash()" required>
                  <option value="">Select payment method</option>
                  <option value="Cash">Cash on Delivery</option>
                  <option value="Bkash">💚 bKash</option>
                  <option value="Nagad">💙 Nagad</option>
                </select>
              </div>
              <div class="cf-group" id="cfMobilePayGroup" style="display:none">
                <label class="cf-label" id="cfMobilePayLabel">✦ bKash/Nagad Number *</label>
                <input type="tel" class="cf-input" id="cfMobilePayNo" placeholder="Payment number" />
              </div>
              <div class="cf-group">
                <label class="cf-label">✦ Special Instructions (Optional)</label>
                <textarea class="cf-input cf-textarea" id="cfNotes" placeholder="Cake message, design notes, allergies..."></textarea>
              </div>
              <button type="submit" class="cart-checkout-btn" style="margin-top:1rem">✓ Place Order</button>
            </form>
          </div>
        </div>
        <!-- Success Screen -->
        <div class="checkout-screen" id="successScreen" style="display:none">
          <div class="success-body">
            <div class="success-icon">🎉</div>
            <h3 class="success-title">Order Placed!</h3>
            <p class="success-msg">Your order has been received. Redirecting to admin panel...</p>
            <div class="success-loader"><div class="success-bar"></div></div>
          </div>
        </div>
      </div>`;

        document.body.appendChild(drawer);
        injectCartStyles();
    }
    renderCart();
    drawer.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeCart() {
    const drawer = document.getElementById('cartDrawer');
    if (drawer) { drawer.classList.remove('open'); document.body.style.overflow = ''; }
}

function clearCart() {
    if (!confirm('Clear all items from your basket?')) return;
    cart = []; saveCart(); updateCartCount(); renderCart(); closeCart();
}

function showOrderForm() {
    const drawer = document.getElementById('cartDrawer');
    if (!drawer) return;
    // Show summary in checkout screen
    const settings = JSON.parse(localStorage.getItem('siteSettings') || '{}');
    const sym = settings.currencySymbol || '৳';
    const pos = settings.currencyPosition || 'before';
    const fmt = n => pos === 'after' ? n + sym : sym + n;
    const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
    document.getElementById('checkoutSummary').innerHTML = `
      <div class="checkout-order-summary">
        <div style="font-size:10px;font-weight:900;text-transform:uppercase;letter-spacing:0.3em;color:#EC4899;margin-bottom:0.75rem">Order Summary</div>
        ${cart.map(i => `<div class="co-row"><span>${i.name} x${i.qty}</span><span>${fmt(i.price * i.qty)}</span></div>`).join('')}
        <div class="co-total"><span>Total</span><span>${fmt(total)}</span></div>
      </div>`;
    document.getElementById('cartScreen').style.display = 'none';
    document.getElementById('checkoutScreen').style.display = 'flex';
    document.getElementById('successScreen').style.display = 'none';
    // Set min date to now
    const now = new Date(); now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
    const dtInput = document.getElementById('cfDate');
    if (dtInput) dtInput.min = now.toISOString().slice(0, 16);
}

function hideOrderForm() {
    const drawer = document.getElementById('cartDrawer');
    if (!drawer) return;
    document.getElementById('cartScreen').style.display = 'flex';
    document.getElementById('checkoutScreen').style.display = 'none';
    document.getElementById('successScreen').style.display = 'none';
}

function toggleBkash() {
    const method = document.getElementById('cfPayment').value;
    const group = document.getElementById('cfMobilePayGroup');
    const label = document.getElementById('cfMobilePayLabel');
    const numField = document.getElementById('cfMobilePayNo');
    if (method === 'Bkash' || method === 'Nagad') {
        group.style.display = 'block';
        label.textContent = '✦ ' + method + ' Number *';
        numField.required = true;
    } else {
        group.style.display = 'none';
        numField.required = false;
    }
}

function submitOrder(e) {
    e.preventDefault();
    const settings = JSON.parse(localStorage.getItem('siteSettings') || '{}');
    const sym = settings.currencySymbol || '৳';
    const pos = settings.currencyPosition || 'before';
    const fmt = n => pos === 'after' ? n + sym : sym + n;
    const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
    const order = {
        id: 'ORD-' + Date.now(),
        date: new Date().toISOString(),
        status: 'Pending',
        customer: {
            name: document.getElementById('cfName').value.trim(),
            phone: document.getElementById('cfPhone').value.trim(),
            address: document.getElementById('cfAddress').value.trim(),
            delivery: document.getElementById('cfDate').value,
            payment: document.getElementById('cfPayment').value,
            paymentNo: document.getElementById('cfMobilePayNo').value.trim(),
            notes: document.getElementById('cfNotes').value.trim()
        },
        items: cart.map(i => ({ ...i })),
        total,
        totalFormatted: fmt(total)
    };
    // Save order
    const orders = JSON.parse(localStorage.getItem('siteOrders') || '[]');
    orders.unshift(order);
    localStorage.setItem('siteOrders', JSON.stringify(orders));
    // Clear cart
    cart = []; saveCart(); updateCartCount();
    // Show success screen
    document.getElementById('checkoutScreen').style.display = 'none';
    document.getElementById('successScreen').style.display = 'flex';
    // Redirect to admin orders after 2.5s
    setTimeout(() => {
        const isAdmin = sessionStorage.getItem('adminAuth');
        window.location.href = (isAdmin ? '' : '../') + 'admin/admin-orders.html';
    }, 2500);
}

function injectCartStyles() {
    if (document.getElementById('cartStyles')) return;
    const s = document.createElement('style');
    s.id = 'cartStyles';
    s.textContent = `
    #cartDrawer { position:fixed;inset:0;z-index:9000;pointer-events:none; }
    #cartDrawer.open { pointer-events:all; }
    .cart-overlay { position:absolute;inset:0;background:rgba(0,0,0,0.4);opacity:0;transition:opacity 0.4s; }
    #cartDrawer.open .cart-overlay { opacity:1; }
    .cart-panel { position:absolute;right:0;top:0;bottom:0;width:min(440px,100vw);background:#fff;display:flex;flex-direction:column;transform:translateX(100%);transition:transform 0.4s cubic-bezier(.25,.46,.45,.94);box-shadow:-20px 0 60px rgba(0,0,0,.12); }
    #cartDrawer.open .cart-panel { transform:translateX(0); }
    .cart-screen { display:flex;flex-direction:column;height:100%; }
    .checkout-screen { display:none;flex-direction:column;height:100%; }
    .cart-head { display:flex;justify-content:space-between;align-items:center;padding:1.25rem 1.75rem;border-bottom:1px solid #f0f0f0;font-family:'Cormorant Garamond',serif;font-size:1.3rem;font-weight:700;flex-shrink:0; }
    .cart-head button { background:none;border:none;cursor:pointer;font-size:1.1rem;color:#999;transition:color 0.2s; }
    .cart-head button:hover { color:#EC4899; }
    .cart-body { flex:1;overflow-y:auto;padding:1.25rem 1.75rem; }
    .checkout-body { flex:1;overflow-y:auto;padding:1.25rem 1.75rem; }
    .cart-empty { display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:1rem;color:#bbb;font-style:italic;font-size:1rem; }
    .cart-item { display:flex;align-items:center;gap:1rem;padding:1rem 0;border-bottom:1px solid #f9f9f9; }
    .cart-item-img { width:60px;height:60px;object-fit:cover;border-radius:0.75rem;flex-shrink:0; }
    .cart-item-info { flex:1;min-width:0; }
    .cart-item-name { font-weight:700;font-size:0.88rem;margin-bottom:0.2rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap; }
    .cart-item-price { font-size:0.83rem;color:#EC4899;font-weight:700;margin-bottom:0.4rem; }
    .cart-item-qty { display:flex;align-items:center;gap:0.5rem; }
    .cart-item-qty button { width:26px;height:26px;border-radius:50%;border:1px solid #eee;background:#fafafa;cursor:pointer;font-size:0.95rem;display:flex;align-items:center;justify-content:center;transition:all 0.2s; }
    .cart-item-qty button:hover { background:#EC4899;color:white;border-color:#EC4899; }
    .cart-item-qty span { font-weight:700;min-width:18px;text-align:center; }
    .cart-item-remove { background:none;border:none;cursor:pointer;color:#ddd;font-size:0.9rem;flex-shrink:0;transition:color 0.2s;padding:0.2rem; }
    .cart-item-remove:hover { color:#ef4444; }
    .cart-footer { padding:1.25rem 1.75rem;border-top:1px solid #f0f0f0;flex-shrink:0; }
    .cart-total { font-family:'Cormorant Garamond',serif;font-size:1.25rem;font-weight:700;margin-bottom:0.9rem;display:flex;justify-content:space-between;align-items:center; }
    .cart-total-val { color:#EC4899; }
    .cart-checkout-btn { width:100%;padding:1rem;background:linear-gradient(135deg,#EC4899,#DB2777);color:white;border:none;border-radius:9999px;font-weight:900;font-size:10px;text-transform:uppercase;letter-spacing:0.3em;cursor:pointer;transition:all 0.3s;margin-bottom:0.75rem; }
    .cart-checkout-btn:hover { transform:translateY(-2px);box-shadow:0 10px 30px rgba(219,39,119,0.35); }
    .cart-clear-btn { width:100%;padding:0.7rem;background:none;border:1px solid #eee;border-radius:9999px;font-size:0.78rem;color:#aaa;cursor:pointer;transition:all 0.2s; }
    .cart-clear-btn:hover { border-color:#ef4444;color:#ef4444; }
    /* Checkout form */
    .checkout-order-summary { background:#fdf4f9;border:1px solid #fce7f3;border-radius:1rem;padding:1rem 1.25rem;margin-bottom:1.5rem; }
    .co-row { display:flex;justify-content:space-between;font-size:0.83rem;padding:0.3rem 0;color:#555; }
    .co-total { display:flex;justify-content:space-between;font-weight:900;font-size:0.95rem;color:#EC4899;border-top:1px solid #fce7f3;margin-top:0.5rem;padding-top:0.5rem; }
    .cf-group { margin-bottom:1rem; }
    .cf-label { display:block;font-size:9px;font-weight:900;text-transform:uppercase;letter-spacing:0.3em;color:#777;margin-bottom:0.4rem; }
    .cf-input { width:100%;padding:0.7rem 1rem;border:1.5px solid #e5e5e5;border-radius:0.75rem;font-family:inherit;font-size:0.875rem;color:#1E1E2E;outline:none;transition:border-color 0.25s;background:white;box-sizing:border-box; }
    .cf-input:focus { border-color:#F9A8D4;box-shadow:0 0 0 3px rgba(249,168,212,0.15); }
    .cf-textarea { resize:vertical;min-height:80px; }
    select.cf-input { cursor:pointer; }
    /* Success screen */
    .success-body { display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:1.5rem;padding:2rem;text-align:center; }
    .success-icon { font-size:4rem;animation:popIn 0.6s cubic-bezier(0.175,0.885,0.32,1.275); }
    .success-title { font-family:'Cormorant Garamond',serif;font-size:2rem;font-weight:700;color:#1E1E2E; }
    .success-msg { color:#777;font-size:0.9rem;line-height:1.6; }
    .success-loader { width:100%;height:4px;background:#f0f0f0;border-radius:9999px;overflow:hidden;margin-top:1rem; }
    .success-bar { height:100%;background:linear-gradient(90deg,#EC4899,#DB2777);border-radius:9999px;animation:loadBar 2.5s linear forwards; }
    @keyframes popIn { from{transform:scale(0)} to{transform:scale(1)} }
    @keyframes loadBar { from{width:0} to{width:100%} }
    `;
    document.head.appendChild(s);
}
// ========================
document.addEventListener('DOMContentLoaded', () => {
    applySiteCustomizations();
    initNavbar();
    initAnimations();
    applyTranslations();
    buildDynamicContent();
    initShopFilters();
    updateCartCount();
});
function addToCart(id) {
    const product = products.find(p => p.id === id);
    if (product) { cart.push(product); localStorage.setItem('cart', JSON.stringify(cart)); updateCartCount(); }
}

// ========================
// Init
