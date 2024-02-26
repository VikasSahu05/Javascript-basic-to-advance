// for of

const arr = [1,2,3,4,5,6,7,8,9,10];

for (const num of arr) {
    // console.log(num);
}

const obj = [{name:"vikas",age:25},{name:"sahu",age:24}];

for (const objdata of obj) {
    // console.log(objdata);
}

//Map

// const map = new Map();
// map.set('IN',"INDIA");
// map.set('USA',"UNITED STATE OF AMERICA");
// map.set('FR',"FRANCE");
// map.set('IN',"INDIA");

// // console.log(map);

// for (const [key,value] of map) {
//     console.log(key+":"+value);
// }

const object = {
    js:"Javascript",
    cpp:"C++",
    py:"python"
};

for (const key in object) {//this is use mainly for object
    console.log(`${key} shortcut is for ${object[key]}`);
}
