function afficherPlus(bouton) {
    const contenu = bouton.parentNode;
    contenu.classList.toggle("contenu-etendu");

    if (contenu.classList.contains("contenu-etendu")) {
        bouton.textContent = "Voir moins";
    } else {
        bouton.textContent = "Voir plus";
    }
}