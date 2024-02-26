// foreach

const coding = ["JS","Ruby","Java","Python","CPP"];

// using arrow func
// coding.forEach(element => {
//     console.log(element);
// });


// using regular function
// coding.forEach(function(val){
//     console.log(val);
// })

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe);

// coding.forEach((item,index,arr)=>{
//     console.log(item, index, arr);
// })

const myCodeing = [
    {
        languageName:"Javascript",
        languageCode:"JS"
    },
    {
        languageName:"Python",
        languageCode:"Py"
    },{
        languageName:"Ruby",
        languageCode:"Rb"
    },{
        languageName:"ASP.net",
        languageCode:"Dotnet"
    }
];

myCodeing.forEach((item)=>{ //foreach not retrun values
    console.log(item.languageName);
    console.log(item.languageCode);
})