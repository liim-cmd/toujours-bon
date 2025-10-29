/*
 * Script principal du site Zéro Gaspi Market
 * Gère la sélection du thème (clair/sombre), le filtrage des produits
 * et le menu burger mobile.
 */

document.addEventListener('DOMContentLoaded', () => {
  // --- Gestion du mode sombre / clair ---
  const themeToggle = document.getElementById('theme-toggle');
  const savedTheme = localStorage.getItem('theme');

  if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
    if (themeToggle && savedTheme === 'dark') themeToggle.checked = true;
  } else {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
    if (themeToggle) themeToggle.checked = prefersDark;
  }

  if (themeToggle) {
    themeToggle.addEventListener('change', function () {
      const newTheme = this.checked ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
    });
  }

  // --- Filtrage des produits ---
  const filterButtons = document.querySelectorAll('.filter-btn');
  const productCards = document.querySelectorAll('.product-card');

  if (filterButtons && productCards) {
    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const filter = btn.dataset.filter;
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        productCards.forEach(card => {
          const category = card.dataset.category;
          card.style.display = (filter === 'all' || category === filter) ? '' : 'none';
        });
      });
    });
  }

  // --- Menu burger (mobile uniquement) ---
  const burger = document.querySelector('.burger');
  const navLinks = document.querySelector('.nav-links');

  if (burger && navLinks) {
    burger.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        const expanded = burger.getAttribute('aria-expanded') === 'true' || false;
        burger.setAttribute('aria-expanded', !expanded);
        navLinks.classList.toggle('show');
      }
    });

    // Ferme le menu si on clique sur un lien
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
          navLinks.classList.remove('show');
          burger.setAttribute('aria-expanded', 'false');
        }
      });
    });

    // Ferme le menu si on repasse en version PC
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768) {
        navLinks.classList.remove('show');
        burger.setAttribute('aria-expanded', 'false');
      }
    });
  }
});
