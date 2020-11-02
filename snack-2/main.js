$(document).ready(function(){

    console.log('hello');

    // JSnack2: Creare un array di nomi e chiedere all'utente due numeri. Creare un nuovo array con i valori che si trovano in una posizione compresa tra i due numeri inseriti dall'utente.

    var names = ['pippo', 'mario', 'luca', 'pluto', 'maria', 'marco', 'paola', 'giovanna', 'piera', 'mimmo'];

    var rangeNumbers = [];

    do {
        var userNumbers = parseInt(prompt('inserisci un numero da 1 a 10'));
        if (isNaN(userNumbers) || userNumbers < 0 || userNumbers > 10) {
            alert('numero non valido')
        } else {
            rangeNumbers.push(userNumbers);
        }

    } while ((isNaN(userNumbers) || userNumbers < 0 || userNumbers > 10 || rangeNumbers.length < 2));

    console.log(rangeNumbers);

});
