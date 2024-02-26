const marvel_heros = ["Ironman","Thor","SpiderMan"];

const DC_heros = ['Superman','Batman',"Flash"];

// marvel_heros.push(DC_heros)
const heros = marvel_heros.concat(DC_heros);
console.log(heros);

///////spread oprtator

const allNewHeros = [...marvel_heros,...DC_heros];

console.log(allNewHeros);

//

const anotherArray = [1,2,3,[4,5],6,7,[8,[9,5,6]]];

const realAnotherArray = anotherArray.flat(Infinity);
console.log(realAnotherArray);

console.log(Array.isArray(realAnotherArray));

console.log(Array.from("Vikas sahu"));

console.log(Array.from({name:"Vikas"}));  //intereseting

const a=100;
const b=200;
const c=300;

console.log(Array.of(a,b,c));


