let heading = document.querySelector("h1");
let myButton = document.querySelector("button")
function setUserName(){

 let nom = prompt("veuillez saisir votre nom :");
 localStorage.setItem("nom",nom);
 heading.textContent="Mozilla est cool ," + nom;
}

if(!localStorage.setItem("nom")){
    setUserName();
}else{
    let storedName = localStorage.getItem("nom");
    heading.textContent = "voici mon mozzilla" + nom
}
myButton.addEventListener("click",function(){
    setUserName();
})


