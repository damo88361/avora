/* =========================================================
   AVORA — MAIN SCRIPT
   Keeps the existing HTML/CSS structure.
   ========================================================= */

/* =========================================================
   PRODUCT CATALOG
   ========================================================= */

const products = [
    // ---------------- FRAGRANCE ----------------

    { id: "sauvage-01", brand: "Dior", name: "Sauvage", sku: "#01", price: 80, category: "Fragrance", gender: "Men", badge: "Best Seller" },
    { id: "bleu-03", brand: "Chanel", name: "Bleu de Chanel", sku: "#02", price: 80, category: "Fragrance", gender: "Men", badge: "Best Seller" },
    { id: "baccarat-705", brand: "MFK", name: "Baccarat Rouge 540", sku: "#03", price: 80, category: "Fragrance", gender: "Unisex", badge: "Best Seller" },
    { id: "aventus-104", brand: "Creed", name: "Aventus", sku: "#04", price: 80, category: "Fragrance", gender: "Men", badge: "Best Seller" },
    { id: "le-male-elixir", brand: "Jean Paul Gaultier", name: "Le Male Elixir", sku: "#05", price: 80, category: "Fragrance", gender: "Men", badge: "New" },

    { id: "sauvage-17", brand: "Dior", name: "Sauvage Elixir", sku: "#06", price: 80, category: "Fragrance", gender: "Men" },
    { id: "coco-23", brand: "Chanel", name: "Coco Mademoiselle", sku: "#07", price: 80, category: "Fragrance", gender: "Women", badge: "Best Seller" },
    { id: "baccarat-75", brand: "MFK", name: "Baccarat Rouge", sku: "#08", price: 80, category: "Fragrance", gender: "Unisex" },
    { id: "silver-mountain", brand: "Creed", name: "Silver Mountain Water", sku: "#09", price: 30, category: "Fragrance", gender: "Unisex" },
    { id: "le-male-parfum", brand: "Jean Paul Gaultier", name: "Le Male Le Parfum", sku: "#10", price: 80, category: "Fragrance", gender: "Men" },

    { id: "oud-sue-mood", brand: "Lattafa", name: "Oud Sue Mood", sku: "#11", price: 80, category: "Fragrance", gender: "Unisex" },
    { id: "imperial", brand: "MFK", name: "Imperial", sku: "#12", price: 80, category: "Fragrance", gender: "Unisex" },
    { id: "scandal", brand: "Jean Paul Gaultier", name: "Scandal", sku: "#13", price: 80, category: "Fragrance", gender: "Women" },
    { id: "splendide", brand: "Jadore", name: "Splendide", sku: "#14", price: 80, category: "Fragrance", gender: "Women" },
    { id: "absolu-aventus", brand: "Creed", name: "Absolu Aventus", sku: "#15", price: 80, category: "Fragrance", gender: "Men" },

    { id: "tobacco-vanille", brand: "Tom Ford", name: "Tobacco Vanille", sku: "#16", price: 80, category: "Fragrance", gender: "Unisex", badge: "Best Seller" },
    { id: "jadore", brand: "Dior", name: "J'adore", sku: "#17", price: 80, category: "Fragrance", gender: "Women" },
    { id: "le-parfum-56", brand: "YSL", name: "Le Parfum", sku: "#18", price: 80, category: "Fragrance", gender: "Men" },
    { id: "libre", brand: "YSL", name: "Libre", sku: "#19", price: 80, category: "Fragrance", gender: "Women", badge: "Best Seller" },
    { id: "lost-cherry", brand: "Tom Ford", name: "Lost Cherry", sku: "#20", price: 80, category: "Fragrance", gender: "Unisex" },

    { id: "le-beau", brand: "Jean Paul Gaultier", name: "Le Beau Le Parfum", sku: "#21", price: 80, category: "Fragrance", gender: "Men" },
    { id: "noir", brand: "Tom Ford", name: "Noir", sku: "#22", price: 80, category: "Fragrance", gender: "Men" },
    { id: "dior-homme", brand: "Dior", name: "Dior Homme", sku: "#23", price: 80, category: "Fragrance", gender: "Men" },
    { id: "black-opium-08", brand: "YSL", name: "Black Opium", sku: "#24", price: 30, category: "Fragrance", gender: "Women", badge: "Best Seller" },
    { id: "fucking-fabulous", brand: "Tom Ford", name: "Fucking Fabulous", sku: "#25", price: 80, category: "Fragrance", gender: "Unisex" },

    { id: "gaultier-divine", brand: "Jean Paul Gaultier", name: "Gaultier Divine", sku: "#26", price: 80, category: "Fragrance", gender: "Women" },
    { id: "chance", brand: "Chanel", name: "Chance", sku: "#27", price: 80, category: "Fragrance", gender: "Women" },
    { id: "ysl-y", brand: "YSL", name: "Y", sku: "#28", price: 80, category: "Fragrance", gender: "Men", badge: "Best Seller" },
    { id: "eau-d-ambre", brand: "YSL", name: "Eau d'Ambre", sku: "#29", price: 80, category: "Fragrance", gender: "Unisex" },
    { id: "christian-dior", brand: "Dior", name: "Christian Dior", sku: "#30", price: 80, category: "Fragrance", gender: "Unisex" },

    { id: "n5-leau", brand: "Chanel", name: "N°5 L'Eau", sku: "#31", price: 80, category: "Fragrance", gender: "Women" },
    { id: "myslf", brand: "YSL", name: "MYSLF", sku: "#32", price: 80, category: "Fragrance", gender: "Men", badge: "New" },
    { id: "bitter-peach", brand: "Tom Ford", name: "Bitter Peach", sku: "#33", price: 80, category: "Fragrance", gender: "Unisex" },
    { id: "mon-paris", brand: "YSL", name: "Mon Paris", sku: "#34", price: 80, category: "Fragrance", gender: "Women" },
    { id: "ultra-male", brand: "Jean Paul Gaultier", name: "Ultra Male", sku: "#35", price: 80, category: "Fragrance", gender: "Men" },

    { id: "rose-prick", brand: "Tom Ford", name: "Rose Prick", sku: "#36", price: 80, category: "Fragrance", gender: "Unisex" },
    { id: "l-elixir", brand: "Jean Paul Gaultier", name: "Le Male Elixir", sku: "#37", price: 80, category: "Fragrance", gender: "Men" },
    { id: "bloom", brand: "Gucci", name: "Bloom", sku: "#38", price: 80, category: "Fragrance", gender: "Women" },
    { id: "absolutely", brand: "Gucci", name: "Absolutely", sku: "#39", price: 80, category: "Fragrance", gender: "Unisex" },
    { id: "gabrielle", brand: "Chanel", name: "Gabrielle", sku: "#40", price: 80, category: "Fragrance", gender: "Women" },

    { id: "cub-wood", brand: "Gucci", name: "Cub Wood", sku: "#41", price: 80, category: "Fragrance", gender: "Unisex" },
    { id: "gorgeous-jasmine", brand: "Gucci", name: "Gorgeous Jasmine", sku: "#42", price: 80, category: "Fragrance", gender: "Women" },
    { id: "intensity", brand: "Jo Malone", name: "Intensity", sku: "#43", price: 80, category: "Fragrance", gender: "Unisex" },
    { id: "bleu-parfum", brand: "Chanel", name: "Bleu Parfum", sku: "#44", price: 80, category: "Fragrance", gender: "Men" },
    { id: "black-orchid", brand: "Tom Ford", name: "Black Orchid", sku: "#45", price: 80, category: "Fragrance", gender: "Unisex" },

    { id: "babycat", brand: "YSL", name: "Babycat", sku: "#46", price: 80, category: "Fragrance", gender: "Unisex" },
    { id: "gentleman", brand: "Givenchy", name: "Gentleman", sku: "#47", price: 80, category: "Fragrance", gender: "Men" },
    { id: "guilty-men", brand: "Gucci", name: "Guilty Men", sku: "#48", price: 80, category: "Fragrance", gender: "Men" },
    { id: "black-opium-105", brand: "YSL", name: "Black Opium", sku: "#49", price: 80, category: "Fragrance", gender: "Women" },
    { id: "code-parfum", brand: "Armani", name: "Code Parfum", sku: "#50", price: 80, category: "Fragrance", gender: "Men" },

    { id: "1-million", brand: "Paco Rabanne", name: "1 Million", sku: "#51", price: 80, category: "Fragrance", gender: "Men", badge: "Best Seller" },
    { id: "guilty-women", brand: "Gucci", name: "Guilty Women", sku: "#52", price: 80, category: "Fragrance", gender: "Women" },
    { id: "fervaganza", brand: "Lattafa", name: "Fervaganza", sku: "#53", price: 80, category: "Fragrance", gender: "Unisex" },
    { id: "pink-pp", brand: "Valentino", name: "Pink PP", sku: "#54", price: 50, category: "Fragrance", gender: "Women" },
    { id: "light", brand: "Dolce & Gabbana", name: "Light Blue", sku: "#55", price: 80, category: "Fragrance", gender: "Unisex" },

    { id: "my-way", brand: "Armani", name: "My Way", sku: "#56", price: 80, category: "Fragrance", gender: "Women", badge: "Best Seller" },
    { id: "phantom", brand: "Paco Rabanne", name: "Phantom", sku: "#57", price: 80, category: "Fragrance", gender: "Men" },
    { id: "si-passione", brand: "Armani", name: "Si Passione", sku: "#58", price: 80, category: "Fragrance", gender: "Women" },
    { id: "invictus", brand: "Paco Rabanne", name: "Invictus", sku: "#59", price: 80, category: "Fragrance", gender: "Men", badge: "Best Seller" },
    { id: "paradoxe", brand: "Prada", name: "Paradoxe", sku: "#60", price: 80, category: "Fragrance", gender: "Women", badge: "New" },

    { id: "light-blue", brand: "Dolce & Gabbana", name: "Light Blue", sku: "#61", price: 80, category: "Fragrance", gender: "Unisex", badge: "Best Seller" },
    { id: "guilty-pour-femme", brand: "Gucci", name: "Guilty Pour Femme", sku: "#62", price: 80, category: "Fragrance", gender: "Women" },
    { id: "intense-man", brand: "Dolce & Gabbana", name: "Intense Man", sku: "#63", price: 80, category: "Fragrance", gender: "Men" },
    { id: "invictus-parfum", brand: "Paco Rabanne", name: "Invictus Parfum", sku: "#64", price: 80, category: "Fragrance", gender: "Men" },
    { id: "spicebomb", brand: "Viktor & Rolf", name: "Spicebomb", sku: "#65", price: 80, category: "Fragrance", gender: "Men", badge: "Best Seller" },

    { id: "yum-boujee", brand: "KAYALI", name: "Yum Boujee Marshmallow", sku: "#66", price: 80, category: "Fragrance", gender: "Women" },
    { id: "night-vision", brand: "Versace", name: "Night Vision", sku: "#67", price: 30, category: "Fragrance", gender: "Men" },
    { id: "terre-hermes", brand: "Hermès", name: "Terre d'Hermès", sku: "#68", price: 80, category: "Fragrance", gender: "Men" },
    { id: "bottled", brand: "Hugo Boss", name: "Bottled", sku: "#69", price: 80, category: "Fragrance", gender: "Men", badge: "Best Seller" },
    { id: "polo-red", brand: "Ralph Lauren", name: "Polo Red", sku: "#70", price: 80, category: "Fragrance", gender: "Men" },

    { id: "greenwich", brand: "Bond No. 9", name: "Greenwich Village", sku: "#71", price: 80, category: "Fragrance", gender: "Unisex" },
    { id: "valentino-candy", brand: "Valentino", name: "Valentino Candy", sku: "#72", price: 80, category: "Fragrance", gender: "Women" },
    { id: "polo-blue", brand: "Ralph Lauren", name: "Polo Blue", sku: "#73", price: 80, category: "Fragrance", gender: "Men" },
    { id: "givenchy-gentleman", brand: "Givenchy", name: "Gentleman", sku: "#74", price: 80, category: "Fragrance", gender: "Men" },
    { id: "kayali", brand: "KAYALI", name: "KAYALI", sku: "#75", price: 80, category: "Fragrance", gender: "Women" },

    { id: "bond-no9", brand: "Bond No. 9", name: "NYC Bond No. 9", sku: "#76", price: 80, category: "Fragrance", gender: "Unisex" },
    { id: "jo-malone", brand: "Jo Malone", name: "English Pear & Freesia", sku: "#77", price: 80, category: "Fragrance", gender: "Unisex" },
    { id: "perfect", brand: "Marc Jacobs", name: "Perfect", sku: "#78", price: 80, category: "Fragrance", gender: "Women" },
    { id: "wanted", brand: "Azzaro", name: "Wanted", sku: "#79", price: 80, category: "Fragrance", gender: "Men" },
    { id: "la-vie", brand: "Lancôme", name: "La Vie Est Belle", sku: "#80", price: 80, category: "Fragrance", gender: "Women", badge: "Best Seller" },

    { id: "sutton-place", brand: "Bond No. 9", name: "Sutton Place", sku: "#81", price: 80, category: "Fragrance", gender: "Unisex" },
    { id: "tresor", brand: "Lancôme", name: "Tresor Intense", sku: "#82", price: 80, category: "Fragrance", gender: "Women" },
    { id: "carolina", brand: "Carolina Herrera", name: "Carolina Herrera", sku: "#83", price: 80, category: "Fragrance", gender: "Women" },
    { id: "erba-pura", brand: "Xerjoff", name: "Erba Pura", sku: "#84", price: 80, category: "Fragrance", gender: "Unisex" },
    { id: "rose-of-no-mans", brand: "Byredo", name: "Rose of No Man's Land", sku: "#85", price: 80, category: "Fragrance", gender: "Unisex" },

    // ---------------- COMBO SETS ----------------

    { id: "combo-25-chanel", brand: "Chanel", name: "4-in-1 25ML", sku: "COMBO-25-CHANEL", price: 95, category: "Gift Sets", gender: "Unisex", badge: "Gift Set" },
    { id: "combo-25-dior", brand: "Dior", name: "4-in-1 25ML", sku: "COMBO-25-DIOR", price: 95, category: "Gift Sets", gender: "Unisex", badge: "Gift Set" },
    { id: "combo-30-mfk", brand: "MFK", name: "4-in-1 30ML", sku: "COMBO-30-MFK", price: 110, category: "Gift Sets", gender: "Unisex", badge: "Gift Set" },
    { id: "combo-5x10-mfk", brand: "MFK", name: "5 × 10ML Box", sku: "MFK-5X10", price: 105, category: "Gift Sets", gender: "Unisex", badge: "Gift Set" },
    { id: "combo-30-lv", brand: "Louis Vuitton", name: "4-in-1 30ML", sku: "COMBO-30-LV", price: 110, category: "Gift Sets", gender: "Unisex", badge: "Gift Set" },
    { id: "combo-30-creed", brand: "Creed", name: "4-in-1 30ML", sku: "COMBO-30-CREED", price: 110, category: "Gift Sets", gender: "Unisex", badge: "Gift Set" }
];


