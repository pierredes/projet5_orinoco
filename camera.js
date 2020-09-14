import {CameraDAO} from './cameradao.js';
export class Camera {
    constructor(id, nom, prix, description, image) {
        this.id = id;
        this.nom = nom;
        this.prix = prix;
        this.description = description;
        this.image = image;
    }

    findAllCamera() {
        let camera = [];
        return CameraDAO.getAllCamera().then(data => {
            for(let i=0 ; i<data.length ; i++){
                camera[i] = new Camera (data[i]._id, data[i].name, data[i].price, data[i].description, data[i].imageUrl);
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
}