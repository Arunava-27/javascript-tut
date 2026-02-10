// memories -> stack, heap
// stack -> used by primitive datatype
// heap -> used by Non-primitive datatype

// in stack

let str1 = "Arunava"
let str2 = str1 // value copied
str2 = "Rahul" // copied value changed

console.log(str1);
console.log(str2);

console.log("----------------------------------");

// in heap 

let userOne = {
    email: "user@email.com",
    age: 22
}

let userTwo = userOne // reference passed

userTwo.email = "arunava@email.com" // original value changed

console.log(userOne);
console.log(userTwo);





