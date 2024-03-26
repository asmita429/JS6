// Methods: actions that can be performed on an object.

// array & string are internally objects. Math is obj
// functions defined inside an object are methods.

const calculator = {
    num: 13,
    add: function(a, b) {
        return a+b;
    },
    sub: function(a, b) {
        return a-b;
    },
    mul: function(a, b) {
        return a*b;
    }
}
console.log(calculator.num);
console.log(calculator.add(10, 3));

// Shorthand
const cal = {
    add(a, b) {
        return a+b;
    },
    sub(a, b) {
        return a-b;
    }
}
console.log(cal.add(1, 2));
console.log(cal.sub(5, 2));

// Practice Qs 

// funtion to get array of larger elements
let large = function(arr, n) {
    let list = [];
    for (let i=0; i<arr.length; i++) {
        if (arr[i]<n) {
            list.push(arr[i]);
        }
    }
    return list;
}
let arr = [1,2,3,4,5,6,7,8,9,10];
console.log(large(arr, 5)); // 6,7,8,9,10


// function to get string with all unique elements
function getUnique(string) {
    let result = "";
    for (let i=0; i<string.length; i++) {
        let currChar = string[i];
        if (result.indexOf(currChar) == -1) { 
            //if current char is not added, add it in result
            result += currChar;
        }
    }
    return result;
}
let string = "abcdabcdefgefgh";
console.log(getUnique(string)); //abcdefgh


// funtion to print longest country name
function countryName(country) {
    let resIdx = 0;
    for (let i=0; i<country.length; i++) {
        let resLen = country[resIdx].length;
        let currLen = country[i].length;
        if(currLen > resLen) {
            resIdx = i;
        }
    }
    return country[resIdx];
}
let countries = ["australia", "germany", "united states", "nepal"];
console.log(countryName(countries));


// function to count number of vowels in a string
function countVowel(string) {
    let count = 0;
    for (let i=0; i<string.length; i++) {
        let str = string[i];
        if (
            str == 'a' || 
            str == 'e' || 
            str == 'i' ||
            str == 'o' ||
            str == 'u' 
            ) {
                count++;
            }
    }
    return count;
}
let name = "dipendra bahadur thapa chhetri";
console.log(countVowel(name));


// generate a random number within a range(start, end)
let start = 10;
let end = 20;
function randNum(start, end) {
    let diff = end - start;
    return Math.floor(Math.random() * diff) + start;
}
console.log(randNum(start, end));

console.log(Math.floor(Math.random() * 5)+ 1);
