'use strict'
/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

// Targets

const outputEl = document.getElementById('output')
const ENDPOINT = 'cars.json';

// init

async function init() {
    const initCars = await carTypes(ENDPOINT)
    sendToHtml(initCars)
}

init()

// async function

async function carTypes(url) {
    try {
        const response = await fetch(url)
        const dataInJs = await response.json()
        return dataInJs
    }
    catch (err) {
        console.warn(err)
    }
}

// Send to HTML

function sendToHtml(arr) {
    arr.map((obj) => {

        const divEl = document.createElement('div')
        divEl.className = 'cards'
        divEl.innerHTML = `
        <h2>${obj.brand}</h2>
        <ul>
        ${getModels(obj.models)}
        </ul>
        `
        outputEl.append(divEl)
    })
}

// Get models to <li>

function getModels(arr) {
    const modelsLi = arr.map((obj) => `<li>${obj}</li>`).join('')
    return modelsLi
}

// Modify brands

