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

/*
// EXPRESSIONS
console.log(10 + 4);

let sum;

console.log(sum = 14); // outputs 14
console.log(sum); // outputs 14

// OPERATORS
console.log(true); // logs 'true'
console.log(!true); // logs 'false'
console.log(!"Hello"); // lofs 'false'
console.log(!5); // logs 'false'
console.log(!!"Hello"); // outputs 'true'
console.log(!!5); // outputs 'true'

// LOGICAL AND (&&)
console.log(0 && true); // outputs 0
console.log(3 + 5 && "Hello"); // outputs "hello"
console.log(3 + 5 && "Hello" == 0); // outputs 'false'
console.log(3 + 5 && 3 == 3); // outputs 'true'
console.log(false && true); // outputs 'false'

// LOGICAL OR (||)
console.log(3 +5 || "Hello"); // outputs 8
console.log(undefined || !!"Hello" == true); //outputs true
console.log(true || 3 == 5); // outputs true

// PRECEDENCE OF EVALUATION IN NESTED EXPRESSIONS
console.log(3 + 7 * 10); // returns 73, not 100
console.log((3 + 7) * 10); // returns 100
console.log(!7 + "Hello"); // returns "falsehello"
console.log(!(7 + "Hello")); // returns 'false'

// EXAMPLE 1
console.log("Example 1");
console.log(true || false);
console.log(11 && 0);
console.log(!undefined);
console.log(12 < 6);
console.log(3 + 4 - 2);
console.log(5 === 5);

// EXAMPLE 2
console.log("Example 2");
console.log(true || false && true);
console.log((true || false) && true);
console.log(undefined !== 22 + 3);
console.log(!(undefined !== 22 + 3));
console.log((12 > 6) + 1);
console.log(!5 == 0);
console.log(!5 === 0);
*/

/*
// CONDITIONALS
let number1 = 10;
let number2 = 5;

if(number1 > number2){
  console.log("Number 1 is greater then number 2");
}

// IF STATEMENT
let userAge = 21;
let userSpeaksEnglish = true;

if(userAge >= 18){
  if(userSpeaksEnglish == true){
    console.log("You can become a pilot");
    // according to the FAA
  }
}

// &&(AND) or || (OR)
let userAge = 21;
let userSpeaksEnglish = true;

if(userAge >= 18 && userSpeaksEnglish == true){
  console.log("You can become a pilot");
  // according to the FAA
}

let dress = "white";

if(dress == "white" || dress == "black"){
  console.log("Your dress is either black OR white");
}

// IF...ELSE STATEMENT
let userAge = 21;
let userSpeaksEnglish = true;

if(userAge >= 18 && userSpeaksEnglish == true){
  console.log("You can become a pilot");
} else {
  console.log("You cannot become a pilot");
}

let dress = "white";

if(dress == "white"){
  console.log("Your dress is white");
} else if(dress == "black"){
  console.log("Your dress is black");
} else {
  console.log("Your dress is neither black nor white");
}

let dress = "white";

if(dress == "white"){
  console.log("Your dress is white");
} else if(dress == "black"){
  console.log("Your dress is black");
} else {
  console.log("Your dress is neither black nor white")
}

...
else
  console.log("Your dress is neither black nor white");
  console.log("You still look great!");

// the above looks correct at first glance, but it behaves the same as below, not what we wanted!

...
else
  console.log("Your dress is neither black nor white");

console.log("You still look great!");

// explicitly define the scope, only logs when the else is triggered
...
else {
  console.log("Your dress is neither black nor white");
  console.log("You still look great!");
}

// EXPRESSIONS VS STATEMENTS
console.log(if(5 == 5) console.log("5"));

//TERNARY EXPRESSIONS
let age = 22;
docuemnt.write(age >= 21 ? '<h1>The user can drink<h1>' : '<h1>The user cannot drink<h1>');

// FOR LOOPS
for (let step = 0; step < 300; step++) {
  console.log('I will ask questions every time i do not understand');
}

// WHILE LOOPS
let number1 = 10;
let number2 = 20;

while(number1 < number2){
  number1 = number1 * 2;
  number2 = number2 + 20;

  console.log("number1", number1);
  console.log("number2", number2);
}

// DO...WHILE
let number1 = 10;
let number2 = 10;

do {
  console.log("No other loop would execute this");
} while (number1 < number2);

// SWITCH STATEMENT
const expr = 'Spring';

switch (expr) {
  case 'Summer':
    console.log(`The season is ${expr}`);
    break;
  case 'Fall':
    console.log(`The season is ${expr}`);
    break
  case 'Winter':
    console.log(`The season is ${expr}`);
    break
  case 'Spring':
    console.log(`The season is ${expr}`);
    break
  default:
    console.log(`Sorry, ${expr} is not a season`);
}

// EXAMPLE 1
function myFunction() {
  let result = ''
  for (let i = 0; i < 100; i++) {
    result += "I will excessively log\n";
}
  return result;
}

// EXAMPLE 2
function getDinoColor(dino) {
  // Your code here
  switch (dino) {
      case 'tyrannosaurus':
          return 'purple';
          break;
      case 'protoceratops':
          return 'yellow';
          break;
      case 'triceratops':
          return 'green';
          break;
      default:
        return 'rainbow';
  }
}
*/

