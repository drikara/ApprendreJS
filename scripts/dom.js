// selection

let h1 = document.querySelector("h1");
let maclasse =document.getElementsByClassName("maClasse");
 //modification
 h1.innerHTML = "Présentation <em>data</em>";
 maclasse.innerText = "<strong>papa vient à la maison</strong>"
 h1.style.color = "red";
 h1.classList.add("titre1");
 // évenement
 h1.addEventListener("click",(e)=>{
    console.log("click detecté", e.target);
    
 })
// création
const nouveauDiv = document.createElement("div");
nouveauDiv.textContent = "nouvelle div";
document.body.appendChild(nouveauDiv);