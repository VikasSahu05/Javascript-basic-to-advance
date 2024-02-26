console.log("Filter");

const myNums = [1,2,3,4,5,6,7,8,9,10];

// const values = myNums.filter((num)=>num>4)
// console.log(values);

// if start scope then need to use return
const values = myNums.filter((num)=>{
    return num>4
})
console.log(values);
///////////////////////////////////////////////////////////////////////////////////////////////
// const newNum = [];

// myNums.forEach(num => {
//     if(num>4){
//         newNum.push(num);
//     }
// });

// console.log(newNum);