/* =========================================================
   STATE
   ========================================================= */

let bag = JSON.parse(localStorage.getItem("avoraBag") || "[]");
let wishlist = JSON.parse(localStorage.getItem("avoraWishlist") || "[]");

let currentFilter = "All";
let currentSearch = "";
let currentGender = "All";


/* =========================================================
   HELPERS
   ========================================================= */

function money(value) {
    return `$${Number(value).toFixed(2)}`;
}

function saveState() {
    localStorage.setItem("avoraBag", JSON.stringify(bag));
    localStorage.setItem("avoraWishlist", JSON.stringify(wishlist));
}

function getProduct(id) {
    return products.find(product => product.id === id);
}

function escapeHTML(value) {
    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}


/* =========================================================
   PAGE NAVIGATION
   ========================================================= */

function showPage(pageId) {
    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active");
    });

    const page = document.getElementById(pageId);

    if (page) {
        page.classList.add("active");
    }

    closeMobile();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =========================================================
   MOBILE MENU
   ========================================================= */

function toggleMobile() {
    const menu = document.getElementById("mobileMenu");

    if (menu) {
        menu.classList.toggle("active");
    }
}

function closeMobile() {
    const menu = document.getElementById("mobileMenu");

    if (menu) {
        menu.classList.remove("active");
    }
}


