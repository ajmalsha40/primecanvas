:root {
    --color-bg-deep: #0A0A0A;
    --color-bg-panel: #141414;
    --color-text-pure: #FFFFFF;
    --color-text-muted: #8E8E93;
    --color-gold-accent: #C5A880;
    --font-editorial: 'Cormorant Garamond', serif;
    --font-corporate: 'Inter', sans-serif;
    --transition-cinematic: cubic-bezier(0.25, 1, 0.5, 1);
}

* { box-sizing: border-box; margin: 0; padding: 0; user-select: none; }
html { scroll-behavior: smooth; background-color: var(--color-bg-deep); color: var(--color-text-pure); font-family: var(--font-corporate); }

.custom-cursor {
    width: 8px; height: 8px; background: var(--color-gold-accent); border-radius: 50%;
    position: fixed; pointer-events: none; z-index: 9999; transform: translate(-50%, -50%);
    transition: width 0.3s ease, height 0.3s ease;
}

.luxury-nav {
    position: fixed; top: 0; left: 0; width: 100%; z-index: 1000;
    mix-blend-mode: difference; border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.nav-container { max-width: 1600px; margin: 0 auto; padding: 2rem 4rem; display: flex; justify-content: space-between; align-items: center; }
.brand-logo { font-family: var(--font-editorial); font-size: 1.75rem; font-weight: 500; letter-spacing: 4px; color: var(--color-text-pure); text-decoration: none; }
.nav-links { display: flex; gap: 3rem; align-items: center; }
.nav-item { font-size: 0.8rem; text-transform: uppercase; letter-spacing: 2px; color: var(--color-text-pure); text-decoration: none; position: relative; padding-bottom: 4px; cursor: pointer;}

/* Dropdown CSS */
.dropdown { position: relative; display: inline-block; }
.dropdown-content {
    display: none; position: absolute; background-color: #1a1a1a; min-width: 180px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.8); z-index: 1; margin-top: 10px; border: 1px solid rgba(255,255,255,0.1);
}
.dropdown-content a {
    color: var(--color-text-pure); padding: 12px 16px; text-decoration: none; display: block;
    font-size: 0.75rem; text-transform: uppercase; letter-spacing: 1.5px; transition: 0.3s;
}
.dropdown-content a:hover { background-color: #333; color: var(--color-gold-accent); }
.dropdown:hover .dropdown-content { display: block; }

.admin-btn-toggle {
    background: transparent; border: 1px solid rgba(255, 255, 255, 0.2); color: var(--color-text-pure);
    padding: 0.5rem 1.25rem; text-transform: uppercase; font-size: 0.75rem; letter-spacing: 1.5px; cursor: pointer; transition: all 0.4s var(--transition-cinematic);
}
.admin-btn-toggle:hover { border-color: var(--color-gold-accent); color: var(--color-gold-accent); }

/* Modal */
.modal { position: fixed; z-index: 2000; left: 0; top: 0; width: 100%; height: 100%; background-color: rgba(0,0,0,0.8); display: flex; justify-content: center; align-items: center; }
.modal.hidden { display: none; }
.modal-content { background-color: var(--color-bg-panel); padding: 3rem; border: 1px solid rgba(255,255,255,0.1); width: 400px; position: relative; }
.close-modal { position: absolute; right: 20px; top: 15px; color: white; font-size: 28px; cursor: pointer; }
.modal-title { font-family: var(--font-editorial); font-size: 2rem; font-weight: 300; margin-bottom: 2rem; text-align: center; }

/* Hero Section */
.hero-section { position: relative; height: 100vh; display: flex; align-items: center; padding-left: 8%; overflow: hidden; }
.hero-parallax-bg {
    position: absolute; top: 0; left: 0; width: 100%; height: 120%;
    background-image: url('https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1920&auto=format&fit=crop');
    background-size: cover; background-position: center; transform: translateY(0); z-index: -2; will-change: transform;
}
.hero-overlay { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: linear-gradient(90deg, rgba(10,10,10,0.85) 0%, rgba(10,10,10,0.3) 100%); z-index: -1; }
.hero-content { max-width: 650px; }
.hero-subtitle { font-size: 0.85rem; letter-spacing: 5px; color: var(--color-gold-accent); text-transform: uppercase; display: block; margin-bottom: 1.5rem; }
.hero-title { font-family: var(--font-editorial); font-size: 4.5rem; font-weight: 300; line-height: 1.1; letter-spacing: -1px; margin-bottom: 2.5rem; }
.action-scroll-btn { display: inline-block; color: var(--color-text-pure); text-transform: uppercase; font-size: 0.8rem; letter-spacing: 3px; text-decoration: none; border-bottom: 1px solid var(--color-text-pure); padding-bottom: 8px; transition: 0.4s; }
.action-scroll-btn:hover { color: var(--color-gold-accent); border-color: var(--color-gold-accent); }

/* Products Matrix (Images Only) */
.collection-container { max-width: 1600px; margin: 0 auto; padding: 6rem 4rem; }
.section-meta h2 { font-family: var(--font-editorial); font-size: 2.5rem; font-weight: 300; letter-spacing: 1px; margin-bottom: 0.5rem; }
.meta-filter { font-size: 0.8rem; text-transform: uppercase; letter-spacing: 1.5px; color: var(--color-text-muted); margin-bottom: 3rem;}
.product-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(400px, 1fr)); gap: 4rem 3rem; }

