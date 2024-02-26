// without using  third variable
let a = 5;
let b = 10;

console.log(a);
console.log(b);

console.log("After swaping");
[a,b] = [b,a];

console.log(a);
console.log(b);

console.log("-------------------------------------------------");

let num1 = 2, num2= 6;

//swap value

num1 = num1+num2;   //  8  = 2+6
num2 = num1-num2;    //  2  = 8-6
num1 = num1-num2;    //  6   = 8-2  

console.log(num1);
console.log(num2);

console.log("Using third variable");

let n1=18, n2=20;

n3 = n1;
n1 = n2;
n2 = n3;

console.log(n1);
console.log(n2);
