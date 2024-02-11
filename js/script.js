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