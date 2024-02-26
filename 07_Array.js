let myArray = [[0,1],[1,2],[3,4]];
const myHeros = ["saktman","IronMan"];

const myArr2 = new Array(1,2,3,5,6);

console.log({
    myArray,
    myHeros,
    myArr2
});

//Array methods
console.log(myArray);

// let  shallowcopy = myArray.slice();

// myArray[0] = 10

// console.log(myArray);
// console.log(shallowcopy);

// let myArray = [[0,1],[1,2],[3,4]];
let shallowcopy = myArray.slice();

myArray[0][0] = 10;

console.log(myArray);       // Output: [[10, 1], [1, 2], [3, 4]]
console.log(shallowcopy); 

const arr3 = [[10,20],[30,40]];

const arr4 = arr3.slice();
arr3[0][0] = 80;

console.log(arr3);
console.log(arr4);

let nums= [1,2,3,5,4,8,7,8];
const shallowcopy1 = Array.from(nums);
nums[0] = 100;
console.log(nums);
console.log(shallowcopy1);