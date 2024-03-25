// Function definition syntax: function funcName() { //code }
// Function calling syntax: funcName();

function hello() {
    console.log("Hello World!");
}
hello();

function printName() {
    console.log("Apna College");
}
printName();

function print1to5() {
    for (let i = 1; i <= 5; i++) {
        console.log(i);
    }
}
print1to5();

function isAdult() {
    let age = 18;
    if (age >= 18) {
        console.log("adult");
    } else {
        console.log("not adult");
    }
}
isAdult();

// practice Qs
function printPoem() {
    console.log("Twinkle twinkle, little star");
    console.log("how I wonder what you are!");
    console.log("I am top 1% developer");
}
printPoem();

// function to roll a dice and display the value of the dice(1 to 6)
function rollDice() {
    let num = Math.floor(Math.random() * 6) + 1;
    console.log(num);
}
rollDice();

// Functions passing with Arguments(values we pass to the function)

function printName(name) {
    console.log(name);
}
printName("asmita"); //asmita

function printInfo(name, age) {
    console.log(`${name}'s age is ${age}`);
}
printInfo("asmita", 24); //argument order is important

function sum(a, b) {
    console.log(a + b);
}
sum(13,11);

// practice Qs
function calcAvg(a, b, c) {
    let avg = (a + b + c)/3;
    console.log(avg);
}
calcAvg(2,2,2); //2

// multiplication table
function printTable(n) {
    for (let i = n; i <= n * 10; i += n) {
        console.log(i);
    }
}
// printTable(2);


// Return is used to return some value from the function
function sum2(a, b) {
    console.log("hello");
    return a + b;
    // console.log("world"); // function terminates when we use return
}
// let s = sum2(3,6);
// console.log(s);

console.log(sum2(3, 6)); //9

// sum of three
console.log(sum2(sum2(3, 6), 5)); //14

// returning one value
function isAdult(age) {
    if (age >= 18) {
        return "adult";
    } else {
        return "not adult";
    }
}
console.log(isAdult(23));

// return multiple value using array or object

// practice Qs

// funtion that returns sum of numbers from 1 to 10
function getSum(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}
console.log(getSum(10)); //55

// function that returns the concatenation of all strings in an array
let str = ["hi", "hello", "bye", "!"]
function concat(para) {
    let result = "";
    for (let i = 0; i < para.length; i++) {
        result += para[i];
    }
    return result;
}
console.log(concat(str));

