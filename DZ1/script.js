let captionString = `Food prices ≠ <ВИВІД ПОТОЧНОГО ДНЯ>.<ВИВІД ПОТОЧНОГО МІСЯЦЯ>.<ВИВІД ПОТОЧНОГО РОКУ>`,

    apple = `🍎`,
    applePrice = 10,
    appleCount = 3,
    appleSalePercent = 7,

    appleFinalPrice = applePrice*appleCount*(1-(appleSalePercent/100))
// console.log(appleFinalPrice)
    appleFinalPrice = appleFinalPrice.toFixed()

    appleFinal = `Final price for`+` `+appleCount+` `+apple+` = `+appleFinalPrice+` UAH`
// console.log(appleFinal)

    orange = `🍊`,
    orangePrice = 12,
    orangeCount = 2,
    orangeSalePercent = 3,

    orangeFinalPrice = orangePrice*orangeCount*(1-(orangeSalePercent/100))
// console.log(orangeFinalPrice),
    orangeFinalPrice = orangeFinalPrice.toFixed()
    orangeFinal = `Final price for`+` `+orangeCount+` `+orange+` = `+orangeFinalPrice+` UAH`
// console.log(orangeFinal)

    kiwi = `🥝`,
    kiwiPrice = 15,
    kiwiCount = 10,
    kiwiCountryPercent = 10;

    kiwiFinalPrice = kiwiPrice*kiwiCount*(1+(kiwiCountryPercent/100))
// console.log(kiwiFinalPrice)
    kiwiFinalPrice = kiwiFinalPrice.toFixed()
    kiwiFinal = `Final price for`+` `+kiwiCount+` `+kiwi+` = `+kiwiFinalPrice+` UAH`
// console.log(kiwiFinal)

    generalPrice = `Food prices for all products = `+(appleFinalPrice+orangeFinalPrice+kiwiFinalPrice)+` UAH`
// console.log(generalPrice)

    day = new Date().getDate();
    month = new Date().getMonth();
    month++;
    year = new Date().getFullYear();
    productDate = `Food prices for `+day+`.`+month+`.`+year

    captionString = captionString.replace(`≠`,`-`)
    captionString = productDate+appleFinal+orangeFinal+kiwiFinal+generalPrice

console.log(captionString)