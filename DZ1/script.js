let captionString = `Food prices ≠ <ВИВІД ПОТОЧНОГО ДНЯ>.<ВИВІД ПОТОЧНОГО МІСЯЦЯ>.<ВИВІД ПОТОЧНОГО РОКУ>`,

    day = new Date().getDate();
    month = new Date().getMonth();
    month++;
    year = new Date().getFullYear();
//     productDate = `Food prices for `+day+`.`+month+`.`+year
// console.log(productDate)

    captionString = `Food prices ≠`+` `+day+`.`+month+`.`+year
    captionString = captionString.replace(`≠`,`-`)
console.log(captionString)

    apple = `🍎`,
    applePrice = 10,
    appleCount = 3,
    appleSalePercent = 7,

    appleGeneralPrice = applePrice*appleCount*(1-(appleSalePercent/100))
// console.log(appleGeneralPrice)
    appleGeneralPrice = +appleGeneralPrice.toFixed()

    appleFinal = `Final price for`+` `+appleCount+` `+apple+` = `+appleGeneralPrice+` UAH`
console.log(appleFinal)

    orange = `🍊`,
    orangePrice = 12,
    orangeCount = 2,
    orangeSalePercent = 3,

    orangeGeneralPrice = orangePrice*orangeCount*(1-(orangeSalePercent/100))
// console.log(orangeFinalPrice),
    orangeGeneralPrice = +orangeGeneralPrice.toFixed()
    orangeFinal = `Final price for`+` `+orangeCount+` `+orange+` = `+orangeGeneralPrice+` UAH`
console.log(orangeFinal)

    kiwi = `🥝`,
    kiwiPrice = 15,
    kiwiCount = 10,
    kiwiCountryPercent = 10;

    kiwiGeneralPrice = kiwiPrice*kiwiCount*(1+(kiwiCountryPercent/100))
// console.log(kiwiFinalPrice)
    kiwiGeneralPrice = +kiwiGeneralPrice.toFixed()
    kiwiFinal = `Final price for`+` `+kiwiCount+` `+kiwi+` = `+kiwiGeneralPrice+` UAH`
console.log(kiwiFinal)

    productsGeneralPrice = `Food prices for all products = `+(appleGeneralPrice+orangeGeneralPrice+kiwiGeneralPrice)+` UAH`
console.log(productsGeneralPrice)