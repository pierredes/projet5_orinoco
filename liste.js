import {Camera} from './camera.js';

function miseEnForme(donnees) {
    let liste_article = document.getElementById('liste_article');
    const createLink = document.createElement('a');
    createLink.setAttribute('href', "test.html");
    liste_article.appendChild(createLink);
    createLink.innerHTML += donnees;
}





let test = new Camera();


// test.findAllCamera().then(data => {
//     console.log(data)
//     let liste_article = document.getElementById('liste_article');
//     for(let i in data){
//         liste_article.innerHTML += ('<img src=' + data[i].image + '> <br>');
//         liste_article.innerHTML += ('<p>' + data[i].prix + '</p> <br>');
//         liste_article.innerHTML += ('<li>' + data[i].nom + '</li> <br>');
//     }  
// });

test.findAllCamera().then(data => {
    console.log(data)
    for(let i in data){
        miseEnForme('<img src=' + data[i].image + '> <br> <p>' + data[i].prix + '</p> <br> <li>' + data[i].nom + '</li> <br>');
    }  
});




    




