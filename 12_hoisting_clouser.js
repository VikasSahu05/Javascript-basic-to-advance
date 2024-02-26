console.log("----------------------------Hoisted-------------------------------");

console.log(addOne(2))                //normal function can be hoisted
function addOne(num){
    return num+1;
}

// console.log(addTwo(2));                 // arrow function can not be hoisted.
// const addTwo = (num)=>{
//     return num+2
// }

a = 10;
console.log(a);
var a;

// b=20;
// console.log(b);                          //let can not be hoisted and same for const too.
// let b=20;


console.log("-------------------------------Clouser---------------------------------");

function outer(){
    let age = 25;
    function inner(){
        let user = "VIkas";
        const insideInner = ()=>{
            console.log(`${user}  - ${age}`);
        }
        insideInner();
    }
    inner();
    // console.log(user);
}

outer();

