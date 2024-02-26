//this refers to the current context

const user={
    username:"Vikas",
    price:999,
    welcomeMessage:function(){
            console.log(`${this.username}, welcome to website`);
            console.log(this);
    }
}

user.welcomeMessage()
user.username = "Sam"
user.welcomeMessage()


// function chai(){   //this context only work for object ,we can not use inside function variable
//     let username = "Vikas"
//     console.log(this.username);
// }
// chai();

console.log("-----------------------------------Arrow function------------------------------------------");

const chai = ()=>{
    console.log("HI");
}
chai()

// implicit return arrow function  //if use {curly braces the need to write return } if () this use no need to return

const addTwo = (num1,num2) => (num1+num2)
console.log(addTwo(5,10));

const three = () =>({username:"vikas"});
console.log(three());