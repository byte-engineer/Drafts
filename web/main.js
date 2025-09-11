// |> >>> JavaScript <<< <|
// JavaScript is a programming language runs mainly on browsers.
// It's dynamicly typed high-level programming language.
// It's writting mainly on make web pages more responsive.
// The main refrence for JaveScript is ECMA-Script.
// JavaScript by default needs `;` but if you forget it the browser will add them automatically.

// Output functions.
document.write("<h1>nice site</h1>")             // This is `@deprecated` use document.createElement()instead.
window.alert("Some Alert massage!")              // This will stop code exicution.
console.log("Some tesxt")                        // Prints text into browser console.  HTML allowed.

// We have some objects are in global scope.
window;                                          // Deals with whole window events. 
document;                                        // Contains representation for HTML code.
//...


// Logging ------------------------------------------------
// We use console.log to log sme thing on the browser console.
// We can use directives `%c` to style the text.

console.log("Hello, World!");                    // Normal log to console.
console.log("Hello, %cWorld.", "color: red;")    // Use directives `%c` to style text. We can use more than one directive.

console.error("Error Massage!")                  // Error log.
console.warn("Warning Massage!")                 // Warning log.
console.table(['A', 'B', 'C'])                   // Log an array as a table.

console.time()                                   // starts timer.
console.timeEnd()                                // Ends the timer and prints elapsed time.

console.assert(condition, "message")             // only logs if condition is false. This stops code execution.

