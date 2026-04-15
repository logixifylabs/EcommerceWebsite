// Product Data
const products = [
    {
        id: 1,
        name: "Smart watch with features",
        price: 98.00,
        oldPrice: 112.80,
        rating: 7.5,
        category: "electronics",
        image: "./assets/Image/tech/image1.png",
        type: "deal"
    },
    {
        id: 2,
        name: "Smart watch -25%",
        price: 99.50,
        oldPrice: 112.80,
        rating: 7.5,
        category: "electronics",
        image: "./assets/Image/tech/image2.png",
        type: "deal"
    },
    {
        id: 3,
        name: "Smart watch -25%",
        price: 99.50,
        oldPrice: 112.80,
        rating: 7.5,
        category: "electronics",
        image: "./assets/Image/tech/image3.png",
        type: "deal"
    },
    {
        id: 4,
        name: "Smart watch -25%",
        price: 99.50,
        oldPrice: 112.80,
        rating: 7.5,
        category: "electronics",
        image: "./assets/Image/tech/image4.png",
        type: "deal"
    },
    {
        id: 5,
        name: "T-shirts with multiple colors, for men",
        price: 10.30,
        rating: 7.5,
        category: "clothing",
        image: "./assets/Image/tech/image5.png",
        type: "recommended"
    },
    {
        id: 6,
        name: "Jeans shorts for men blue color",
        price: 10.30,
        rating: 7.5,
        category: "clothing",
        image: "./assets/Image/tech/image6.png",
        type: "recommended"
    },
    {
        id: 7,
        name: "Brown winter coat medium size",
        price: 12.50,
        rating: 7.5,
        category: "clothing",
        image: "./assets/Image/tech/image7.png",
        type: "recommended"
    },
    {
        id: 8,
        name: "Jeans bag for travel for men",
        price: 34.00,
        rating: 7.5,
        category: "accessories",
        image: "./assets/Image/tech/image8.png",
        type: "recommended"
    },
    {
        id: 9,
        name: "Leather wallet",
        price: 99.00,
        rating: 7.5,
        category: "accessories",
        image: "./assets/Image/tech/image9.png",
        type: "recommended"
    },
    //   {
    //     id: 10,
    //     name: "Canon camera black, 100x zoom",
    //     price: 9.99,
    //     rating: 7.5,
    //     category: "electronics",
    //     image: "./assets/Image/tech/image1.png",
    //     type: "service"
    //   },
    //   {
    //     id: 11,
    //     name: "Headset for gaming with mic",
    //     price: 8.99,
    //     rating: 7.5,
    //     category: "electronics",
    //     image: "./assets/Image/tech/image1.png",
    //     type: "service"
    //   },
    //   {
    //     id: 12,
    //     name: "Smartwatch silver color modern",
    //     price: 10.30,
    //     rating: 7.5,
    //     category: "electronics",
    //     image: "./assets/Image/tech/image1.png",
    //     type: "service"
    //   },
    //   {
    //     id: 13,
    //     name: "Blue wallet for men leather",
    //     price: 10.30,
    //     rating: 7.5,
    //     category: "accessories",
    //     image: "./assets/Image/tech/image1.png",
    //     type: "service"
    //   },
    //   {
    //     id: 14,
    //     name: "Jeans bag for travel",
    //     price: 80.95,
    //     rating: 7.5,
    //     category: "accessories",
    //     image: "./assets/Image/tech/image1.png",
    //     type: "service"
    //   },
    //   {
    //     id: 15,
    //     name: "GoPro HERO6 4K Action Camera",
    //     price: 99.50,
    //     oldPrice: 112.80,
    //     rating: 7.5,
    //     category: "electronics",
    //     image: "./assets/Image/tech/image1.png"
    //   },
    //   {
    //     id: 16,
    //     name: "Men Blazers Sets Elegant Formal",
    //     price: 7.00,
    //     maxPrice: 99.50,
    //     rating: 7.5,
    //     category: "clothing",
    //     image: "./assets/Image/tech/image1.png"
    //   },
    //   {
    //     id: 17,
    //     name: "Men Shirt Sleeve Polo Contrast",
    //     price: 7.00,
    //     maxPrice: 99.50,
    //     rating: 7.5,
    //     category: "clothing",
    //     image: "./assets/Image/tech/image1.png"
    //   },
    //   {
    //     id: 18,
    //     name: "Apple Watch Series Space Gray",
    //     price: 7.00,
    //     maxPrice: 99.50,
    //     rating: 7.5,
    //     category: "electronics",
    //     image: "./assets/Image/tech/image1.png"
    //   },
    //   {
    //     id: 19,
    //     name: "Basketball Crew Socks Long",
    //     price: 7.00,
    //     maxPrice: 99.50,
    //     rating: 7.5,
    //     category: "sports",
    //     image: "./assets/Image/tech/image1.png"
    //   },
    //   {
    //     id: 20,
    //     name: "New Summer Men's T-Shirts",
    //     price: 7.00,
    //     maxPrice: 99.50,
    //     rating: 7.5,
    //     category: "clothing",
    //     image: "./assets/Image/tech/image1.png"
    //   }
];
// Cart Data
let cart = [
    { id: 1, productId: 1, name: "T-shirts with multiple colors, for men and lady", size: "medium", color: "blue", material: "Plastic", seller: "Artel Market", price: 78.99, quantity: 1 , image: "./assets/Image/tech/image1.png"},
    { id: 2, productId: 6, name: "Solid Backpack blue jeans large size", size: "medium", color: "blue", seller: "Artel Market", price: 78.99, quantity: 1 , image: "./assets/Image/tech/image2.png"},
    { id: 3, productId: 7, name: "Water boiler black for kitchen, 1200 Watt", size: "medium", color: "blue", seller: "Artel Market", price: 78.99, quantity: 2 , image: "./assets/Image/tech/image3.png" }
];

