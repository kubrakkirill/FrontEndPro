let finalPrice = 0,
    hamburger = 10,
    cheeseburger = 15,
    doubleCheese = 5,
    potatoSmall = 10,
    potatoMiddle = 15,
    potatoBig = 20,
    ketchup = 2,
    mayonnaise  = 3;
let choiceBurger = prompt(`hamburger or cheeseburger?`);
if (choiceBurger !== null){
    choiceBurger = choiceBurger.replaceAll(` `,``).toLowerCase();
}
if (choiceBurger === `cheeseburger`){
    finalPrice += cheeseburger
    let choiceDoubleCheese = confirm(`Would you like to add double cheese?`)
    if (choiceDoubleCheese){
        finalPrice += doubleCheese
    }
} else{
    finalPrice += hamburger;
    choiceBurger = `hamburger`;
}
let choicePotato = confirm(`Would you like potato?`);
let potato;

if (choicePotato){
    potato = prompt(`Choose potato size: small/middle/big`);

    if (potato !== null){
        potato = potato.replaceAll(` `,``).toLowerCase();
    }
    if (potato === `middle`){
        finalPrice += potatoMiddle;
    }
    if (potato === `big`){
        finalPrice += potatoBig;
    } else{
        finalPrice += potatoSmall;
        potato = `small`;
    }
}
let choiceSauce = confirm(`Would you like sauce?`);
let sauce;
if (choiceSauce){
    sauce = prompt(`Choose sauce: ketchup/mayonnaise`);
    if (sauce !== null){
        sauce = sauce.replaceAll(` `, ``).toLowerCase();
    } if (sauce === `mayonnaise`){
        finalPrice += mayonnaise;
    } else {
        finalPrice += ketchup;
        sauce = `ketchup`;
    }
}
document.write(`<h2>Your order:</h2>
	<ul>
		<li>Bulka 🍔: ${choiceBurger} </li>`);
if (choicePotato){
    document.write(`<li>Potato 🍟: ${potato} </li>`);
}
if (choiceSauce){
    document.write(`<li>Sauce 🧂: ${sauce} </li>`)
}
document.write(`</ul>
	<p>Price: ${finalPrice} </p>`)