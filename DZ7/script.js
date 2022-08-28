sports = [
    ['skier','⛷'],
    ['snowboarder','🏂'],
    ['apple','🍎'],
    ['hockey','🏒'],
    ['ice skate','⛸'],
    ['swimmer','🏊'],
    ['surfer','🏄‍'],
    ['watermelon','🍉'],
    ['lemon','🍋'],
    ['rowboat','🚣'],
    ['bicyclist','🚴‍']
];
let summer_sports = sports.slice(5);
let winter_sports = sports.slice(0,5)
let fruits = summer_sports.splice(2,2)
    fruits = fruits.concat(winter_sports.splice(2,1))
console.log(`*** Winter sports ***`)
for (let i=0;i<winter_sports.length;i++){
    console.log(winter_sports[i].join(`: `))
}
console.log(`*** Summer sports ***`)
for (let i=0;i<summer_sports.length;i++){
    console.log(summer_sports[i].join(`: `))
}
console.log(`*** Fruits ***`)
for (let i=0;i<fruits.length;i++){
    console.log(fruits[i].join(`: `))
}