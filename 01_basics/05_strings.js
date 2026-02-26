const str = new String('arunava')

// console.log(str);
// console.log(str[0]);

// console.log(str.toUpperCase()); 

// console.log(str.charAt(2));
// console.log(str.indexOf('u'));

console.log(str.__proto__);


const newStr = str.substring(0, 4)  // substring(start, end)  end is not included

console.log(newStr);

const anotherStr = str.slice(-6, 4) // slice(start, end)  end is not included  start can be negative

console.log(anotherStr);


const str2 = '   arunava   '
console.log(str2);
console.log(str2.trim()); // trim() removes whitespace from both ends of a string


const url = "https://arunava.com/arunava%20kundu"

console.log(url.replace('%20', '-')); // replace(searchValue, newValue)  replaces the first occurrence of searchValue with newValue

console.log(url.includes("arunava")); // includes(searchString)  returns true if searchString is found in the string, otherwise false


const str3 = new String("arunava-kundu-cse")

console.log(str3.split("-")); // split(separator)  splits the string into an array of substrings based on the separator




const username = "arunava"
const repoCount = 10

console.log(`My name is ${username} and I have ${repoCount} repositories.`); // Template literals using backticks and ${} for variable interpolation    