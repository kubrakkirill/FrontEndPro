const animals = [
    ['🐭','mouse','Jerry'],
    ['🐹','hamster','Biscuit'],
    ['🐰','rabbit','Bugs'],
    ['🦊','fox','Mrs. Fox'],
    ['🐻','bear','Paddington']
];

const food = [
    ['🍎','apple',10],
    ['🍐','pear',12],
    ['🍊','tangerine',15],
    ['🍋','lemon',5],
    ['🍌','banana',7]
];
function getInfo(arr) {
    let tables = [];
    for (let i = 0; i < arr.length; i++) {
        tables.push(renderTablesOfArray(arr[i]));
    }
    return tables.join(``);
    function renderTablesOfArray(arr) {
        let TDs = [];
        for (let i = 0; i < arr.length; i++) {
            TDs.push(`<td>${arr[i]}</td>`);
        }
        return `<tr>${TDs.join(``)}</tr>`;
    }
}
document.write (`<table>${getInfo(animals, `Animals`) }</table>`);

document.write (`<table>${getInfo(food, `Animals`) }</table>`);