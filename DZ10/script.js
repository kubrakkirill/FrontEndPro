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

function getPrice(arr, seasonFunc){
let copiedProducts = arr;
    console.log(copiedProducts)
let result = 0;
for (let i=0;i<copiedProducts.length;i++){
    typeof seasonFunc === `function` ? result += seasonFunc(copiedProducts[i][1]) : result += copiedProducts[i][1];
}
return result;
}
console.log(getPrice(products, summerValue))
console.log(getPrice(products, winterValue))
console.log(getPrice(products))