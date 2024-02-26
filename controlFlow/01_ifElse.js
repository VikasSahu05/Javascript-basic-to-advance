//if
const isUserLoggedIn = true
if(isUserLoggedIn){

}

//comparision
// <, >, <=, >=, ==, !=, ===, !==

// falsy value

// false, 0, -0, BigInt 0n, "", null, undefined, NAN

// truthy value

// true, 1, [], "0", 'false','true', " ", {}, function(){} 
userEmail = [];

if(userEmail.length ===0){
    console.log("Array is empty");
}

const emptyObj = {};

if(Object.keys(emptyObj).length ===0 ){
    console.log("Object is empty");
}

//Nullish coalescing Operator (??) : null undefined

let val1;
val1 = null ?? 10
console.log(val1);


// terniary operator

// condition ? true ? false;

const iceTeaPrice = 100;

iceTeaPrice <=80 ? console.log("less than 80") : console.log("more than 80");