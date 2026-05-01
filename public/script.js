// Category filter
//     const filterBtns = document.querySelectorAll('.filter-btn');
//     const products = document.querySelectorAll('.pro');

//     filterBtns.forEach(btn => {
//         btn.addEventListener('click', () => {
//             filterBtns.forEach(b => b.classList.remove('active'));
//             btn.classList.add('active');

//             const category = btn.dataset.category;
//             products.forEach(pro => {
//                 if (category === 'all' || pro.dataset.category === category) {
//                     pro.style.display = 'block';
//                 } else {
//                     pro.style.display = 'none';
//                 }
//             });
//         });
//     });

// // Read URL param and auto-filter
//     const params = new URLSearchParams(window.location.search);
//     const cat = params.get('category');
//     if (cat) {
//         const matchBtn = document.querySelector(`.filter-btn[data-category="${cat}"]`);
//         if (matchBtn) matchBtn.click();
//     }
     // ── Color dot picker ──────────────────────────────────────────
        document.querySelectorAll('.color-options').forEach(group => {
            group.querySelectorAll('.color-dot').forEach(dot => {
                dot.addEventListener('click', () => {
                    group.querySelectorAll('.color-dot').forEach(d => d.classList.remove('selected'));
                    dot.classList.add('selected');
                    group.closest('.color-picker').querySelector('.chosen-color').textContent = dot.dataset.color;
                });
            });
        });

        // ── Add to cart with chosen color ─────────────────────────────
        function addToCartWithColor(btn, name, price) {
            const card = btn.closest('.pro');
            const chosenColor = card.querySelector('.chosen-color').textContent;
            addToCart(`${name} (${chosenColor})`, price);
        }

        // ── Filter logic ──────────────────────────────────────────────
        function applyFilters() {
            const category = document.querySelector('input[name="category"]:checked').value;
            const priceRange = document.querySelector('input[name="price"]:checked').value;
            const activeColor = document.querySelector('.color-swatch.active').dataset.color;
            const sort = document.getElementById('sortSelect').value;

            let products = Array.from(document.querySelectorAll('.shop-grid .pro'));

            // Filter
            let visible = products.filter(pro => {
                const pCat = pro.dataset.category;
                const pPrice = parseFloat(pro.dataset.price);
                const pColors = pro.dataset.colors.split(',');

                const catMatch = category === 'all' || pCat === category;

                let priceMatch = true;
                if (priceRange !== 'all') {
                    const [min, max] = priceRange.split('-').map(Number);
                    priceMatch = pPrice >= min && pPrice <= max;
                }

                const colorMatch = activeColor === 'all' || pColors.includes(activeColor);

                return catMatch && priceMatch && colorMatch;
            });

            // Sort
            visible.sort((a, b) => {
                const aPrice = parseFloat(a.dataset.price);
                const bPrice = parseFloat(b.dataset.price);
                const aName = a.querySelector('h4').textContent;
                const bName = b.querySelector('h4').textContent;
                if (sort === 'price-asc') return aPrice - bPrice;
                if (sort === 'price-desc') return bPrice - aPrice;
                if (sort === 'name-asc') return aName.localeCompare(bName);
                return 0;
            });

            // Show/hide
            products.forEach(p => p.style.display = 'none');
            visible.forEach(p => p.style.display = 'block');

            // Re-order in DOM
            const grid = document.getElementById('shopGrid');
            visible.forEach(p => grid.appendChild(p));

            // Result count
            document.getElementById('resultCount').textContent =
                visible.length === 0 ? 'No products found' : `Showing ${visible.length} product${visible.length > 1 ? 's' : ''}`;
            document.getElementById('noResults').style.display = visible.length === 0 ? 'flex' : 'none';
        }

        // ── Color swatch filter click ──────────────────────────────────
        document.querySelectorAll('.color-swatch').forEach(swatch => {
            swatch.addEventListener('click', () => {
                document.querySelectorAll('.color-swatch').forEach(s => s.classList.remove('active'));
                swatch.classList.add('active');
                applyFilters();
            });
        });

        // ── Radio filter change ────────────────────────────────────────
        document.querySelectorAll('input[name="category"], input[name="price"]').forEach(input => {
            input.addEventListener('change', applyFilters);
        });

        // ── Clear all filters ──────────────────────────────────────────
        function clearFilters() {
            document.querySelector('input[name="category"][value="all"]').checked = true;
            document.querySelector('input[name="price"][value="all"]').checked = true;
            document.querySelectorAll('.color-swatch').forEach(s => s.classList.remove('active'));
            document.querySelector('.color-swatch[data-color="all"]').classList.add('active');
            document.getElementById('sortSelect').value = 'default';
            applyFilters();
        }

        // ── URL param auto-filter ──────────────────────────────────────
        const params = new URLSearchParams(window.location.search);
        const cat = params.get('category');
        if (cat) {
            const radio = document.querySelector(`input[name="category"][value="${cat}"]`);
            if (radio) { radio.checked = true; applyFilters(); }
        }
        