// Saved Items
let savedItems = [
    { id: 1, productId: 1, name: "T-shirts with multiple colors, for men and lady", price: 67.70, image: "./assets/Image/tech/image1.png" },
    { id: 2, productId: 2, name: "Solid Backpack blue jeans large size", price: 45.50, image: "./assets/Image/tech/image2.png" },
    { id: 3, productId: 3, name: "Water boiler black for kitchen, 1200 Watt", price: 97.90, image: "./assets/Image/tech/image3.png" }
];

// Suppliers Data
const suppliers = [
    { country: "Arabic Emirates", domain: "shqipane.ae" },
    { country: "Australia", domain: "shqipane.ae" },
    { country: "United States", domain: "shqipane.ae" },
    { country: "Russia", domain: "shqipane.ru" },
    { country: "Italy", domain: "shqipane.it" },
    { country: "Denmark", domain: "shqipane.com.dk" },
    { country: "France", domain: "shqipane.com.fr" },
    { country: "Arab Emirates", domain: "shqipane.ae" },
    { country: "China", domain: "shqipane.cn" },
    { country: "Great Britain", domain: "shqipane.co.uk" }
];

// Initialize Page
document.addEventListener('DOMContentLoaded', function () {
    loadHomePage();
    loadCartPage();
    loadProductDetail();
    loadItemList();
    loadGridView();
    loadWishlist();
    loadAccount();
    loadProducts();
    loadHelp();
    loadInquiry();
    startTimer();
});

// Timer Function
function startTimer() {
    let hours = 13;
    let minutes = 34;
    let seconds = 56;

    setInterval(() => {
        if (seconds > 0) {
            seconds--;
        } else {
            seconds = 59;
            if (minutes > 0) {
                minutes--;
            } else {
                minutes = 59;
                if (hours > 0) {
                    hours--;
                } else {
                    hours = 13;
                    minutes = 34;
                    seconds = 56;
                }
            }
        }

        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
    }, 1000);
}

// Load Home Page
function loadHomePage() {
    // Deals Grid
    const dealsGrid = document.getElementById('dealsGrid');
    const deals = products.filter(p => p.type === 'deal');
    dealsGrid.innerHTML = deals.map(product => createProductCard(product)).join('');

    // Recommended Grid
    const recommendedGrid = document.getElementById('recommendedGrid');
    const recommended = products.filter(p => p.type === 'recommended');
    recommendedGrid.innerHTML = recommended.map(product => createProductCard(product)).join('');

    // Services Grid
    const servicesGrid = document.getElementById('servicesGrid');
    const services = products.filter(p => p.type === 'service');
    servicesGrid.innerHTML = services.map(product => createProductCard(product)).join('');

    // Suppliers Grid
    const suppliersGrid = document.getElementById('suppliersGrid');
    suppliersGrid.innerHTML = suppliers.map(supplier => `
        <div class="supplier-item">
            <strong>${supplier.country}</strong>
            <small>${supplier.domain}</small>
        </div>
    `).join('');
}

