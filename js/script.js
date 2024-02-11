// Ottiene la data e l'ora attuali (del momento in cui si esegue il codice)
let now = new Date();

// Visualizza la data e l'ora attuali nel formato locale del browser
document.getElementById("result").innerHTML =  now.toLocaleString();
