/* ------------------------------ TASK 7 -----------------------------------
Turimas "audi" objektas.

Parašykite funkciją "showObjectKeys", kuri kaip argumentą priims objektą 
ir grąžins visus jo "key" masyve.
-------------------------------------------------------------------------- */
const audi = {
  make: 'audi',
  model: 'A6',
  year: 2005,
  color: 'white',
};


// function showObjectKeys(obj) {
//   let newArr = []
//   const getKeys = Object.keys(obj)
//   newArr += getKeys
//   return newArr
// }

function showObjectKeys(obj) {
  return Object.keys(obj)
}

console.log('showObjectKeys --->', showObjectKeys(audi));