/*
// OBJECT LITERALS
let dog = {};
let dog = {name: "Chance", breed: "German Shepherd", weight: 100};

var myObject = {
  exists: true,
  name: "Galvanize",
  year: 2023,
  languages: ["JavaScript", "HTML", "CSS"],
  myFunc: function(){
    console.log("Object Literals are Awesome!")
  },
  nested: {
    where: "I am an Object inside of an Object"
  }
}

var yourObject = {
  type: 'object'
}

// BRACKET NOTATION VS DOT NOTATION
var superman = {
  alias: "Superman",
  name: "Clark Kent",
  'location': "Smallville",
  'age in years': 50
}
console.log(superman.name); // => "Clark Kent"
//console.log(superman.'location') // => "SyntaxError"
console.log(superman.location) // => "Smallville"
//console.log(superman.'age in years') // => "Error: unexpected String"

console.log(superman['name']) // => "Clark Kent"
console.log(superman['location']) // => "Smallville"
console.log(superman['age in years']); // => 50

var superman = {
  alias: "Superman",
  name: "Clark Kent",
  'location': "Smallville",
  'age in years': 50
}

let currentKey = 'alias';
console.log(superman[currentKey]);
currentKey = 'location';
console.log(superman[currentKey]);
currentKey = 'age in years';
console.log(superman[currentKey]);

let worstObjectEver = {
  22: 'fish',
  start: 99,
}

// ERROR, Uncaught SyntaxError: unexpected token: numeric literal
//console.log(worstObjectEver.22)
// CORRECT, logs 'fish'
console.log(worstObjectEver[22])

let myKey = 'start';
// undefined, myKey is interpreted as the actual key and there is not key 'myKey' in the object
//console.log(worstObjectEver.myKey)
// CORRECT, logs 99 - the value of the variable 'start' is used as the key
console.log(worstObjectEver[myKey])

// ADDING AND UPDATING OBJECT PROPERTIES
let behavior = {};
console.log(behavior); // => {}

behavior.outward = 'rambunctious';
console.log(behavior); // => {outward: 'rambunctious'}

behavior.outward = 'mellow';
console.log(behavior); // => {outward: 'mellow'}

// ITERATING OBJECTS WITH FOR...IN LOOP
let dog = {name: "Chance", breed: "German Shepherd", weight: 100};

for (var key in dog){
  console.log(key)
}
//  Expected Output
//  => "name"
//  => "breed"
//  => "weight"

  for (var key in dog){
    console.log(dog[key])
  }
//    Expected Output
//    => "Chance"
//    => "German Shepherd"
//    => 100

// THE IN OPERATOR
let dog = {name: "Chance", breed: "German shepherd", weight: 100};

if('age' in dog) console.log("The dog has an age");
else console.log("The dog has NO age");

let key = "breed";

if(key in dog) console.log(`The dog has a ${key}`);
else console.log(`The dog has NO ${key}`);

// ACCESSING DATA WITHIN NESTED OBJECTS
var unitedStates = {
  population : 331900000,
  states : {
    nd : {
      capital: 'Bismark',
      population : 774948,
      largestCity : {
        name: 'Fargo',
        population : 126748
      }
    },
    tx : {
      capital : 'Austin',
      population : 29530000,
      largestCity : {
        name: 'Houston',
        population : 2326000
      }
    }
  }
}
console.log(unitedStates.states.nd.capital); // => 'Bismark'

let yard = {};

// ERROR, plants is undefined!
yard.plants.trees = 'fir';

// All good, plants holds a nested object instead of undefined
yard.plants = {};
yard.plants.trees = 'fir';

for (key in unitedStates){
  console.log(key)
}
//  Expected Output
//  population
//  states


for (key in unitedStates){
  console.log(unitedStates[key])
}
//  Expected Output
//  => 331900000
//  => > Object { nd: Object { capital: "Bismark", population: 774948, largestCity: Object { name: "Fargo", population: 126748 } }, tx: Object { capital: "Austin", population: 29530000, largestCity: Object { name: "Houston", population: 2326000 } } }
//  above is all of the nested information

for (key in unitedStates){
  for (subKey in unitedStates[key]){
    console.log(subKey);
  }
}
  /* Expected Output
  => "nd"
  => "tx"

  for (key in unitedStates){
    for (subKey in unitedStates[key]){
      console.log(unitedStates[key][subKey]);
    }
  }
  //  Expected Output
  //  => > Object { capital: "Bismark", population: 774948, largestCity: Object { name: "Fargo", population: 126748 } }
  //  => > Object { capital: "Austin", population: 29530000, largestCity: Object { name: "Houston", population: 2326000 } }

//EXAMPLE 2
let secondWorstObjectEver = {
  fish: 'gold',
  'i love spaces': 17,
  underscores_are_better: 'probably true',
  5876: 'numbersnumbersnumbers',
  'exactly': {},
};
console.log(secondWorstObjectEver.'exactly');

// EXAMPLE 3
let pets = {
  dog: 'Bingo',
  cat: 'Cat',
  bird: 'Loki',
};

for (let key in pets) {
  console.log(key + ':' + pets.key + '\n');
}


for (let key in pets) {
  console.log(key + ':' + pets[key] + '\n');
}

// EXAMPLE 4
let userInfo = {
  name: 'Wallace',
  address: '62 West Wallaby Street, Wigan, Lancashire',
  appearance: {
    hair: {
      color: 'brown',
      style: 'bald',
    },
    height: 'tallish',
    eye_color: 'brown',
  },
  occupation: {
    title: 'inventor',
    location: 'home',
    associates: 'Grommit',
  },
}
console.log(userInfo.appearance.color);
*/

