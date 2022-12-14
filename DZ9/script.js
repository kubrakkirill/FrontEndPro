const sports = [
    ['๐คบ','fencing'],
    ['โธ','figure skating'],
    ['โท','skier'],
    ['๐','snowboarder'],
    ['๐','golfing'],
    ['๐ฃ','rowing boat'],
    ['๐','swimming'],
    ['๐คธ','gymnastics'],
    ['๐คพ','handball']
];
const winners = [
    ['fencing','๐ฅ','fr'],
    ['fencing','๐ฅ','it'],
    ['fencing','๐ฅ','us'],

    ['figure skating','๐ฅ','ca'],
    ['figure skating','๐ฅ','fr'],
    ['figure skating','๐ฅ','us'],

    ['skier','๐ฅ','no'],
    ['skier','๐ฅ','us'],
    ['skier','๐ฅ','fr'],

    ['snowboarder','๐ฅ','us'],
    ['snowboarder','๐ฅ','jp'],
    ['snowboarder','๐ฅ','au'],

    ['golfing','๐ฅ','gb'],
    ['golfing','๐ฅ','se'],
    ['golfing','๐ฅ','us'],

    ['rowing boat','๐ฅ','us'],
    ['rowing boat','๐ฅ','ml'],
    ['rowing boat','๐ฅ','ro'],

    ['swimming','๐ฅ','us'],
    ['swimming','๐ฅ','gb'],
    ['swimming','๐ฅ','au'],

    ['gymnastics','๐ฅ','it'],
    ['gymnastics','๐ฅ','fr'],
    ['gymnastics','๐ฅ','ua'],

    ['handball','๐ฅ','dk'],
    ['handball','๐ฅ','ke'],
    ['handball','๐ฅ','de'],
];
const olympic = ['๐ต','โซ','๐ด','๐ก','๐ข'];
// ะะฒัะพะฟะฐ โ ัะธะฝัะน, ะััะธะบะฐ โ ัะพัะฝะธะน, ะะผะตัะธะบะฐ โ ัะตัะฒะพะฝะธะน, ะะทัั โ ะถะพะฒัะธะน, ะะฒัััะฐะปัั โ ะทะตะปะตะฝะธะน
const continents = [
    ['fr','Europe'],
    ['it','Europe'],
    ['us','America'],
    ['ca','America'],
    ['no','Europe'],
    ['jp','Asia'],
    ['au','Oceania'],
    ['gb','Europe'],
    ['se','Europe'],
    ['ro','Europe'],
    ['ua','Europe'],
    ['dk','Europe'],
    ['de','Europe'],
    ['ke','Africa'],
    ['ml','Africa']
];
const flags = [
    ['fr','๐ซ๐ท'],
    ['it','๐ฎ๐น'],
    ['us','๐บ๐ธ'],
    ['ca','๐จ๐ฆ'],
    ['no','๐ณ๐ด'],
    ['jp','๐ฏ๐ต'],
    ['au','๐ฆ๐บ'],
    ['gb','๐ฌ๐ง'],
    ['se','๐ธ๐ช'],
    ['ro','๐ท๐ด'],
    ['ua','๐บ๐ฆ'],
    ['dk','๐ฉ๐ฐ'],
    ['de','๐ฉ๐ช'],
    ['ke','๐ฐ๐ช'],
    ['ml','๐ฒ๐ฑ']
];
const getWinnersByCountry = country =>{
    let countryInfo = continents.find(item => item[0] === country);
    return countryInfo[1];
}
const getFlagByCountry = country =>{
    let countryInfo =  flags.find(item => item[0] === country);
    return countryInfo[1];
}
const renderThead = () => {
    let THs = olympic
        .map(item => `<th>${item}</th>`)
        .join(``)
    return `<thead>
                <tr>
                    <th></th>
                    ${THs}
                </tr>
            </thead>`
}
const renderTbody = () => {
    let TRs = sports
        .map(sport => {
            let Europe = [];
            let America = [];
            let Asia = [];
            let Africa = [];
            let Oceania = [];

            let sportIcon = sport[0];
            let sportName = sport[1];
            let currentWinners = getWinnersBySport(sportName);
            currentWinners.forEach(winner => {
                let winnerMedal = winner[1];
                let winnerCountry = winner[2];
                let winnerContinent = getWinnersByCountry(winnerCountry);

                let countryFlag = getFlagByCountry(winnerCountry)

                winner = `<div>${countryFlag} - ${winnerMedal}</div>`

                switch (winnerContinent){
                    case `Europe`:
                        Europe.push(winner);
                        break;
                    case `Africa`:
                        Africa.push(winner);
                        break;
                    case `America`:
                        America.push(winner);
                        break;
                    case `Asia`:
                        Asia.push(winner);
                        break;
                    case `Oceania`:
                        Oceania.push(winner);
                        break;
                }
            })
            return `<tr>
                        <td>
                            ${sport[0]}
                        </td>
                        <td>${Europe.join(`<br>`)}</td>
                        <td>${Africa.join(`<br>`)}</td>
                        <td>${America.join(`<br>`)}</td>
                        <td>${Asia.join(`<br>`)}</td>
                        <td>${Oceania.join(`<br>`)}</td>
                    </tr>`
        })
        .join(``)
    return `<tbody>
                ${TRs}
            </tbody>`
}
const getWinnersBySport = sport => {
    let sportWinners = winners
        .filter(winner => winner[0] === sport)
    return sportWinners;
}

document.write(`<table>
                    ${renderThead()}
                    ${renderTbody()}
                </table>`)