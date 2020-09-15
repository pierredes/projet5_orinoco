import {CameraDAO} from './cameradao.js';
export class Camera {
    constructor(id, nom, prix, description, image, personnalisation) {
        this.id = id;
        this.nom = nom;
        this.prix = prix;
        this.description = description;
        this.image = image;
        this.personnalisation = personnalisation;
    }

    findAllCamera() {
        let camera = [];
        return CameraDAO.getAllCamera().then(data => {
            for(let i=0 ; i<data.length ; i++){
                camera[i] = new Camera (data[i]._id, data[i].name, data[i].price, data[i].description, data[i].imageUrl, data[i].lenses);
            }
            return camera;
        });
    }

    findAllCameraByName() {
        let cameraName = [];
        return CameraDAO.getAllCamera().then(data => {
            for(let i=0 ; i<data.length ; i++){
                cameraName.push(data[i].name);
            }
            return cameraName;
        });       
    }

    findAllCameraByPrice() {
        let cameraPrix = [];
        return CameraDAO.getAllCamera().then(data => {
            for(let i=0 ; i<data.length ; i++){
                cameraPrix.push(data[i].price);
            }
            return cameraPrix;
        });       
    }

    findAllCameraByImage() {
        let cameraImage = [];
        return CameraDAO.getAllCamera().then(data => {
            for(let i=0 ; i<data.length ; i++){
                cameraImage.push(data[i].imageUrl);
            }
            return cameraImage;
        });       
    }

    findOneCameraByUrlId() {
        let url = new URL(document.location);
        let parametre = url.searchParams;
        let id = parametre.get('id');
        return id;
    }

    findOneCamera() {
        let id = this.findOneCameraByUrlId();
        let camera;
        return CameraDAO.getCameraById(id).then(data => {
            camera = new Camera(data._id, data.name, data.price, data.description, data.imageUrl, data.lenses)
            return camera;  
        })
    }
}