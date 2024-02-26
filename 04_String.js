const name = "vikas";
const repo = 15;

console.log(name + repo + " Value"); //old way

// use string interpolation
//template literal
console.log(`hello mu name is ${name} and my repo count is ${repo}`);

const gameName = new String('VikasSahu05');
console.log(gameName);

console.log("Spit",gameName.split('-'));

let str = "apple,banana,orange";
let fruits = str.split(","); // Split the string at commas

console.log(fruits); 