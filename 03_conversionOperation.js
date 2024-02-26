let score = 23; 

let a = "apple";

const b = Number(a);

console.log(typeof b);
console.log(b);

let c = true

console.log(typeof c);

let d = 1;

const e = Boolean(d);

console.log(e);

const some = 52;

const some1 = String(some);

console.log(typeof some1);


/////////////////operations
console.log("-------------------------------------------------")

console.log("Operations output");

const name = ""+54;

console.log(typeof name);

console.log(2**24)

console.log(1 + 2 + +"3");

let x=3;
let y=x++;

console.log(x,y);

// ternory  conditional operator
// condition ? expTrue : expFalse

let age = 25;

const eligible = age > 15 ? "yes" : 'Not';
console.log(eligible);

const age1 = 20;
const age2 ="20";

const age3 = age1 == age2?'yes':'no'
console.log(age3);

// Primitive datatypes

// 7 types: String, Number, Boolean, null, undefined, symbol, BigInt

//Reference type (Non primitive)

// Array, Objects, functions

// Javascript is dynamically typed language

