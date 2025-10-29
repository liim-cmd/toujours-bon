/* --------------------------------------------
   STYLE AMÉLIORÉ – ToujoursBon / Zéro Gaspi Market
   Thème vert nature + design moderne & fluide
---------------------------------------------*/

/* --- Importation de la typographie --- */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');

/* --- Palette de couleurs --- */
:root {
  --bg: #fdfcf8;
  --text: #222;
  --header-bg: #3e7b27;
  --primary: #57b857;
  --secondary: #f5a623;
  --card-bg: #ffffff;
}

/* --- Mode sombre --- */
[data-theme="dark"] {
  --bg: #1e1e1e;
  --text: #e6e6e6;
  --header-bg: #2e4620;
  --primary: #4cae4c;
  --secondary: #c98b2b;
  --card-bg: #2c2c2c;
}

/* --- Base --- */
*, *::before, *::after {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: 'Poppins', sans-serif;
  background-color: var(--bg);
  color: var(--text);
  line-height: 1.6;
  transition: background-color 0.3s ease, color 0.3s ease;
}

a {
  color: inherit;
  text-decoration: none;
}

p {
  max-width: 750px;
  margin: 0 auto 1rem;
}

/* --- Lien d’accès rapide --- */
.skip-link {
  position: absolute;
  left: -9999px;
}
.skip-link:focus {
  position: static;
  background: var(--primary);
  color: var(--bg);
  padding: 0.5rem;
  border-radius: 4px;
}

/* --- HEADER --- */
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 1rem 2rem;
  background-color: var(--header-bg);
  color: var(--bg);
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 6px rgba(0,0,0,0.15);
}

.logo {
  font-size: 1.6rem;
  font-weight: 700;
}

.nav-links {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
}

.nav-links li {
  margin-left: 1.5rem;
}

.nav-links a {
  padding: 0.5rem 0.75rem;
  font-weight: 600;
  border-radius: 6px;
  transition: background-color 0.3s ease;
}

.nav-links a:hover,
.nav-links a:focus {
  background-color: rgba(255, 255, 255, 0.2);
}

.nav-links a[aria-current="page"] {
  text-decoration: underline;
}

/* --- BOUTON MODE SOMBRE --- */
.theme-switch {
  position: relative;
  display: inline-flex;
  align-items: center;
  margin-left: 1rem;
}

.theme-switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  width: 40px;
  height: 20px;
  background-color: var(--bg);
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  position: relative;
}

.slider::before {
  content: "";
  position: absolute;
  width: 16px;
  height: 16px;
  top: 2px;
  left: 2px;
  background-color: var(--header-bg);
  border-radius: 50%;
  transition: transform 0.3s ease;
}

input:checked + .slider {
  background-color: var(--primary);
}
input:checked + .slider::before {
  transform: translateX(20px);
}

/* --- SECTION HERO --- */
.hero {
  position: relative;
  text-align: center;
  overflow: hidden;
}
.hero-img {
  width: 100%;
  height: auto;
  display: block;
  transition: transform 10s ease;
}
.hero:hover .hero-img {
  transform: scale(1.05);
}
.hero-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: linear-gradient(to top, rgba(0,0,0,0.5), transparent);
  color: var(--bg);
  padding: 2rem;
  border-radius: 10px;
  max-width: 90%;
  backdrop-filter: blur(4px);
}
.hero-text h1 {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}
.hero-text p {
  font-size: 1.2rem;
  margin-bottom: 1rem;
}

/* --- BOUTONS --- */
.btn {
  display: inline-block;
  background-color: var(--secondary);
  color: var(--bg);
  padding: 0.7rem 1.5rem;
  border-radius: 6px;
  font-weight: 600;
  transition: background-color 0.3s ease, transform 0.2s ease;
}
.btn:hover, .btn:focus {
  background-color: var(--primary);
  transform: translateY(-2px);
}

/* --- SECTIONS GÉNÉRALES --- */
section {
  padding: 4rem 1rem;
  max-width: 1100px;
  margin: 0 auto;
  text-align: center;
}
section h2 {
  font-size: 1.8rem;
  color: var(--header-bg);
  margin-bottom: 1rem;
}

/* --- GRILLE DE FONCTIONNALITÉS --- */
.feature-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}
.feature-item {
  background-color: var(--card-bg);
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 6px rgba(0,0,0,0.08);
  flex: 1 1 250px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeUp 0.8s ease forwards;
}
.feature-item:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
}

/* --- PRODUITS --- */
.filter-controls {
  margin-top: 1rem;
  overflow-x: auto;
  white-space: nowrap;
}
.filter-btn {
  background-color: var(--header-bg);
  color: var(--bg);
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  margin: 0 0.25rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
.filter-btn.active,
.filter-btn:hover {
  background-color: var(--primary);
}
.product-grid {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  margin-top: 2rem;
}
.product-card {
  background-color: var(--card-bg);
  border-radius: 8px;
  padding: 1rem;
  text-align: center;
  box-shadow: 0 2px 6px rgba(0,0,0,0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeUp 0.8s ease forwards;
}
.product-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
}
.product-card img {
  border-radius: 4px;
  margin-bottom: 0.5rem;
}
.price {
  color: var(--primary);
  font-weight: 700;
}
.original-price {
  text-decoration: line-through;
  font-weight: 400;
  color: var(--text);
  font-size: 0.9rem;
  margin-left: 0.3rem;
}

/* --- À PROPOS --- */
.values-list li {
  background-color: var(--card-bg);
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}

/* --- CONTACT --- */
.contact-section address {
  font-style: normal;
  margin: 1rem 0;
}
.contact-form input,
.contact-form textarea {
  width: 100%;
  padding: 0.6rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: var(--card-bg);
  color: var(--text);
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}
.contact-form input:focus,
.contact-form textarea:focus {
  border-color: var(--primary);
  box-shadow: 0 0 0 2px rgba(87,184,87,0.3);
}

/* --- FOOTER --- */
footer {
  text-align: center;
  padding: 1rem;
  background-color: var(--header-bg);
  color: var(--bg);
  font-size: 0.9rem;
}

/* --- ANIMATIONS --- */
@keyframes fadeUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* --- RESPONSIVE --- */
@media (max-width: 600px) {
  header {
    flex-direction: column;
    align-items: flex-start;
  }
  .nav-links {
    flex-wrap: wrap;
    margin-top: 0.5rem;
  }
  .nav-links li {
    margin: 0.25rem 1rem 0.25rem 0;
  }
  .hero-text h1 {
    font-size: 1.5rem;
  }
  .hero-text p {
    font-size: 1rem;
  }
}
