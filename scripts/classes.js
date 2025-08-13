class Animal {
    constructor(nom,age) {
        this.nom = nom;
        this.age=age;
        
    }
    Parler(){
        return ` ${this.nom} qui a ${this.age} fait du bruit`
    }
  
}
  class Chien extends Animal{
        Parler(){
            return `${this.nom} aboie et il a ${this.age} ans`;
        }
        static info(){
            return "Les chiens sont des animaux domestiques";
        }
    }

let monChien = new Chien("Rex",3);
console.log(monChien.Parler());
console.log(Chien.info());





