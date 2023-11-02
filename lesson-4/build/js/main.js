"use strict";
// interface PostId = stringOrNumber // will not work with interface
// Literal types 
let myName;
// myName = "john" // won't work 
let userName;
userName = 'Amy';
// userName = 'amy' // won't work
// userName ="Rachel" // won't work 
// --- functions --- //
const add = (a, b) => {
    return a + b;
};
console.log(add(2, 3));
const logMsg = (message) => {
    console.log(message);
};
logMsg('Hello!');
logMsg(add(2, 3));
// logMsg(add('2',4)) doesn't work
let subtract = function (c, d) {
    return c - d;
};
console.log("Subtract: ", subtract(3, 4));
const addAgain = (a, b) => {
    return a + b;
};
console.log("add again: ", addAgain(2, 10));
let multiply = function (c, d) {
    return c * d;
};
let multiplyInt = function (c, d) {
    return c * d;
};
/// --- optional parameters ---- ///
// optional parameters must be the last in the list below
const addAll = (a, b, c) => {
    // type guard to handle optional parameter
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
console.log("add all: ", addAll(2, 3, 4));
/// --- default values --- ///
const sumAll = (a, b, c = 2) => {
    // type guard to handle optional parameter
    return a + b + c;
};
console.log("Sumall: ", sumAll(2, 3, 4)); // => 9
console.log("Sumall: ", sumAll(1, 1)); // => 4
/// --- rest parameters --- ///
const total = (a, ...nums) => {
    return a + nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(1, 2, 3));
/// --- never type --- ///
const createError = (errMsg) => {
    throw new Error(errMsg);
};
// if endless loop then use never
// const infinite = () => {
//     let i: number = 1
//     while(true) {
//         i++
//         if ( i> 100) break // breaks the endless loop and makes infinite void instead of never
//     }
// }
// use case of type never 
const numberOrStringExample = (value) => {
    // type guards to check the value 
    if (typeof value === 'string')
        return 'string';
    if (typeof value === 'number')
        return 'number';
    // returning something that if type never to make ts happy
    return createError('this should never happen');
};
// custom type guard 
const isNumber = (value) => {
    return typeof value === 'number' ? true : false;
};
const numberOrStringExampleNew = (value) => {
    if (typeof value === 'string')
        return 'string';
    if (isNumber(value))
        return 'number';
    return createError('this should never happen');
};
