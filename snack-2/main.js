$(document).ready(function(){

    console.log('hello');

    // JSnack2: Creare un array di nomi e chiedere all'utente due numeri. Creare un nuovo array con i valori che si trovano in una posizione compresa tra i due numeri inseriti dall'utente.

    var names = ['pippo', 'mario', 'luca', 'pluto', 'maria', 'marco', 'paola', 'giovanna', 'piera', 'mimmo'];

    var rangeNumbers = [];

    var includingNames = [];

// CHIEDO DUE NUMERI VALIDI ALL'UTENTE
    do {
        var userNumbers = parseInt(prompt('inserisci un numero da 1 a 10'));
        if (isNaN(userNumbers) || userNumbers <= 0 || userNumbers > 10) {
            alert('numero non valido')
        } else {
            rangeNumbers.push(userNumbers - 1);
            // metto userNumbers - 1 in modo da farlo combaciare con le posizioni dell'array in conteggio "umano"
        }

    } while ((isNaN(userNumbers) || userNumbers < 0 || userNumbers > 10 || rangeNumbers.length < 2));

    // console.log(rangeNumbers);

    // FUNZIONE PER METTERE IN NUMERI IN UN ARRAY IN ORDINE CRESCENTE COSI DA EVITARE COSE STRANE SE L'UTENTE METTE PRIMA UN MUNERO MAGGIORE DI QUELLO DOPO
    var rangeOrder = rangeNumbers.sort(function(a, b){return a-b});
    console.log(rangeOrder);

    // il numero più basso di order è l'inizio del range
    // il numero deve corrispondere al nome di cui l'index è quel numero

    // il numero più alto è la fine del range
    // il numero deve corrispondere al nome di cui l'index è quel numero

/*
    console.log(rangeOrder[0]);

    var startRange = names[rangeOrder[0]];
    console.log(startRange);

    var endRange = names[rangeOrder[1]];
    console.log(endRange);
*/
    for (var i = 0; i < names.length; i++) {
        if (i < [rangeOrder[0]] || i > [rangeOrder[1]] ) {
            console.log('out of range');
        } else {
            console.log(names[i]);
            includingNames.push(names[i]);
        }
    }

    console.log(includingNames);

    $('.final-names').text(includingNames.join(' - '));






});
