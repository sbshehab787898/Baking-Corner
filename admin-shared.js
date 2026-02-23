// ========================
// Admin Auth Guard
// ========================
function adminAuthGuard() {
    if (!sessionStorage.getItem('adminAuth')) {
        window.location.href = 'admin.html';
    }
}

// ========================
// Render Admin Sidebar
// ========================
function renderAdminSidebar(activePage) {
    const pages = [
        { id: 'dashboard', label: 'Command Center', icon: '📊', href: 'admin-dashboard.html' },
        { id: 'corners', label: 'Boutique Corners', icon: '🏪', href: 'admin-corners.html' },
        { id: 'products', label: 'Archive & Creation', icon: '📦', href: 'admin-products.html' },
        { id: 'settings', label: 'Atelier Settings', icon: '⚙️', href: 'admin-settings.html' },
    ];

    const sidebarHTML = `
    <aside class="admin-sidebar" id="adminSidebar">
      <div class="sidebar-brand">
        <div class="sidebar-icon">⚙️</div>
        <div>
          <span class="sidebar-sub">Privileged Access</span>
          <span class="sidebar-title">Staff <em>Portal</em></span>
        </div>
      </div>

      <nav class="sidebar-nav">
        ${pages.map(p => `
          <a href="${p.href}" class="sidebar-link ${activePage === p.id ? 'active' : ''}">
            <div class="sidebar-link-inner">
              <span class="sidebar-link-icon">${p.icon}</span>
              <span>${p.label}</span>
            </div>
            <span class="sidebar-arrow">›</span>
          </a>
        `).join('')}
      </nav>

      <div class="sidebar-footer">
        <button class="sidebar-logout" onclick="adminLogout()">
          🚪 <span>Terminate Authority</span>
        </button>
        <a href="index.html" class="sidebar-home-link">← Back to Site</a>
      </div>
    </aside>

    <!-- Mobile sidebar toggle -->
    <button class="sidebar-toggle" id="sidebarToggle" onclick="toggleSidebar()">☰</button>
    <div class="sidebar-overlay" id="sidebarOverlay" onclick="toggleSidebar()"></div>
  `;

    const mountPoint = document.getElementById('adminSidebarMount');
    if (mountPoint) mountPoint.innerHTML = sidebarHTML;
}

function toggleSidebar() {
    const sidebar = document.getElementById('adminSidebar');
    const overlay = document.getElementById('sidebarOverlay');
    sidebar.classList.toggle('open');
    overlay.classList.toggle('open');
}

function adminLogout() {
    sessionStorage.removeItem('adminAuth');
    window.location.href = 'admin.html';
}

// Shared admin data (in-memory, synced via sessionStorage)
function getAdminData() {
    return {
        products: JSON.parse(sessionStorage.getItem('adminProducts') || 'null') || [
            { id: 1, name: 'Rose Velvet Dreams', price: 128, category: 'cakes', image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=200', description: 'A symphony of red velvet.' },
            { id: 2, name: 'Gold Leaf Macarons', price: 86, category: 'macarons', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200', description: 'Hand-piped shells with 24k gold.' },
            { id: 3, name: 'Midnight Obsidian Torte', price: 215, category: 'cakes', image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=200', description: 'Seven layers of dark chocolate.' },
            { id: 4, name: 'Ivory Lace Cake', price: 320, category: 'cakes', image: 'https://images.unsplash.com/photo-1542826438-bd32f43d626f?w=200', description: 'Handcrafted sugar lace.' },
            { id: 5, name: 'Champagne Choux', price: 72, category: 'pastries', image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=200', description: 'Pâte à choux with Dom Pérignon cream.' },
            { id: 6, name: 'Bergamot Tart', price: 96, category: 'pastries', image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=200', description: 'Earl grey custard.' },
            { id: 7, name: 'Pearl Truffle Collection', price: 145, category: 'chocolates', image: 'https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=200', description: '12 hand-rolled grand-cru truffles.' },
            { id: 8, name: 'Saffron Cloud Cake', price: 265, category: 'cakes', image: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=200', description: 'Persian saffron with clotted cream.' }
        ],
        corners: JSON.parse(sessionStorage.getItem('adminCorners') || 'null') || [
            { id: 1, name: 'Gâteau Atelier', description: 'Bespoke tiered creations for ceremonies of the highest distinction.' },
            { id: 2, name: 'Viennoiserie', description: 'Morning masterpieces, perfected over decades of devotion to craft.' },
            { id: 3, name: 'Chocolatier', description: 'Grand-cru single-origin confections from the world\'s most remote estates.' }
        ]
    };
}

function saveAdminData(key, data) {
    sessionStorage.setItem(key, JSON.stringify(data));
}
