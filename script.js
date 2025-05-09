const boutonAjoutTache = document.querySelector("button")
const inputValue = document.querySelector("input")
const listeDeTache = document.querySelector(".listeTaches")

inputValue.value = "";

function click () {

    inputValue.addEventListener("keydown", function(event){
        if (event.key === "Enter"){            
        demarrage() 
        }
    })

    boutonAjoutTache.addEventListener("click" ,function(){
        demarrage();
    })    
}

function demarrage () {
    
    if (inputValue.value === "") return; 
    
    const nouvelleTache = document.createElement("li");
    
    const texteTache = document.createElement("span");
    texteTache.textContent = inputValue.value;
    
    const boutonSupp = document.createElement("button1");
    const iconSupp = document.createElement("ion-icon")
    iconSupp.setAttribute("name" , "trash-outline");
    boutonSupp.appendChild(iconSupp);

    boutonSupp.addEventListener("click" , function (){
        nouvelleTache.remove()
    })

    const boutonmodif = document.createElement("button2");
    const iconModif = document.createElement("ion-icon")
    iconModif.setAttribute("name" , "pencil-outline")
    boutonmodif.appendChild(iconModif)

    boutonmodif.addEventListener("click" , function(){
        let modifUt = prompt(`Modifier la tâche : ${texteTache.textContent}`);
        if ( modifUt === null || modifUt.trim() === "" ) {
            return;
        }
        texteTache.textContent = modifUt 
    })

    nouvelleTache.appendChild(boutonmodif)
    nouvelleTache.appendChild(texteTache);
    nouvelleTache.appendChild(boutonSupp); 
   
    listeDeTache.appendChild(nouvelleTache);
    
    inputValue.value = "";
};

click();









