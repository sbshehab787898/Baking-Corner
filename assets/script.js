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
        identityRank: 'Status',
        yourBasket: 'Your Basket',
        completeOrder: 'Complete Order',
        clearBasket: 'Clear Basket',
        emptyBasket: 'Your basket is empty',
        total: 'Total',
        proceedToOrder: 'Complete Order',
        placeOrder: 'Place Order',
        back: '← Back',
        orderDetails: 'Order Details',
        successPlaced: 'Order Placed!',
        redirectingShop: 'Redirecting to shop...'
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
        identityRank: 'অবস্থা',
        yourBasket: 'আপনার ঝুড়ি',
        completeOrder: 'অর্ডার সম্পূর্ণ করুন',
        clearBasket: 'ঝুড়ি খালি করুন',
        emptyBasket: 'আপনার ঝুড়ি খালি',
        total: 'মোট',
        proceedToOrder: 'অর্ডার সম্পূর্ণ করুন',
        placeOrder: 'অর্ডার করুন',
        back: '← ফিরে যান',
        orderDetails: 'অর্ডার এর বিস্তারিত',
        successPlaced: 'অর্ডার সম্পন্ন হয়েছে!',
        redirectingShop: 'দোকান পৃষ্ঠায় রিডাইরেক্ট করা হচ্ছে...'
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
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    const autoRevealSelectors = [
        '.section-header',
        '.grid-2 > *',
        '.grid-3 > *',
        '.grid-4 > *',
        '.price-item',
        '.philosophy-card',
        '.contact-info-card',
        '.footer-brand',
        '.footer-nav',
        '.footer-bottom',
        '.pd-image-wrap',
        '.pd-info',
        '.pd-tabs-section .container > *',
        '.similar-section .product-card'
    ];
    autoRevealSelectors.forEach(sel => {
        document.querySelectorAll(sel).forEach(el => {
            if (!el.classList.contains('fade-in') && !el.classList.contains('fade-in-left') && !el.classList.contains('fade-in-right')) {
                el.classList.add('fade-in');
            }
        });
    });

    document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right').forEach((el, idx) => {
        if (!el.style.getPropertyValue('--reveal-delay')) {
            el.style.setProperty('--reveal-delay', `${(idx % 6) * 70}ms`);
        }
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
let products = [
    { id: 1, name: 'Rose Velvet Dreams', price: 128, category: 'cakes', image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=600', description: 'A symphony of red velvet layered with rose-infused cream cheese.' },
    { id: 2, name: 'Gold Leaf Macarons', price: 86, category: 'macarons', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=600', description: 'Hand-piped shells filled with grand-cru chocolate ganache, adorned with 24k gold.' },
    { id: 3, name: 'Midnight Obsidian Torte', price: 215, category: 'cakes', image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&q=80&w=600', description: 'Seven layers of dark chocolate sponge, cognac syrup, and mousse.' },
    { id: 4, name: 'Ivory Lace Cake', price: 320, category: 'cakes', image: 'https://images.unsplash.com/photo-1542826438-bd32f43d626f?auto=format&fit=crop&q=80&w=600', description: 'Handcrafted sugar lace adorns this almond-scented ivory masterpiece.' },
    { id: 5, name: 'Champagne Choux', price: 72, category: 'pastries', image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&q=80&w=600', description: 'Ethereal pâte à choux filled with Dom Pérignon-infused diplomat cream.' },
    { id: 6, name: 'Bergamot Tart', price: 96, category: 'pastries', image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&q=80&w=600', description: 'Earl grey custard in a Breton shell, finished with bergamot jelly glaze.' },
    { id: 7, name: 'Pearl Truffle Collection', price: 145, category: 'chocolates', image: 'https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&q=80&w=600', description: 'A curated box of 12 hand-rolled grand-cru truffles.' },
    { id: 8, name: 'Saffron Cloud Cake', price: 265, category: 'cakes', image: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&q=80&w=600', description: 'Delicate sponge infused with Persian saffron, layered with clotted cream.' }
];

async function syncProducts() {
    if (!window.supabaseClient) return;
    const { data, error } = await window.supabaseClient.from('products').select('*');
    if (!error && data && data.length > 0) {
        products = data;
        filterProducts();
    }
}

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

function normalizeCart() {
    if (!Array.isArray(cart)) {
        cart = [];
        saveCart();
        return;
    }
    cart = cart
        .filter(i => i && i.id !== undefined && i.id !== null)
        .map(i => {
            const qty = Number.isFinite(+i.qty) && +i.qty > 0 ? Math.floor(+i.qty) : 1;
            const parsed = Number.isFinite(+i.price)
                ? +i.price
                : parseFloat(String(i.price || '').replace(/[^0-9.]/g, ''));
            const price = Number.isFinite(parsed) ? parsed : 0;
            return { ...i, qty, price };
        });
    saveCart();
}

normalizeCart();

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

    let body = drawer.querySelector('.cart-body');
    let footer = drawer.querySelector('.cart-footer');
    const cartScreen = drawer.querySelector('#cartScreen') || drawer.querySelector('.cart-screen');
    if (!body && cartScreen) {
        body = document.createElement('div');
        body.className = 'cart-body';
        cartScreen.appendChild(body);
    }
    if (!footer && cartScreen) {
        footer = document.createElement('div');
        footer.className = 'cart-footer';
        footer.style.display = 'none';
        footer.innerHTML = `
            <div class="cart-total">Total: <span class="cart-total-val"></span></div>
            <button class="cart-checkout-btn" onclick="showOrderForm()">✨ Proceed to Order</button>
            <button class="cart-clear-btn" onclick="clearCart()">Clear Basket</button>
        `;
        cartScreen.appendChild(footer);
    }
    if (!body || !footer) return;
    if (!footer.querySelector('.cart-total-val') || !footer.querySelector('.cart-checkout-btn')) {
        footer.innerHTML = `
            <div class="cart-total">Total: <span class="cart-total-val"></span></div>
            <button class="cart-checkout-btn" onclick="showOrderForm()">✨ Proceed to Order</button>
            <button class="cart-clear-btn" onclick="clearCart()">Clear Basket</button>
        `;
    }

    if (!cart.length) {
        body.innerHTML = `<div class="cart-empty">🛍️<p>${t('emptyBasket')}</p></div>`;
        footer.style.display = 'none';
        return;
    }

    const totalStr = t('total');
    const completeOrderStr = t('completeOrder');
    const clearBasketStr = t('clearBasket');

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
    footer.style.position = 'sticky';
    footer.style.bottom = '0';
    footer.style.background = '#fff';
    footer.style.zIndex = '3';

    // Safety check for footer content
    const totalEl = footer.querySelector('.cart-total');
    if (totalEl) totalEl.firstChild.textContent = totalStr + ': ';

    const totalValEl = footer.querySelector('.cart-total-val');
    if (totalValEl) totalValEl.textContent = fmt(total);

    const checkoutBtn = footer.querySelector('.cart-checkout-btn');
    if (checkoutBtn) checkoutBtn.textContent = '✨ ' + completeOrderStr;

    const clearBtn = footer.querySelector('.cart-clear-btn');
    if (clearBtn) clearBtn.textContent = clearBasketStr;
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
            <span class="view-title">🛍️ ${t('yourBasket')}</span>
            <button onclick="closeCart()">✕</button>
          </div>
          <div class="cart-body"></div>
          <div class="cart-footer" style="display:none">
            <div class="cart-total">${t('total')}: <span class="cart-total-val"></span></div>
            <button class="cart-checkout-btn" onclick="showOrderForm()">✨ ${t('completeOrder')}</button>
            <button class="cart-clear-btn" onclick="clearCart()">${t('clearBasket')}</button>
          </div>
        </div>
        <!-- Order Form Screen -->
        <div class="checkout-screen" id="checkoutScreen" style="display:none">
          <div class="cart-head">
            <button onclick="hideOrderForm()" style="font-size:0.85rem;font-weight:700;color:#EC4899;letter-spacing:0.05em">${t('back')}</button>
            <span>📝 ${t('orderDetails')}</span>
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
              <button type="submit" class="cart-checkout-btn" style="margin-top:1rem">✓ ${t('placeOrder')}</button>
            </form>
          </div>
        </div>
        <!-- Success Screen -->
        <div class="checkout-screen" id="successScreen" style="display:none">
          <div class="success-body">
            <div class="success-icon">🎉</div>
            <h3 class="success-title">${t('successPlaced')}</h3>
            <p class="success-msg">${t('redirectingShop')}</p>
            <div class="success-loader"><div class="success-bar"></div></div>
          </div>
        </div>
      </div>`;

        document.body.appendChild(drawer);
    }
    const cartScreen = document.getElementById('cartScreen');
    const checkoutScreen = document.getElementById('checkoutScreen');
    const successScreen = document.getElementById('successScreen');
    if (cartScreen) cartScreen.style.display = 'flex';
    if (checkoutScreen) checkoutScreen.style.display = 'none';
    if (successScreen) successScreen.style.display = 'none';
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

async function submitOrder(e) {
    e.preventDefault();
    const settings = JSON.parse(localStorage.getItem('siteSettings') || '{}');
    const sym = settings.currencySymbol || '৳';
    const pos = settings.currencyPosition || 'before';
    const fmt = n => pos === 'after' ? n + sym : sym + n;
    const total = cart.reduce((s, i) => s + i.price * i.qty, 0);

    const orderId = 'ORD-' + Date.now();
    const orderData = {
        id: orderId,
        status: 'Pending',
        customer_name: document.getElementById('cfName').value.trim(),
        customer_phone: document.getElementById('cfPhone').value.trim(),
        customer_address: document.getElementById('cfAddress').value.trim(),
        delivery_date: document.getElementById('cfDate').value,
        payment_method: document.getElementById('cfPayment').value,
        payment_no: document.getElementById('cfMobilePayNo').value.trim(),
        notes: document.getElementById('cfNotes').value.trim(),
        total: total,
        items: cart.map(i => ({
            id: i.id,
            name: i.name,
            price: i.price,
            qty: i.qty,
            image: i.image
        }))
    };

    // Save to Supabase if available
    let dbSuccess = false;
    if (window.supabaseClient) {
        try {
            const { error } = await window.supabaseClient.from('orders').insert([orderData]);
            if (error) {
                console.error('Supabase Insert Error:', error.message);
            } else {
                dbSuccess = true;
            }
        } catch (err) {
            console.error('Database connection failed:', err);
        }
    }

    // Always keep a local copy as backup
    const localOrder = {
        ...orderData,
        date: new Date().toISOString(),
        customer: {
            name: orderData.customer_name,
            phone: orderData.customer_phone,
            address: orderData.customer_address,
            delivery: orderData.delivery_date,
            payment: orderData.payment_method,
            paymentNo: orderData.payment_no,
            notes: orderData.notes
        },
        totalFormatted: fmt(total)
    };

    const orders = JSON.parse(localStorage.getItem('siteOrders') || '[]');
    orders.unshift(localOrder);
    localStorage.setItem('siteOrders', JSON.stringify(orders));

    // Clear cart
    cart = [];
    saveCart();
    updateCartCount();

    // Show success screen
    document.getElementById('checkoutScreen').style.display = 'none';
    document.getElementById('successScreen').style.display = 'flex';

    // Update success message text
    const successMsg = document.querySelector('#successScreen .success-msg');
    if (successMsg) {
        successMsg.textContent = 'Your order has been received. Redirecting to shop...';
    }

    // Redirect to shop page after 3 seconds
    setTimeout(() => {
        const loc = window.location.pathname;
        let prefix = '';
        if (loc.includes('/home/')) {
            prefix = '../pages/';
        } else if (loc.includes('/pages/')) {
            prefix = '';
        }
        window.location.href = prefix + 'shop.html';
    }, 3000);
}

// ========================
// Preloader Logic
// ========================
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        setTimeout(() => {
            preloader.classList.add('fade-out');
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 500);
        }, 300);
    }
});

document.addEventListener('DOMContentLoaded', () => {
    applySiteCustomizations();
    initNavbar();
    initAnimations();
    applyTranslations();
    buildDynamicContent();
    initShopFilters();
    updateCartCount();
    syncProducts(); // Supabase Sync
});

// ========================
// Init
