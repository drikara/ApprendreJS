let personne = {
    nom:"ouattara",
    prenoms:"drissa",
    age:34,
    adresse:{
        ville:"abidjan",
        rue : "Marais",
    },
    saluer:function(){
        return `Bonjour je m'appelle  ${this.prenoms}`
    }



}

// accès au valeur
console.log(personne["nom"]);
console.log(personne.prenoms);
console.log(personne.saluer());
// modification
personne.nom = "kone";
console.log(personne);
console.log(personne["prenoms"]="siriki");
// suppression

delete personne.age
console.log(personne);


//clé/valeur
console.log(Object.keys(personne));
console.log(Object.values(personne));
console.log(Object.entries(personne));









