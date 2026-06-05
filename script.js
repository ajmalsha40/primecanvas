const INSTAGRAM_TARGET_URL = "https://www.instagram.com/primecanva.s?igsh=MWI1ODJtZHY4dmQ3aQ==";
const OWNER_SECRET = "primecanva@123";

// High quality Copyright-Free Initial Images
const defaultCollection = [
    { id: 1, image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1920&auto=format&fit=crop" },
    { id: 2, image: "https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=1920&auto=format&fit=crop" },
];

let collectionInventory = JSON.parse(localStorage.getItem('prime_canvas_inventory')) || defaultCollection;
let customerList = JSON.parse(localStorage.getItem('prime_canvas_customers')) || [];
let isOwnerSessionActive = sessionStorage.getItem('owner_logged_in') === 'true';

document.addEventListener("DOMContentLoaded", () => {
    initAppEffects();
    renderProductGrid();
    renderCustomerList();
});

function initAppEffects() {
    // Cursor FX
    const cursor = document.querySelector('.custom-cursor');
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = `${e.clientX}px`; cursor.style.top = `${e.clientY}px`;
    });
    document.querySelectorAll('a, button, .product-card').forEach(item => {
        item.addEventListener('mouseenter', () => { cursor.style.transform = 'translate(-50%, -50%) scale(2.5)'; cursor.style.background = 'rgba(197, 168, 128, 0.3)'; });
        item.addEventListener('mouseleave', () => { cursor.style.transform = 'translate(-50%, -50%) scale(1)'; cursor.style.background = '#C5A880'; });
    });

    // Parallax
    const parallaxBg = document.querySelector('.hero-parallax-bg');
    window.addEventListener('scroll', () => {
        if(parallaxBg) parallaxBg.style.transform = `translateY(${window.pageYOffset * 0.4}px)`;
    });

    // Scroll Reveal
    const scrollRevealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => { if(entry.isIntersecting) entry.target.classList.add('active'); });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal-element').forEach(el => scrollRevealObserver.observe(el));

    // Sign In Logic
    const loginTrigger = document.getElementById('login-trigger');
    const loginModal = document.getElementById('login-modal');
    const closeLogin = document.getElementById('close-login');
    const submitLogin = document.getElementById('submit-login');
    const emailInput = document.getElementById('user-email');
    const phoneInput = document.getElementById('user-phone');
    
    // Admin Panel Elements
    const adminPanel = document.getElementById('admin-panel');
    const closeAdmin = document.getElementById('close-admin');
    const logoutAdmin = document.getElementById('logout-admin');

    loginTrigger.addEventListener('click', () => {
        if(isOwnerSessionActive) {
            adminPanel.classList.remove('hidden');
        } else {
            loginModal.classList.remove('hidden');
        }
    });

    closeLogin.addEventListener('click', () => loginModal.classList.add('hidden'));
    closeAdmin.addEventListener('click', () => adminPanel.classList.add('hidden'));

    submitLogin.addEventListener('click', () => {
        const email = emailInput.value.trim();
        const phone = phoneInput.value.trim();

        // 1. Check Owner Condition Exact Match
        if(email === OWNER_SECRET && phone === OWNER_SECRET) {
            isOwnerSessionActive = true;
            sessionStorage.setItem('owner_logged_in', 'true');
            loginModal.classList.add('hidden');
            adminPanel.classList.remove('hidden');
            renderProductGrid();
            emailInput.value = ""; phoneInput.value = "";
            return;
        }

        // 2. Customer Condition Validations
        if(!email.endsWith("@gmail.com")) {
            alert("Email must end with @gmail.com");
            return;
        }
        
        // 10 digits validation
        if(phone.length !== 10 || isNaN(phone)) {
            alert("Phone number must be exactly 10 digits.");
            return;
        }

        // Save Customer
        customerList.push(`Email: ${email} | Phone: ${phone}`);
        localStorage.setItem('prime_canvas_customers', JSON.stringify(customerList));
        renderCustomerList();
        
        alert("Signed in Successfully! Enjoy browsing.");
        loginModal.classList.add('hidden');
        emailInput.value = ""; phoneInput.value = "";
    });

    logoutAdmin.addEventListener('click', () => {
        isOwnerSessionActive = false;
        sessionStorage.setItem('owner_logged_in', 'false');
        adminPanel.classList.add('hidden');
        renderProductGrid();
        alert("Admin Locked. Logged out securely.");
    });

    // Owner Functions: Add New Image
    const addForm = document.getElementById('add-product-form');
    addForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const newPiece = { id: Date.now(), image: document.getElementById('item-image').value };
        collectionInventory.push(newPiece);
        updateLocalStorageEngine();
        addForm.reset();
    });

    // Owner Functions: Edit Texts
    document.getElementById('save-texts').addEventListener('click', () => {
        const newBrand = document.getElementById('edit-brand-name').value;
        const newTitle = document.getElementById('edit-hero-title').value;
        
        if(newBrand) {
            document.getElementById('editable-logo').innerText = newBrand;
            localStorage.setItem('savedBrand', newBrand);
        }
        if(newTitle) {
            document.getElementById('editable-title').innerHTML = newTitle;
            localStorage.setItem('savedTitle', newTitle);
        }
        alert("Texts Updated on Website!");
    });

    // Load saved texts if they exist
    if(localStorage.getItem('savedBrand')) document.getElementById('editable-logo').innerText = localStorage.getItem('savedBrand');
    if(localStorage.getItem('savedTitle')) document.getElementById('editable-title').innerHTML = localStorage.getItem('savedTitle');
}

function renderCustomerList() {
    const listDiv = document.getElementById('customer-list');
    if(!listDiv) return;
    if(customerList.length === 0) {
        listDiv.innerHTML = "No customers logged in yet.";
    } else {
        listDiv.innerHTML = customerList.map(c => `<p>${c}</p>`).join('');
    }
}

function renderProductGrid() {
    const gridTarget = document.getElementById('product-grid');
    if(!gridTarget) return;

    gridTarget.innerHTML = '';

    collectionInventory.forEach(item => {
        const structuralCard = document.createElement('div');
        structuralCard.className = 'product-card reveal-element active'; // active for immediate load
        
        const ownerControls = isOwnerSessionActive 
            ? `<button class="delete-piece-btn" onclick="removeGarmentPiece(${item.id})">Remove</button>` 
            : '';

        
        `;
        gridTarget.appendChild(structuralCard);
    });
}

window.removeGarmentPiece = function(targetId) {
    if(confirm("Confirm deletion of this garment image?")) {
        collectionInventory = collectionInventory.filter(piece => piece.id !== targetId);
        updateLocalStorageEngine();
    }
}

function updateLocalStorageEngine() {
    localStorage.setItem('prime_canvas_inventory', JSON.stringify(collectionInventory));
    renderProductGrid();
}
