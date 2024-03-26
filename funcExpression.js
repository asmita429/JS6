// Function Expressions: 
// nameless function, its value is stored inside a variable.

let name = "asmita"; 

let sum = function(a, b) {
    return a + b;
} 
console.log(sum(1, 2)); //function call with argument

let hello = function() {
    console.log("hello world!");
}
console.log(hello);  //function call without argument

hello = function() {
    console.log("namaste");
}
console.log(hello);

// Higher Order functions

// a function that takes 1 or multiple functions as arguments
// or returns a function.

function multipleGreet(func, n) {  //higher order function
    for (let i=1; i<=n; i++){
        func();
    }
}

let greet = function() {  //assigning func to a variable greet
    console.log("hello");
}

multipleGreet(greet, 13); //donot send greet() in argument. greet is a variable
multipleGreet(function() {console.log("asmita")}, 13);


// Higher Order Functions returns a function
// factory function returns function definition

// find odd or even number using function factory
function oddOrEventFactory(request) { //factory function
    if (request == "odd") {
        let odd = function(n) {
            console.log(!(n%2 == 0)); //true for odd numbers
        }
        return odd;
    } else if (request == "even") {
        let even = function(n) {
            console.log(n%2 == 0); //true for even numbers
        }
        return even;
    } else {
        console.log("wrong request");
    }
}

// test for odd
let request = "odd";  //even
let func = oddOrEventFactory(request);
func(3);

// test for even
request = "even";
func = oddOrEventFactory(request);
func(4);


// find positive or negative number using function factory
//test
// let pos = function(n) {
//     console.log(n>=0);
// }
// let neg = function(n) {
//     console.log(n<0);
// }

function positiveOrNegativeFactory(req) {
    if (req == "positive") {
        return function(n) {
            console.log(n>=0);
        }
    } else if (req == "negative") {
        return function(n) {
            console.log(n<0);
        }
    } else {
        console.log("wrong request");
    }
}
let req = "positive";
let function1 = positiveOrNegativeFactory(req);
function1(100); 
function1(-12);

req = "negative";
function1 = positiveOrNegativeFactory(req);
function1(199);
function1(-100);

