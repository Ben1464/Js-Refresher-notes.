//Variables declaration.
const x = 12;
const y = 6;
const sum = x + y;
console.log(sum);
//Without declaration of variables"
console.log(7+18);
//JavaScript data types
// 1 Srings
 const name = "Benson";
 console.log(name);
 // To find out the length of the string we use console.log(str.length)
 console.log(name.length);

 let school = "St. Paul's";
 console.log(school.length);
 //To access individual characters in a string 
 console.log(school[5]);
 // String concatenation
 let firstName= "Benson";
 let lastName = "Ayomide";
 console.log(firstName + " " + lastName);
 //String methods
 let str = "Hello World";
 console.log(str.toUpperCase());
 console.log(str.toLowerCase());
 console.log(str.indexOf("World"));
 //slice()
 console.log(str.slice(6,12));
 //replace ()
 console.log(str.replace("World", "JavaScript"));
 //split()
 console.log(str.split(" "));
 //String Interpolation
 let student = "Alex";
 let greatings = "Hello";
 console.log(`${greatings} ${student}!`);
 //Logical operators
 //&&
 let a =12;
 let b = -2;
 if (a>0 && b>0) {
    console.log("Both a and b are positive numbers");
 } else {
    console.log("Both a and b are negative numbers");
 }
 //OR II
 let k = 12;
 let m = -2;
 if (k>0 || m>0) {
    console.log("Either k or m is positive number");
 } else {
    console.log("Both k and m are negative numbers");
 }
 // Not (!)
 let p = 12;
 let q = -2;
 if (!(p>0)) {
    console.log("p is not positive number");
 } else {
    console.log("p is positive number");
 }
//Ternary operator
let age = 18;
let message = (age >= 18) ? "I can vote" : "I can't vote";
console.log(message);

let price = 400;
let food = (price >= 600)? "I can't buy": "I can't buy";
console.log(food);

//Functions
function myFunction (p1,p2){
   return p1*p2;
}
let result = myFunction(4,6);
console.log(result);

function greet (name) {
   console.log("Hello " + name + "!");
}

greet ("John");
greet ("Bob");
greet ("Alex");

//Anonymous Function
let addition = function (x,y) {
   return x + y;
}
console.log(addition(6,9));

//Arrow Function
let subtraction = (x,y) => x - y;
console.log(subtraction(6,9));

// Immedietly invoked function
(function () {
   console.log("I am an immediately invoked function");
})()
//Generator function 
function* generateSequence() {
   yield 1;
   yield 2;
   yield 3;
}
let generator = generateSequence();
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);

//Higher order functions
function squre(x){
   return x*x;
}
const numbers = [1,2,3,4,5];
const squreNumbers = numbers.map(squre);
console.log(squreNumbers);

//Objects
const person = {
   name: "John",
   age: 30,
   city: "Kerugoya"
}

console.log(person.city);
person.status= "Married";
console.log(person);

// Nested objects (They have other objects as one of its properties)
let person2 = {

   name: "Bob",
   age: 25,
   address: {
      city: "Kerugoya",
      country: "Nigeria"
   },
   location:{
      pysical: "Shagzs",
      map: "Midle west"

   }
}
console.log(person2);
