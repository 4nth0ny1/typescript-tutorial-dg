"use strict";
let stringArr = ["one", "two", "three"];
let guitars = ['strat', 'les paul', 5150];
let mixedData = ['EVH', 1902, true];
stringArr[0] = "john";
guitars[2] = false;
console.log(guitars);
let test = [];
let bands = [];
bands.push('hello');
bands.push('van halen');
console.log(bands);
// tuple > (toooople)
// if you want to be more strict and locked into a type per position and length for array 
let myTuple = ["Dave", 42, true];
let mixed = ['john', 1, false];
// myTuple = mixed, doesn't work because you can't assign because mixed could have more positions, tuples are set.
// --- objects --- //
let myObj;
myObj = []; // this is ok, because in js arrays are objects
console.log(typeof myObj);
myObj = bands;
myObj = {};
const exObj = {
    prop1: 'dave',
    prop2: true
};
exObj.prop2 = false;
let evh = {
    name: 'Eddie',
    // active: false,
    albums: [1984, 5150, 'OU812']
};
let jp = {
    name: 'Jimmy Page',
    active: true,
    albums: ['Zoso', 'Two', 'Houses of the Holy']
};
console.log('eddie', evh);
// evh = jp
console.log(evh);
// --- function --- ///
const greetGuitarist = (guitarist) => {
    return guitarist;
};
console.log("function: ", greetGuitarist(evh));
let kurt = {
    name: 'Kurt Cobain',
    active: false,
    albums: ['Sliver', 'Nevermind', 'In Utero']
};
const helloGuitarist = (guitarist) => {
    var _a;
    if (guitarist.name) {
        return `hello ${guitarist.name.toUpperCase()}!`;
    }
    return `hello ${(_a = guitarist.name) === null || _a === void 0 ? void 0 : _a.toUpperCase()}!`;
};
console.log(helloGuitarist(kurt));
// --- enums --- //
// not part of javascript, typescript adds this into javascript at compile time
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U); // => 1