// Create Product Card
function createProductCard(product) {
    const priceDisplay = product.maxPrice ?
        `$${product.price} - $${product.maxPrice}` :
        `$${product.price.toFixed(2)}`;

    const oldPriceDisplay = product.oldPrice ?
        `<span class="product-old-price">$${product.oldPrice.toFixed(2)}</span>` : '';

    return `
        <div class="product-card" onclick="showProductDetail(${product.id})">
            <div class="product-image">
                <span><img src="${product.image}" alt="${product.name}"></span>
            </div>
            <div class="product-info">
                <div class="product-price">
                    ${priceDisplay}
                    ${oldPriceDisplay}
                </div>
                <div class="product-rating">
                    ${getStars(product.rating)} ${product.rating}
                </div>
                <div class="product-title">${product.name}</div>
            </div>
        </div>
    `;
}

// Get Stars
function getStars(rating) {
    const fullStars = Math.floor(rating / 2);
    return '★'.repeat(fullStars) + '☆'.repeat(5 - fullStars);
}

// Load Cart Page
function loadCartPage() {
    const cartContainer = document.getElementById('cartContainer');
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = 10.00;
    const tax = 7.00;
    const total = subtotal + shipping + tax;

    cartContainer.innerHTML = `
        <div class="cart-items">
            <div class="cart-header">
                <h2>My cart (${cart.length})</h2>
            </div>
            ${cart.map(item => `
                <div class="cart-item" data-id="${item.id}">
                    <div class="cart-item-image">
                    <img src="${item.image}" alt="${item.name}">
                    </div>
                    <div class="cart-item-details">
                        <h4>${item.name}</h4>
                        <p>Size: ${item.size}, Color: ${item.color}${item.material ? `, Material: ${item.material}` : ''}</p>
                        <p>Seller: ${item.seller}</p>
                        <div class="quantity-control">
                            <button onclick="updateQuantity(${item.id}, 'decrease')">-</button>
                            <span>${item.quantity}</span>
                            <button onclick="updateQuantity(${item.id}, 'increase')">+</button>
                        </div>
                        <div class="cart-item-actions">
                            <button onclick="removeFromCart(${item.id})">Remove</button>
                            <button onclick="saveForLater(${item.id})">Save for later</button>
                        </div>
                    </div>
                    <div class="cart-item-price">$${(item.price * item.quantity).toFixed(2)}</div>
                </div>
            `).join('')}
        </div>
        <div class="cart-summary">
            <h3>Order Summary</h3>
            <div class="summary-row">
                <span>Items (${cart.length}):</span>
                <span>$${subtotal.toFixed(2)}</span>
            </div>
            <div class="summary-row">
                <span>Shipping:</span>
                <span>$${shipping.toFixed(2)}</span>
            </div>
            <div class="summary-row">
                <span>Tax:</span>
                <span>$${tax.toFixed(2)}</span>
            </div>
            <div class="summary-total">
                <span>Total:</span>
                <span>$${total.toFixed(2)}</span>
            </div>
            <button class="checkout-btn" onclick="checkout()">Checkout (${cart.length} items)</button>
        </div>
    `;

    // Load Saved Items
    const savedContainer = document.getElementById('savedItems');
    savedContainer.innerHTML = `
        <h3>Saved for later</h3>
        <div class="saved-grid">
            ${savedItems.map(item => `
                <div class="product-card">
                    <div class="product-image"><span><img src="${item.image}" alt="${item.name}"></span></div>
                    <div class="product-info">
                        <div class="product-price">$${item.price.toFixed(2)}</div>
                        <div class="product-title">${item.name}</div>
                        <div style="display: flex; gap: 10px; margin-top: 10px;">
                            <button style="color: #3498db; background: none; border: none; cursor: pointer;" onclick="moveToCart(${item.id})">Move to cart</button>
                            <button style="color: #e74c3c; background: none; border: none; cursor: pointer;" onclick="removeSaved(${item.id})">Remove</button>
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

// Update Quantity
function updateQuantity(itemId, action) {
    const item = cart.find(i => i.id === itemId);
    if (item) {
        if (action === 'increase') {
            item.quantity++;
        } else if (action === 'decrease' && item.quantity > 1) {
            item.quantity--;
        }
        loadCartPage();
    }
}

// Remove from Cart
function removeFromCart(itemId) {
    cart = cart.filter(i => i.id !== itemId);
    loadCartPage();
}

// Save for Later
function saveForLater(itemId) {
    const item = cart.find(i => i.id === itemId);
    if (item) {
        savedItems.push({
            id: savedItems.length + 1,
            productId: item.productId,
            name: item.name,
            price: item.price,
            image: "./assets/Image/tech/8.png"
        });
        removeFromCart(itemId);
    }
}

// Move to Cart
function moveToCart(savedId) {
    const item = savedItems.find(i => i.id === savedId);
    if (item) {
        cart.push({
            id: cart.length + 1,
            productId: item.productId,
            name: item.name,
            size: "medium",
            color: "blue",
            seller: "Artel Market",
            price: item.price,
            quantity: 1
        });
        removeSaved(savedId);
    }
}

// Remove Saved
function removeSaved(savedId) {
    savedItems = savedItems.filter(i => i.id !== savedId);
    loadCartPage();
}

// Checkout
function checkout() {
    alert('Proceeding to checkout with ' + cart.length + ' items!');
}

// Load Product Detail
function loadProductDetail() {
    const productDetail = document.getElementById('productDetail');
    const product = {
        name: "Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle",
        image: "./assets/Image/tech/image1.png",
        rating: 9.3,
        reviews: 32,
        sold: 154,
        prices: [
            { price: 98.00, range: "50-100 pcs" },
            { price: 90.00, range: "100-700 pcs" },
            { price: 78.00, range: "700+ pcs" }
        ],
        specs: {
            price: "Negotiable",
            type: "Classic shoes",
            material: "Plastic material",
            design: "Modern nice",
            customization: "Customized logo and design custom packages",
            protection: "Refund Policy",
            warranty: "2 years full warranty"
        },
        supplier: {
            name: "Guanji Trading LLC",
            location: "Germany, Berlin",
            verified: true,
            shipping: "Worldwide shipping"
        },
        features: [
            "Some great feature name here",
            "Lorem ipsum dolor sit amet, consectetur",
            "Duis aute irure dolor in reprehenderit",
            "Some great feature name here"
        ]
    };

    productDetail.innerHTML = `
        <div class="product-detail-grid">
            <div class="detail-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div>
                <h1 class="detail-title">${product.name}</h1>
                <div class="detail-rating">
                    <span class="stars">${getStars(product.rating)}</span>
                    <span>${product.rating}</span>
                    <span>${product.reviews} reviews</span>
                    <span>${product.sold} sold</span>
                </div>

                <div class="price-table">
                    ${product.prices.map(p => `
                        <div class="price-row">
                            <span class="price-highlight">$${p.price.toFixed(2)}</span>
                            <span>${p.range}</span>
                        </div>
                    `).join('')}
                </div>

                <div class="product-specs">
                    ${Object.entries(product.specs).map(([key, value]) => `
                        <div class="spec-item">
                            <span class="spec-label">${key.charAt(0).toUpperCase() + key.slice(1)}:</span>
                            <span class="spec-value">${value}</span>
                        </div>
                    `).join('')}
                </div>

                <div class="supplier-card">
                    <div class="supplier-header">
                        <strong>${product.supplier.name}</strong>
                        <span class="verified-badge">Verified Seller</span>
                    </div>
                    <div class="supplier-detail">
                        <span>📍 ${product.supplier.location}</span>
                        <span>🌍 ${product.supplier.shipping}</span>
                    </div>
                </div>

                <button class="inquiry-btn-large" onclick="sendInquiry()">Send inquiry</button>

                <div class="features-list">
                    <h3 style="margin: 20px 0 10px;">Features</h3>
                    <ul>
                        ${product.features.map(f => `<li>${f}</li>`).join('')}
                    </ul>
                </div>
            </div>
        </div>
    `;

    // Load Related Products
    const relatedGrid = document.getElementById('relatedGrid');
    const related = products.slice(15, 20);
    relatedGrid.innerHTML = related.map(product => createProductCard(product)).join('');
}

// Load Item List
function loadItemList() {
    const table = document.getElementById('itemlistTable');
    let rows = '';

    for (let i = 0; i < 50; i++) {
        const rating = (9.5 - (i * 0.1)).toFixed(1);
        rows += `
            <tr onclick="showProductDetail(${i + 1})">
                <td>Men's Wear</td>
                <td>Regular Fit Resort Shirt</td>
                <td>$${57.70}</td>
                <td><span class="rating-badge">${rating}</span></td>
            </tr>
        `;
    }

    table.innerHTML = `
        <thead>
            <tr>
                <th>Category</th>
                <th>Item</th>
                <th>Price</th>
                <th>Rating</th>
            </tr>
        </thead>
        <tbody>
            ${rows}
        </tbody>
    `;
}

// Load Grid View
function loadGridView() {
    // Sidebar
    const sidebar = document.getElementById('sidebar');
    sidebar.innerHTML = `
        <div class="sidebar-section">
            <h3>Category</h3>
            <ul>
                <li><a href="#" onclick="filterProducts('category', 'mobile')">Mobile accessory</a></li>
                <li><a href="#" onclick="filterProducts('category', 'electronics')">Electronics</a></li>
                <li><a href="#" onclick="filterProducts('category', 'smartphones')">Smartphones</a></li>
                <li><a href="#" onclick="filterProducts('category', 'tech')">Modern tech</a></li>
                <li><a href="#" onclick="filterProducts('category', 'all')">See all</a></li>
            </ul>
        </div>
        <div class="sidebar-section">
            <h3>Brands</h3>
            <ul>
                <li><a href="#" onclick="filterProducts('brand', 'samsung')">Samsung</a></li>
                <li><a href="#" onclick="filterProducts('brand', 'apple')">Apple</a></li>
                <li><a href="#" onclick="filterProducts('brand', 'huawei')">Huawei</a></li>
                <li><a href="#" onclick="filterProducts('brand', 'pocco')">Pocco</a></li>
                <li><a href="#" onclick="filterProducts('brand', 'lenovo')">Lenovo</a></li>
            </ul>
        </div>
        <div class="sidebar-section">
            <h3>Features</h3>
            <ul>
                <li><a href="#" onclick="filterProducts('feature', 'metallic')">Metallic</a></li>
                <li><a href="#" onclick="filterProducts('feature', 'plastic')">Plastic cover</a></li>
                <li><a href="#" onclick="filterProducts('feature', '8gb')">8GB Ram</a></li>
                <li><a href="#" onclick="filterProducts('feature', 'power')">Super power</a></li>
                <li><a href="#" onclick="filterProducts('feature', 'memory')">Large Memory</a></li>
            </ul>
        </div>
        <div class="sidebar-section">
            <h3>Price range</h3>
            <input type="range" min="0" max="1000" class="price-range" onchange="filterByPrice(this.value)">
        </div>
        <div class="sidebar-section">
            <h3>Condition</h3>
            <ul>
                <li><a href="#" onclick="filterProducts('condition', 'new')">New</a></li>
                <li><a href="#" onclick="filterProducts('condition', 'used')">Used</a></li>
                <li><a href="#" onclick="filterProducts('condition', 'refurbished')">Refurbished</a></li>
            </ul>
        </div>
        <div class="sidebar-section">
            <h3>Ratings</h3>
            <ul>
                <li><a href="#" onclick="filterProducts('rating', '5')">★★★★★ 5+</a></li>
                <li><a href="#" onclick="filterProducts('rating', '4')">★★★★ 4+</a></li>
                <li><a href="#" onclick="filterProducts('rating', '3')">★★★ 3+</a></li>
            </ul>
        </div>
    `;

    // Grid Content
    const gridContent = document.getElementById('gridContent');
    const gridProducts = products.slice(0, 8);
    gridContent.innerHTML = `
        <div class="product-grid" style="grid-template-columns: repeat(4, 1fr);">
            ${gridProducts.map(product => createProductCard(product)).join('')}
        </div>
    `;
}

// Load Wishlist
function loadWishlist() {
    const wishlistContainer = document.getElementById('wishlistContainer');
    wishlistContainer.innerHTML = `
        <div class="deals-section">
            <h2 class="section-title">My Wishlist</h2>
            <div class="product-grid" style="grid-template-columns: repeat(4, 1fr);">
                ${products.slice(0, 4).map(product => `
                    <div class="product-card">
                        <div class="product-image"><span><img src="${product.image}" alt="${product.name}"></span></div>
                        <div class="product-info">
                            <div class="product-price">$${product.price.toFixed(2)}</div>
                            <div class="product-title">${product.name}</div>
                            <button class="inquiry-btn" style="margin-top: 10px; width: 100%;" onclick="addToCart(${product.id})">Add to Cart</button>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

// Load Account
function loadAccount() {
    const accountContainer = document.getElementById('accountContainer');
    accountContainer.innerHTML = `
        <div class="deals-section">
            <h2 class="section-title">My Account</h2>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                <div style="background: #ecf0f1; padding: 20px; border-radius: 8px;">
                    <h3>Login</h3>
                    <input type="email" placeholder="Email" style="width: 100%; padding: 10px; margin: 10px 0; border: 1px solid #bdc3c7; border-radius: 5px;">
                    <input type="password" placeholder="Password" style="width: 100%; padding: 10px; margin: 10px 0; border: 1px solid #bdc3c7; border-radius: 5px;">
                    <button class="inquiry-btn" style="width: 100%;">Login</button>
                </div>
                <div style="background: #ecf0f1; padding: 20px; border-radius: 8px;">
                    <h3>Register</h3>
                    <input type="text" placeholder="Name" style="width: 100%; padding: 10px; margin: 10px 0; border: 1px solid #bdc3c7; border-radius: 5px;">
                    <input type="email" placeholder="Email" style="width: 100%; padding: 10px; margin: 10px 0; border: 1px solid #bdc3c7; border-radius: 5px;">
                    <input type="password" placeholder="Password" style="width: 100%; padding: 10px; margin: 10px 0; border: 1px solid #bdc3c7; border-radius: 5px;">
                    <button class="inquiry-btn" style="width: 100%;">Register</button>
                </div>
            </div>
            <div style="margin-top: 20px;">
                <h3>My Orders</h3>
                <p style="color: #7f8c8d;">No orders yet</p>
            </div>
        </div>
    `;
}

// Load Products
function loadProducts() {
    const productsContainer = document.getElementById('productsContainer');
    productsContainer.innerHTML = `
        <div class="deals-section">
            <h2 class="section-title">All Products</h2>
            <div class="product-grid" style="grid-template-columns: repeat(4, 1fr);">
                ${products.map(product => createProductCard(product)).join('')}
            </div>
        </div>
    `;
}

// Load Help
function loadHelp() {
    const helpContainer = document.getElementById('helpContainer');
    helpContainer.innerHTML = `
        <div class="deals-section">
            <h2 class="section-title">Help Center</h2>
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px;">
                <div style="background: #ecf0f1; padding: 20px; border-radius: 8px;">
                    <h3>Shipping</h3>
                    <p style="color: #7f8c8d;">Information about shipping policies and delivery times.</p>
                </div>
                <div style="background: #ecf0f1; padding: 20px; border-radius: 8px;">
                    <h3>Returns</h3>
                    <p style="color: #7f8c8d;">Learn about our return policy and how to return items.</p>
                </div>
                <div style="background: #ecf0f1; padding: 20px; border-radius: 8px;">
                    <h3>Payment</h3>
                    <p style="color: #7f8c8d;">Information about payment methods and security.</p>
                </div>
            </div>
        </div>
    `;
}

// Load Inquiry
function loadInquiry() {
    const inquiryContainer = document.getElementById('inquiryContainer');
    inquiryContainer.innerHTML = `
        <div class="deals-section">
            <h2 class="section-title">Send Inquiry to Suppliers</h2>
            <div style="max-width: 600px; margin: 0 auto;">
                <textarea placeholder="Write your inquiry here..." style="width: 100%; height: 150px; padding: 15px; border: 1px solid #bdc3c7; border-radius: 5px; margin-bottom: 20px;"></textarea>
                <button class="inquiry-btn" style="width: 100%; padding: 15px;">Send Inquiry to All Suppliers</button>
            </div>
        </div>
    `;
}

// Show Product Detail
function showProductDetail(productId) {
    showPage('detail');
}

// Send Inquiry
function sendInquiry() {
    alert('Inquiry sent to supplier!');
}

// Add to Cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push({
            id: cart.length + 1,
            productId: product.id,
            name: product.name,
            size: "medium",
            color: "blue",
            seller: "Artel Market",
            price: product.price,
            quantity: 1
        });
        alert('Product added to cart!');
    }
}

// Filter Products
function filterProducts(type, value) {
    alert(`Filtering by ${type}: ${value}`);
}

// Filter by Price
function filterByPrice(price) {
    alert(`Filtering by price: $${price}`);
}

// Subscribe Newsletter
function subscribeNewsletter() {
    const email = document.getElementById('newsletterEmail').value;
    if (email) {
        alert(`Subscribed with email: ${email}`);
        document.getElementById('newsletterEmail').value = '';
    } else {
        alert('Please enter your email');
    }
}

// Show Page
function showPage(pageId) {
    // Hide all pages
    document.querySelectorAll('.page-container').forEach(page => {
        page.classList.remove('active');
    });

    // Show selected page
    document.getElementById(pageId).classList.add('active');

    // Update active button
    document.querySelectorAll('.page-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.textContent.toLowerCase().includes(pageId)) {
            btn.classList.add('active');
        }
    });

    // Scroll to top
    window.scrollTo(0, 0);
}