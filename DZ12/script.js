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
        return `${this.season}` === `true` ? `${this.price}`*`${this.seasonKoef}` : `${this.price}`;
    },
    getInfo(){
        return `Product: ${this.icon} ${this.name}. Type: ${this.type}. Price: ${this.getPrice()}.`
    }
}
const Vegetable = Object.create(Product);
    Vegetable.type = `Vegetable`;
    Vegetable.seasonKoef = 1.3;
const Fruit = Object.create(Product);
    Fruit.type = `Fruit`;
    Fruit.seasonKoef = 2;



function makePrototype(arr, objectProto){
    arr = JSON.parse(JSON.stringify(arr));
    return arr
        .map(product => {
            let newObj = Object.create(objectProto);
            Object.assign(newObj, product);
            return newObj;
        })
}
function renderList(arr){
    let LIs = arr
        .map(product => `<li>${product.getInfo()}</li>`)
        .join(``);

    return `<ul>${LIs}</ul>`;
}
document.write(renderList(makePrototype(fruits,Fruit)))
document.write(renderList(makePrototype(vegetables,Vegetable)))