let num1 = "33"

console.log(num1);
console.log(typeof(num1));

let valueInNumber = Number(num1) // "33" => 33

console.log(valueInNumber);
console.log(typeof(valueInNumber));


let num2 = "33abc"

console.log(num2);
console.log(typeof(num1));

let valueInNumber2 = Number(num2) // "33abc" => NaN

console.log(valueInNumber2); // NaN
console.log(typeof(valueInNumber2));

// NaN type number

let isLoggedIn = 1

let getLoggedIn = Boolean(isLoggedIn)

console.log(getLoggedIn);
