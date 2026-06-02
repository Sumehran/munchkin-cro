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
// =====================================================
// PASTE THIS AT THE TOP OF YOUR script.js
// (Replace your existing DEFAULT_PRODUCTS if you have one)
// =====================================================
 
const DEFAULT_PRODUCTS = [
    {
        name: 'Chick holding Flower',
        category: 'keyrings',
        price: 350,
        colors: 'yellow,white,pink',
        image: 'img/flower_chick.png',
        images: ['img/flower_chick.png'],
        description: 'An adorable handmade crochet chick holding a tiny flower — perfect as a keyring or bag charm! Each piece is lovingly stitched by hand and made to order in your chosen colour. 🐣',
        materials: ['4 ply milk cotton yarn', 'Polyfill stuffing'],
        dimensions: 'Approximately 8–10 cm tall. Slight size variations may occur as each piece is handmade.'
    },
        {
        name: 'Bee Crochet',
        category: 'keyrings',
        price: 280,
        colors: 'yellow,pink',
        image: 'img/bee.jpeg',
        images: ['img/bee.jpeg'],
        description: 'An adorable handmade crochet bee — perfect as a keyring or bag charm! Each piece is lovingly stitched by hand and made to order in your chosen colour.',
        materials: ['4 ply milk cotton yarn', 'Polyfill stuffing'],
        dimensions: 'Approximately 3-4 cm tall. Slight size variations may occur as each piece is handmade.'
    },
    {
        name: 'Bow keyring',
        category: 'keyrings',
        price: 150,
        colors: 'red,white,pink',
        image: 'img/bow.jpeg',
        images: ['img/bow.jpeg'],
        description: 'A handmade crochet bow keyring — perfect as a keyring or bag charm! Each piece is lovingly stitched by hand and made to order in your chosen colour. ',
        materials: ['4 ply milk cotton yarn'],
        dimensions: 'Approximately 2-3 cm tall. Slight size variations may occur as each piece is handmade.'
    },
        {
        name: 'Sunflower Charm',
        category: 'keyrings',
        price: 150,
        colors: 'red,white,pink',
        image: 'img/sunflower.jpeg',
        images: ['img/sunflower.jpeg'],
        description: 'A handmade crochet sunflower charm — perfect as a keyring or bag charm! Each piece is lovingly stitched by hand and made to order in your chosen colour. ',
        materials: ['4 ply milk cotton yarn'],
        dimensions: 'Approximately 3-4 cm tall. Slight size variations may occur as each piece is handmade.'
    },
    {
        name: 'Cat keyring',
        category: 'keyrings',
        price: 450,
        colors: 'pink,black,gray,white',
        image: 'img/cat.jpeg',
        images: ['img/cat.jpeg'],
        description: 'A handmade crochet cat keyring — perfect as a keyring or bag charm! Customise your own kitty in your favourite colour.',
        materials: ['4 ply milk cotton yarn'],
        dimensions: 'Approximately 4-5 cm tall. Slight size variations may occur as each piece is handmade.'
    },
    {
        name: 'Chick Charm',
        category: 'keyrings',
        price: 120,
        colors: 'yellow',
        image: 'img/chicks.jpeg',
        images: ['img/chicks.jpeg'],
        description: 'A handmade crochet chick charm — perfect as a keyring or phone charm! Each piece is lovingly stitched by hand and made to order in your chosen colour. ',
        materials: ['4 ply milk cotton yarn'],
        dimensions: 'Approximately 2-3 cm tall. Slight size variations may occur as each piece is handmade.'
    },
    {
        name: 'Flower Ducky',
        category: 'keyrings',
        price: 450,
        colors: 'white',
        image: 'img/whitechick.jpeg',
        images: ['img/whitechick.jpeg'],
        description: 'A handmade crochet duckling charm — perfect as a keyring or phone charm! Each piece is lovingly stitched by hand and made to order in your chosen colour. ',
        materials: ['4 ply milk cotton yarn'],
        dimensions: 'Approximately 4-5 cm tall. Slight size variations may occur as each piece is handmade.'
    },
    {
        name: 'Octo Buddy',
        category: 'keyrings',
        price: 280,
        colors: 'red,pink,yellow',
        image: 'img/octo.jpeg',
        images: ['img/octo.jpeg'],
        description: 'A handmade crochet octopus buddy — perfect as a keyring or phone charm! Each piece is lovingly stitched by hand and made to order in your chosen colour. ',
        materials: ['4 ply milk cotton yarn'],
        dimensions: 'Approximately 3-4 cm tall. Slight size variations may occur as each piece is handmade.'
    },
    {
        name: 'Baby Otter',
        category: 'keyrings',
        price: 350,
        colors: 'brown',
        image: 'img/otter.jpeg',
        images: ['img/otter.jpeg'],
        description: 'A handmade crochet otter charm — perfect as a keyring or phone charm! Each piece is lovingly stitched by hand and made to order in your chosen colour. ',
        materials: ['4 ply milk cotton yarn'],
        dimensions: 'Approximately 3-4 cm tall. Slight size variations may occur as each piece is handmade.'
    },
    {
        name: 'Dino keyring',
        category: 'keyrings',
        price: 480,
        colors: 'yellow, orange, blue',
        image: 'img/dinos.jpeg',
        images: ['img/dinos.jpeg'],
        description: 'A handmade crochet dino keyring — perfect as a keyring or bag charm! Each piece is lovingly stitched by hand and made to order in your chosen colour. ',
        materials: ['4 ply milk cotton yarn'],
        dimensions: 'Approximately 4-5 cm tall. Slight size variations may occur as each piece is handmade.'
    },
    {
        name: 'Spiderman - Miles Morales Crochet',
        category: 'keyrings',
        price: 380,
        colors: 'black',
        image: 'img/miles.jpeg',
        images: ['img/miles.jpeg'],
        description: 'Your favourite character Spiderman Miles Morales is ready to save the world! ',
        materials: ['4 ply milk cotton yarn'],
        dimensions: 'Approximately 4-5 cm tall. Slight size variations may occur as each piece is handmade.'
    },
    {
        name: 'Spider Gwen Crochet',
        category: 'keyrings',
        price: 380,
        colors: 'white',
        image: 'img/gwen.jpeg',
        images: ['img/gwen.jpeg'],
        description: 'Your favourite character Spider Gwen is ready to save the world! ',
        materials: ['4 ply milk cotton yarn'],
        dimensions: 'Approximately 4-5 cm tall. Slight size variations may occur as each piece is handmade.'
    },
    {
        name: 'Michelin Chick Plush',
        category: 'plushies',
        price: 550,
        colors: 'yellow',
        image: 'img/chef_chick.jpeg',
        images: ['img/chef_chick.jpeg'],
        description: 'An adorable handmade crochet Michelin chef chick plushie — cute enough to be a gift or just a treat for yourself! 🐣👨‍🍳',
        materials: ['4 ply milk cotton yarn', 'Polyfill stuffing', 'Safety eyes'],
        dimensions: 'Approximately 10–12 cm tall.'
    },
    {
        name: 'Cat Plush',
        category: 'plushies',
        price: 2400,
        colors: 'white',
        image: 'img/cat_plush.jpeg',
        images: ['img/cat_plush.jpeg'],
        description: 'An adorable handmade crochet cat plushie — cute enough to be a gift or just a treat for yourself!',
        materials: ['fluffy yarn', 'Polyfill stuffing'],
        dimensions: 'Approximately 8-9 inches tall.'
    },
    {
        name: 'Bunny Plush',
        category: 'plushies',
        price: 680,
        colors: 'brown,white',
        image: 'img/bunnies.jpeg',
        images: ['img/bunnies.jpeg'],
        description: 'An adorable handmade crochet bunny plushie — cute enough to be a gift or just a treat for yourself!',
        materials: ['fluffy yarn', 'Polyfill stuffing'],
        dimensions: 'Approximately 8-9 cm tall.'
    },
    {
        name: 'Kirby Plush',
        category: 'plushies',
        price: 1800,
        colors: 'pink',
        image: 'img/kirby.jpeg',
        images: ['img/kirby.jpeg'],
        description: 'An adorable handmade crochet Kirby plushie — cute enough to be a gift or just a treat for yourself!',
        materials: ['fluffy yarn', 'Polyfill stuffing'],
        dimensions: 'Approximately 6-7 inches tall.'
    },
    {
        name: 'Shell Stitch Bag',
        category: 'bags',
        price: 3500,
        colors: 'white,purple,brown',
        image: 'img/Shell_stitch_bag.jpeg',
        images: ['img/Shell_stitch_bag.jpeg'],
        description: 'A beautiful handmade shell stitch crochet bag — stylish, spacious, and unique. Perfect for everyday use! 🧶👜',
        materials: ['Cotton yarn', 'Bag handles', 'Inner lining'],
        dimensions: 'Approximately 30 × 25 cm.'
    },
    {
        name: 'Tulips',
        category: 'flowers',
        price: 280,
        colors: 'pink,blue,purple,yellow,white',
        image: 'img/Tulips.png',
        images: ['img/Tulips.png'],
        description: 'Beautiful handmade crochet tulips that never wilt! A perfect gift for any occasion — birthdays, Eid, or just because. Available in a variety of colours. 🌷',
        materials: ['4 ply milk cotton yarn'],
        dimensions: 'Stem height approximately 25–30 cm. Flower head approximately 5–6 cm wide.'
    },
    {
        name: 'Lily Flower',
        category: 'flowers',
        price: 900,
        colors: 'pink,blue,purple,yellow,white',
        image: 'img/lily.jpeg',
        images: ['img/lily.jpeg'],
        description: 'Beautiful handmade crochet lilies that never wilt! A perfect gift for any occasion — birthdays, Eid, or just because.',
        materials: ['4 ply milk cotton yarn'],
        dimensions: 'Stem height approximately 25–30 cm. Flower head approximately 5–6 cm wide.'
    },
    {
        name: 'Bear Wallet',
        category: 'accessories',
        price: 550,
        colors: 'brown,white,pink',
        image: 'img/bear_wallet.jpeg',
        images: ['img/bear_wallet.jpeg'],
        description: 'A super cute crochet bear-face wallet — spacious enough for cards and cash, and adorable enough to carry everywhere! Handstitched details make every piece unique. ',
        materials: ['4 ply milk cotton yarn'],
        dimensions: 'Approximately 12 × 9 cm when closed. Fits cards, folded notes, and small items.'
    },
        {
        name: 'Crochet Pouch',
        category: 'accessories',
        price: 750,
        colors: 'brown',
        image: 'img/pouch.jpeg',
        images: ['img/pouch.jpeg'],
        description: 'A super cute crochet pouch — spacious enough for cards and cash, and adorable enough to carry everywhere! ',
        materials: ['milk cotton yarn', 'Zipper closure', 'Inner lining fabric', 'Safety eyes (8mm)', 'Embroidered nose and mouth'],
        dimensions: 'Approximately 12 × 9 cm when closed. Fits cards, folded notes, and small items.'
    },
        {
        name: 'Strawberry pouch',
        category: 'accessories',
        price: 550,
        colors: 'pink',
        image: 'img/strawberry_pouch.jpeg',
        images: ['img/strawberry_pouch.jpeg'],
        description: 'A super cute crochet strawberry pouch — spacious enough for cards and cash, and adorable enough to carry everywhere!',
        materials: ['4 ply milk cotton yarn'],
        dimensions: 'Approximately 12 × 9 cm when closed. Fits cards, folded notes, and small items.'
    },
    {
        name: 'Sunflower Coaster  ',
        category: 'accessories',
        price: 150,
        colors: 'yellow',
        image: 'img/sunflower_coaster.jpeg',
        images: ['img/sunflower_coaster.jpeg'],
        description: 'A handmade crochet sunflower coaster with a miniature basket! Each piece is lovingly stitched by hand and made to order in your chosen colour. ',
        materials: ['4 ply milk cotton yarn'],
        
    },
    // Add more products here following the same format
];
 
     // ── Color dot picker ──────────────────────────────────────────

    const colorOptionGroups = document.querySelectorAll('.color-options');
    if (colorOptionGroups.length > 0) {
        colorOptionGroups.forEach(group => {
            group.querySelectorAll('.color-dot').forEach(dot => {
                dot.addEventListener('click', () => {
                    group.querySelectorAll('.color-dot').forEach(d => d.classList.remove('selected'));
                    dot.classList.add('selected');
                    group.closest('.color-picker').querySelector('.chosen-color').textContent = dot.dataset.color;
                });
            });
        });
    };


        // ── Add to cart with chosen color ─────────────────────────────
        function addToCartWithColor(btn) {
            const card = btn.closest('.pro');
            const chosenColor = card.querySelector('.chosen-color').textContent;
            addToCart(btn.dataset.productId, chosenColor);
        }

        // ── Filter logic ──────────────────────────────────────────────