/* =========================================================
   PRODUCT IMAGE
   ========================================================= */

function productImage(product) {
    /*
      Add a real image later by adding:

      image: "images/sauvage.jpg"

      to the product.

      Until then, the animated placeholder remains.
    */

    if (product.image) {
        return `
            <img
                src="${escapeHTML(product.image)}"
                alt="${escapeHTML(product.name)}"
                class="real-product-image"
                onerror="this.style.display='none'; this.nextElementSibling.style.display='block';"
            >
            <div class="fallback-product-art">
                ${escapeHTML(product.name.substring(0, 2).toUpperCase())}
            </div>
        `;
    }

    return `
        <div class="product-light"></div>
        <div class="product-ring"></div>

        <div class="product-object">
            <div class="object-logo">
                ${escapeHTML(product.brand)}
            </div>

            <div class="object-number">
                ${escapeHTML(product.sku.replace("#", ""))}
            </div>

            <div class="object-bottom">
                EAU DE PARFUM
            </div>
        </div>
    `;
}


/* =========================================================
   PRODUCT CARD
   ========================================================= */

function productCard(product) {
    const liked = wishlist.includes(product.id);

    return `
        <article class="product" data-id="${escapeHTML(product.id)}">

            <div
                class="product-image ${colorClass(product)}"
                onclick="openProduct('${product.id}')"
            >

                ${product.badge ? `
                    <div class="product-badge">
                        ${escapeHTML(product.badge)}
                    </div>
                ` : ""}

                <button
                    class="wishlist-button ${liked ? "liked" : ""}"
                    onclick="event.stopPropagation(); toggleWishlist('${product.id}')"
                    aria-label="Add ${escapeHTML(product.name)} to wishlist"
                >
                    ${liked ? "♥" : "♡"}
                </button>

                ${productImage(product)}

                <div class="image-label">
                    ${escapeHTML(product.brand)}
                </div>

                <div class="image-corner">
                    ${escapeHTML(product.sku)}
                </div>
            </div>

            <div class="product-info">

                <div class="product-brand">
                    ${escapeHTML(product.brand)}
                </div>

                <div class="product-name">
                    ${escapeHTML(product.name)}
                </div>

                <div class="product-meta">
                    ${escapeHTML(product.gender)} · ${escapeHTML(product.category)}
                </div>

                <div class="product-price">
                    ${money(product.price)}
                </div>

                <button
                    class="add-button"
                    onclick="addToBag('${product.id}')"
                >
                    ADD TO BAG
                </button>

            </div>

        </article>
    `;
}

