"use strict";
// type assertions 
// convert to more or less specific 
let a = 'hello';
let b = a; // less specific 
let c = a; // more specific 
let d = 'world';
let e = 'world';
const addOrConcat = (a, b, c) => {
    if (c === 'add') {
        return a + b;
    }
    return '' + a + b;
};
let myVal = addOrConcat(2, 2, 'concat');
// be careful TS sees no problem, but a string is return. as overrides the compiler. mistakes can be made.
let nextVal = addOrConcat(2, 2, 'concat');
// 10 as string; // doesn't work 
10; // double casting or forced casting or two assertions. overrules typescript. should avoid. 
// ----   the dom   ----- //
const img = document.querySelector('img'); // non null assertion
const myImg = document.getElementById('#img');
const nextImg = document.getElementById('#img');
img.src;
myImg.src;
