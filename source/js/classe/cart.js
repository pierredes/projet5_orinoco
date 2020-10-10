export class Cart {

    // Ajouter une caméra dans le panier
    static addItemInCart(item) {
        if(localStorage.getItem(item.id) == null){
            var contenu_panier = [];
        }
        else{
            contenu_panier = JSON.parse(localStorage.getItem(item.id));
        }  
            contenu_panier.push(item);
            localStorage.setItem(item.id, JSON.stringify(contenu_panier));
    }

    // Récupère toute les caméras du localstorage
    static listItemFromCart(item) {
        let itemInCart = JSON.parse(localStorage.getItem(item));
        return itemInCart;
    }

     // Supprime une camera du panier
     static removeItemFromCart(id) {
        let allItemInCart = this.listItemFromCart('camera');
        let name = 'Zurss 50S';
        for(let i = 0; i < allItemInCart.length; i++){
            if(allItemInCart[i].id == id) {
                localStorage.removeItem('camera' + i);
            }
        }
    }
}




//static addItemInCart(item) {
    //     if(localStorage.getItem('camera') == null){
    //         var contenu_panier = [];
    //     }
    //     else{
    //         contenu_panier = JSON.parse(localStorage.getItem('camera'));
    //     } 
    //     contenu_panier.push(item);
    //     localStorage.setItem('camera', JSON.stringify(contenu_panier));
    // }