/*
// ARRAY
var myArray = []
var worldAuthors = ['Edgar Allan Poe', 'Fyodor Dostoevsky', 'J.R.R. Tolkien', 'Homer', 'Victor Hugo'];

// ARRAY INDEXING
console.log(worldAuthors.indexOf('Edgar Allan Poe')); // output 0
console.log(worldAuthors.indexOf('Homer')); // output 3

worldAuthors[0] = 'Miguel de Cervantes';
worldAuthors[2] = "Paulo Coelho";

// USING ARRAY.LENGTH
console.log(worldAuthors[worldAuthors.length - 1]);

// ITERATING OVER ARRAYS
let index = 0;
console.log(someArrayName[index]);

let index = 2;
console.log(someArrayName[index]); // outputs third element

// FOR LOOPS
for(let index = 0; index < worldAuthors.length; index++){
  console.log(worldAuthors[index]);
}

// FOR...OF LOOP
for(let element of worldAuthors){
  console.log(element);
}

let array = ["dog", "cat", "fish"];

for(let [index, animal] of array.entries()){
  console.log(index, animal);
}

// ARRAY.isARRAY
console.log(Array.isArray(apartments)); // returns in console: true

// THE PUSH() and POP() methods
let cities = ["Ottawa"];
cities.push("Bangkok");

console.log(cities); // output: ["Ottawa", "Bangkok"]

// THE SHIFT() and UNSHIFT() METHODS
let cities = ["Ottawa"];
cities.unshift("Bangkok");

console.log(cities); // output: ["Bangkok", "Ottawa"]

cities.shift();

console.log(cities); // output: ["Ottawa"]

// THE SPLICE() vs SLICE() METHODS
myArray.splice(index, deleteCount, element)

let cities = ["Ottawa"];
cities.splice(1, 0, "Bangkok"); // cities is now ["Ottawa", "Bangkok"]
cities.splice(1, 0, "Kathmandu"); // cities is now ["Ottawa", "Kathmandu", Bangkok"]
cities.splice(1, 2); // cities is not ["Ottawa"]
cities.splice(0, 1, "Kathmandu", "Bangkok"); // cities is now ["Kathmandu", "Bangkok"]

let cities = ["Ottawa", "Tokyo"];
console.log(cities.splice(0, 1, "Kathmandu", "Bangkok")); // outputs ["Ottawa"] as that is what was removed
console.log(cities); // outputs ["Kathmandu", "Bangkok", "Tokya"]

// THE CONCAT() METHOD
let cities = ["Ottawa", "Tokyo"];
let moreCities = ["Kathmandu", "Bangkok"];

cities.concat(moreCities);

console.log(cities); //what is the output?
let combinedCities = cities.concat(moreCities);

console.log(combinedCities); //what is the output?
let evenMoreCities = ["Samarkand", "Sofia"];

combinedCities = moreCities.concat(cities, evenMoreCities);

console.log(combinedCities); //what is the output?
combinedCities = evenMoreCities.concat("Belgrade");

console.log(combinedCities); //what is the output?

// NESTED ARRAYS
const apartments = [ ["001", "002", "003", "004", "005"], ["101", "102", "103", "104", "105"], ["201", "202", "203", '204', "205"], ["301", "302", "303", "304", "305"] ];

for(let index = 0; index < apartments.length; index++){
  console.log(apartments[index]);
}

// ITERATING OVER NESTED ARRAYS
for(let floorIndex = 0; floorIndex < apartments.length; floorIndex++){
  for(let aptIndex = 0; aptIndex < apartments[floorIndex].length; aptIndex++){
      apartments[floorIndex][aptIndex] = "A" + apartments[floorIndex][aptIndex];
  }
}

console.log(apartments);

const apartments = [
  ["001", "002", "003", "004", "005"],
  ["101", "102", "103", "104", "105"],
  ["201", "202", "203", '204', "205"],
  ["301", "302", "303", "304", "305"]
];

//EXAMPLE 1
const myFunction = (number) => {
  const functionArray = [
    (num) => (num += 1),
    // add function here...
    (num) => num * 2,
    (num) => num * 534,
    (num) => num / 3,
    (num) => Math.round(num),
  ];

  for (const func of functionArray) {
    // complete functionality...
    number = func(number);
  }
  return number;
}

//EXAMPLE 2
function returnAnElement(array, index) {
  // Check if the index is within the bounds of the array
  if (index >= 0 && index < array.length) {
    // Return the element at the given index
    return array[index];
  } else {
    // If the index is out of bounds, return undefined
    return undefined;
  }
}

// EXAMPLE 3
function getLastElement(array) {
  if (array.length === 0) {
    return undefined;
  } else {
    return array[array.length - 1];
  }
}

var output = getLastElement([1, 2, 3, 4]);
console.log(output); // --> 4

// EXAMPLE 4
function computeAverageOfNumbers(num) {
  if (num.length === 0) {
    return 0;
  }
  let sum = 0;
  let totalNumbers = num.length;
  for (let i = 0; i < totalNumbers; i++) {
    sum += num[i];
  }
  let average = sum / totalNumbers;
  return average;
}

var input = [1,2,3,4,5];
var output = computeAverageOfNumbers(input);
console.log(output); // --> 3

// EXAMPLE 5
function addToBack(arr, element) {
  arr.push(element);
  return arr;
}

var output = addToBack([1, 2], 3);
console.log(output); // -> [1, 2, 3]
*/

/*
let userNameCorrect = false;
let passwordCorrect = false;

if( must be evaluated to true or false userNameCorrect === "Billy"){
  console.log("Correct Username")
  if(passwordCorrect){
    console.log("Correct Password")
  }
} else {
    console.log("Login Failed")
}
*/

/*
let tempArray = [9, 15, 13, 21, 14];

for(let i = 0; i < tempArray.length; i ++){
  console.log(tempArray[i])
}

for(let arr of tempArry){
  console.log(arr)
}

for(let in tampArray){
  console.log(arr)
}
*/

/*
let person = {name:"Dude", age:56, drink:"White Russian"}

for(let key in person){
  console.log("This is the key: ", key)
  console.log("This is the value: ",person[key])
}
*/

console.log(1,2,3,4);