/*Il programma deve chiedere all'utente quanti chilometri vuole percorrere e l'età.

In base a queste informazioni deve calcolare il prezzo totale del viaggio, secondo queste regole:

-il prezzo del biglietto è definito in base ai km (0.21 € al km)
-va applicato uno sconto del 20% per i minorenni
-va applicato uno sconto del 40% per gli over 65.
-l'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

TIP:
per controllare che la vostra logica sui prezzi funzioni correttamente, provate a verificare quanto segue:

100km, 10 anni => prezzo corretto:  €16.80
100km, 70 anni => prezzo corretto: €12.60
 */

//chiede quanti km vuole percorrere l'utente
const km = parseFloat(prompt("Quanti chilometri vuoi percorrere?"));

// chiede l'età dell'utente
const eta = parseInt(prompt("Quanti anni hai?"));

// calcola il prezzo in base ai km senza sconto
let prezzoBiglietto = km * 0.21;

// applica lo sconto se minorenni 20% con valore 0.20 se over 65 sconto 40% con valore 0.40
if (age < 18) {
    discount = 20; // sconto del 20%

} else if (age > 65) {
    discount = 40; // sconto del 40%
}

// arrotonda il prezzo a due decimali
prezzoBiglietto = prezzoBiglietto.toFixed(2);

// mostra il prezzo finale all'utente
const finalPrice = (ticketPrice * (1 - discount / 100));

