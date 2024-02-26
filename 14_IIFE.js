//Immediatley Invoked Function Expression (IIFE)

// use paranthesis to run IIFE function ()

//Global scope ke polution se hoti h problem wahi polution ko htane ke liye IIFE use krte hai

//at last use semicolon ; to end the function

(function chai(){
    //named IIFE
    console.log("DB CONNECTED");
})();

((name,lastname)=>{
    //unamed IIFE
    //with parameter
    console.log(`DB CONNECTED 2,${name} ${lastname}`);
})('vikas',"sahu");

