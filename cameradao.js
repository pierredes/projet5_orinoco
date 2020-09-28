import {Camera} from './camera.js';
export class CameraDAO {
    
    static getAllCamera() {
        return fetch('http://localhost:3000/api/cameras').then(res => {
            if(res.ok) {
                return res.json().then(data => {
                    let camera = [];
                    for(let i=0 ; i<data.length ; i++){
                        camera[i] = new Camera (data[i]._id, data[i].name, data[i].price, data[i].description, data[i].imageUrl, data[i].lenses);
                    }
                    return camera;
                });
            }else {
                console.log('pas ok!');
            }
        });
    }

    static getCameraById(id){
        return fetch('http://localhost:3000/api/cameras/' + id).then(res => {
            if(res.ok) {
                return res.json().then(data => {
                    let camera = new Camera(data._id, data.name, data.price, data.description, data.imageUrl, data.lenses);
                    return camera;
                });
            }else {
                console.log('pas ok!');
            }
        });
    }

    static findOneCamera(id) {
        return this.getCameraById(id).then(data => {
            return data;
        });
    }
}

