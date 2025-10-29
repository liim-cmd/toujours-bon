/*
 * Script principal du site Zéro Gaspi Market
 * Gère la sélection du thème (clair/sombre) et le filtrage des produits.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Gestion du mode sombre / clair en utilisant localStorage
  const themeToggle = document.getElementById('theme-toggle');
  const savedTheme = localStorage.getItem('theme');
  // Appliquer le thème enregistré si disponible
  if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
    if (themeToggle && savedTheme === 'dark') {
      themeToggle.checked = true;
    }
  } else {
    // Utiliser la préférence système si aucun thème n’est enregistré
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
    if (themeToggle) {
      themeToggle.checked = prefersDark;
    }
  }

  if (themeToggle) {
    themeToggle.addEventListener('change', function () {
      const newTheme = this.checked ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
    });
  }

  // Filtrage des produits sur la page Produits
  const filterButtons = document.querySelectorAll('.filter-btn');
  const productCards = document.querySelectorAll('.product-card');
  if (filterButtons && productCards) {
    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const filter = btn.dataset.filter;
        // Mettre à jour l’état actif des boutons
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        // Afficher ou masquer les cartes selon la catégorie
        productCards.forEach(card => {
          const category = card.dataset.category;
          if (filter === 'all' || category === filter) {
            card.style.display = '';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }
});