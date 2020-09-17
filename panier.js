$(document).ready(() =>{
    const resume_panier_nom = document.getElementById('resume_panier_nom');
    const resume_panier_prix = document.getElementById('resume_panier_prix');
    const prenom_contact = document.getElementById('prenom_contact');
    const nom_contact = document.getElementById('nom_contact');
    const email_contact = document.getElementById('email_contact');
    const adresse_contact = document.getElementById('adresse_contact');
    const ville_contact = document.getElementById('ville_contact');
    const envoyer_commande = document.getElementById('envoyer_commande');
    const prixAPayer = document.getElementById('prixAPayer');

    let getcommande = JSON.parse(localStorage.getItem('camera'));
    let total_prix = 0;
    for(let i = 0; i<getcommande.length; i++){
        resume_panier_nom.innerHTML += getcommande[i].nom + ('<br> <hr>');
        resume_panier_prix.innerHTML += getcommande[i].prix + ('<br> <hr>');
        total_prix = total_prix + getcommande[i].prix;
    }
    prixAPayer.innerHTML += total_prix + (' EUROS');
    

    prenom_contact.addEventListener('change', (e) => {
        let value = e.target.value;
        return value;
    });

    nom_contact.addEventListener('change', (e) => {
        let value = e.target.value;
    });

    email_contact.addEventListener('change', (e) => {
        let value = e.target.value;
    });

    adresse_contact.addEventListener('change', (e) => {
        let value = e.target.value;
    });

    ville_contact.addEventListener('change', (e) => {
        let value = e.target.value;
    });

})
