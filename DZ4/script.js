let countOfWord = 1;
let word;
let typeOfWord;
for (;countOfWord<=3;countOfWord++){
    word = prompt(`Enter word #${countOfWord}`)
    do {
        word = prompt(`Enter word #${countOfWord}`)
        console.log(`Word #${countOfWord}: ${word}`)
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
        }while (!typeOfWord || typeOfWord === `uppercase` || typeOfWord === `lowercase` || typeOfWord === `capitalize`)
    } while (!word)
}

