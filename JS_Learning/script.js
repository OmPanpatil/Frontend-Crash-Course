// Js --> 
// (1)Js the language (code likhkar seekhna, main features) : It was developed by Brenden Eigg in 20 days and because of this it come up with ECMASCRIPT community to overcome the difficulties. Including bothe new features installing and all.
// Js is divided into two parts : ES5(before) and ES6(after)
// Basics : File connect karna, load karna script ko, basics of code executions, grammar and understanding of errors.
// Kaha 
// Inbuitl-features
// Variables, COnstants
// Compilers and interpreters
// Windows
// Types
// Conditionals,
// Loops
// Functions : 6 types of functions
// Arrays
// objects
// prototypes
// Prototypal inheritance
// Asynchronous JS
// ES6 climax
// Questions related to all




// (2)Js the DOM (Code likhkar cheezein banana seekhna) : Creating phase





console.log("Hello World");
alert("Facing some connection issues, please try again later");
prompt("Please tell us your suitable time?");

// Functions --> 
// block of code that can be called again and again
// Reusability of code
// Js mein function normal programming language jesse nahi hai, iska matlab hai, yaha par js mein, functions banane ke liye type nahi banana padta.
// Js mein function banane ke liye, function keyword ka use hota hai. Kyuki yaha par function keyword se hi pata chalta hai ki yeh ek function hai. Aur data type ka issue nahi hota hai.
// Js mein function banane ke liye, function keyword ke baad function ka naam hota hai, jisse hum function ko call kar sakte hain.
// That's why, js mein sirf function keyword likh sakhte hai bina data type ke.


// Js versions have 2 types:
// 1. ES5
// 2. ES6

// 1. ES5 : Function statement, function expression, anonymous function
// 2. ES6 : Fat Arrow functions --> a) Basic Fat Arrow, b) Fat arrow with one parameter, c) Fat arrow with implicit return

// JS functions are divided into 2 parts:
// 1. Built-in functions
// 2. User-defined functions
// Built-in functions are already defined in JS
// Eg: alert(), prompt(), console.log(), etc.
// User-defined functions are defined by the user
// Eg: function myFunction() { console.log("Hello World"); }

// JS functions have 3 parts:
// 1. function keyword
// example: function
// 2. Function name
// example: myFunction
// 3. Parentheses () with parameters
// example: myFunction()

// Syntax of function:
function functionname(){
    // code to be executed
    console.log("Syntax of Function");
}

functionname(); // calling function

// Indepth some more important points: js mein functions first class functions hote hain, yani ki js mein functions ek variable ki tarah use ho sakte hain.

// what is functions?
// Functions are a set of statements that perform a task or calculate a value.
// Functions are reusable pieces of code.
// Functions are used to perform the same task multiple times.
// koi essa code jo aapko baar baar use karna ho, ya phir koi essa code jisko turant na chalana ho par kabhi chalana ho, usey function mein daal sakte hai.
// example: 
// function myFunction() { console.log("Hello World"); }


// Why we need ?
// To avoid repetition of code.
// To improve code readability.
// To improve code maintainability.
// To improve code reusability.

// How to use ?
// By defining a function.
// By calling a function.
// example :
// happybirthday

var todaysdate = 19;
var dateofbirth = 19;
function happybirthday() {
    console.log("Happy Birthday");
}
happybirthday();

// Extras we should know about functions:
//  Paramters and Arguments
// Return Statement

// Parameters and Arguments:
// Parameters are the names used in the function definition. which carries the values as variables of the arguments.
// Arguments are the actual values that are passed to the function. That means, when we call a function, we pass the arguments to the function. and that arguments are stored in the parameters (variable) of the function.

// example:
function myFunction(x, y) {
    // here, x and y are parameters
    console.log(x + y);
}
myFunction(10, 20);
// here, 10 and 20 are arguments

// Return Statement:
// The return statement is used to return a value from the function.
// The return statement stops the execution of the function and returns the value from that function.
// The return statement can be used to return a value from the function.

// example:
function multiplication(u, v) {
    return u * v;
}
console.log(multiplication(20, 20));


