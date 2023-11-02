let stringArr = ["one", "two", "three"]
let guitars: (string | number | boolean)[] = ['strat', 'les paul', 5150]
let mixedData = ['EVH', 1902, true]

stringArr[0] = "john"

guitars[2] = false
console.log(guitars)

let test = [];
let bands: string[] = [];

bands.push('hello')
bands.push('van halen')
console.log(bands)

// tuple > (toooople)
// if you want to be more strict and locked into a type per position and length for array 

let myTuple: [string, number, boolean] = ["Dave", 42, true]

let mixed = ['john', 1, false]
// myTuple = mixed, doesn't work because you can't assign because mixed could have more positions, tuples are set.

// --- objects --- //

let myObj: object;
myObj = []  // this is ok, because in js arrays are objects
console.log(typeof myObj)
myObj = bands 
myObj = {}

const exObj = {
    prop1: 'dave',
    prop2: true
}
exObj.prop2 = false

type Guitarist = {
    name: string;
    active?: boolean;
    albums: (string | number)[]
}

let evh: Guitarist = {
    name: 'Eddie',
    // active: false,
    albums: [1984, 5150, 'OU812']
}

let jp: Guitarist = {
    name: 'Jimmy Page',
    active: true,
    albums: ['Zoso', 'Two', 'Houses of the Holy']
}

console.log('eddie', evh)
// evh = jp
console.log(evh)


// --- function --- ///

const greetGuitarist = (guitarist: Guitarist) => {
    return guitarist
}
console.log("function: ", greetGuitarist(evh))

// --- interface --- //

interface GuitaristInt {
    name?: string;
    active: boolean;
    albums: (string | number)[]
}

let kurt: GuitaristInt = {
    name: 'Kurt Cobain',
    active: false,
    albums: ['Sliver', 'Nevermind', 'In Utero']
}


const helloGuitarist = (guitarist: GuitaristInt) => {
    if (guitarist.name) {
        return `hello ${guitarist.name.toUpperCase()}!`
    }
    return `hello ${guitarist.name?.toUpperCase()}!`
}

console.log(helloGuitarist(kurt))


// --- enums --- //
// not part of javascript, typescript adds this into javascript at compile time
enum Grade {
    U = 1, D, C, B, A
}

console.log(Grade.U) // => 1
