// Scope determines the accessibility of variables, 
// objects, and functions from different parts of the code.

// scope: function, block, and lexical. (global scope)

// function scope: 
// variables defined inside a function are not accessible from outside the function
let sum = 13; // Global scope

function calSum(a, b) {
    let sum = a + b;
    console.log(sum); //function scope
}

console.log(sum); // 13

// block scope { //block of code } -> const and let keyword
{
    let a = 13;
    var b = 8;
}
// console.log(a); //error: a is not defined 
console.log(b); //8 , b is global scope

for (let i = 1; i <= 3; i++) {
    console.log(i);
}
// console.log(i); //error: i is not defined

let age = 24;
if (age >= 18) {
    let str = "adult";
    console.log(str);
}
// console.log(str); //error: str is not defined

// lexical scope 
// a variable defined outside a function can be accessible
// inside another function defined after the variable declaration. opposite is not true

function outerFunc() {
    let x = 5; //variable declared & defined
    let y = 6;
    function innerFunc() { //function scope
        let a = 10;
        console.log(x);
    }
    // console.log(a); //error: a is not defined
    innerFunc(); //5
}
outerFunc();

// Practice Qs

let greet = "hello"; //global scope

function changeGreet() {
    let greet = "namaste"; //function scope
    console.log(greet);

    function innerGreet() {  
        console.log(greet);  //lexical scope
    }

    innerGreet(); //#3
}

console.log(greet); //#1 hello
changeGreet();  //#2 namaste   #3 namaste
