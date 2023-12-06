/*
// FUNCTION DECLARATION
let x = 343;
let someString = "Wow, we're learning JavaScript!";
let y = true;

console.log(x + " " + someString + " " + y);

 function name ( parameter1, parameter2 ) {
   body (i.e., statements, expressions, value)
 }
*/

/*
// FUNCTION INVOCATIONS
function greet() {
  console.log("Hello, World!");
}

greet();
// "Hello, World!"

greet();
// "Hello, World!"

greet();
// "Hello, World!"
*/

/*
// ARGUMENTS
function greet(name) {
  return "Hello, " + name;
}

greet("Grace Hopper");
// "Hello, Undefined"

function printPets(param1, param2, param3) {
  console.log(param2, param2, param3);
}

printPets("cat", "dog", "bunny");
// "cat", "dog", "bunny"

printPets("bunny", "cats", "dogs");
// "bunny", "cats", "dog"
*/

/*
// THE RETURN STATEMENT
function multiply(number1, number2) {
  return number1 * number2;
}

console.log( multiply(2, 6));
// 12

function favorite(food) {
  return `My favorite food is: ${food}`
}

console.log(favorite(grapes));
// "grapes"

console.log(favorite("ice cream"));
// "ice cream"

function favorite(food) {
  let statement = `My favorite food is: ${food}`
}

console.log(favorite("grapes"));
// undefined

console.log(favorite("ice cream"));
// undefined

function greet() {
  return "You'll never reach the console.log() message.";
  console.log("Hello, World!");
}

greet();
// "You'll never reach the console.log() message."

function twoReturns() {
  return "I'm the only return that gets executed";
  return "You told me the return.";
  console.log("Hello, World!");
}

twoReturns()
// "I'm the only return that gets executed";

// Here is an example of how the return keyword can be used
function hello() {
  return "hello World!";
}

var myResult = hello();
//Run the function 'hello'
//Store the return value of the function ("hello world"), to the variable 'myResult'

console.log(myResult); // prints out "hello world"
*/

/*
// OUT-OF-THE-BOX
// isInteger method returns a true/false depending on what you pass it.
Number.isInteger(78.345)

// generates a psuedo-random number
Math.random()

let age = 46;
let nameString = "Sandy is this old: ";
console.log(nameString + age);
*/

/*
// NUMBERS
var integer = 4;
var float = 4.7;
var max = +Infinity;

// some operations with numbers
var sum = 4 + 5; // adding two numbers
var difference = 9 - 4; // subtracting two numbers
var product = 4 * 5; // multiplying two numbers
var quotient = 20 / 4; // dividing two numbers

// NOT A NUMBER (NaN)
console.log(4 + 5);
console.log(4 + undefined);

// MODULO OPERATOR: %
var remainder = 9 % 2;
console.log(remainder); // logs 1 to the console
*/

/*
// ROUNDING UP AND ROUNDING DOWN
var original = 33.7;

console.log('rounded up: ', Math.ceil(original));
console.log('rounded down', Math.floor(original));

var score = 89.4;
var gradeFromATeacherWhoGetsIt = Math.ceil(score);
var gradeFromAMonterInTeachersClothes = Math.foor(score);

console.log('gradeFromATeacherWhoGetsIt: ', gradeFromATeacherWhoGetsIt);
console.log('gradeFromAMonsterInTeachersClothes: ', gradeFromAMonsterInTeachersClothes);

// EXAMPLE 1:
function roundDown(num) {
  // create a result variable
  // assign it to input, rounded down
  var result = Math.floor(num);
  // return result
  return result;
}

var roundedDown = roundDown(6.8);
console.log('should be 6:', roundedDown);
*/

