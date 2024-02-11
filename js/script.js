
function countDown(){
// Ottiene la data e l'ora attuali (del momento in cui si esegue il codice)
let now = new Date();

// Visualizza la data e l'ora attuali nel formato locale del browser
document.getElementById("result").innerHTML =  now.toLocaleString();


// Crea un date che poi viene modificato  per ottenere il giorno desiderato
let monday = new Date(); 
monday.setDate(12); 
monday.setMonth(1); 
monday.setFullYear(2024); 
monday.setHours(9); 
monday.setMinutes(30); 
monday.setSeconds(0); 
monday.setMilliseconds(0); 

console.log(monday); 



// differenza di tempo tra now e monday


let time = monday.getTime() - now.getTime();

// trasforma il risultato da ms in secondi
let secondTime = Math.floor( time / 1000);

// da secondi a giorni
let days =  Math.floor( secondTime / (24 * 3600));
// da secondi a ore 
let hours =   Math.floor(secondTime / 3600) ;


// da secondi a minuti
let minutes =  Math.floor(secondTime / (3600 / 60));




console.log(secondTime);
console.log("days",days);
console.log("hours",hours);
console.log("minuti",minutes);






}

let interval = setInterval(countDown, 1000);