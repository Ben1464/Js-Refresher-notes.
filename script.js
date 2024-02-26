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