/*
// PARSING TO AN INTEGER OR A FLOAT FROM A STRING
var parsedInteger = Number.parseInt("49");
console.log('parsedInteger', parsedInteger);

var parsedFloat = Number.parseFloat("22.45");
console.log('parsedFloat:', parsedFloat);

var userIdString = "49";
var parsedUserId = Number.parseInt(userIdString);
console.log("parsedUserId", parsedUserId);

var userRatingString = "29.45";
var parsedUserRating = Number.parsedFloat(userRatingString);
console.log('parasedUserRating:', parsedUserRating);

// EXAMPLE 2
function applyParseInt(numString) {
  // create a result variable
  // assign it to parsed integer from input string
  var result = Number.parseInt(numString);
  // return result
  return result;
}

var parsedInteger = applyParseInt("23");
console.log('should be 23:', parsedInteger);
*/

/*
// GENERATE A RANDOM NUMBER
 generate a random number between 0 and 1
console.log('random number between 0 and 1:', Math.random());

 generate a random number between 1 and 10
var randomBetween1And10 = Math.random() * (10 - 1) + 1;
console.log('randomBetween1And10:', randomBetween1And10);

var min = 90;
var max = 100;
var randomBetweenMinAndMax = Math.random() * (max - min) + min;
console.log("randomBetweenMinandMax:", randomBetweenMinAndMax);

// EXAMPLE 3
function generateRandomNumber(min, max) {
  // create a result variable
  // assign it to formula for random number between min and max
  var result = Math.random() * (max - min) + min;;
  // return result
  return result;
}

var randomNumber = generateRandomNumber(1, 10);
console.log('should be between 1 and 10:', randomNumber);
*/

/*
// WHAT ARE STRINGS?
Var testString = 'words';

var firstCharacter = testString[0]; // accesses the first character: 'w'
var thirdCharacter = testString[2]; // accesses the thrid character: 'r'
console.log(firstCharacter); // will log 'w'
console.log(thirdCharacter); // will log 'r'

// EMPTY STRINGS
var emptyString = "";
console.log(emptyString);

// RETURN VALUES FOR FUNCTIONS AND MULTIPLE PARAMETERS
// first you will declare a function that takes a string parameter and returns it
function returnString(string) {
  return string;
}
var resultString = returnString('hooray for programming');
console.log('resultString:', resultstring); // you have added console.log messages to help you idenify which variable is which when this code is run in the console.

// next, you will declare a function that takes a string parameter and returns the first letter
function returnFirstCharacter(string) {
  return string[0];
}
var firstCharacter = returnFirstCharacter('coffee');
console.log('firstCharacter:', firstCharacter);

// lastly, you will declare a function that takes a string and a number parameter and returns the character located at the given index within the string
function returnACharacter(string, index) {
  return string[index];
}
var character = returnACharacter('tea', 1);
console.log('character:', character);

// NAMING VARIABLES
// Numbers
var count = 9;
var whatever = 6398;

// Strings
var name = "Charlemagne";
var something = "Head Chef";

// Booleans
var hasBeenDelivered = true;
var blah = false;

// EXAMPLE !
function returnACharacter(string, index){
// return string character at given index
  return string[index];
}
*/

