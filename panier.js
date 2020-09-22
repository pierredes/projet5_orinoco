import {ContactDAO} from './contactdao.js';
import {Contact} from './contact.js';
$(document).ready(() =>{
    
    // Création des variables et constantes
    const panier_vide = document.getElementById('erreur_panier');
    const resume_panier = document.getElementById('resume_panier');
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

    if(getcommande == null){
        panier_vide.style.display = "block";
        resume_panier.style.display = 'none';
    }
    else{
        // affichage des données, calcul du prix total, et remplissage du tableau des ids des produits commandés
        for(let i = 0; i<getcommande.length; i++){
            resume_panier_nom.innerHTML += getcommande[i].nom + ('<br> <hr>');
            resume_panier_prix.innerHTML += getcommande[i].prix + ('<br> <hr>');
            total_prix = total_prix + getcommande[i].prix;
            products.push(getcommande[i].id)
        }
        prixAPayer.innerHTML += total_prix + (' EUROS');

        // vérification des données nom prenom
        let verifier_donnees_textuel = (texte) => {
            let regex_texte = /^[A-Za-zéèàêë-]{2,50}$/;
            if(regex_texte.test(texte) == false) {
                alert('Veuillez rentrer un nom ou prénom contenant au moins deux lettres et juste des lettres');
                return false;
            }
            else {
                return texte;
            }
        }

        //Vérification email
        let verifier_donnees_email = (email) => {
            let regex_email = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if(regex_email.test(email) == false) {
                alert('Veuillez rentrer un email correct (de la forme nom@nom.fr');
                return false;
            }
            else {
                return email;
            } 
        }

        envoyer_commande.addEventListener('click', (event) => {
            event.preventDefault();
            if(verifier_donnees_email(email_contact.value) && verifier_donnees_textuel(prenom_contact.value) && verifier_donnees_textuel(nom_contact.value)) {
                 // Création d'un contact avec les données du formulaire
                let contact = new Contact(prenom_contact.value, nom_contact.value, adresse_contact.value, ville_contact.value, email_contact.value);

                // Stockage du numéro de commande récupéré ainsi que du prix total
                ContactDAO.postContactAndProduct(contact, products).then(data => {
                    localStorage.setItem('numero_commande', data.orderId);
                    localStorage.setItem('prix', total_prix);
                    window.location = 'confirmation.html';
                });
            }
           
        });  
    }

    

})
