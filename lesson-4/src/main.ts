// type aliases 
type stringOrNumber = string | number 
type stringOrNumberArray = (string | number)[]

type GuitaristInt = {
    name?: string;
    active: boolean;
    albums: stringOrNumberArray
}

type UserId = stringOrNumber


// interface PostId = stringOrNumber // will not work with interface

// Literal types 
let myName: 'dave'
// myName = "john" // won't work 

let userName: "Dave" | "John" | "Amy"
userName = 'Amy'
// userName = 'amy' // won't work
// userName ="Rachel" // won't work 


// --- functions --- //



const add = (a: number, b: number): number => {
    return a + b
} 
console.log(add(2,3))

const logMsg = (message: any): void => {
    console.log(message)
}
logMsg('Hello!')
logMsg(add(2,3))
// logMsg(add('2',4)) doesn't work

let subtract = function (c: number, d: number): number {
    return c - d
}

console.log("Subtract: ", subtract(3, 4))



type addSubFunction = (a: number, b: number) => number 
const addAgain: addSubFunction = (a,b) => {
    return a + b;
}
console.log("add again: ", addAgain(2,10))

type mathFunction = (a: number, b: number) => number
let multiply: mathFunction = function (c,d) {
    return c * d
}
// same but interface
interface mathFunctionInterface {(a: number, b: number): number}
let multiplyInt: mathFunctionInterface = function (c,d) {
    return c * d
}



/// --- optional parameters ---- ///
// optional parameters must be the last in the list below
const addAll = (a: number, b: number, c?:number): number => {
    // type guard to handle optional parameter
    if (typeof c !== 'undefined') {
        return a + b + c
    }
    return a + b
}
console.log("add all: ", addAll(2,3,4))


/// --- default values --- ///
const sumAll = (a: number, b: number, c:number = 2): number => {
    // type guard to handle optional parameter
        return a + b + c
}

console.log("Sumall: ", sumAll(2,3,4)) // => 9
console.log("Sumall: ", sumAll(1,1)) // => 4


/// --- rest parameters --- ///
const total = (a: number, ...nums: number[]): number => {
    return a + nums.reduce((prev, curr) => prev + curr )
}
logMsg(total(1,2,3))


/// --- never type --- ///
const createError = (errMsg: string): never => {
    throw new Error(errMsg)
}

// if endless loop then use never
// const infinite = () => {
//     let i: number = 1
//     while(true) {
//         i++
//         if ( i> 100) break // breaks the endless loop and makes infinite void instead of never
    
//     }
// }

// use case of type never 
const numberOrStringExample = (value: number | string): string => {
    
    // type guards to check the value 
    if (typeof value === 'string') return 'string'
    if (typeof value === 'number') return 'number'

    // returning something that if type never to make ts happy
    return createError('this should never happen')
}


// custom type guard 
const isNumber = (value: any): boolean => {
    return typeof value === 'number' ? true : false
}

const numberOrStringExampleNew = (value: number | string): string => {
    
    if (typeof value === 'string') return 'string'
    if (isNumber(value)) return 'number'

    return createError('this should never happen')
}
