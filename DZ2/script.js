let finalPrice = 0
    hamburger = 10
    cheeseburger = 15
    doubleCheese = 5
    potatoSmall = 10
    potatoMiddle = 15
    potatoBig = 20
    ketchup = 2
    mayonnaise  = 3
let choiceBurger = prompt(`hamburger or cheeseburger?`)
if (choiceBurger === null || choiceBurger ===`` || choiceBurger === `hamburger`){
    finalPrice = finalPrice+hamburger
} if (choiceBurger === `cheeseburger`){
    finalPrice = finalPrice+cheeseburger
    let choiceDoubleCheese = confirm(`Would you like to add double cheese?`)
    if (choiceDoubleCheese){
        finalPrice = finalPrice+doubleCheese
    }
}
let choicePotato = confirm(`Would you like potato?`)
if (choicePotato){
    choicePotato = prompt(`Choose potato size: small/middle/big`)
}
if (choicePotato === null || choicePotato ===`` || choicePotato === `small`){
    finalPrice = finalPrice+potatoSmall
} if (choicePotato === `middle`){
    finalPrice = finalPrice+potatoMiddle
} if (choicePotato === `big`){
    finalPrice = finalPrice+potatoBig
}
let choiceSauce = confirm(`Would you like sauce?`)
if (choiceSauce){
    choiceSauce = prompt(`Choose sauce: ketchup/mayonnaise`)
}
if (choiceSauce === null || choiceSauce ===`` || choiceSauce === `ketchup`){
    finalPrice = finalPrice+ketchup
} if (choiceSauce === `mayonnaise`){
    finalPrice = finalPrice+mayonnaise
}
console.log(finalPrice)
document.open();
document.write(`<h2>Your order:</h2>
	<ul>
		<li>Bulka 🍔: ${choiceBurger} </li>
		<li>Potato 🍟: ${choicePotato} </li>
		<li>Sauce 🧂: ${choiceSauce} </li>
	</ul>

	<p>Price: ${finalPrice} </p>
`);
document.close();