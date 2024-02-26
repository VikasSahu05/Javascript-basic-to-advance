function addTwoNumbers(num1,num2){   //parameters
    return num1+num2;
    console.log(num1+num2) //undefined or unrechable after return 
 }
const result = addTwoNumbers(3,+"4"); //arguments
console.log(result);

function outer(num){
    function inner(){
        const fun = ()=>{
            console.log( `${num}`);
        }
        return fun;
    }
    return inner;
}
const result1 = outer(5); 
console.log(result1);

//arrow function

const func = ((num1,num2)=>{
    return num1*num2;
})

const mul = func(i=5,j=10);
console.log(mul);
console.log("--------------------------------------------------------------");

function loginUserMessage(username = "Guest"){
    if(!username){
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`;
}

console.log(loginUserMessage("Vikas"));

console.log("--------------------------------------------------------------------------------------");

const calculateCartPrice = ((...num1)=>{
    // return num1;
    let sum = 0;
    for(let i= 0; i< num1.length; i++){
        sum +=num1[i];
    }
    return `Total cart value : ${sum}`;
}) 

console.log(calculateCartPrice(999, 500, 400));

console.log("-------------------------------------------------------------");

const user = {
    name:"vikas",
    prices:9000
}

function details(user){
    return `${user.name}  ${user.price}`
}

console.log(details(user));
