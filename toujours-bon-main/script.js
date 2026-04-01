/*
 * Script principal du site ToujoursBon
 * Gestion du thème, filtres produits, menu burger, formulaire et carte
 */

document.addEventListener('DOMContentLoaded', () => {

  // =========================
  // 🌙 THEME (clair / sombre)
  // =========================
  const themeToggle = document.getElementById('theme-toggle');
  const savedTheme = localStorage.getItem('theme');

  if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
    if (themeToggle) themeToggle.checked = (savedTheme === 'dark');
  } else {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const defaultTheme = prefersDark ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', defaultTheme);
    if (themeToggle) themeToggle.checked = prefersDark;
  }

  if (themeToggle) {
    themeToggle.addEventListener('change', () => {
      const newTheme = themeToggle.checked ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
    });
  }

  // =========================
  // 🍔 MENU BURGER
  // =========================
  const burger = document.querySelector('.burger');
  const navLinks = document.querySelector('.nav-links');

  if (burger && navLinks) {
    burger.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        const expanded = burger.getAttribute('aria-expanded') === 'true';
        burger.setAttribute('aria-expanded', (!expanded).toString());
        navLinks.classList.toggle('show');
      }
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
          navLinks.classList.remove('show');
          burger.setAttribute('aria-expanded', 'false');
        }
      });
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 768) {
        navLinks.classList.remove('show');
        burger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // =========================
  // 🛒 FILTRE PRODUITS
  // =========================
  const filterButtons = document.querySelectorAll('.filter-btn');
  const productCards = document.querySelectorAll('.product-card');

  if (filterButtons.length > 0 && productCards.length > 0) {

    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const filter = btn.dataset.filter;

        // état actif + accessibilité
        filterButtons.forEach(b => {
          b.classList.remove('active');
          b.setAttribute('aria-pressed', 'false');
        });

        btn.classList.add('active');
        btn.setAttribute('aria-pressed', 'true');

        let visibleCount = 0;

        productCards.forEach(card => {
          const category = card.dataset.category;

          if (filter === 'all' || category === filter) {
            card.classList.remove('hidden');
            visibleCount++;
          } else {
            card.classList.add('hidden');
          }
        });

        // 👉 BONUS : message si aucun produit
        const noResult = document.querySelector('.no-results');
        if (noResult) {
          noResult.hidden = visibleCount !== 0;
        }
      });
    });
  }

  // =========================
  // 📩 FORMULAIRE CONTACT
  // =========================
  const form = document.querySelector('.contact-form');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      alert("Merci pour votre message ! Nous vous répondrons rapidement.");

      form.reset();
    });
  }

  // =========================
  // 🗺️ CARTE (Leaflet sécurisé)
  // =========================
  const mapContainer = document.getElementById('map');

  if (mapContainer && typeof L !== "undefined") {
    const latitude = 49.4431;
    const longitude = 1.0883;

    const map = L.map('map').setView([latitude, longitude], 16);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    L.marker([latitude, longitude]).addTo(map)
      .bindPopup('<b>ToujoursBon</b><br>Rouen')
      .openPopup();
  }

});