//--------------------------------------
// ADD TO CART
function addToCart(name, price) {
    let cart = JSON.parse(localStorage.getItem('munchkin-cart')) || [];

    const existing = cart.find(item => item.name === name);
    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({ name, price, qty: 1 });
    }

    localStorage.setItem('munchkin-cart', JSON.stringify(cart));

    // Show a quick toast notification
    showToast(`"${name}" added to cart succesfully!`);
}

// TOAST NOTIFICATION
function showToast(message) {
    const existing = document.getElementById('toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.id = 'toast';
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        bottom: 30px;
        left: 50%;
        transform: translateX(-50%);
        background: #ff869c;
        color: white;
        padding: 12px 24px;
        border-radius: 30px;
        font-size: 14px;
        z-index: 9999;
        box-shadow: 0 4px 14px rgba(0,0,0,0.15);
        animation: fadeInUp 0.3s ease;
    `;
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transition = 'opacity 0.3s';
        setTimeout(() => toast.remove(), 300);
    }, 2500);
}
const WHATSAPP_NUMBER = '8801576652249';
 
function toggleChat() {
    const popup = document.getElementById('chat-popup');
    popup.classList.toggle('hidden');
}
 
function sendToWhatsApp(message) {
    const encoded = encodeURIComponent(message);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
    window.open(url, '_blank');
}
 
// Close popup if user clicks outside of it
document.addEventListener('click', function(e) {
    const popup = document.getElementById('chat-popup');
    const bubble = document.getElementById('chat-bubble');
    if (popup && bubble) {
        if (!popup.contains(e.target) && !bubble.contains(e.target)) {
            popup.classList.add('hidden');
        }
    }
});
 
/* --------------   -------------- LOGIN --------------  ---------------- */
// =====================
// PHASE 4 — NAVBAR AUTH STATE
// Paste this at the bottom of script.js
// =====================

// Shows Login or user's name + Logout in navbar dynamically
function updateNavAuth() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;

    // Remove existing auth li if any
    const existingAuth = document.getElementById('nav-auth');
    if (existingAuth) existingAuth.remove();

    const session = JSON.parse(localStorage.getItem('munchkin-session'));
    const li = document.createElement('li');
    li.id = 'nav-auth';

    if (session) {
        // Logged in
        li.innerHTML = `
            <div class="nav-user-menu">
                <span class="nav-username">
                    <i class="fa-solid fa-user"></i> ${session.name.split(' ')[0]}
                    <i class="fa-solid fa-chevron-down" style="font-size:10px;"></i>
                </span>
                <ul class="nav-user-dropdown">
                    ${session.role === 'admin' ? '<li><a href="admin.html"><i class="fa-solid fa-gauge"></i> Admin Panel</a></li>' : ''}
                    <li><a href="#" onclick="logoutUser()"><i class="fa-solid fa-right-from-bracket"></i> Logout</a></li>
                </ul>
            </div>
        `;
    } else {
        // Not logged in
        li.innerHTML = `<a href="login.html"><i class="fa-solid fa-right-to-bracket"></i> Login</a>`;
    }

    navbar.appendChild(li);
}

function logoutUser() {
    localStorage.removeItem('munchkin-session');
    window.location.href = 'index.html';
}

// Run on every page
updateNavAuth();