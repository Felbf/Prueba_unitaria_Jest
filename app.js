//one euro is:
let oneEuroIs = {
    "JPY": 127.9, //japan yen
    "USD": 1.2, //us dollar
    "GBP": 0.8, //british pound
    
}

// declaramos una funcion con el mismo nombre "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar){

     let valueInYen = valueInDollar * 127.9;

     return valueInYen
 }

 const fromYenToPound = function(valueInYen){

    let valueInPound = valueInYen * 0.8;

    return valueInPound
}


// tenemos que incluir la funcion en el exports para que sea exportada a otros archivos como test.js
module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound }






