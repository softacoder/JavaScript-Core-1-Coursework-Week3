/*
    By now, you would have already seen "undefined", either in an error message or being output from your program.
    But what does it mean? undefined represents the absence of a value.
    
    In some cases, undefined will be used by a programmer intentionally, and they will write code to handle it.
    But usually, when you see undefined - it means something has gone wrong!

    Below are 4 typical examples of when you would see undefined.
    For each example, can you explain why we are seeing undefined?
*/

// Example 1
let a;
console.log(a);

// There is no values assigned. Therefore undefined


// Example 2
function sayHello() {
    let message = "Hello";
// there is no return to call the function. Therefore undefined
}

let hello = sayHello();
console.log(hello);



// Example 3
function sayHelloToUser(user) {
    console.log(`Hello ${user}`);
}

sayHelloToUser();
// There is no data in th brackets. Therefore undefined

// Example 4
let arr = [1,2,3];
console.log(arr[3]);

//this array contain 3 items but the index start from 0 and will display until index[2]=3
console.log(arr[2]);