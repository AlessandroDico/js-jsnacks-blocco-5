$(document).ready(function(){

    console.log('hello');

    // JSnack2: Creare un array di nomi e chiedere all'utente due numeri. Creare un nuovo array con i valori che si trovano in una posizione compresa tra i due numeri inseriti dall'utente.

    var names = ['pippo', 'mario', 'luca', 'pluto', 'maria', 'marco', 'paola', 'giovanna', 'piera', 'mimmo'];

    var rangeNumbers = [];

// CHIEDO DUE NUMERI VALIDI ALL'UTENTE
    do {
        var userNumbers = parseInt(prompt('inserisci un numero da 1 a 10'));
        if (isNaN(userNumbers) || userNumbers < 0 || userNumbers > 10) {
            alert('numero non valido')
        } else {
            rangeNumbers.push(userNumbers);
        }

    } while ((isNaN(userNumbers) || userNumbers < 0 || userNumbers > 10 || rangeNumbers.length < 2));

    // console.log(rangeNumbers);

    // FUNZIONE PER METTERE IN NUMERI IN UN ARRAY IN ORDINE CRESCENTE COSI DA EVITARE COSE STRANE SE L'UTENTE METTE PRIMA UN MUNERO MAGGIORE DI QUELLO DOPO
    var order = rangeNumbers.sort(function(a, b){return a-b});
    console.log(order);




});