/*
// CREATING A STRING
var newString = "a series of characters";
console.log('newString:', newString);

var name = "Robert Smalls";
var firstCharacter = name[0];
var eightCharacter = name[7];

console.log('firstCharacter:', firstCharacter); // should log "R"
console.log('eightCharacter:', eightCharacter); // should log "S"

var name = "Robert Smalls";
var index = 1;
var secondCharacter = name[index];

console.log('secondCharacter:', secondCharacter); // should log "o"

// EXAMPLE 1
function reassignAString(input) {
  // reassign the input string to the described string
  input = "reassigned";
  // return the input string
  return input;
}

var job = "Shipping Coordinator";
console.log('job before reassignment:', job);

//you reassign a variable by leaving off the keyword 'var' (provided variable name already exist)
job = "Director of Shipping";
console.log('job after reassignment:', job);

// CONCATENATING STRINGS
var firstName = "Robert";
var lastName = "Smalls";

var fullName = firstName + lastName;
console.log('fullName without space:', fullName);

var firstName = "Robert";
var lastName = "Smalls";

var fullName = firstName + " " + lastName;
console.log('fullName with space:', fullName);

// EXAMPLE 1
function addTogetherTwoStrings(string1, string2) {
  // create a result variable
  // assign it to an expression which adds togeather string1 and string2
  var result = string1 + string2;
  // return the result variable
  return result;
}

var resultString1 = addTogetherTwoStrings('Comp', 'uter');
console.log('should be "Computer":', resultString1);

var resultString2 = addTogetherTwoStrings('Engin', 'eering');
console.log('should also be "Engineering":', resultString2);

// EXAMPLE 2
function createFullName(firstName, lastName) {
  // create a fullName variable
  // assign it to an expression adding first and last name with a space in between
  var fullName = firstName + " " + lastName;
  // return the fullName variable
  return fullName;
}

var resultFullName1 = createFullName("Duevyn", "Cooke");
console.log("should log Duevyn Cooke:", resultFullName1);

var resultFullName2 = createFullName("Ada", "Lovelace");
console.log("should log Ada Lovelace:", resultFullName2);

// TEMPLATE LITERALS
`Hello there!`;
"Hello there!";

let landmark = "Machu Picchu"
let location = "Peru"

"The location of " + landmark + " is in " + location "."

let landmark = "Machu Picchu"
let location = "Peru"

`The location of ${landmark} is in ${location}.` // The location of the Machu Picchu is in Peru.

"string test line 1\n" + "string text line 2";

`string test line 1
string test line 2`;


const greetingSender = (name, day) => {
  // Template literal for greeting message
  const greeting = `Happy ${day}, ${name}!`;
  return greeting;
};

greetingSender("Bob", "Sunday")
//=> "Happy Sunday, Bob!"

greetingSender("Susan", "Tuesday")
//=> "Happy Tuesday, Susan!"
*/

/*
// LENGTH OF STRING
var lengthOfName = "Alan Turing".length;
console.log('lengthOfName version 1:', lengthOfName);

var name = "Alan Turing";
var lengthOfName = name.length;
console.log('lengthOfName version 2:', lengthOfName);
*/

/*
// GET THE LAST CHARACTER OF A STRING
var lastCharacter = "JavaScript" ["JavaScript".length - 1];
console.log('last character:', lastCharacter);

var language = "JavaScript";
var lastIndex = language.length - 1;

var lastCharacter = language[lastIndex];
console.log('lastCharacter:', lastCharacter);

// EXAMPLE 1
function getLastCharacter(string) {
  // create a lastIndex variable
  // assign it to the last index in the string
  var lastIndex = string.length - 1;
  // create a lastCharacter variable
  // assign it to the last character in the string (make use of lastIndex)
  var lastCharacter = string[lastIndex];
  // return the lastCharacter variable
  return lastCharacter;
}

var resultLastCharacter1 = getLastCharacter('Banana');
console.log('should log "a":', resultLastCharacter1);

var resultLastCharacter2 = getLastCharacter('Macrofirm');
console.log('should log "m":', resultLastCharacter2);
*/

/*
// USING SUBSTRING()
var subString = "JavaScript".substring(2, 9);
console.log('portion of string from before index 2, up to, but not including, index 9:',subString);

var subString = "JavaScript".substring(1);
console.log('portion of string from before index 1, to the end of the string:', subString);

var subString = "JavaScript".substring();
console.log('portion which includes entire string:', subString);

var language = "JavaScript";
var startIndex = 2;
var endIndex = 9;

var subString = language.substring(startIndex, endIndex);
console.log('portion of string from before startIndex, up to, but not including, endIndex:', subString);
*/

