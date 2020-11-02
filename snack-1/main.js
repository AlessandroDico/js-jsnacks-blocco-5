$(document).ready(function(){

    // console.log('hello');

    // JSnack1: Creare un array di oggetti: ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore.

    // creare un array di oggetti
    // quindi [{ }]
    // inserirò all'interno più bici quindi più oggetti

    // ogni bici avrà come proprietà il nome e il peso
    // quindi le chiavi saranno name: e weight:

    var bike = [
        {
            'name' : 'bianchi',
            'weight' : 10,
        },
        {
            'name' : 'specialized',
            'weight' : 9,
        },
        {
            'name' : 'cannondale',
            'weight' : 8,
        },
        {
            'name' : 'colnago',
            'weight' : 11,
        },
    ];



    // stampo a schermo la bici con il peso minore
    // quindi devo capire quale bici ha il peso minore prima
    // posso pushare i valori del peso dentro un array e controllare quale numero è più piccolo

    var bikeWeights = [];
    var bikeNames = [];

    for (var i = 0; i < bike.length; i++) {

        for (var key in bike[i]) {
            if (key == 'weight') {
                bikeWeights.push(bike[i][key]);
            } else if (key == 'name') {
                bikeNames.push(bike[i][key])
            }
        }
    }

    console.log(bikeWeights);
    console.log(bikeNames);

// TROVO LA BICI COL PESO MINORE
    var minWeigth = Math.min.apply(Math, bikeWeights);
    console.log(minWeigth);

    // TROVO IN CHE POSIZIONE SI TROVA RISPETTO ALL'ARRAY IL PESO MINORE

    var indexWeight = bikeWeights.indexOf(minWeigth);
    console.log(indexWeight);

    // TROVO NELL'ARRAY DEI NOMI BICI QUALE CORRISPONDE ALLO STESSO INDICE DELLA BICI CON PESO MINORE
    var indexName = bikeNames[indexWeight];
    console.log(indexName);


/*
SOLUZIONI DIVERSE PER TROVARE IL NUMERO MINORE IN UN ARRAY


// SOLUZIONE 1
// bisogna dargli due valori in questo caso e devono essere convertibili in numeri.. con null omettiamo volontariamente un valore
    var minWeigth = Math.min.apply(null, bikeWeights);

    console.log(minWeigth);


    //SOLUZIONE2
    // oppure con math a posto di null
    var minWeigth = Math.min.apply(Math, bikeWeights);

    console.log(minWeigth);

// SOLUZIONE CON ES6
//è sufficiente mettere tre puntini e il nome dell'array in questione
    var minWeigth = Math.min(...bikeWeights);

    console.log(minWeigth);

*/

});
