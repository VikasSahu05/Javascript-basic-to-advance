//Javascript is
    // synchronous 
    // Single threaded

//execution context
    //execute one line of code at a time
    //each operation waits for the last one to complete before executing


// Blocking code                        vs             Non blocking code

//blog the flow of program                          does not blog execution
//Read file sync                                    Read file async

```javascript

function randomColor(){
    const hex = '123456789ABCDEF';
    let color ='#';
    for(let i = 0; i < 6; i++){
        color += hex[Math.floor(Math.random() * 16)];
        
    }
    return color;
}

function changeBgColor(){
    document.body.style.backgroundColor = randomColor();
}

let intervalID;
const startChangingColor = function(){
    if(!intervalID){
        intervalID = setInterval(changeBgColor,500);
    }
}


const stopChangingColor = function (){
    clearInterval(intervalID);
    intervalID=null;
}

document.querySelector('#start').addEventListener('click',startChangingColor);

document.getElementById('stop').addEventListener('click',stopChangingColor);

console.log(changeBgColor());


```