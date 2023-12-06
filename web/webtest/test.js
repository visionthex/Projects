// FUNCTION DECLARATION
//let x = 343;
// let someString = "Wow, we're learning JavaScript!";
// let y = true;
//
// console.log(x + " " + someString + " " + y);

// function name ( parameter1, parameter2 ) {
  // body (i.e., statements, expressions, value)
// }

// FUNCTION INVOCATIONS
//function greet() {
//  console.log("Hello, World!");
//}
//
//greet();
// "Hello, World!"
//
//greet();
// "Hello, World!"
//
//greet();
// "Hello, World!"

// ARGUMENTS
//function greet(name) {
//  return "Hello, " + name;
//}
//
//greet("Grace Hopper");
// "Hello, Undefined"

//function printPets(param1, param2, param3) {
//  console.log(param2, param2, param3);
//}
//
//printPets("cat", "dog", "bunny");
// "cat", "dog", "bunny"
//
//printPets("bunny", "cats", "dogs");
// "bunny", "cats", "dog"

// THE RETURN STATEMENT
//function multiply(number1, number2) {
//  return number1 * number2;
//}
//
//console.log( multiply(2, 6));
// 12

//function favorite(food) {
//  return `My favorite food is: ${food}`
//}
//
//console.log(favorite(grapes));
// "grapes"
//
//console.log(favorite("ice cream"));
// "ice cream"

//function favorite(food) {
//  let statement = `My favorite food is: ${food}`
//}
//
//console.log(favorite("grapes"));
// undefined
//
//console.log(favorite("ice cream"));
// undefined

//function greet() {
//  return "You'll never reach the console.log() message.";
//  console.log("Hello, World!");
//}
//
//greet();
// "You'll never reach the console.log() message."
//
//function twoReturns() {
//  return "I'm the only return that gets executed";
//  return "You told me the return.";
//  console.log("Hello, World!");
//}
//
//twoReturns()
// "I'm the only return that gets executed";
//
// Here is an example of how the return keyword can be used
//
//function hello() {
//  return "hello World!";
//}
//
//var myResult = hello();
// Run the function 'hello'
// Store the return value of the function ("hello world"), to the variable 'myResult'
//
//console.log(myResult); // prints out "hello world"

// OUT-OF-THE-BOX
// isInteger method returns a true/false depending on what you pass it.
//Number.isInteger(78.345)
//
// generates a psuedo-random number
//Math.random()
//
//let age = 46;
//let nameString = "Sandy is this old: ";
//console.log(nameString + age);