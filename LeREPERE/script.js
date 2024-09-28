// script.js pour LeREPERE

// Gestion des boutons "Voir plus"
const voirPlusButtons = document.querySelectorAll('.voir-plus');

voirPlusButtons.forEach(button => {
    button.addEventListener('click', () => {
        const featureContent = button.parentElement; 
        const textContent = featureContent.querySelector('.text-content'); 

        textContent.classList.toggle('contenu-etendu'); 

        button.textContent = textContent.classList.contains('contenu-etendu') ? 'Voir moins' : 'Voir plus';
    });
});

// Gestion du menu hamburger
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');

hamburger.addEventListener('click', () => {
  nav.classList.toggle('open');
});

// Gestion du scroll pour la navigation
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault(); // Empêche le comportement par défaut du lien

    const targetId = link.getAttribute('href'); // Obtient l'ID de la section cible
    const targetElement = document.querySelector(targetId); // Sélectionne l'élément cible

    // Scroll en douceur vers la section cible
    targetElement.scrollIntoView({
      behavior: 'smooth', // Pour un scroll en douceur
      block: 'start' // Aligner le haut de la section avec le haut de la fenêtre
    });

    // Ferme le menu hamburger après le clic sur un lien (sur mobile)
    if (nav.classList.contains('open')) {
      nav.classList.remove('open');
    }
  });
});

// Gestion de la flèche de remontée
const scrollToTopButton = document.querySelector('.scroll-to-top');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) { // Affiche la flèche après 300px de scroll
    scrollToTopButton.style.display = 'block';
  } else {
    scrollToTopButton.style.display = 'none';
  }
});

scrollToTopButton.addEventListener('click', (event) => {
  event.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});