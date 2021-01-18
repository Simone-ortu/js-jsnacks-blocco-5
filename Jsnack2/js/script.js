// Creare un array che contiene 10 oggetti che rappresentano una zucchina, 
// indicandone per ognuno varietà, peso e lunghezza. 
// Calcola quanto pesano tutte le zucchine.

var zucchine = [
    {
        varieta: 'Zucchino nero di Milano',
        peso: 250,
        lunghezza: 30
    },
    {
        varieta: 'Zucchino romanesco',
        peso: 287,
        lunghezza: 30
    },
    {
        varieta: 'Zucchino ortolano di Faenza',
        peso: 243,
        lunghezza: 30
    },
    {
        varieta: 'Zucchina lunga fiorentina',
        peso: 150,
        lunghezza: 30
    },
    {
        varieta: 'Zucchino siciliano',
        peso: 68,
        lunghezza: 30
    },
    {
        varieta: 'Zucchina striata di Napoli',
        peso: 233,
        lunghezza: 30
    },
    {
        varieta: 'Zucchina bianca triestina',
        peso: 159,
        lunghezza: 30
    },
    {
        varieta: 'Zucchina rigata pugliese',
        peso: 166 ,
        lunghezza: 30
    },
    {
        varieta: 'Zucchino tondo di Piacenza',
        peso: 75,
        lunghezza: 30
    },
    {
        varieta: 'Zucchino tondo di Nizza',
        peso: 87,
        lunghezza: 30
    }
];

for (var i = 0; i < zucchine.length; i++) {
    for (var k in zucchine[i]) {
        var zucchinePeso= zucchine[i].peso ;
        var zucchineTot = zucchinePeso + zucchine[i].peso;
        
    }

    console.log(zucchineTot);
    
};
