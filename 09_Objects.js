//singleton

//Object literals

//

const JSUser = {}
console.log(typeof JSUser);

// using constructor methods

let personType ={
    greet:function(){
        return `${this.name} ${this.age}`;
    }
}

const a = Object.create(personType);
a.name = "vikas";
a.age = 25;

console.log(a.greet());

//// Constructor function
function PersonJI(name, age) {
    this.name = name;
    this.age = age;
  }
  
  // Creating objects using the constructor function
  let person1 = new PersonJI('John', 30);
  let person2 = new PersonJI('Jane', 25);
  
  console.log(person1); // Output: Person { name: 'John', age: 30 }
  console.log(person2); // Output: Person { name: 'Jane', age: 25 }

  // ES6 class
class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  }
  
  // Creating objects using the class
  let person3 = new Person('John', 30);
  let person4 = new Person('Jane', 25);
  
  console.log(person3); // Output: Person { name: 'John', age: 30 }
  console.log(person4); // Output: Person { name: 'Jane', age: 25 }

  console.log("------------------------------------------");

const mySymbol = Symbol("Key1");

  const user = {
    name:"vikas",
    age:25,
    location:"bhilai",
    [mySymbol]:"myKeys"
  }

  console.log(user.name);
  console.log(user["age"])
  console.log(user[mySymbol]);
  
  user.email = "vikas@prodt.co";
  console.log(user.email);
//   Object.freeze(user);  //it will freezz the object not able to add or modified in the object

  user.email1 = "vikassahu";
  console.log(user);


  user.greeting = function(){
    console.log("Hello JS user");
  }

  user.greeting1 = function(){
    console.log(`Hello JS user ${this.name}`);
  }


  console.log(user.greeting());
  console.log(user.greeting1());

  //////////////////////////////////////////////////

  const obj1 = {
    a:1,
    b:2
  }
  const obj2 = {
    c:3,
    d:4
  }

  const obj3 = {...obj1,...obj2} //best way to use
// const obj3 = Object.assign({},obj1,obj2); //Object.assign({target},source1,source2)  
console.log(obj3);

console.log(Object.keys(obj3));
console.log(Object.values(obj3));
console.log(Object.entries(obj3));
console.log(obj3.hasOwnProperty("c"));



