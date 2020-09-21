import {ContactDAO} from './contactdao.js';
import {Contact} from './contact.js';
$(document).ready(() =>{
    
    // Création des variables et constantes
    const resume_panier_nom = document.getElementById('resume_panier_nom');
    const resume_panier_prix = document.getElementById('resume_panier_prix');
    const prenom_contact = document.getElementById('prenom_contact');
    const nom_contact = document.getElementById('nom_contact');
    const email_contact = document.getElementById('email_contact');
    const adresse_contact = document.getElementById('adresse_contact');
    const ville_contact = document.getElementById('ville_contact');
    const envoyer_commande = document.getElementById('envoyer_commande');
    const prixAPayer = document.getElementById('prixAPayer');
    let total_prix = 0;
    let products = [];
    let getcommande = JSON.parse(localStorage.getItem('camera')); // Récupération des données du localstorage

    // affichage des données, calcul du prix total, et remplissage du tableau des ids des produits commandés
    for(let i = 0; i<getcommande.length; i++){
        resume_panier_nom.innerHTML += getcommande[i].nom + ('<br> <hr>');
        resume_panier_prix.innerHTML += getcommande[i].prix + ('<br> <hr>');
        total_prix = total_prix + getcommande[i].prix;
        products.push(getcommande[i].id)
    }
    prixAPayer.innerHTML += total_prix + (' EUROS');

    envoyer_commande.addEventListener('click', (event) => {
        event.preventDefault();
        
        // Création d'un contact avec les données du formulaire
        let contact = new Contact(prenom_contact.value, nom_contact.value, adresse_contact.value, ville_contact.value, email_contact.value);

        // Stockage du numéro de commande récupéré ainsi que du prix total
        ContactDAO.postContactAndProduct(contact, products).then(data => {
            localStorage.setItem('numero_commande', data.orderId);
            localStorage.setItem('prix', total_prix);
            window.location = 'confirmation.html';
        });
    });  

})
