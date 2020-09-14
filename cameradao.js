export class CameraDAO {
    
    static getAllCamera() {
        return fetch('http://localhost:3000/api/cameras').then(res => {
            if(res.ok) {
                var donnees = res.json();
                return donnees;
            }else {
                console.log('pas ok!');
            }
        });
    }

    static getCameraById(id){
        return fetch('http://localhost:3000/api/cameras/' + id).then(res => {
            if(res.ok) {
                var donnees = res.json();
                return donnees;
            }else {
                console.log('pas ok!');
            }
        });
    }
}

