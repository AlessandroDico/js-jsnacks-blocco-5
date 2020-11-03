$(document).ready(function(){

    console.log('hello');

    // JSnack3: A partire da un array di oggetti, creare una copia dell'array e aggiungere ai singoli elementi dell'array una nuova proprietà "position" che contiene una lettera casuale.

    // creo un array di oggetti

    // creo una copia dell'array primo

    // aggiungo ad ogni elemento del nuovo array una proprietà es.'position' con valore una lettera casuale

    var animals = [
        {
            'name' : 'pippo',
            'type' : 'dog',
            'age' : 5,
        },
        {
            'name' : 'silvestro',
            'type' : 'cat',
            'age' : 7,
        },
        {
            'name' : 'beep-beep',
            'type' : 'roadrunner',
            'age' : 4,
        },
    ];

    console.log(animals);

    //----NUOVA SOLUZIONE---

    var animaliNuovi = [];

    for (var i = 0; i < animals.length; i++) {

        var animaliCopia = {};
        for (var key in animals[i]) {
            animaliCopia[key] = animals[i][key];
        }

        animaliNuovi.push(animaliCopia);

        animaliNuovi[i].position = generateRandomLetter();

    }


    console.log(animaliNuovi);

    //----FINE NUOVA SOLUZIONE---

    //console.log(animals[0].name);

    // creo una copia dell'array

    // var newAnimals = animals;

    //-----------ATTENZIONE------------
    // FACENDO COSI' è COME SE METTESSI UNA NUOVA ETICHETTA MA ALLA STESSA SCATOLA (ANIMALS)
    // COPIARE IN QUESTO MODO L'ARRAY è SBAGLIATO PERCHE' SE MODIFICO IL SECONDO ARRAY MI MODIFICA ANCHE IL PRIMO
    // QUESTO SI CHIAMA SIDE EFFECT (EFFETTO COLLATERALE)
    // QUANDO FACCIO COSI' STO COPIANDO L'INDIRIZZO DI MEMORIA NON STO COPIANDO L'ARRAY

    // QUESTO NON SUCCEDE CON LE VARIABILI NORMALI 'PRIMITIVE'
    /*

    var a = 5;
    var b = a;

    b++;
    console.log(a);
    console.log(b); //a = 5    b = 6
    */

    // QUINDI COSA POSSO  FARE? POSSO CLONARLO ('COPIA PROFONDA')

    // POSSO SCORRERE TUTTO L'ARRAY DEI PRODOTTI
    // RECUPERO UN ELEMENTO ALLA VOLTA E LO PUSHO NEL NUOVO ARRAY



    // for (var key in animaliNuovi) {
    //     animaliNuovi[key].position = generateRandomLetter();
    // }


    /* VECCHIA SOLUZIONE ERRATA (perchè modifica anche il primo array)

    // console.log(newAnimals);

    // newAnimals[0].position = 'lettera casuale';
    // newAnimals[1].position = 'lettera casuale';
    // newAnimals[2].position = 'lettera casuale';
    // console.log(newAnimals);

    for (var key in newAnimals) {
        newAnimals[key].position = generateRandomLetter();
    }

    console.log(newAnimals);

   */ //FINE VECCHIA SOLUZIONE ERRATA

// FUNZIONE PER GENERARE UNA LETTERA CASUALE

    function generateRandomLetter() {
        var alphabet = "abcdefghijklmnopqrstuvwxyz";
        var letterRnd = alphabet[Math.floor(Math.random() * alphabet.length)];
        return letterRnd;
    }



});
