// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
// In seguito l’utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina.
// Altrimenti la cella cliccata si colora di azzurro e l’utente può continuare a cliccare sulle altre celle.
// La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.

// selezione contenitore griglia
const containerGrid = document.getElementById("container_grid");

// creazione griglia
const grid = createMyElement("div","grid");

// selezione bottoni
const buttonPlay = document.getElementById("play");


// far apparire la griglia al click del bottone
buttonPlay.addEventListener("click",
    function(){
        // inserimento griglia nel suo contenitore
        containerGrid.append(grid);
    }
)

// creazione celle
for(let i = 1; i <= 100; i++){
    const newElement = createMyElement("div","square");
    grid.append(newElement);
    newElement.append(i);

    // colorare la cella al suo click
    newElement.addEventListener("click",
    function(){
        newElement.classList.add("clicked");
        console.log("Cella " + i);
        }
    )
}


// funzione per la creazione dell'elemento
function createMyElement(tagtype, classname){
    const currentElement = document.createElement(tagtype);
    currentElement.classList.add(classname);
    return currentElement;
}