function colorClass(product) {
    const colors = ["product-red", "product-blue", "product-black", "product-cream", "product-silver"];

    let total = 0;

    for (let i = 0; i < product.id.length; i++) {
        total += product.id.charCodeAt(i);
    }

    return colors[total % colors.length];
}


/* =========================================================
   RENDER PRODUCTS
   ========================================================= */

function renderProducts() {
    const shopContainer = document.getElementById("shopProducts");
    const featuredContainer = document.getElementById("featuredProducts");

    let filtered = products.filter(product => {

        const matchesFilter =
            currentFilter === "All" ||
            product.category === currentFilter;

        const matchesGender =
            currentGender === "All" ||
            product.gender === currentGender ||
            product.gender === "Unisex";

        const searchText =
            `${product.brand} ${product.name} ${product.sku} ${product.category} ${product.gender}`
                .toLowerCase();

        const matchesSearch =
            !currentSearch ||
            searchText.includes(currentSearch.toLowerCase());

        return matchesFilter && matchesGender && matchesSearch;
    });

    if (shopContainer) {
        if (filtered.length === 0) {
            shopContainer.innerHTML = `
                <div class="no-results">
                    <div class="eyebrow">AVORA</div>
                    <h2>Nothing found.</h2>
                    <p>Try another search or category.</p>
                </div>
            `;
        } else {
            shopContainer.innerHTML =
                filtered.map(productCard).join("");
        }
    }

    if (featuredContainer) {
        const featured = products
            .filter(product =>
                product.badge === "Best Seller" ||
                product.badge === "New"
            )
            .slice(0, 8);

        featuredContainer.innerHTML =
            featured.map(productCard).join("");
    }

    updateBagCount();
}


