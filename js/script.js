
function countDown(){
// Ottiene la data e l'ora attuali (del momento in cui si esegue il codice)
let now = new Date();




// Crea un date che poi viene modificato  per ottenere il giorno desiderato
let monday = new Date(); 
monday.setDate(12); 
monday.setMonth(1); 
monday.setFullYear(2024); 
monday.setHours(10); 
monday.setMinutes(30); 
monday.setSeconds(0); 
monday.setMilliseconds(0); 

console.log(monday); 



// differenza di tempo tra now e monday


let time = monday.getTime() - now.getTime();
if (time <= 0) {
    clearInterval(interval);
    document.getElementById("result").innerHTML = "Giorni: 0<br>Ore: 0<br>Minuti: 0<br>Secondi: 0";
    document.getElementById("monday").innerHTML = monday.toDateString();
    return;
}

// trasforma il risultato da ms in secondi
let seconds = Math.floor( time / 1000);


// da secondi a giorni 
let days =  Math.floor( seconds / (24 * 3600));
// da secondi a ore 
let hours =   Math.floor(seconds / 3600) ;


// da secondi a minuti 
let minutes =  Math.floor(seconds / (3600 / 60));




console.log(seconds);
console.log("days",days);
console.log("hours",hours);
console.log("minuti",minutes);



document.getElementById("result").innerHTML = " Giorni: " + days + "<br>  Ore: " + hours + "<br>  Minuti: " + minutes + "<br>  Secondi: " + seconds;
document.getElementById("monday").innerHTML = monday.toDateString();


}

let interval = setInterval(countDown, 1000);

