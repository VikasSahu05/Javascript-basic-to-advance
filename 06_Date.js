let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());

console.log(myDate.toISOString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());

console.log(typeof myDate);

let myCreatedDate = new Date(2023,0,23,5,30,20);
console.log(myCreatedDate.toLocaleString());

myCreatedDate = new Date("2023-01-14");
console.log(myCreatedDate.toLocaleString());


console.log("---------------Time stamp------------");

let myTimeStamp = Date.now()

console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

// console.log(Math.floor(Date.now()/1000));

const newDate = new Date(myTimeStamp);

console.log(newDate.toLocaleString());

console.log(newDate.toLocaleString('default',{
    weekday:"long",
    day:"2-digit",
    era:"long",
    hour:"2-digit"
}));