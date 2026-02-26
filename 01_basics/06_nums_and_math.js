const score = 400
console.log(score);

const balance = new Number(1000)
console.log(balance);


console.log(balance.toString().length);
console.log(balance.toFixed(2));


const num1 = 23.8966
const num2 = 5.6789
const num3 = 123.8966
const num4 = 1123.8966

console.log("--------------------------");

console.log(num1.toPrecision(3)); // toPrecision() method formats a number to a specified length. It returns a string representation of the number with the specified number of significant digits.
console.log(num2.toPrecision(3));
console.log(num3.toPrecision(3));
console.log(num4.toPrecision(3));


const hundreds = 10000000

console.log(hundreds.toLocaleString('en-IN')); // toLocaleString() method returns a string with a language-sensitive representation of this number. It can be used to format numbers according to the conventions of a specific locale.


// ++++++++++++++++++++++++++++++++Maths+++++++++++++++++++++++++++++++
console.log("--------------------------");

console.log(Math.abs(-4));


