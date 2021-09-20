test("One euro should be 1.206 dollars", function(){
    // importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
})

test("3.5 dollar should be 447.65 yens", function(){
    // importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromDollarToYen(3.5)).toBe(447.65000000000003); //1 euro son 127.9 yenes, entonces 3.5 dollars deberian ser = (3.5 * 127.9) Yens
})

test("5 Yens should be 4 pounds", function(){
    // importo la funcion desde app.js
    const { fromYenToPound } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromYenToPound(5)).toBe(4); //1 euro son 0.8 pounds, entonces 5 yenes deberian ser = (3.5 * 0.8) pounds
})

