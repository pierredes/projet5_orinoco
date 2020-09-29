export class ContactDAO {

    // enoie les données a l'api

    static postContactAndProduct(contact, products) {
        return fetch('http://localhost:3000/api/cameras/order', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                contact,
                products
            })
        }).then(res => {
            if(res.ok) {
                return res.json().then(data => {
                    return data;
                });
            }
        });
    }
}