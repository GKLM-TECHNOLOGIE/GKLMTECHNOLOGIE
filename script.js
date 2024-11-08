// Fonction pour gérer le bouton "Voir plus/Voir moins"
function afficherPlus(bouton) {
    const contenu = bouton.parentNode;
    contenu.classList.toggle("contenu-etendu");

    if (contenu.classList.contains("contenu-etendu")) {
        bouton.textContent = "Voir moins";
    } else {
        bouton.textContent = "Voir plus";
        
        // Faire défiler vers le haut de la section si on ferme
        contenu.scrollIntoView({ behavior: 'smooth' });
    }
}

// Fonction pour ajouter une animation smooth scroll aux ancres
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Fonction pour gérer le chargement différé des images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('loading');
                    observer.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    }
});

// Fonction pour améliorer l'accessibilité des boutons "Voir plus"
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.voir-plus');
    
    buttons.forEach(button => {
        button.setAttribute('aria-expanded', 'false');
        button.setAttribute('role', 'button');
        
        button.addEventListener('click', function() {
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', !isExpanded);
        });
    });
});