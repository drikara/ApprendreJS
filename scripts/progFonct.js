// fonction pure
function add(a,b){
    return a + b;
    
}
console.log(add(4,5));
// immuabilité
const nombres = [1,2,3];
console.log(nombres);

const nouveauNombres = [...nombres,4];
console.log(nouveauNombres);

// fonction d'ordre supérieur
function multiplierPar(facteur){
    return function(nombre){
        return nombre * facteur;
    }
}

const double = multiplierPar(2);
console.log(double(3));

// composition
const composer = (...fns) => x => fns.reduceRight((v,f) => f(v),x);
const ajouter5 = x => x+5;
const multiplierPar2 = x => x * 2;
const transformer = composer(ajouter5,multiplierPar2);
console.log(transformer(4)); //(4*2)+5 =13



