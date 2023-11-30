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

// generazione array di 16 numeri casuali per le bombe
const bombe = genArrayRandom(1, 100, 16);
console.log(bombe);

// definizione variabili
let score = 0;

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
    // inserimento numeri all'interno della cella
    grid.append(newElement);
    newElement.append(i);

    // colorare la cella al suo click
    newElement.addEventListener("click",
    function(){
        console.log("Cella " + i);
        if(bombe.includes(i)){
            this.classList.add("square-boom");
            console.log("Hai perso!");
            console.log("Hai totalizzato " + score + " punti!");
        }
        else{
            this.classList.add("clicked");
            score++;
            console.log("Punteggio: " + score);
        }
        }
    )
}


// funzione per la creazione dell'elemento
function createMyElement(tagtype, classname){
    const currentElement = document.createElement(tagtype);
    currentElement.classList.add(classname);
    return currentElement;
}

// funzione creazione array randomico per bombe
function genArrayRandom(min,max,nElement) {
    const arr = [];

    while(arr.length < nElement){
        // generiamo numero random
        let number = Math.floor(Math.random()* max) + min;
        // controllo se il numero generato non è già nell'array
        if(!arr.includes(number)){
            arr.push(number);
        }
    }
    return arr;
}