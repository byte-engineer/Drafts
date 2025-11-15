// |> >>> JavaScript <<< <|
// JavaScript is a programming language runs mainly on browsers.
// It's dynamicly typed high-level programming language.
// It's writting mainly on make web pages more responsive.
// The main refrence for JaveScript is ECMA-Script.
// JavaScript by default needs `;` but if you forget it the browser will add them automatically.
// JavaScript follows EcmaScript standards.

// Running HTML file on linux.
// chromium <file>

// Output functions.
document.write("<h1>nice site</h1>");            // This is `@deprecated` use document.createElement();nstead.
window.alert("Some Alert massage!");             // This will stop code exicution.
console.log("Some tesxt");                       // Prints text into browser console.  HTML allowed.

// We have some objects are in global scope.
window;                                          // Deals with whole window events. 
document;                                        // Contains representation for HTML code.
//...


// Logging ------------------------------------------------
// We use console.log to log sme thing on the browser console.
// We can use directives `%c` to style the text.

console.log("Hello, World!");                    // Normal log to console.
console.log("Hello, %cWorld.", "color: red;");   // Use directives `%c` to style text. We can use more than one directive.

console.error("Error Massage!");                 // Error log.
console.warn("Warning Massage!");                // Warning log.
console.table(['A', 'B', 'C']);                  // Log an array as a table.

console.time();                                  // starts timer.
console.timeEnd();                               // Ends the timer and prints elapsed time.

console.assert(true, "message");                 // only logs if condition is false. This stops code execution.

// String -------------------------------------------------
// Use `+` operator to concatenate a string. 
// The modern way to concatenate a string is using string litrals.
// String letrals method allow as to embed expresions inside the string.  

let seprator = ", " 

// Using `+`.
"Hello," + " World";

// Using string litrals.
`Hello${seprator}World!`;

// Variables ----------------------------------------------
// There is multible ways to declare a variable on JavaScript.
// The older way is using `var`.
// Poeple now use `let` to declare a variable.
// `var` keyword creates the variable as an attribute on `window` object.
// `let` keyword just create the variable on it's scope.
// There is other way to decalre constant variable. :)
// Use `const` keyword.

var MyVariable = "Some Value";
let SomeVariable = 123;
const PI = 3.14;


// Data Types ---------------------------------------------
// We use `typeof` to know the type of date.


typeof "This's string";                          // Result: 'string'
typeof 1000;                                     // Result: 'number'   | In JavaScript, float numbers considered as numers also.
typeof [1, 2, 3, 4, 5];                          // Result: 'object'   | This an array but considered object array in JavaScript.
typeof {name: "byte", country: "US"};            // Result: 'object'
typeof true | false;                             // Result: 'boolean'
typeof undefined;                                // Result: 'undefined'
typeof null;                                     // Result: 'object'


// Variables ----------------------------------------------
// `var` used to declare a variable.
// We can declare a variable without `var` keyword (Not prefared).
// IDs declared in HTML file are variables in global scope.
// In varaible naming can contain a `$` in any place.
// JavaScript uses camel case in identifers namings.
// The reccomanded to declare a variable is by `let` keyword.
// `let` declerations prevent re-declares and access before declare states. 
// `let` declerations are respect scopes and unlike `var` it does not throw it on window object.

var User = 'Name';                               // Store a string on a variable.
let Usr1 = "Value";                              // Throw errors in redeclares. 
const admn = "admin";                            // Contant.


// Concatination ------------------------------------------ 
// JavaScript allocates `+` for string cncatination.
// As an ECMA script standard we have backtics syntax for cancatination also.

"Me" + " My friend";                             // Normal conacatination.
`user name: ${User}`;                            // Modren way of concatination.


// Arithmetic Operators -----------------------------------
// JavaScript implement all of ordenary math operators.

let store = 16;

1 + 1;                                           // Addition.
1 - 1;                                           // Subtraction.
1 * 1;                                           // Multiblication.
1 / 1;                                           // Division.
1 **1;                                           // Power.

// Assignment operators.
store += 1;
store -= 1;
store *= 1;
store /= 1;
store **=1;

// Unary `+` operator.
// This operator convert strings (or other types) to number.
+"100";                                          // number => 100
+"-10";                                          // number => -10
+"ABC";                                          // number => NaN

// We can use negation too.
-"100"                                           // number => -100
// ...

// Type Casting ------------------------------------------
// Operation of converting data types from type to another.
// Since JavaScript is a dynamically typed language, types are determined at runtime.


// Casting to string.
String(128);                                     // string => "128"
(128).toString();                                // string => "128"

