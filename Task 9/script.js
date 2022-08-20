/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */


// Solution 1
// _______________________________________________________________________________________________

// class Movie {
//     constructor(title, director, budget) {
//         this.movie = title;
//         this.direct = director;
//         this.amount = +budget;
//     }
//     wasExpensive() {

//         return (this.amount > 100000000 ? true : false)
//     }
// }

// const thunderball = new Movie("Thunderball: 007", "Terence Young", 141000000)
// console.log('Is it expensive? ', thunderball.wasExpensive());

// _______________________________________________________________________________________________


// Solution 2
// _______________________________________________________________________________________________
class Movie {
    constructor(title, director, budget) {
        this.movie = title;
        this.direct = director;
        this.amount = wasExpensive(+budget);
    }
}

function wasExpensive(amt) {
    return (amt > 100000000 ? true : false)
}
const thunderball = new Movie("Thunderball: 007", "Terence Young", 141000000)
console.log('Thunderball: 007 ', thunderball);

// _______________________________________________________________________________________________
