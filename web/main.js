// |> >>> JavaScript <<< <|
// JavaScript is a programming language runs mainly on browsers.
// It's dynamicly typed high-level programming language.
// It's writting mainly on make web pages more responsive.
// The main refrence for JaveScript is ECMA-Script.
// JavaScript by default needs `;` but if you forget it the browser will add them automatically.
// JavaScript follows EcmaScript standards.

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
console.log("Hello, %cWorld.", "color: red;")    // Use directives `%c` to style text. We can use more than one directive.

console.error("Error Massage!");                 // Error log.
console.warn("Warning Massage!");                // Warning log.
console.table(['A', 'B', 'C']);                  // Log an array as a table.

console.time();                                  // starts timer.
console.timeEnd();                               // Ends the timer and prints elapsed time.

console.assert(true, "message");                 // only logs if condition is false. This stops code execution.

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
// 