// Casting srting to a number.
Number("901");                                   // number => 901    // Using the number constructor
parseInt("696");                                 // number => 696
parseFloat("123.45");                            // number => 123.45

// Casting to boolean. 
Boolean(0);                                      // boolean => false
Boolean("hello");                                // boolean => true



// Type Coercion ------------------------------------------
// It's an opration of converting data types on run types (Implicit Type Casting).
// We can use `===` to get rid of coercion.

// (number => string)
5 + "5";                                         // string => "55"

// (string => number)
"10" * 2;                                        // number => 20
"5" - 1;                                         // number => 4

// 
if ("") {console.log("yes");}                    // Won’t run, "" → false
if ("hello") {console.log("yes");}               // Runs, "hello" → true


// `===` operator.
"5" == 5;                                        // true, `==` allows coercion.
"5" === 5;                                       // false, prevent coercion



// Number -------------------------------------------------
// In JavaScript, all numbers are stored as 64-bit floating point values.
// Because of the floating point system, only integers in the range -(2^53 - 1) to (2^53 - 1)

1_00_00_00;                                      // We can add `_` to numbers. thay get ignored.
1e6;                                             // This valid number. This is (1 000 000)

 1 / 0;                                          // infinity.
-1 / 0;                                          // -infinity.
 0 / 0; Math.sqrt(-1);                           // NaN, invalid math.

// Not safe integer.                             // Not safe integer because JavaScript uses float64 here.
9007199254740991 + 2;                            // 9007199254740992  Wrong result.

let big = 123439840842934892307806n;             // Add "n" at the end.  | type: bigint
big + 10n + BigInt(50);                          // Convert to mix bigInt with normal numbers.

// Number methods.
Number.isInteger(123);                           // true.
Number.isFinite(12313);                          // true.
Number.isNaN(125);
// ...

(10.555).toFixed(2);                             // 10.55, Fix the decemals.
(10.525).toExponential()                         // Return a string of the number in `E` notation.


// Math Object --------------------------------------------
// Math class or object is like a library has some common math operations.

let x = 1.5;

Math.E;Math.PI;                                  // It contains some conatants.

Math.sin(x); Math.cos(x); Math.tan(x);           // Some trignometry functions.

Math.ceil(x); Math.floor(x); Math.trunc(x);      // Ceil and floor functions.

Math.random();                                   // Returns a random number between 1 and 0.


// String Methods -----------------------------------------
// String litrals in JavaScript behave like String class.
// Strings are immutable. Every “modification” actually makes a new string under the hood.

let poem = "Not really, No monoy for that";

poem.length;                                     // Result: 29 | This is a property not a method.


// Indexing & Slicing - - - - - - 
// If out of bounds: 
// - []     -> undefined
// - charAt -> ""
poem[2];                                         // Result: 't'.
poem.charAt();                                   // Same result.

// at()                                          // Can handle negtives.
poem.at(-1);                                     // Result: 't' | last character.

// slice()                                       // Can handle negetives as well.
poem.slice(1, 8);                                // Result: 'ot real' | .slice(start, end)
poem.slice(-5, -1);                              // Result: ' tha'
poem.slice(4);                                   // Result: 'really, No monoy for that'

// .substring(start, end)                        // Does not handle negetives.
poem.substring(1, 8);

// .substr(start, length)                        // Deprecated. No longer supported.
poem.substr(1, 2);                               // Result: 'ot'


// Other methods - - - - - - - - -

let myString = "You JavaScript";

myString.includes("you");                        // Result: true.

"R ".repeat(2);                                  // Result: s"R R "

myString.startsWith("Java");                     // Result: true.
myString.endsWith("Script");                     // Result: true.

myString.toUpperCase().toLowerCase();            // Convert string to upper or lower case.

"banana".indexOf("a");                           // Result: 1 | finds the index of first 'a'.
"banana".lastIndexOf("a");                       // Result: 5 | 

// Split at some chararter.
"a,b,c".split(",");                              // ["a", "b", "c"]
"  good  ".trim();


// Comparison operators -----------------------------------

x =   "fine";                              // Assinment operator.    | no return.
x ==  "fine";                              // Comparison operator.   | only checks value.
x === "fine";                              // Comparison operator.   | ckecks type and value.

// Ordinary comparison operators.          // This operators returns boolean value.
1 <  1;
1 >  1;
1 <= 1;
1 >= 1;

// Logical Operators.
!false;                                   // true. | Not operator.
true && true;                             // true. | And operator.
true || false;                            // true. | or operator.