/* =========================================================
   FILTERS
   ========================================================= */

function filterProducts(category, button) {
    currentFilter = category;

    document.querySelectorAll(".filters button").forEach(btn => {
        btn.classList.remove("active");
    });

    if (button) {
        button.classList.add("active");
    }

    renderProducts();
}


/* =========================================================
   CATEGORY
   ========================================================= */

function openCategory(category) {
    showPage("shop");

    if (category === "Fragrance") {
        currentFilter = "Fragrance";
    } else if (category === "Fashion") {
        currentFilter = "Fashion";
    } else if (category === "Self-Care") {
        currentFilter = "Self-Care";
    } else {
        currentFilter = "All";
    }

    document.querySelectorAll(".filters button").forEach(button => {
        button.classList.toggle(
            "active",
            button.textContent.trim() === currentFilter.toUpperCase()
        );
    });

    renderProducts();
}


/* =========================================================
   SEARCH
   ========================================================= */

function searchProducts(query) {
    currentSearch = query.trim();

    showPage("shop");

    renderProducts();
}


/* =========================================================
   SEARCH UI
   ========================================================= */

function createSearch() {
    if (document.getElementById("avoraSearch")) {
        return;
    }

    const navActions = document.querySelector(".nav-actions");

    if (!navActions) {
        return;
    }

    const search = document.createElement("div");

    search.className = "avora-search";

    search.innerHTML = `
        <button
            class="search-toggle"
            onclick="toggleSearch()"
            aria-label="Search"
        >
            SEARCH
        </button>

        <div class="search-box" id="avoraSearch">
            <input
                id="searchInput"
                type="search"
                placeholder="Search products..."
                autocomplete="off"
            >

            <button onclick="clearSearch()">×</button>
        </div>
    `;

    navActions.insertBefore(
        search,
        navActions.firstChild
    );

    const input = document.getElementById("searchInput");

    input.addEventListener("input", event => {
        searchProducts(event.target.value);
    });

    input.addEventListener("keydown", event => {
        if (event.key === "Enter") {
            searchProducts(event.target.value);
        }
    });
}

