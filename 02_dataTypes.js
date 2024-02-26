"use strict";   //treat all js code as never version
console.log("Output")

// alert("Hello")  //we are using node js not browser
const mySymbol = Symbol();

let name = "vikas";
let age =25;
let isLoggedIn = false;

console.table([
    typeof(name),
    typeof(age),
    typeof(isLoggedIn),
    typeof(mySymbol),
    mySymbol
])