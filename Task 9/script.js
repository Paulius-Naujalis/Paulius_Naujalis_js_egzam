/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */
class Movie {
    constructor(title, director, budget) {
        this.movie = title;
        this.direct = director;
        this.amount = wasExpensive(+budget)

    }
}

function wasExpensive(amount) {
    if (amount > 100000000) {
        return true
    }
    if (amount < 100000000) {
        return false
    }
}

const thunderball = new Movie("Thunderball: 007", "Terence Young", 141000000);

console.log('exampleCall --->', thunderball);