// Types of Functions:
// 1. Function Statement
// 2. Function Expression
// 3. Anonymous Function
// 4. Arrow Function
// 5. IIFE (Immediately Invoked Function Expression)
// 6. Callback Function
// 7. Recursive Function
// 8. Generator Function
// 9. Constructor Function
// 10. Method Function
// 11. Generator Function
// 12. Async Function
// 13. Await Function
// 14. Promise Function
// 15. Pure Function
// 16. Impure Function
// 17. Higher Order Function
// 18. First Class Function
// 19. Nested Function
// 20. Default Function
// 21. Rest Parameter Function
// 22. Spread Operator Function
// 23. Memoization Function
// 24. Currying Function
// 25. Partial Function
// 26. Compose Function
// 27. Pipe Function
// 28. Thunk Function
// 29. Trampoline Function
// 30. Tail Call Function
// 31. Recursion Function
// 32. Closure Function
// 33. Hoisting Function
// 34. Scope Function
// 35. Lexical Scope Function
// 36. Block Scope Function
// 37. Global Scope Function
// 38. Local Scope Function
// 39. Function Scope Function
// 40. Module Scope Function
// 41. Private Scope Function
// 42. Public Scope Function
// 43. Protected Scope Function
// 44. Static Scope Function
// 45. Dynamic Scope Function
// 46. Call Stack Function
// 47. Event Loop Function
// 48. Callback Queue Function
// 49. Microtask Queue Function
// 50. Macro Task Queue Function
// 51. Event Handler Function
// 52. Event Listener Function
// 53. Event Emitter Function
// 54. Event Delegation Function
// 55. Event Bubbling Function
// 56. Event Capturing Function
// 57. Event Propagation Function
// 58. Event Prevent Default Function   
// 59. Event Stop Propagation Function
// 60. Event Target Function

// preparing for the interview:

// 1. simple function :
function simplefunction(){
    console.log("Simple Function");
}
simplefunction();

// 2.function expression:

var functionexp = function(){
    // in function expression the function doesn't have name but the variable have name.
    console.log("function expression");
}
functionexp();

// 3. Anonymous function:

// function(){
    // Anonymous function doesn't have name and it is not stored in any variable.
    // console.log("Anonymous functions");
// }


// fat arrow functions:

// 1. Basic Fat Arrow -->
// Here, the fat is indicated as () and arrow as =>leads to the functions.
()=>{console.log("Basic Fat Arrow");}

var fatarrow = () => {
    console.log("This is the basic fat arrow function")
}

fatarrow();

// 2. Fat arrow with one parameter -->
// Here, the fat is indicated as () and arrow as =>leads to the functions.
// Here, we can avoid the parantheses if we have only one parameter.
(w) => {console.log(w);}

var FAWOP = (w) => {
    console.log("This is the fat arrow function with one parameter.");
}

FAWOP(10);

//3. Fat arrow with implicit return -->
// Here, the fat is indicated as () and arrow as =>leads to the functions.

// example :
var addd = ()=> 10 + 10;
console.log(addd());
var ans = addd();

// Return statement:
// The return statement is used to return a value from the function.
// The return statement stops the execution of the function and returns the value from that function.
// The return statement can be used to return a value from the function.
// return ka matlab hua, jaha par bhi return lagega uske aage jou bhi likhoge wou jayega jaha par function call hua tha, return function kae andar lagta hai

// function returnfunctionkarega(){
//     return "Return Statement";
// }

// var yahahorahaireturn = returnfunctionkarega();
// console.log(yahahorahaireturn());

// Parameters and Arguments:
// Parameters are the names used in the function definition. which carries the values as variables of the arguments.
// Arguments are the actual values that are passed to the function. That means, when we call a function, we pass the arguments to the function. and that arguments are stored in the parameters (variable) of the function.


// Starting again with the functions :
// Function is a block of code that reduse, reuse the code and reduces the line of repetation. It can be only run when the function is call.
// Js has divided into two parts : Es5 and Es6 version
// ES5 is divided into three parts : (a) Function statement, (b) Function Expression, (c) Anonymous Functions
// ES6 is divided into one part : FAT ARROW FUNCTION
// Fat Arrow FUnction is further divided into three parts : (a)Basic Fat Arrow Function, (b) Fat Arrow function with one parameter, (c) Fat arrow function with implicit return

// Js mein function normal programming language jaise nahi hai , iska matlab hai, yaha par js mein, function ka type batana nahi pada. Bas aapko function word likhna padega. Yeh first class function hai.

// Indepth : Js mein functions First class function kehlate hai kyuki jiska matlab ki js mein functions ko hum variable or value ki tarah treat kiya jaa sakhta hai.

// What is function :
// koi essa code jou aapko baar baar use karna ho, ya fir koi essa code jisko turant na chalana ho par kabhi chalana ho, ussey function mein daal sakte hai.

function khana(){
    console.log("bartaan uthao");
    console.log("chawal daalo");
    console.log("paani daalo");
    console.log("gas par chadao for 20 minutes");
    console.log("gas karke thanda hone do");
    console.log("khaalo");
}

khana();


// Why we need
// How to use

// Extras we should know