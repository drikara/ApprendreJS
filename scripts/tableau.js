const fruits = ["pomme","banane","Orange"];
// méthode courantes
console.log(fruits);
// pour ajouter un element à la fin du tableau
fruits.push("clemantine");
console.log(fruits);
// pour supprimer le dernier element du tabeau
fruits.pop();
console.log(fruits);
// pour retirer un élémént au début du tableau
fruits.shift("carotte");
console.log(fruits);

// ajout un element au debut du tableau
fruits.unshift("pomme");
console.log(fruits);

// itérations

console.log("la fonction map");

fruits.map((fruit)=>console.log(fruit)
)

console.log("deuxième partie d'itération avec forEach");
fruits.push("pomme de terre");
fruits.forEach(function(fruit, index) {
    console.log(index, fruit);
});
// Transformation
let longueur = fruits.map((fruit)=>fruit.length);
console.log("la longueur est : " +longueur);
let filtres = fruits.filter(fruit => fruit.length > 5);
console.log(filtres);

// Recherche
console.log(fruits.find(fruit => fruit === "banane"));
console.log(fruits.includes("Pomme"));
console.log(fruits.indexOf("pomme de terre"));














