import {Camera} from './camera.js';

let test = new Camera();
const liste_article = document.getElementById('liste_article');

test.findAllCamera().then(data => {
    for(let i in data){
        const sectionArticle = document.createElement('section');
        sectionArticle.setAttribute('id', data[i].id);
        liste_article.appendChild(sectionArticle);
        const createLink = document.createElement('a');
        createLink.setAttribute('href', "produit.html?id=" + data[i].id);
        sectionArticle.appendChild(createLink);
        createLink.innerHTML += ('<img src=' + data[i].image + '> <p>' + data[i].prix + ' EUROS</p> <li>' + data[i].nom + '</li>');
    }  
});
