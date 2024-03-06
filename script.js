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

//Object methods 
let calculator = {
   add: function (a,b) {
      return a + b;
   },
   subtraction: function (a,b) {
      return a - b;
   },

   multiplication: function (a,b) {
      return a * b;   
}
};
console.log(calculator.add(6,9));
console.log(calculator.subtraction(6,9));
console.log(calculator.multiplication(6,9));

//This key word in object methods
let person3 = {
   name: "John",
   age: 30,
   sayHello: function () {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
   }
};
person3.sayHello();


//Inheritance 
// Parent object
var Animal = {
   speak: function() {
     return "I am an animal";
   }
 };
 
 // Child object inheriting from Animal
 var Dog = Object.create(Animal);
 Dog.bark = function() {
   return "Woof!";
 };
 
 // Creating instances of Dog
 var dog1 = Object.create(Dog);
 var dog2 = Object.create(Dog);
 
 console.log(dog1.speak()); // Output: "I am an animal"
 console.log(dog1.bark());  // Output: "Woof!"
 console.log(dog2.speak()); // Output: "I am an animal" 
 //Arrays 
 const fruits = ["apple", "banana", "orange"];
 console.log(fruits);
 console.log(fruits[2]);
 fruits [3] = "mango";
 fruits.toString();
 console.log(fruits);

 // Looping through an array
 // Using for loop
 const fruitsRemaining = ["apple", "banana", "orange"];
 for (let i = 0; i < fruitsRemaining.length; i++) {
   console.log(fruitsRemaining[i]);
 }
 //using forEach method
 var array = [1, 2, 3, 4, 5];

array.forEach(function(item) {
    console.log(item);
});
//Array methods 
var products = ["Optimizer","Lavender","Integra","Ranger "]
products.push("Cyclone");//Adds an elelemnt to the end of the array
products.pop();//Remove the last element of an array
products.unshift("Ranger");//Add an element to the beginning of an array
products.shift();//Remove the first element of an array
products.forEach(function(item){
   console.log(item);
});
products.sort();//Sorts the array
products.reverse();//Reverses the array
products.splice(1,2);//Removes elements from the array
products.splice(1,0,"Lavender");//Adds an element to the array
products.splice(1,1);//Removes an element from the array
console.log(products);

