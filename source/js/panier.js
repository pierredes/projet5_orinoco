import {ContactDAO} from './classe/contactdao.js';
import {Contact} from './classe/contact.js';
import {Cart} from './classe/cart.js';

$(document).ready( () =>{
    
    // Création des variables et constantes
    const panier_vide = document.getElementById('erreur_panier');
    const resume_panier = document.getElementById('resume_panier');
    const prenom_contact = document.getElementById('prenom_contact');
    const nom_contact = document.getElementById('nom_contact');
    const email_contact = document.getElementById('email_contact');
    const adresse_contact = document.getElementById('adresse_contact');
    const ville_contact = document.getElementById('ville_contact');
    const envoyer_commande = document.getElementById('envoyer_commande');
    const resume_panier_test = document.getElementById('resume_panier_test');
    let total_prix = 0;
    let products = [];
    
    let getcommande = Cart.listItemFromCart();
        
    // Affiche la div panier vide et cache le resumé du panier
    if(getcommande.length == 0){
        panier_vide.style.display = "block";
        resume_panier.style.display = 'none';
    }
    else{
        // affichage des données, calcul du prix total, et remplissage du tableau des ids des produits commandés
        for(let i = 0; i<getcommande.length; i++){
            total_prix = total_prix + getcommande[i].quantite * getcommande[i].prix;
            resume_panier_test.innerHTML += '<tr> <th scope = ' + i +'>' + getcommande[i].nom + '</th> <th>' + getcommande[i].prix + ' EUROS</th> <th>' + getcommande[i].quantite + '</th> <th>' + total_prix + ' EUROS</th> <th> <button id="supprimerElement'+i+'"> supprimer </button> </th> </tr>';
            products.push(getcommande[i].id);
        }

        for(let i = 0; i<getcommande.length; i++){
            let supprimerElement = document.getElementById('supprimerElement' + i);
                supprimerElement.addEventListener('click', () => {
                    Cart.deleteItemFromCart(getcommande[i].id);
                });
            }

        // vérification des données nom prenom
        let verifier_donnees_textuel = (texte) => {
            let regex_texte = /^[A-Za-zéèàêëç-\s]{2,50}$/;
            if(regex_texte.test(texte) == false) {
                alert('Veuillez rentrer un nom ou prénom contenant au moins deux lettres et juste des lettres');
                return false;
            }
            else {
                return texte;
            }
        }

        let verifier_donnees_ville_adresse = (texte) => {
            let regex_texte = /^[A-Za-z0-9éèêëç-\s]{2,100}$/;
            if(regex_texte.test(texte) == false) {
                alert('Veuillez rentrer une adresse ou une ville contenant au moins deux caractères');
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

        // envoie des données
        envoyer_commande.addEventListener('click', (event) => {
            event.preventDefault();
            if(verifier_donnees_email(email_contact.value) && verifier_donnees_textuel(prenom_contact.value) && verifier_donnees_textuel(nom_contact.value) && verifier_donnees_ville_adresse(adresse_contact.value) && verifier_donnees_ville_adresse(ville_contact.value)){
                 // Création d'un contact avec les données du formulaire
                let contact = new Contact(prenom_contact.value, nom_contact.value, adresse_contact.value, ville_contact.value, email_contact.value);

                // Stockage du numéro de commande récupéré ainsi que du prix total
                ContactDAO.postContactAndProduct(contact, products).then(data => {
                    localStorage.setItem('numero_commande', data.orderId);
                    localStorage.setItem('prix', total_prix);
                    window.location = './confirmation.html';
                });
            }
        });  
    }

})
