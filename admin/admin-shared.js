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
    { id: 'dashboard', label: 'Dashboard', icon: '💎', href: 'admin-dashboard.html' },
    { id: 'orders', label: 'Orders', icon: '🧾', href: 'admin-orders.html' },
    { id: 'corners', label: 'Categories', icon: '🏬', href: 'admin-corners.html' },
    { id: 'products', label: 'Products', icon: '📦', href: 'admin-products.html' },
    { id: 'settings', label: 'Settings', icon: '⚙️', href: 'admin-settings.html' },
  ];

  // Count pending orders for badge
  let pendingCount = 0;
  try {
    const orders = JSON.parse(localStorage.getItem('siteOrders') || '[]');
    pendingCount = orders.filter(o => o.status === 'Pending').length;
  } catch (e) { }

  const sidebarHTML = `
    <aside class="admin-sidebar" id="adminSidebar">
      <div class="sidebar-brand">
        <div class="sidebar-icon">🍩</div>
        <div>
          <span class="sidebar-sub">Admin Area</span>
          <span class="sidebar-title">Baking <em>Corner</em></span>
        </div>
      </div>

      <nav class="sidebar-nav">
        ${pages.map(p => `
          <a href="${p.href}" class="sidebar-link ${activePage === p.id ? 'active' : ''}">
            <div class="sidebar-link-inner">
              <span class="sidebar-link-icon">${p.icon}</span>
              <span>${p.label}</span>
            </div>
            ${p.id === 'orders' && pendingCount > 0 ? `<span style="background:#EC4899;color:white;font-size:10px;font-weight:900;padding:2px 8px;border-radius:9999px;min-width:20px;text-align:center">${pendingCount}</span>` : '<span class="sidebar-arrow">›</span>'}
          </a>
        `).join('')}
      </nav>

      <div class="sidebar-footer">
        <a href="../home/index.html" class="sidebar-home-link" style="margin-bottom:0.75rem;display:flex;align-items:center;justify-content:center;gap:0.5rem;padding:0.75rem;background:#f8fafc;border-radius:1rem;color:#64748b;font-weight:700">
          🏘️ <span>View Website</span>
        </a>
        <button class="sidebar-logout" onclick="adminLogout()">
          🚪 <span>Logout Admin</span>
        </button>
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

// Shared admin data
function getAdminData() {
  return {
    products: JSON.parse(sessionStorage.getItem('adminProducts') || '[]'),
    corners: JSON.parse(sessionStorage.getItem('adminCorners') || '[]'),
    orders: JSON.parse(localStorage.getItem('siteOrders') || '[]')
  };
}

async function saveAdminData(type, data) {
  let key = type;
  if (!key.startsWith('admin') && !key.startsWith('site')) {
    key = 'admin' + type.charAt(0).toUpperCase() + type.slice(1);
  }
  sessionStorage.setItem(key, JSON.stringify(data));

  if (type === 'orders' || type === 'siteOrders') {
    localStorage.setItem('siteOrders', JSON.stringify(data));
  }
}

async function dbAddProduct(product) {
  if (!window.supabaseClient) return;
  const { error } = await window.supabaseClient.from('products').insert([product]);
  if (error) console.error('Supabase Product Add Error:', error);
}

async function dbDeleteProduct(id) {
  if (!window.supabaseClient) return;
  const { error } = await window.supabaseClient.from('products').delete().eq('id', id);
  if (error) console.error('Supabase Product Delete Error:', error);
}

async function dbAddCategory(category) {
  if (!window.supabaseClient) return;
  const { error } = await window.supabaseClient.from('categories').insert([category]);
  if (error) console.error('Supabase Category Add Error:', error);
}

async function dbDeleteCategory(id) {
  if (!window.supabaseClient) return;
  const { error } = await window.supabaseClient.from('categories').delete().eq('id', id);
  if (error) console.error('Supabase Category Delete Error:', error);
}

async function dbUpdateOrderStatus(id, status) {
  if (!window.supabaseClient) return;
  const { error } = await window.supabaseClient.from('orders').update({ status }).eq('id', id);
  if (error) console.error('Supabase Order Status Update Error:', error);
}

async function dbDeleteOrder(id) {
  if (!window.supabaseClient) return;
  const { error } = await window.supabaseClient.from('orders').delete().eq('id', id);
  if (error) console.error('Supabase Order Delete Error:', error);
}

async function syncAdminDataFromSupabase() {
  if (!window.supabaseClient) return;

  try {
    // Sync Products
    const { data: products, error: pError } = await window.supabaseClient.from('products').select('*').order('created_at', { ascending: false });
    if (!pError && products) {
      sessionStorage.setItem('adminProducts', JSON.stringify(products));
    }

    // Sync Categories
    const { data: corners, error: cError } = await window.supabaseClient.from('categories').select('*').order('created_at', { ascending: true });
    if (!cError && corners) {
      sessionStorage.setItem('adminCorners', JSON.stringify(corners));
    }

    // Sync Orders
    const { data: orders, error: oError } = await window.supabaseClient.from('orders').select('*').order('created_at', { ascending: false });
    if (!oError && orders) {
      const formattedOrders = orders.map(o => ({
        ...o,
        date: o.created_at || new Date().toISOString(),
        customer: {
          name: o.customer_name || 'Guest',
          phone: o.customer_phone || 'N/A',
          address: o.customer_address || '',
          delivery: o.delivery_date || '',
          payment: o.payment_method || 'Cash',
          paymentNo: o.payment_no || '',
          notes: o.notes || ''
        }
      }));
      localStorage.setItem('siteOrders', JSON.stringify(formattedOrders));
    } else if (oError) {
      console.error('Supabase Sync Orders Error:', oError.message);
    }
  } catch (err) {
    console.error('Sync process failed:', err);
  }

  // Refresh UI if functions exist
  if (typeof renderOrders === 'function') renderOrders();
  if (typeof renderProducts === 'function') renderProducts();
  if (typeof renderCorners === 'function') renderCorners();
  if (typeof renderStats === 'function') renderStats();
}