function toggleSearch() {
    const search = document.getElementById("avoraSearch");

    if (!search) return;

    search.classList.toggle("active");

    if (search.classList.contains("active")) {
        setTimeout(() => {
            document.getElementById("searchInput")?.focus();
        }, 100);
    }
}

function clearSearch() {
    const input = document.getElementById("searchInput");

    if (input) {
        input.value = "";
    }

    currentSearch = "";

    renderProducts();
}


/* =========================================================
   GENDER NAVIGATION
   ========================================================= */

function filterGender(gender) {
    currentGender = gender;
    currentFilter = "All";

    showPage("shop");
    renderProducts();
}


/* =========================================================
   BAG
   ========================================================= */

function addToBag(id) {
    const product = getProduct(id);

    if (!product) return;

    const existing = bag.find(item => item.id === id);

    if (existing) {
        existing.quantity += 1;
    } else {
        bag.push({
            id,
            quantity: 1
        });
    }

    saveState();
    updateBagCount();
    renderBag();

    openBag();
}

function removeFromBag(id) {
    bag = bag.filter(item => item.id !== id);

    saveState();

    renderBag();
    updateBagCount();
}

function changeQuantity(id, amount) {
    const item = bag.find(item => item.id === id);

    if (!item) return;

    item.quantity += amount;

    if (item.quantity <= 0) {
        removeFromBag(id);
        return;
    }

    saveState();

    renderBag();
    updateBagCount();
}

function bagTotal() {
    return bag.reduce((total, item) => {
        const product = getProduct(item.id);

        if (!product) return total;

        return total + product.price * item.quantity;
    }, 0);
}

function updateBagCount() {
    const count = bag.reduce(
        (total, item) => total + item.quantity,
        0
    );

    const element = document.getElementById("bagCount");

    if (element) {
        element.textContent = count;
    }
}

function renderBag() {
    const container = document.getElementById("bagItems");
    const totalElement = document.getElementById("bagTotal");

    if (!container) return;

    if (bag.length === 0) {
        container.innerHTML = `
            <div class="empty-bag">
                YOUR BAG IS EMPTY.
            </div>
        `;
    } else {
        container.innerHTML = bag.map(item => {

            const product = getProduct(item.id);

            if (!product) return "";

            return `
                <div class="bag-item">

                    <div class="bag-item-image ${colorClass(product)}">
                        <span>
                            ${escapeHTML(product.sku.replace("#", ""))}
                        </span>
                    </div>

                    <div class="bag-item-info">

                        <strong>
                            ${escapeHTML(product.name)}
                        </strong>

                        <small>
                            ${escapeHTML(product.brand)}
                        </small>

                        <span>
                            ${money(product.price)}
                        </span>

                        <div class="quantity-controls">

                            <button onclick="changeQuantity('${product.id}', -1)">
                                −
                            </button>

                            <span>
                                ${item.quantity}
                            </span>

                            <button onclick="changeQuantity('${product.id}', 1)">
                                +
                            </button>

                        </div>

                    </div>

                    <button
                        class="remove-item"
                        onclick="removeFromBag('${product.id}')"
                    >
                        ×
                    </button>

                </div>
            `;
        }).join("");
    }

    if (totalElement) {
        totalElement.textContent = money(bagTotal());
    }
}

function toggleBag() {
    const panel = document.getElementById("bagPanel");
    const overlay = document.getElementById("bagOverlay");

    if (!panel || !overlay) return;

    const active = panel.classList.contains("active");

    if (active) {
        closeBag();
    } else {
        openBag();
    }
}

function openBag() {
    const panel = document.getElementById("bagPanel");
    const overlay = document.getElementById("bagOverlay");

    if (!panel || !overlay) return;

    renderBag();

    panel.classList.add("active");
    overlay.classList.add("active");
}

