class CameraDAO {
    constructor(id, nom, prix, description, image) {
        this.id = id;
        this.nom = nom;
        this.prix = prix;
        this.description = description;
        this.image = image;
    }
    
    recherchertoutelescamera() {
        fetch('http://localhost:3000/api/cameras').then(res => {
        if(res.ok) {
            let i
            res.json().then(data => { 
                for(i=0; i<data.length; i++){
                    nom.push(data[i].name)
                    image.push(data[i].imageUrl)
                    prix.push(data[i].price)
                }
                return nom, image, prix
            })
        }else {
            console.log('pas ok!');
        }
    });
    }

    rechercherparid(id){
        fetch('http://localhost:3000/api/cameras/' + id).then(res => {
            if(res.ok) {
                res.json().then(data => {
                    return data.name, data.imageUrl, data.price
                })
            }else {
                console.log('pas ok!');
            }
        });
    }

    parserjson() {
        
    }
}

