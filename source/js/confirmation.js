$(document).ready(() => {
    //Déclaration variable et constante
    const confirmation_prix = document.getElementById('confirmation_prix');
    const confirmation_numero = document.getElementById('confirmation_numero');

    confirmation_prix.innerHTML = localStorage.getItem('prix');
    confirmation_numero.innerHTML = localStorage.getItem('numero_commande');

    localStorage.clear();
})

