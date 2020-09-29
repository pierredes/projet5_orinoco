import {CameraDAO} from './cameradao.js';
export class Commande {

    // Ajouter une caméra dans le panier
    static addItemInCommande(item, id) {
        if(localStorage.getItem(item) == null){
            var contenu_panier = [];
        }
        else{
            contenu_panier = JSON.parse(localStorage.getItem(item));
        }
            
        CameraDAO.findOneCamera(id).then(data => {
            contenu_panier.push(data);
            localStorage.setItem(item, JSON.stringify(contenu_panier));
        });
    }

    // Récupère toute les caméras du localstorage
    static GetAllItemFromCommande(item) {
        let getcommande = JSON.parse(localStorage.getItem(item));
        return getcommande;
    }
}