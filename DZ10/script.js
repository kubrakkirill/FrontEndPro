const products = [
    ['apple',10],
    ['banana',8],
    ['mango',20],
    ['grape',18]
]
function summerValue(value){
    return value*0.8;
}
function winterValue(value){
    return value*2;
}
const getPrice = (arr, seasonFunc) => {
    let copiedProducts = JSON.parse(JSON.stringify(arr))
    let sum = getSum(copiedProducts);
    return typeof seasonFunc === `function` ? seasonFunc(sum) : sum;
}

const getSum = arr => {
    return arr.reduce((sum, innerArr) => {
        sum += innerArr[1];
        return sum;
    }, 0);
}
console.log(getPrice(products, summerValue))
console.log(getPrice(products, winterValue))
console.log(getPrice(products))