.product-card { position: relative; overflow: hidden; background: transparent; }
.product-image-wrapper { position: relative; width: 100%; aspect-ratio: 3 / 4; overflow: hidden; background-color: #141414; }
.product-image { width: 100%; height: 100%; object-fit: cover; transition: transform 1.2s var(--transition-cinematic); will-change: transform; }
.product-card:hover .product-image { transform: scale(1.04); }
.product-card-overlay { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(10, 10, 10, 0.4); display: flex; align-items: center; justify-content: center; opacity: 0; transition: opacity 0.5s var(--transition-cinematic); }
.product-card:hover .product-card-overlay { opacity: 1; }
.insta-transaction-trigger { background: var(--color-text-pure); color: var(--color-bg-deep); border: none; padding: 1rem 2rem; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 2px; cursor: pointer; text-decoration: none; transform: translateY(15px); transition: all 0.5s var(--transition-cinematic); }
.product-card:hover .insta-transaction-trigger { transform: translateY(0); }
.insta-transaction-trigger:hover { background: var(--color-gold-accent); color: var(--color-text-pure); }

.delete-piece-btn { position: absolute; top: 15px; right: 15px; background: rgba(200, 30, 30, 0.9); color: white; border: none; padding: 0.5rem 0.75rem; cursor: pointer; z-index: 10; font-size: 0.7rem; text-transform: uppercase; letter-spacing: 1px; }

/* Admin Panel */
.admin-panel { position: fixed; top: 0; right: 0; width: 500px; height: 100vh; background-color: var(--color-bg-panel); box-shadow: -10px 0 30px rgba(0,0,0,0.5); z-index: 2000; padding: 3rem; transition: transform 0.6s var(--transition-cinematic); overflow-y: auto; }
.admin-panel.hidden { transform: translateX(100%); }
.panel-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem; border-bottom: 1px solid #333; padding-bottom: 1rem;}
.panel-header h3 { font-family: var(--font-editorial); font-size: 2rem; font-weight: 300; }
.close-btn { background: none; border: none; color: var(--color-text-pure); font-size: 2rem; cursor: pointer; }

.admin-section { margin-bottom: 2.5rem; }
.admin-section h4 { font-size: 1rem; color: var(--color-gold-accent); margin-bottom: 1rem; font-weight: 400; text-transform: uppercase; letter-spacing: 1px;}
.customer-list-box { background: #0a0a0a; border: 1px solid #333; padding: 1rem; max-height: 150px; overflow-y: auto; font-size: 0.85rem; line-height: 1.6; }

.input-group { margin-bottom: 1.5rem; }
.input-group label { display: block; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 1.5px; color: var(--color-text-muted); margin-bottom: 0.5rem; }
.input-group input { width: 100%; background: transparent; border: none; border-bottom: 1px solid rgba(255, 255, 255, 0.1); padding: 0.75rem 0; color: var(--color-text-pure); font-size: 0.95rem; outline: none; transition: 0.4s; }
.input-group input:focus { border-color: var(--color-gold-accent); }
.submit-luxury-btn { width: 100%; background-color: transparent; border: 1px solid var(--color-gold-accent); color: var(--color-gold-accent); padding: 1rem; text-transform: uppercase; font-size: 0.8rem; letter-spacing: 2px; cursor: pointer; transition: 0.4s; }
.submit-luxury-btn:hover { background-color: var(--color-gold-accent); color: var(--color-bg-deep); }
.logout-btn { background: transparent; border: none; color: #FF453A; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 1px; cursor: pointer; margin-top: 1rem; }

.reveal-element { opacity: 0; transform: translateY(40px); transition: opacity 1.2s var(--transition-cinematic), transform 1.2s var(--transition-cinematic); }
.reveal-element.active { opacity: 1; transform: translateY(0); }

/* Footer */
.luxury-footer { border-top: 1px solid rgba(255, 255, 255, 0.05); padding: 6rem 4rem 3rem 4rem; background-color: #050505; text-align: center; }
.instagram-footer-trigger { display: inline-flex; align-items: center; gap: 1rem; color: var(--color-text-pure); font-family: var(--font-editorial); font-size: 2.2rem; text-decoration: none; font-weight: 300; transition: color 0.4s ease; margin-bottom: 4rem; }
.instagram-footer-trigger:hover { color: var(--color-gold-accent); }
.arrow-icon { width: 32px; height: 32px; transition: transform 0.4s; }
.instagram-footer-trigger:hover .arrow-icon { transform: translateX(10px); }
.footer-base { font-size: 0.7rem; text-transform: uppercase; letter-spacing: 2px; color: rgba(255,255,255,0.2); }
