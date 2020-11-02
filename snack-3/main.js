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

    console.log(animals[0].name);

    // creo una copia dell'array

    var newAnimals = animals;

    console.log(newAnimals);

    // newAnimals[0].position = 'lettera casuale';
    // newAnimals[1].position = 'lettera casuale';
    // newAnimals[2].position = 'lettera casuale';
    // console.log(newAnimals);

    for (var key in newAnimals) {
        newAnimals[key].position = 'a';
    }

    console.log(newAnimals);






});