// =====================================================
// PRICE FILTER FIX
// Replace your existing applyFilters() function
// with this corrected version
// =====================================================
 
function applyFilters() {
    const category   = document.querySelector('input[name="category"]:checked')?.value || 'all';
    const priceRange = document.querySelector('input[name="price"]:checked')?.value || 'all';
    const activeColor = document.querySelector('.color-swatch.active')?.dataset.color || 'all';
    const sort = document.getElementById('sortSelect')?.value || 'default';
 
    let products = Array.from(document.querySelectorAll('.shop-grid .pro'));
 
    let visible = products.filter(pro => {
        const pCat   = (pro.dataset.category || '').trim().toLowerCase();
        const pPrice = parseFloat(pro.dataset.price) || 0;
        const pColors = (pro.dataset.colors || '').split(',').map(c => c.trim().toLowerCase());
 
        // Category match
        const catMatch = category === 'all' || pCat === category.toLowerCase();
 
        // Price match — FIX: parse correctly and handle edge cases
        let priceMatch = true;
        if (priceRange !== 'all') {
            const parts = priceRange.split('-');
            const min = parseFloat(parts[0]) || 0;
            const max = parseFloat(parts[1]) || Infinity;
            priceMatch = pPrice >= min && pPrice <= max;
        }
 
        // Color match — FIX: case-insensitive comparison
        const colorMatch = activeColor === 'all' ||
            pColors.includes(activeColor.toLowerCase());
 
        return catMatch && priceMatch && colorMatch;
    });
 
    // Sort
    visible.sort((a, b) => {
        const aPrice = parseFloat(a.dataset.price) || 0;
        const bPrice = parseFloat(b.dataset.price) || 0;
        const aName  = a.querySelector('h4')?.textContent || '';
        const bName  = b.querySelector('h4')?.textContent || '';
        if (sort === 'price-asc')  return aPrice - bPrice;
        if (sort === 'price-desc') return bPrice - aPrice;
        if (sort === 'name-asc')   return aName.localeCompare(bName);
        return 0;
    });
 
    // Show/hide
    products.forEach(p => p.style.display = 'none');
    visible.forEach(p => {
        p.style.display = 'block';
        document.getElementById('shopGrid').appendChild(p);
    });
 
    // Count
    const countEl = document.getElementById('resultCount');
    if (countEl) {
        countEl.textContent = visible.length === 0
            ? 'No products found'
            : `Showing ${visible.length} product${visible.length !== 1 ? 's' : ''}`;
    }
 
    const noResults = document.getElementById('noResults');
    if (noResults) noResults.style.display = visible.length === 0 ? 'flex' : 'none';
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
async function apiRequest(path, options = {}) {
    const { headers = {}, ...rest } = options;
    const res = await fetch(path, {
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
            ...headers
        },
        ...rest
    });

    const data = await res.json().catch(() => null);

    if (!res.ok) {
        throw new Error(data?.message || 'Request failed.');
    }

    return data;
}

