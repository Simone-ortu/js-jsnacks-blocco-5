// Creare  un array che contiene 10 oggetti che rappresentano una zucchina.
// Dividi in due array separati le zucchine che misurano meno o più di 15cm.
// Infine stampa separatamente quanto pesano i due gruppi di zucchine.
var zucchinePiu = [];
var zucchineMeno = [];
var zucchine = [
    {
        varieta: 'Zucchino nero di Milano',
        peso: 250,
        lunghezza: 17
    },
    {
        varieta: 'Zucchino romanesco',
        peso: 287,
        lunghezza: 13
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
        lunghezza: 13
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
        peso: 166,
        lunghezza: 13
    },
    {
        varieta: 'Zucchino tondo di Piacenza',
        peso: 75,
        lunghezza: 30
    },
    {
        varieta: 'Zucchino tondo di Nizza',
        peso: 87,
        lunghezza: 13
    }
];
for (let i = 0; i < zucchine.length; i++) {

    if (zucchine.lunghezza < 15) {
zucchineMeno.push(zucchine[i])
    }else{
        zucchinePiu.push(zucchine[i])
    }


}
console.log(zucchinePiu);
console.log(zucchineMeno);