//Array iteration methods
//for each () (calls a call back function for each array item)
let ages  = [2,5,6,4,];
ages.forEach(function(ages, index) {
   console.log("Element at index " + index + " is: " + ages);
 });
 // map ()  method creates a new array by performing a function on each array element.
 let ages2 = [2,5,6,4,];
 let ages3 = ages2.map(function(ages2) {
   return ages2 * 7;
 });
 console.log(ages3);
 // filter () creates a new array with all elements that pass the test implemented by the provided function
 let numbers4 = [3,7,9,4,0,23];
 const evenNumbers = numbers4.filter(function(numbers4){
   return numbers4 % 2 === 0;
 });
 console.log(evenNumbers);
 // Reduce () is used to reduce the array to a single value. It executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
 let numbers5 = [3,7,9,4,0,23];
 const summation = numbers5.reduce(function(total, numbers5) {
   return total + numbers5;
 });
 console.log(summation);
 //Dates in javascript
 const date = new Date();
 console.log(date);
 //Math object 
 const pi = Math.PI;
 console.log(pi);
 //1 Math.round(x)
 let height = 4.8;
 let roundedNumber = Math.round(height)
 console.log(roundedNumber);
 //2 Math.ceil(x)
 let height2 =6.3;
 let roundedNumber2 = Math.ceil(height2)
 console.log(roundedNumber2);
 //3 Math.floor(x)
 let height3 =6.3;
 let roundedNumber3 = Math.floor(height3)
 console.log(roundedNumber3);
 //4 Math.trunc(x)
 let height4 =6.3;
 let roundedNumber4 = Math.trunc(height4)
 console.log(roundedNumber4);
 //5 Math.sign(x)
 let height5 =6.3;
 let roundedNumber5 = Math.sign(height5)
 console.log(roundedNumber5);
 //6 Math.pow(x,y)
 let height6 =6.3;
 let roundedNumber6 = Math.pow(height6,2)
 console.log(roundedNumber6);
 //7 Math.sqrt(x)
 let height7 =6.3;
 let roundedNumber7 = Math.sqrt(height7)
 console.log(roundedNumber7);
 //8 Math.abs(x)
 let height8 =6.3;
 let roundedNumber8 = Math.abs(height8)
 console.log(roundedNumber8);
 //Conditional statements 
 let age3 = 18;
 if (age >= 18) {
   console.log("I can vote");
 } else {
   console.log("I can't vote");
 }
 //conditional statements using else if
 let age4 = 18;
 if (age >= 18) {
   console.log("I can vote");
 } else if (age >= 16) {
   console.log("I can drive");
 } else if (age >= 14) {
   console.log("I can go to school");
 } else {
   console.log("I can't do anything");
 }
 //Conditional statements using switch
 let age5 = 18;
 switch (age5) {
   case 18:
     console.log("I can vote");
     break;
   case 16:
     console.log("I can drive");
     break;
   case 14:
     console.log("I can go to school");
     break;
   default:
     console.log("I can't do anything");
 }

 let price3 =  5000;
 if (price3 <= 2500) {
   console.log("I can afford to buy");
 }else if (price3 <= 3000){
   console.log("I can still buy");
 } else {
   console.log("Thats beyong what i can afford ");
 }


 let price4 = 780;
 switch(price4){
   case 600:
      console.log("This is cheap i can afford");
      break;
   case 700:
      console.log("THis is within my affording Range");
      break;
   case 800:
      console.log("Now i cant afford");
      break;
   case 900:
      console.log("This is way beyong my expectatations");
      break;
      default:
      console.log("This is not to be considered");
           
 }
 
 //Example 2 of switch case
 switch (new Date().getDay()) {
   case 0:
     day = "Sunday";
     break;
   case 1:
     day = "Monday";
     break;
   case 2:
      day = "Tuesday";
     break;
   case 3:
     day = "Wednesday";
     break;
   case 4:
     day = "Thursday";
     break;
   case 5:
     day = "Friday";
     break;
   case 6:
     day = "Saturday";
     default:
      text = "Looking forward to the Weekend";
    break;
  case 6:
    text = "Today is Saturday";
    break;
  case 0:
    text = "Today is Sunday";
}
 console.log(day);
 //loops 
 // the basic stracture of a for loop is (for (initialization; condition; iteration) {
  // code block to be executed
 //}
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
  for (let i =0; i<10; i++){
    console.log(i);
  }
  //While loop
  let i = 0;
  while (i < 5) {
    console.log(i);
    i++;
  }


  // Classes
  // Define a class called 'Car'
class Car {
   // Constructor to initialize properties
   constructor(make, model, year) {
     this.make = make;
     this.model = model;
     this.year = year;
   }
 
   // Method to get the age of the car
   getAge() {
     const currentYear = new Date().getFullYear();
     return currentYear - this.year;
   }
 
   // Method to display car details
   displayDetails() {
     return `This is a ${this.year} ${this.make} ${this.model}.`;
   }
 }
 
 // Create an instance of the 'Car' class
 const myCar = new Car('Toyota', 'Camry', 2015);
 
 // Access properties and methods of the object
 console.log(myCar.displayDetails()); // Output: This is a 2015 Toyota Camry.
 console.log(`The car is ${myCar.getAge()} years old.`); // Output: The car is 9 years old.

 //Example 2

 class BankAccount {
   constructor(ownerName, balance) {
     this.ownerName = ownerName;
     this.balance = balance;
   }
 
   // Method to deposit money into the account
   deposit(amount) {
     this.balance += amount;
     console.log(`${amount} deposited. Current balance: ${this.balance}`);
   }
 
   // Method to withdraw money from the account
   withdraw(amount) {
     if (amount > this.balance) {
       console.log("Insufficient funds");
     } else {
       this.balance -= amount;
       console.log(`${amount} withdrawn. Current balance: ${this.balance}`);
     }
   }
 
   // Method to display account details
   display() {
     console.log(`Account owner: ${this.ownerName}`);
     console.log(`Current balance: ${this.balance}`);
   }
 }
 
 // Create an instance of the 'BankAccount' class
 const myAccount = new BankAccount('John Doe', 1000);
 
 // Access methods of the object
 myAccount.deposit(500); // Output: 500 deposited. Current balance: 1500
 myAccount.withdraw(200); // Output: 200 withdrawn. Current balance: 1300
 myAccount.display(); // Output: Account owner: John Doe
                      //         Current balance: 1300
 