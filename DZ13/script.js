class Bulka {
    constructor(name, size, ingredients = [`cutlet`, `salada`, `tomato`]) {
        this.name = name;
        this.size = size;
        this.ingredients = ingredients;
    }
    setAdditionalIngredients(...arr){
        let extraIngredients = JSON.parse(JSON.stringify(arr))
        let result;
        for (let i=0;i<extraIngredients.length;i++){
            result =  this.ingredients.push(extraIngredients[i])
        }
        return result;
    }
}
let Hamburger = new Bulka("Hamburger", "small")
Hamburger.setAdditionalIngredients(`egg`, `onion`)
console.log(Hamburger)

class Cheeseburger extends Bulka{
    constructor(name, size, ingredients){
        super(name, size, ingredients);
        this.ingredients.push(`cheese`)
    }
}
let myCheeseburger = new Cheeseburger("Cheeseburger", "small")
myCheeseburger.setAdditionalIngredients(`fish`, `bacon`)
console.log(myCheeseburger)