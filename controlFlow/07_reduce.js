console.log("reduce");

const myNum = [1,2,3];

// const myTotal = myNum.reduce(function(acc,currVal){
//     console.log(`acc ${acc} , currVal ${currVal}`);
//     return acc+currVal;
// },0);

const myTotal = myNum.reduce((acc,currVal)=>acc+currVal,0);
console.log(myTotal);