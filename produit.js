import {Camera} from './camera.js';

let test = new Camera();

// let un_article = document.getElementById('un_article');

// test.findOneCamera().then(data => {
//     const creerSection = document.createElement('section');
//     un_article.appendChild(creerSection);
//     const creerArticlePhoto = document.createElement('article');
//     creerSection.appendChild(creerArticlePhoto);
//     creerArticlePhoto.innerHTML = ('<img src=' + data.image + '>');
//     const creerArticleTextuel = document.createElement('article');
//     creerSection.appendChild(creerArticleTextuel);
//     creerArticleTextuel.innerHTML = ('<h2>' + data.nom + '</h2> <br> <p>' + data.description + '</p> <br> <p> prix : ' + data.prix + ' EUROS</p>');
//     const creerFormulaireListeDeroulante = document.createElement('form')
//     creerArticleTextuel.appendChild(creerFormulaireListeDeroulante);
//     const creerListeDeroulante = document.createElement('select');
//     creerFormulaireListeDeroulante.appendChild(creerListeDeroulante);
//     let tableau_personnalisation = data.personnalisation;
//     for(let i = 0; i < tableau_personnalisation.length; i++){
//         creerListeDeroulante.innerHTML += ('<option>' + tableau_personnalisation[i] + '</option>');
//     } 
// });

let article_photo = document.getElementById('article_photo');
let article_texte = document.getElementById('article_texte');
let option_personnalisation = document.getElementById('option_personnalisation');

test.findOneCamera().then(data => {
    article_photo.innerHTML = ('<img src=' + data.image + '>');
    article_texte.innerHTML += ('<h2>' + data.nom + '</h2> <br> <p>' + data.description + '</p> <br> <p> prix : ' + data.prix + ' EUROS</p>');
    let tableau_personnalisation = data.personnalisation;
    for(let i = 0; i < tableau_personnalisation.length; i++){
        option_personnalisation.innerHTML += ('<option>' + tableau_personnalisation[i] + '</option>');
    }
});
