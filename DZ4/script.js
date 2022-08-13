let start;
do {
    start = confirm(`Tell me three most important words 💚`)
}while (!start)

let sentence =``;
let countOfWord = 1;

for (;countOfWord<=3;countOfWord++){
    let word;
    do {
        word = prompt(`Enter word #${countOfWord}`)
        for (let i=0;i<word.length;){
            if (!isNaN(word.charAt(i))){
                word = false
            } else (i++)
        }
    } while (!word)
    console.log(`Word #${countOfWord}: ${word}`)
    let typeOfWord;
    do {
        typeOfWord = prompt(`Choose type for "${word}": uppercase/lowercase/capitalize?`)
        switch (typeOfWord){
            case `uppercase`:
                console.log(`Type of word: uppercase`)
                word = word.toUpperCase();
                console.log(`Result: ${word}`);
                break;
            case `lowercase`:
                console.log(`Type of word: lowercase`)
                word = word.toLowerCase();
                console.log(`Result: ${word}`);
                break;
            case `capitalize`:
                console.log(`Type of word: capitalize`)
                word = word[0].toUpperCase() + word.slice(1).toLowerCase();
                console.log(`Result: ${word}`);
        }
        sentence += `${word} `;
    }while (!typeOfWord || (typeOfWord !== `uppercase` && typeOfWord !== `lowercase` && typeOfWord !== `capitalize`))
}
console.log(`${sentence}!`)
