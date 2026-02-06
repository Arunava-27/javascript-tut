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

// *****************************Operations****************************

let value = 3
let negValue = -value
console.log(negValue);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**2);
console.log(2**3);
console.log(2/2);
console.log(2%2);

let str1 = "Hello";
let str2 = " Arunava";

console.log(str1+str2);

let gameCounter = 100;
++gameCounter;

console.log(gameCounter);
