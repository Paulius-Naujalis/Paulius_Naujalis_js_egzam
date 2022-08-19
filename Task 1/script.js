/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

const kgInput = document.getElementById('search')
const sumbitBtn = document.getElementById('submit-btn')
const output = document.getElementById('output')
const formEl = document.forms[0]
const lbOutputValue = document.createElement('h3')
const gOutputValue = document.createElement('h3')
const ozOutputValue = document.createElement('h3')

formEl.addEventListener('submit', (e) => {
    e.preventDefault();
    let getInput = kgInput.value
    lbOutputValue.innerHTML = `Your Weight In Pounds Is: ${getInput * 2.2046}lb`;
    gOutputValue.innerHTML = `Your Weight In Grams Is: ${getInput / 0.001}g`;
    ozOutputValue.innerHTML = `Your Weight In Ounce Is: ${getInput * 35.274}oz`;
    output.append(lbOutputValue, gOutputValue, ozOutputValue)
})










