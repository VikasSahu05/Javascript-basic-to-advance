const score = 500;

console.log(score);

const balance = new Number(5000);

console.log(balance);

console.log(balance.toString().length);

console.log(balance.toFixed(2));

// const name = new String("Vikas");
// console.log(name);

const otherNumber = 123.85468;

console.log(otherNumber.toPrecision(3));
console.log(otherNumber.toExponential(1));

const hundred = 740000;
console.log(hundred.toLocaleString('en-IN'));

console.log('------------------------------------Math method--------------------------------');
console.log(Math);

console.log(Math.abs(-10));  //change negative to positive

console.log(Math.round(4.4)); //if number is 4.5 then =5 if 4.4= 4

console.log(Math.ceil(4.4));  //if number is gretaer than the decimal number it willl return greater only

console.log(Math.floor(4.9)); //round off to lowest value


console.log(Math.random());
console.log(Math.floor((Math.random()*10)+1));


const min= 10;
const max=20;

console.log(Math.floor(Math.random()* (max - min + 1 ))+min);



let result = Math.pow(2, 3); // result will be 8 (2^3)
console.log(result);


