let arr = [];
let arrLength;
do {
    arrLength = prompt(`Enter length of your array`,`from 2 to 10`)
    arrLength = Math.abs(arrLength)
    arrLength = Math.round(arrLength)
} while (!arrLength || isNaN(arrLength) || arrLength < 2 || arrLength > 10)
let minNumber;
do{
    minNumber = prompt(`Enter minimal number of your array`, `from -10 to 10`)
    minNumber = Math.round(minNumber)
} while (!minNumber || isNaN(minNumber || minNumber < -10 || minNumber > 10))
let maxNumber;
do{
    maxNumber = prompt(`Enter maximal number of you array`, `from ${minNumber} to 50`)
    maxNumber = Math.round(maxNumber)
} while (!maxNumber || isNaN(maxNumber) || maxNumber < minNumber || maxNumber > 50)
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
for (let i = 1; i <= arrLength; i++) {
    arr[arr.length] = getRandomIntInclusive(minNumber, maxNumber)
}
console.log(`Your array - ${arr}`)
let arrMinNumber = arr[0];
let arrMaxNumber = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arrMinNumber) {
        arrMinNumber = arr[i];
    }
    if (arr[i] > arrMaxNumber) {
        arrMaxNumber = arr[i];
    }
}
console.log(`Minimal element of your array - ${arrMinNumber}`)
console.log(`Maximal element of your array - ${arrMaxNumber}`)
let indexOfMin = arr.indexOf(arrMinNumber);
let indexOfMax = arr.indexOf(arrMaxNumber);
arr[indexOfMin] = arrMaxNumber;
arr[indexOfMax] = arrMinNumber;
console.log(`Changed array - ${arr}`);