function closeBag() {
    const panel = document.getElementById("bagPanel");
    const overlay = document.getElementById("bagOverlay");

    if (!panel || !overlay) return;

    panel.classList.remove("active");
    overlay.classList.remove("active");
}


/* =========================================================
   WISHLIST
   ========================================================= */

function toggleWishlist(id) {
    if (wishlist.includes(id)) {
        wishlist = wishlist.filter(item => item !== id);
    } else {
        wishlist.push(id);
    }

    saveState();
    renderProducts();
}

function showWishlist() {
    const wishlistProducts = products.filter(product =>
        wishlist.includes(product.id)
    );

    showPage("shop");

    currentFilter = "All";
    currentSearch = "";

    const container = document.getElementById("shopProducts");

    if (!container) return;

    if (wishlistProducts.length === 0) {
        container.innerHTML = `
            <div class="no-results">
                <div class="eyebrow">AVORA / WISHLIST</div>
                <h2>Nothing saved yet.</h2>
                <p>Tap the heart on any product to save it.</p>
            </div>
        `;

        return;
    }

    container.innerHTML =
        wishlistProducts.map(productCard).join("");
}


/* =========================================================
   PRODUCT DETAIL
   ========================================================= */

function openProduct(id) {
    const product = getProduct(id);

    if (!product) return;

    const existing = document.getElementById("productModal");

    if (existing) {
        existing.remove();
    }

    const modal = document.createElement("div");

    modal.id = "productModal";

    modal.innerHTML = `
        <div class="product-modal-overlay" onclick="closeProductModal()"></div>

        <div class="product-modal">

            <button
                class="product-modal-close"
                onclick="closeProductModal()"
            >
                ×
            </button>

            <div class="product-modal-image ${colorClass(product)}">
                ${productImage(product)}
            </div>

            <div class="product-modal-info">

                <div class="eyebrow">
                    ${escapeHTML(product.brand)}
                </div>

                <h2>
                    ${escapeHTML(product.name)}
                </h2>

                <p>
                    SKU ${escapeHTML(product.sku)}
                </p>

                <strong>
                    ${money(product.price)}
                </strong>

                <div class="product-modal-actions">

                    <button
                        class="main-button"
                        onclick="addToBag('${product.id}'); closeProductModal();"
                    >
                        ADD TO BAG
                        <span>→</span>
                    </button>

                    <button
                        class="outline-button"
                        onclick="toggleWishlist('${product.id}')"
                    >
                        ${wishlist.includes(product.id) ? "REMOVE FROM WISHLIST" : "ADD TO WISHLIST"}
                    </button>

                </div>

            </div>

        </div>
    `;

    document.body.appendChild(modal);

    requestAnimationFrame(() => {
        modal.classList.add("active");
    });
}

function closeProductModal() {
    const modal = document.getElementById("productModal");

    if (modal) {
        modal.classList.remove("active");

        setTimeout(() => {
            modal.remove();
        }, 300);
    }
}


/* =========================================================
   PROFILE
   ========================================================= */

function openProfile() {
    const existing = document.getElementById("profileModal");

    if (existing) {
        existing.remove();
    }

    const profile = JSON.parse(
        localStorage.getItem("avoraProfile") || "{}"
    );

    const modal = document.createElement("div");

    modal.id = "profileModal";

    modal.innerHTML = `
        <div class="profile-overlay" onclick="closeProfile()"></div>

        <div class="profile-panel">

            <button
                class="close-bag"
                onclick="closeProfile()"
            >
                ×
            </button>

            <div class="eyebrow">
                AVORA / PROFILE
            </div>

            <h2>
                YOUR PROFILE
            </h2>

            <input
                id="profileName"
                class="profile-input"
                placeholder="Name"
                value="${escapeHTML(profile.name || "")}"
            >

            <input
                id="profileEmail"
                class="profile-input"
                type="email"
                placeholder="Email"
                value="${escapeHTML(profile.email || "")}"
            >

            <button
                class="main-button"
                onclick="saveProfile()"
            >
                SAVE PROFILE
                <span>→</span>
            </button>

            <div class="profile-links">

                <button onclick="showWishlist(); closeProfile();">
                    WISHLIST
                </button>

                <button onclick="trackOrder(); closeProfile();">
                    TRACK ORDER
                </button>

            </div>

        </div>
    `;

    document.body.appendChild(modal);

    requestAnimationFrame(() => {
        modal.classList.add("active");
    });
}

function closeProfile() {
    const modal = document.getElementById("profileModal");

    if (modal) {
        modal.remove();
    }
}

