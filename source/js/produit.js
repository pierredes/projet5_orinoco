import {CameraDAO} from './classe/cameradao.js';
import {Cart} from './classe/cart.js';

$(document).ready( () => {
   
    let article_photo = document.getElementById('article_photo');
    let nom_camera = document.getElementById('nom_camera');
    let description_camera = document.getElementById('description_camera');
    let prix_camera = document.getElementById('prix_camera');
    let option_personnalisation = document.getElementById('option_personnalisation');

    // Récupération de l'id
    let url = new URL(document.location);
    let parametre = url.searchParams;
    let id = parametre.get('id');

    // Affichage des données de la caméra
    CameraDAO.findOneCamera(id).then(data => {
        article_photo.innerHTML = ('<img src=' + data.image + '>');
        nom_camera.innerHTML = data.nom;
        description_camera.innerHTML = data.description;
        prix_camera.innerHTML = 'Prix : ' + data.prix + ' EUROS';
        let tableau_personnalisation = data.personnalisation;
        for(let i = 0; i < tableau_personnalisation.length; i++){
            option_personnalisation.innerHTML += ('<option>' + tableau_personnalisation[i] + '</option>');
        }
        sessionStorage.setItem('camera', JSON.stringify(data));
    });

    // Redirection vers la page panier
    let voir_panier = document.getElementById('voir_panier');
    voir_panier.addEventListener('click', () => {
        window.location = "./panier.html";
    });

    // Redirection vers la page index
    let retour_accueil = document.getElementById('retour_accueil');
    retour_accueil.addEventListener('click', () => {
        window.location = './index.html';
    });

    // Ajout de la caméra dans le localstorage
    let ajouter_panier = document.getElementById('ajouter_panier');
    
    ajouter_panier.addEventListener('click', () => {
        let data = JSON.parse(sessionStorage.getItem('camera'));
        Cart.addItemInCart(data);
    });
    
});