function escapeHtml(value = '') {
    return String(value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

async function addToCart(productId, color = '', qty = 1) {
    if (!productId) {
        showToast('This product needs to be saved in MongoDB before it can be added to cart.');
        return false;
    }

    try {
        await apiRequest('/api/cart/items', {
            method: 'POST',
            body: JSON.stringify({ productId, color, qty })
        });
        showToast('Added to cart successfully!');
        return true;
    } catch (err) {
        if (err.message.toLowerCase().includes('authorized')) {
            alert('Please log in to add items to your cart.');
            window.location.href = 'login.html';
            return false;
        }

        showToast(err.message || 'Could not add item to cart.');
        return false;
    }
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
async function updateNavAuth() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;

    const existingAuth = document.getElementById('nav-auth');
    if (existingAuth) existingAuth.remove();

    const li = document.createElement('li');
    li.id = 'nav-auth';

    let user = null;
    try {
        user = (await apiRequest('/api/auth/me')).user;
    } catch (err) {
        user = null;
    }

    if (user) {
        li.innerHTML = `
            <div class="nav-user-menu">
                <span class="nav-username">
                    <i class="fa-solid fa-user"></i> ${escapeHtml((user.name || 'User').split(' ')[0])}
                    <i class="fa-solid fa-chevron-down" style="font-size:10px;"></i>
                </span>
                <ul class="nav-user-dropdown">
                    ${user.role === 'admin' ? '<li><a href="admin.html"><i class="fa-solid fa-gauge"></i> Admin Panel</a></li>' : ''}
                    <li><a href="#" onclick="logoutUser()"><i class="fa-solid fa-right-from-bracket"></i> Logout</a></li>
                </ul>
            </div>
        `;
    } else {
        li.innerHTML = `<a href="login.html"><i class="fa-solid fa-right-to-bracket"></i> Login</a>`;
    }

    navbar.appendChild(li);
}

async function logoutUser() {
    await apiRequest('/api/auth/logout', { method: 'POST' }).catch(() => null);
    window.location.href = 'index.html';
}

// Run on every page
updateNavAuth();

// =====================================================
// RENDER SHOP PRODUCTS DYNAMICALLY
// (Products are clickable — go to product.html)
// =====================================================
 
async function renderShopProducts() {
    const grid = document.getElementById('shopGrid');
    if (!grid) return;

    let allProducts = [];
    try {
        allProducts = await apiRequest('/api/products');
    } catch (err) {
        grid.innerHTML = '<p class="empty-row">Could not load products. Please try again later.</p>';
        return;
    }
 
    const colorMap = {
        pink: '#ff869c', white: '#f5f5f5', blue: '#a8d8ea',
        yellow: '#ffd166', green: '#b5ead7', purple: '#c3b1e1',
        brown: '#c8a882', red: '#ff6b6b', black: '#333333', orange: '#ffb347'
    };

    if (allProducts.length === 0) {
        grid.innerHTML = '<p class="empty-row">No products available yet.</p>';
        return;
    }
 
    grid.innerHTML = allProducts.map(p => {
        const colors     = p.colors ? p.colors.split(',').map(c => c.trim()) : [];
        const firstColor = colors[0] || '';
 
        const colorDots = colors.map((color, i) => {
            const bg     = colorMap[color.toLowerCase()] || '#ccc';
            const border = color.toLowerCase() === 'white' ? 'border:1px solid #ddd;' : '';
            return `<span class="color-dot ${i === 0 ? 'selected' : ''}"
                        data-color="${color.charAt(0).toUpperCase() + color.slice(1)}"
                        style="background:${bg};${border}"
                        title="${color}">
                    </span>`;
        }).join('');
 
        return `
            <div class="pro"
                data-category="${escapeHtml(p.category)}"
                data-price="${Number(p.price)}"
                data-colors="${escapeHtml(p.colors || '')}"
                onclick="window.location.href='product.html?id=${encodeURIComponent(p._id)}'">
                <img src="${escapeHtml(p.image || 'img/logo1.png')}" alt="${escapeHtml(p.name)}"
                     onerror="this.src='img/logo1.png'">
                <div class="des">
                    <span class="category-tag">${escapeHtml(p.category.charAt(0).toUpperCase() + p.category.slice(1))}</span>
                    <h4>${escapeHtml(p.name)}</h4>
                    <p class="price">Tk ${parseFloat(p.price).toFixed(2)}</p>
                    <div class="color-picker" onclick="event.stopPropagation()">
                        <p class="color-label">Color: <span class="chosen-color">${escapeHtml(firstColor.charAt(0).toUpperCase() + firstColor.slice(1))}</span></p>
                        <div class="color-options">${colorDots}</div>
                    </div>
                    <button class="add-to-cart"
                        data-product-id="${escapeHtml(p._id)}"
                        onclick="event.stopPropagation(); addToCartWithColor(this)">
                        <i class="fa-solid fa-cart-plus"></i> Add to Cart
                    </button>
                </div>
            </div>
        `;
    }).join('');
 
    // Re-attach color dot listeners
    document.querySelectorAll('.color-options').forEach(group => {
        group.querySelectorAll('.color-dot').forEach(dot => {
            dot.addEventListener('click', () => {
                group.querySelectorAll('.color-dot').forEach(d => d.classList.remove('selected'));
                dot.classList.add('selected');
                group.closest('.color-picker').querySelector('.chosen-color').textContent = dot.dataset.color;
            });
        });
    });
 
    // Re-attach filter listeners
    document.querySelectorAll('input[name="category"], input[name="price"]').forEach(input => {
        input.addEventListener('change', applyFilters);
    });
 
    document.querySelectorAll('.color-swatch').forEach(swatch => {
        swatch.addEventListener('click', () => {
            document.querySelectorAll('.color-swatch').forEach(s => s.classList.remove('active'));
            swatch.classList.add('active');
            applyFilters();
        });
    });
 
    // URL param auto-filter
    {
    const params = new URLSearchParams(window.location.search);
    const cat = params.get('category');
    if (cat) {
        const radio = document.querySelector(`input[name="category"][value="${cat}"]`);
        if (radio) { radio.checked = true; applyFilters(); }
    } else {
        applyFilters();
    }
    }
}
 
// Run on shop page
renderShopProducts();


function getCurrentSubtotal() {
    return 0;
}

function getShippingCost() {
    const sel = document.getElementById('co-shipping');
    if (!sel) return 60;
    if (sel.value === 'express') return 120;
    if (sel.value === 'pickup')  return 0;
    return 60;
}
function checkout() {
    window.location.href = 'cart.html';
}
// Updated updateSummary — REPLACE your existing one in cart.html
function updateSummary(subtotal) {
    const delivery = subtotal > 0 ? getShippingCost() : 0;
    const subtotalEl  = document.getElementById('subtotal');
    const deliveryEl  = document.getElementById('delivery');
    const totalEl     = document.getElementById('total');
    if (subtotalEl) subtotalEl.textContent = `Tk ${subtotal.toFixed(2)}`;
    if (deliveryEl) deliveryEl.textContent = `Tk ${delivery.toFixed(2)}`;
    if (totalEl)    totalEl.textContent    = `Tk ${(subtotal + delivery).toFixed(2)}`;
}


// ── ADMIN: Update Order Status ────────────────────────
// (Already in admin.html — this helper notifies customer)
function notifyCustomer(orderId, status) {
    console.warn('notifyCustomer is handled by admin.html', orderId, status);
}
