const vegetables = [
    {
        name: `tomato`,
        icon: `🍅`,
        price: 2.3
    },
    {
        name: `carrot`,
        icon: `🥕`,
        price: 1.5
    },
    {
        name: `corn`,
        icon: `🌽`,
        price: 2.78,
        season: true
    }
];

const fruits = [
    {
        name: `watermelon`,
        icon: `🍉`,
        price: 7.7,
        season: true
    },
    {
        name: `cherries`,
        icon: `🍒`,
        price: 8.5,
        season: true
    },
    {
        name: `pineapple`,
        icon: `🍍`,
        price: 9.8
    }
];
const Product = {
    getPrice(){
        `${this.season}` === true ? result = `${this.price}*${this.seasonKoef}` : result = `${this.price}`;
        return result;
    },
    getInfo(){
        return `Product: ${this.icon} ${this.name}. Type: ${this.type}. Price: ${this.getPrice()}.`
    }
}
const Vegetable = Object.create(Product);
    Vegetable.type = `Vegetable`;
    Vegetable.seasonKoef = 1.3;
console.log(Vegetable)
const Fruit = Object.create(Product);
    Fruit.type = `Fruit`;
    Fruit.seasonKoef = 2;
console.log(Fruit)



function makePrototype(arr, objectProto){
    arr = JSON.parse(JSON.stringify(arr))
    for (let i = 0;i < arr.length;i++){
        arr[i] = Object.create(objectProto)
    }
    return arr;
}
console.log(makePrototype(fruits, Fruit))
function renderList(arr){
    let finish;
    for (let i = 0;i < arr.length;i++){
        finish = arr[i].getInfo(arr[i]);
    }
    return finish;
}
document.write(renderList(makePrototype(fruits,Fruit)))