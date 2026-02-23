// ========================
// Language System
// ========================
const translations = {
    en: {
        atelier: 'Atelier', collection: 'Collection', legacy: 'Legacy',
        concierge: 'Concierge', staffPortal: 'Staff Login Portal',
        heroSub: 'Baking Corner — Luxury Atelier',
        heroDesc: 'Each creation is a singular brushstroke, born from the rarest ingredients sourced across the world\'s finest culinary regions.',
        exploreAtelier: 'Explore Atelier', ourHeritage: 'Our Heritage',
        philosophyOverline: 'The Atelier Philosophy', philosophyTitle: 'Where Science Meets Devotion.',
        philosophyDesc: 'Every masterpiece begins not with flour and sugar, but with a singular vision. At Baking Corner, technique is our foundation — but poetry is our language.',
        noCompromise: 'No Compromise.', qualityDesc: 'Only the finest couverture chocolate, farm-fresh eggs, and heritage-grain flours make it past our atelier doors.',
        boutiqueCorners: 'Boutique Corners',
        limitedEdition: 'Limited Collection', gourmetShowcase: 'Gourmet Showcase',
        viewFullAtelier: 'View Full Atelier', visitSection: 'Visit Section',
        reserveItem: 'Reserve Item',
        orderInfoHeader: 'Cake Order Form', orderNote: 'Order Confirmation',
        priceListHeader: 'Our Price List',
        deliveryPointHeader: 'Delivery Point', deliveryPoint: 'Nangalkot Bottol Square, Cumilla',
        whatsappContact: 'WhatsApp Order', contactUs: 'Contact via WhatsApp',
        aboutHeroOverline: 'Our Living History', ancientMethods: 'Ancient Methods, Modern Mastery.',
        rareOrigins: 'Rare Origins', wholeness: 'Wholeness of Craft',
        contactHeroOverline: 'Private Consultation', inquiryPortal: 'Inquiry Portal',
        fullName: 'Full Name', emailAddress: 'Email Address',
        inquiryCategory: 'Inquiry Category', requirementDetails: 'Requirement Details',
        initCommunication: 'Initiate Communication',
        globalPresence: 'Global Presence', atelierHQ: 'The Grand Atelier HQ',
        privateAppointment: 'By Private Appointment', dailyLiaison: 'Daily Liaison Available',
        responseGuarantee: '24H Response Guarantee',
        commandCenter: 'Command Center', archiveCreation: 'Archive & Creation',
        valuation: 'Valuation', marketValuation: 'Market Valuation',
        registerMasterpiece: 'Register Masterpiece', terminateAuthority: 'Terminate Authority',
        identityRank: 'Identity Rank'
    },
    bn: {
        atelier: 'আটেলিয়ার', collection: 'কালেকশন', legacy: 'লেগেসি',
        concierge: 'কনসিয়ার্জ', staffPortal: 'স্টাফ লগইন পোর্টাল',
        heroSub: 'বেকিং কর্নার — লাক্সারি আটেলিয়ার',
        heroDesc: 'প্রতিটি সৃষ্টি একটি অনন্য ব্রাশস্ট্রোক, বিশ্বের সেরা রন্ধন অঞ্চল থেকে সংগৃহীত বিরলতম উপাদান থেকে জন্ম নেওয়া।',
        exploreAtelier: 'আটেলিয়ার দেখুন', ourHeritage: 'আমাদের ঐতিহ্য',
        philosophyOverline: 'আটেলিয়ার দর্শন', philosophyTitle: 'যেখানে বিজ্ঞান মিলিত হয় নিষ্ঠার সাথে।',
        philosophyDesc: 'প্রতিটি মাস্টারপিস আটা এবং চিনি দিয়ে শুরু হয় না, একক দৃষ্টিভঙ্গি দিয়ে শুরু হয়। বেকিং কর্নারে কৌশল আমাদের ভিত্তি — কিন্তু কবিতা আমাদের ভাষা।',
        noCompromise: 'কোনো আপস নেই।', qualityDesc: 'শুধুমাত্র সেরা চকলেট, খামারের তাজা ডিম, এবং গমের আটা আমাদের আটেলিয়ারে প্রবেশ করে।',
        boutiqueCorners: 'বুটিক কর্নারস',
        limitedEdition: 'সীমিত সংগ্রহ', gourmetShowcase: 'গুরমেট শোকেস',
        viewFullAtelier: 'পূর্ণ আটেলিয়ার দেখুন', visitSection: 'বিভাগ দেখুন',
        reserveItem: 'আইটেম রিজার্ভ করুন',
        orderInfoHeader: 'কেক অর্ডার ফর্ম', orderNote: 'অর্ডার নিশ্চিতকরণ',
        priceListHeader: 'আমাদের মূল্য তালিকা',
        deliveryPointHeader: 'ডেলিভারি পয়েন্ট', deliveryPoint: 'নাঙ্গলকোট বটতল চত্বর, কুমিল্লা',
        whatsappContact: 'হোয়াটসঅ্যাপ অর্ডার', contactUs: 'হোয়াটসঅ্যাপে যোগাযোগ করুন',
        aboutHeroOverline: 'আমাদের জীবন্ত ইতিহাস', ancientMethods: 'প্রাচীন পদ্ধতি, আধুনিক দক্ষতা।',
        rareOrigins: 'বিরল উৎস', wholeness: 'শিল্পের পূর্ণতা',
        contactHeroOverline: 'ব্যক্তিগত পরামর্শ', inquiryPortal: 'অনুসন্ধান পোর্টাল',
        fullName: 'পূর্ণ নাম', emailAddress: 'ইমেইল ঠিকানা',
        inquiryCategory: 'অনুসন্ধানের বিভাগ', requirementDetails: 'প্রয়োজনীয় বিবরণ',
        initCommunication: 'যোগাযোগ শুরু করুন',
        globalPresence: 'বৈশ্বিক উপস্থিতি', atelierHQ: 'গ্র্যান্ড আটেলিয়ার সদর দপ্তর',
        privateAppointment: 'ব্যক্তিগত অ্যাপয়েন্টমেন্টে', dailyLiaison: 'দৈনিক যোগাযোগ উপলব্ধ',
        responseGuarantee: '২৪ ঘন্টার মধ্যে সাড়া',
        commandCenter: 'কমান্ড সেন্টার', archiveCreation: 'আর্কাইভ ও সৃষ্টি',
        valuation: 'মূল্যায়ন', marketValuation: 'বাজার মূল্যায়ন',
        registerMasterpiece: 'মাস্টারপিস নিবন্ধন', terminateAuthority: 'অথরিটি বাতিল করুন',
        identityRank: 'পরিচয় র‍্যাংক'
    },
    orderFields: {
        en: {
            name: '🧑🦱 Name',
            location: '📍 Location',
            mobile: '📱 Mobile Number',
            weight: '⚖️ Weight (kg)',
            flavor: '🍰 Flavor',
            design: '🎨 Design',
            deliveryDate: '📅 Delivery Date & Time',
            advance: '💵 Advance Payment',
            bkash: '💳 Bkash Number'
        },
        bn: {
            name: '🧑🦱 নাম',
            location: '📍 লোকেশন',
            mobile: '📱 মোবাইল নম্বর',
            weight: '⚖️ ওজন (কেজি)',
            flavor: '🍰 ফ্লেভার',
            design: '🎨 ডিজাইন স্যাম্পল',
            deliveryDate: '📅 ডেলিভারি তারিখ ও সময়',
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
            { name: '🎂 Custom Design (extra charge)', price: '৳300–৳500' }
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
    const list = translations.priceList[currentLang];
    container.innerHTML = list.map(item => `
    <div class="price-item">
      <span class="price-name">${item.name}</span>
      <span class="price-value">${item.price}</span>
    </div>
  `).join('');
}

function buildOrderFields(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    const fields = translations.orderFields[currentLang];
    container.innerHTML = Object.values(fields).map(f => `
    <div class="order-field">
      <label>${f}:</label>
    </div>
  `).join('');
}

function buildDynamicContent() {
    buildPriceList('priceList');
    buildOrderFields('orderFields');
}

// Copy template
function copyTemplate() {
    const fields = translations.orderFields[currentLang];
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
    grid.innerHTML = filtered.length ? filtered.map(p => `
    <div class="product-card fade-in visible">
      <div class="product-img">
        <img src="${p.image}" alt="${p.name}" loading="lazy">
        <div class="product-img-overlay"></div>
        <div class="product-badge">✦ ${p.category}</div>
      </div>
      <div class="product-body">
        <div class="product-header">
          <h3>${p.name}</h3>
          <span class="product-price">$${p.price}</span>
        </div>
        <p class="product-desc">"${p.description}"</p>
        <button class="product-btn" onclick="addToCart(${p.id})" data-t="reserveItem">Reserve Item</button>
      </div>
    </div>
  `).join('') : '<p style="text-align:center;color:var(--text-muted);font-style:italic;grid-column:1/-1;padding:3rem">No masterpieces found.</p>';
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

// ========================
// Cart
// ========================
let cart = JSON.parse(localStorage.getItem('cart') || '[]');
function updateCartCount() {
    document.querySelectorAll('.cart-count').forEach(el => { el.textContent = cart.length; el.style.display = cart.length ? 'flex' : 'none'; });
}
function addToCart(id) {
    const product = products.find(p => p.id === id);
    if (product) { cart.push(product); localStorage.setItem('cart', JSON.stringify(cart)); updateCartCount(); }
}

// ========================
// Init
// ========================
document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
    initAnimations();
    applyTranslations();
    buildDynamicContent();
    initShopFilters();
    updateCartCount();
});