/*
// USING .INDEXOF()
var indexOfSubString1 = "Google".indexOf('oog');
console.log('index where substring is found:', indexOfSubString1);

var indexOfSubString2 = "In defense of one's principles".indexOf('e');
console.log('index where substring is first found:', indexOfSubString2);

var indexOfSubString = "In defense of one's principles".indexOf('e', 7);
console.log('index where substring is found, after a certain point in string', indexOfSubString);

var indexOfSubStringNotPresent = "Oceanic".indexOf('xyz');
console.log('index if substring is not present:', indexOfSubStringNotPresent);

var DNAStrand = "ATGCGCTAA";
var stopCodon = "TAA";
var indexOfStopCodon = DNAStrand.indexOf(stopCodon);

console.log('index where stop codon is found with gene sequence:', indexOfStopCodon);

var DNAStrand = "ATGCGCTAACATCGCAGCTAGTTAAGCGATTGCAT";
var stopCodon = "TAA";
var indexOfFirstStopCodon = DNAStrand.indexOf(stopCodon);

var indexOfSecondStopCodon = DNAStrand.indexOf(stopCodon, indexOfFirstStopCodon + 1)
console.log('index where second stop codon is found with gene sequence', indexOfSecondStopCodon);

var DNAStrand = "ATGCGCATTCCGCATT";
var stopCodon = "TAA";
var indexOfStopCodon = DNAStrand.indexOf(stopCodon);

console.log("return value when substring is not present:", indexOfStopCodon);

function applyIndexOf(string, subString) {
  // create an index variable
  // assign it to the index inside of string where subString can first be found
  var index = string.indexOf(subString);
  // return the index variable
  return index;
}

var string1 = 'Quicksort';
var subString1 = 'sort';
var resultIndex1 = applyIndexOf(string1, subString1);
console.log('should log 5:', resultIndex1);

var string2 = 'size,color,cut,price';
var subString2 = 'cut';
var resultIndex2 = applyIndexOf(string2, subString2);
console.log('should log 11:', resultIndex2);
*/

/*
// CASTING TOSTRING()
var num = 17;
var stringNum = num.toString();
console.log('stringNum:', stringNum);
console.log('type of stringNum:', typeof stringNum);

var bool = true;
var stringBool = bool.toString();
console.log('stringBool:', stringBool);
console.log('type of stringBool:', typeof stringBool);

17.toString(); // this will throw an error
number(17).toString(); // this will not
var num = 17;
num.toString(); // this will also not

function applyToString(param) {
  // create a stringVersion variable
  // assign it to the string version of the input param
  var stringVersion = param.toString();
  // return the stringVersion variable
  return stringVersion;
}

var input1 = 9374;
var resultString1 = applyToString(input1);
console.log('should log "9374":', resultString1);
console.log('type should be "string":', typeof resultString1);

var input2 = false;
var resultString2 = applyToString(input2);
console.log('should log "false":', resultString2);
console.log('type should be "string":', typeof resultString2);
*/

/*
// ESCAPE CHARACTERS
console.log('sample:', 'It\'s raining');

console.log('multiline string:', 'First Line\nSecond Line\nThird Line');

var message = 'That is Jubal\'s Mother\'s favorite, isn\'t it?';
console.log('message containing escaped apostrophes:', message);

var haiku = 'An old silent pond...\nA frog jumps into the pond,\nsplash! Silence again.';
console.log('A haiku from Matsuo Basho:\n', haiku);

function generateHaiku(firstLine, secondLine, thirdLine) {
  // create a haiku variable
  // assign it to an expression involving the input lines, such that they format correct when the return value is logged to the console
  var haiku = firstLine + '\n' + secondLine + '\n' + thirdLine;
  // return the haiku variable
  return haiku;
}

var resultHaiku1 = generateHaiku('In the twilight rain', 'these brilliant-hued hibiscus -', 'A lovely sunset.');
console.log('should log formatted haiku:\n', resultHaiku1);
//should log formatted haiku:
//In the twilight rain
//these brilliant-hued hibiscus -
//A lovely sunset.

var resultHaiku2 = generateHaiku('The lamp once out', 'Moves west, flowers\' shadows', 'Creep eastward.');
console.log('should also log formatted haiku:\n', resultHaiku2);
//should log formatted haiku:
//The lamp once out
//Moves west, flowers\' shadows
//Creep eastward.
*/