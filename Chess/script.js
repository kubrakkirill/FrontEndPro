const FIGURES = [`rook`, `knight`, `bishop`, `king`, `queen`, `bishop`, `knight`, `rook`];
let TRs = [];

for(let tr=1;tr<=8;tr++){
    let TDs = [];
    let color = tr<=2 ? `white` : `black`;
    for(let td=1;td<=8;td++){
        let figure = ``;
        if (tr === 2 || tr === 7){
            figure = `<img src="${color}/pawn.svg" alt="pawn" height="65" width="65">`
        } else if (tr === 1 || tr === 8){
            figure = `<img src="${color}/${FIGURES[td-1]}.svg" alt="${FIGURES[td-1]}" height="65" width="65">`
        }
        TDs.push(`<td>${figure}</td>`)
    }
    TRs.push(`<tr>
                <td >${tr}</td>
                ${TDs.join(``)}
                <td>${tr}</td>
            </tr>`)
}
const alphabet = `abcdefgh`;
let TDsAlphabet = [];
for (let i=0;i<alphabet.length;i++){
    TDsAlphabet.push(`<td>${alphabet[i]}</td>`)
}
let TrAlphabet = `<tr><td></td>${TDsAlphabet.join(``)}<td></td></tr>`


document.write(`<table>
${TrAlphabet}
${TRs.join(``)}
${TrAlphabet}
</table>`)