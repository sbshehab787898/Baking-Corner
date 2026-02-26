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
    { id: 'custom-orders', label: 'Custom Orders', icon: '🎨', href: 'admin-custom-orders.html' },
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
        <img src="../assets/logo.jpeg" style="width:40px;height:40px;object-fit:contain;border-radius:10px;margin-right:1rem">
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

  // Prevent body scroll when menu is open on mobile
  if (sidebar.classList.contains('open')) {
    document.body.classList.add('no-scroll');
  } else {
    document.body.classList.remove('no-scroll');
  }
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
  if (!window.supabaseClient) return { error: 'Supabase client not initialized' };
  let { data, error } = await window.supabaseClient.from('products').insert([product]).select();

  // Handle missing columns error by retrying without non-standard columns
  if (error && (error.message.includes('flavour_options') || error.message.includes('pound_options') || error.message.includes('status'))) {
    console.warn('Some columns (status/flavour/pound) not found, retrying without them...');
    const safeProduct = { ...product };
    delete safeProduct.flavour_options;
    delete safeProduct.pound_options;
    delete safeProduct.status;
    const retry = await window.supabaseClient.from('products').insert([safeProduct]).select();
    data = retry.data;
    error = retry.error;
  }

  if (error) console.error('Supabase Product Add Error:', error);
  return { data: data ? data[0] : null, error };
}

async function dbUpdateProduct(id, product) {
  if (!window.supabaseClient) return { error: 'Supabase client not initialized' };
  let { data, error } = await window.supabaseClient.from('products').update(product).eq('id', id).select();

  // Handle missing columns error by retrying without non-standard columns
  if (error && (error.message.includes('flavour_options') || error.message.includes('pound_options') || error.message.includes('status'))) {
    console.warn('Some columns (status/flavour/pound) not found, retrying update without them...');
    const safeProduct = { ...product };
    delete safeProduct.flavour_options;
    delete safeProduct.pound_options;
    delete safeProduct.status;
    const retry = await window.supabaseClient.from('products').update(safeProduct).eq('id', id).select();
    data = retry.data;
    error = retry.error;
  }

  if (error) console.error('Supabase Product Update Error:', error);
  return { data: data ? data[0] : null, error };
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

async function dbUpdateCategory(id, updates) {
  if (!window.supabaseClient) return;
  const { error } = await window.supabaseClient.from('categories').update(updates).eq('id', id);
  if (error) console.error('Supabase Category Update Error:', error);
  return { error };
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
    }

    // Sync Custom Orders
    const { data: customOrders, error: coError } = await window.supabaseClient.from('custom_orders').select('*').order('created_at', { ascending: false });
    if (!coError && customOrders) {
      localStorage.setItem('customOrders', JSON.stringify(customOrders));
    }

    // Sync Global Pound Options
    const { data: pOpts, error: poError } = await window.supabaseClient.from('pound_options').select('*').order('value', { ascending: true });
    if (!poError && pOpts) {
      localStorage.setItem('poundOptions', JSON.stringify(pOpts));
    }

    // Sync Global Flavour Options
    const { data: fOpts, error: foError } = await window.supabaseClient.from('flavour_options').select('*').order('name', { ascending: true });
    if (!foError && fOpts) {
      localStorage.setItem('flavourOptions', JSON.stringify(fOpts));
    }

    // Sync Payment Methods
    const { data: pMethods, error: pmError } = await window.supabaseClient.from('payment_methods').select('*').order('name', { ascending: true });
    if (!pmError && pMethods) {
      localStorage.setItem('paymentMethods', JSON.stringify(pMethods));
    }

    // Sync Price List
    const { data: pListItems, error: pliError } = await window.supabaseClient.from('price_list').select('*').order('created_at', { ascending: true });
    if (!pliError && pListItems) {
      localStorage.setItem('priceListSynced', JSON.stringify(pListItems));
    }

  } catch (err) {
    console.error('Sync process failed:', err);
  }

  // Refresh UI if functions exist
  if (typeof renderOrders === 'function') renderOrders();
  if (typeof renderProducts === 'function') renderProducts();
  if (typeof renderCorners === 'function') renderCorners();
  if (typeof renderStats === 'function') renderStats();
  if (typeof renderGlobalOptions === 'function') renderGlobalOptions();
  if (typeof renderCustomOrders === 'function') renderCustomOrders();
}

async function dbAddCustomOrder(order) {
  if (!window.supabaseClient) return { error: 'Supabase client not initialized' };
  const { data, error } = await window.supabaseClient.from('custom_orders').insert([order]).select();
  return { data: data ? data[0] : null, error };
}

async function dbUpdateCustomOrder(id, updates) {
  if (!window.supabaseClient) return { error: 'Supabase client not initialized' };
  const { data, error } = await window.supabaseClient.from('custom_orders').update(updates).eq('id', id).select();
  return { data: data ? data[0] : null, error };
}

async function dbDeleteCustomOrder(id) {
  if (!window.supabaseClient) return;
  const { error } = await window.supabaseClient.from('custom_orders').delete().eq('id', id);
  return { error };
}

async function dbAddGlobalPound(option) {
  if (!window.supabaseClient) return;
  const { error } = await window.supabaseClient.from('pound_options').insert([option]);
  return { error };
}

async function dbDeleteGlobalPound(id) {
  if (!window.supabaseClient) return;
  const { error } = await window.supabaseClient.from('pound_options').delete().eq('id', id);
  return { error };
}

async function dbAddGlobalFlavour(option) {
  if (!window.supabaseClient) return;
  const { error } = await window.supabaseClient.from('flavour_options').insert([option]);
  return { error };
}

async function dbDeleteGlobalFlavour(id) {
  if (!window.supabaseClient) return;
  const { error } = await window.supabaseClient.from('flavour_options').delete().eq('id', id);
  return { error };
}

async function dbAddPaymentMethod(method) {
  if (!window.supabaseClient) return;
  const { error } = await window.supabaseClient.from('payment_methods').insert([method]);
  return { error };
}

async function dbDeletePaymentMethod(id) {
  if (!window.supabaseClient) return;
  const { error } = await window.supabaseClient.from('payment_methods').delete().eq('id', id);
  return { error };
}

async function dbAddPriceItem(item) {
  if (!window.supabaseClient) return;
  const { error } = await window.supabaseClient.from('price_list').insert([item]);
  return { error };
}

async function dbDeletePriceItem(id) {
  if (!window.supabaseClient) return;
  const { error } = await window.supabaseClient.from('price_list').delete().eq('id', id);
  return { error };
}

// Admin Credentials DB Ops
async function getAdminCreds() {
  if (!window.supabaseClient) return { username: 'admin', password: 'admin' };
  try {
    const { data, error } = await window.supabaseClient.from('admin_settings').select('*').eq('id', 'main_admin').single();
    if (error) return { username: 'admin', password: 'admin' };
    return data;
  } catch (e) {
    return { username: 'admin', password: 'admin' };
  }
}

async function updateAdminCreds(newCreds) {
  if (!window.supabaseClient) return { error: 'Supabase client not initialized' };
  const { error } = await window.supabaseClient.from('admin_settings').update(newCreds).eq('id', 'main_admin');
  return { error };
}


function copyText(text) {
  if (!text) return;
  navigator.clipboard.writeText(text).then(() => {
    alert('Copied to clipboard: ' + text);
  }).catch(err => {
    console.error('Failed to copy: ', err);
  });
}


// ========================
// Admin Preloader Hide
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