function saveProfile() {
    const name = document.getElementById("profileName")?.value.trim();
    const email = document.getElementById("profileEmail")?.value.trim();

    localStorage.setItem(
        "avoraProfile",
        JSON.stringify({
            name,
            email
        })
    );

    closeProfile();

    alert("Profile saved.");
}


/* =========================================================
   TRACK ORDER
   ========================================================= */

function trackOrder() {
    const existing = document.getElementById("trackModal");

    if (existing) {
        existing.remove();
    }

    const modal = document.createElement("div");

    modal.id = "trackModal";

    modal.innerHTML = `
        <div class="profile-overlay" onclick="document.getElementById('trackModal')?.remove()"></div>

        <div class="profile-panel">

            <button
                class="close-bag"
                onclick="document.getElementById('trackModal')?.remove()"
            >
                ×
            </button>

            <div class="eyebrow">
                AVORA / ORDERS
            </div>

            <h2>
                TRACK ORDER
            </h2>

            <input
                id="trackingNumber"
                class="profile-input"
                placeholder="Order or tracking number"
            >

            <button
                class="main-button"
                onclick="lookupOrder()"
            >
                TRACK
                <span>→</span>
            </button>

            <div id="trackingResult"></div>

        </div>
    `;

    document.body.appendChild(modal);

    requestAnimationFrame(() => {
        modal.classList.add("active");
    });
}

function lookupOrder() {
    const number =
        document.getElementById("trackingNumber")?.value.trim();

    const result =
        document.getElementById("trackingResult");

    if (!result) return;

    if (!number) {
        result.innerHTML = `
            <p class="tracking-message">
                Enter an order or tracking number.
            </p>
        `;
        return;
    }

    /*
      Real carrier tracking will be connected later.
      This does NOT pretend an order exists.
    */

    result.innerHTML = `
        <p class="tracking-message">
            Tracking lookup will be available once your
            store's shipping system is connected.
        </p>
    `;
}


/* =========================================================
   CHECKOUT PLACEHOLDER
   ========================================================= */

function checkout() {
    if (bag.length === 0) {
        alert("Your bag is empty.");
        return;
    }

    /*
      Payment intentionally NOT connected yet.
      This keeps the storefront functional without
      pretending payment processing exists.
    */

    alert(
        "Checkout is ready to connect. Payment processing has not been connected yet."
    );
}


/* =========================================================
   FOOTER / STORE INFO
   ========================================================= */

function openStoreInfo(type) {
    const pages = {
        shipping: {
            title: "SHIPPING POLICY",
            text: `
                AVORA currently ships from a USA warehouse.
                Standard shipping may take up to 7 days.
                Tracking information will be provided when available.
            `
        },

        returns: {
            title: "RETURN POLICY",
            text: `
                Return eligibility, time limits, and product-condition
                requirements will be posted here before the store
                begins accepting live orders.
            `
        },

        privacy: {
            title: "PRIVACY POLICY",
            text: `
                This page will explain how AVORA handles customer
                information, accounts, orders, and website data.
            `
        },

        terms: {
            title: "TERMS OF SERVICE",
            text: `
                AVORA's final store terms will be published here
                before live sales begin.
            `
        }
    };

    const page = pages[type];

    if (!page) return;

    const existing = document.getElementById("infoModal");

    if (existing) {
        existing.remove();
    }

    const modal = document.createElement("div");

    modal.id = "infoModal";

    modal.innerHTML = `
        <div class="profile-overlay" onclick="document.getElementById('infoModal')?.remove()"></div>

        <div class="profile-panel info-panel">

            <button
                class="close-bag"
                onclick="document.getElementById('infoModal')?.remove()"
            >
                ×
            </button>

            <div class="eyebrow">
                AVORA / INFORMATION
            </div>

            <h2>
                ${page.title}
            </h2>

            <p>
                ${page.text}
            </p>

        </div>
    `;

    document.body.appendChild(modal);

    requestAnimationFrame(() => {
        modal.classList.add("active");
    });
}


/* =========================================================
   KEYBOARD SHORTCUTS
   ========================================================= */

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {
        closeBag();
        closeMobile();
        closeProductModal();
        closeProfile();
    }

    if (
        (event.ctrlKey || event.metaKey) &&
        event.key.toLowerCase() === "k"
    ) {
        event.preventDefault();

        toggleSearch();
    }
});


/* =========================================================
   INITIALIZATION
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    createSearch();

    renderProducts();

    renderBag();

    updateBagCount();

});