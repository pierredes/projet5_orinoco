export class Cart {

    // Ajouter une caméra dans le panier
    static addItemInCart(item) {
        if(localStorage.getItem(item.id) === null) {
            item.quantite = 1;
            localStorage.setItem(item.id, JSON.stringify(item));
        }
        else {
            let camera = JSON.parse(localStorage.getItem(item.id));
            camera.quantite++;
            localStorage.setItem(item.id, JSON.stringify(camera));
        }
    }

    // Récupère toute les caméras du localstorage
    static listItemFromCart() {
        let itemInCart = [];
        let cleAIgnorer = 'quantite :';
        for(let i=0; i<localStorage.length; i++) {
            let key = localStorage.key(i);
            if(key.search(cleAIgnorer) != 0) {
                itemInCart.push(JSON.parse(localStorage.getItem(key)));
            }
        }
        return itemInCart;
    }
}