// type assertions 

type One = string 
type Two = string | number 
type Three = 'hello'

// convert to more or less specific 
let a: One = 'hello'
let b = a as Two // less specific 
let c = a as Three // more specific 

let d = <One>'world'
let e = <string | number>'world'

const addOrConcat = (a:number, b: number, c: 'add' | 'concat'): number | string => {
    if (c === 'add') {
        return a + b
    }
    return '' + a + b
}

let myVal: string = addOrConcat(2,2,'concat') as string;

// be careful TS sees no problem, but a string is return. as overrides the compiler. mistakes can be made.
let nextVal: number = addOrConcat(2,2,'concat') as number;

// 10 as string; // doesn't work 
(10 as unknown) as string;  // double casting or forced casting or two assertions. overrules typescript. should avoid. 

// ----   the dom   ----- //

const img = document.querySelector('img')! // non null assertion
const myImg = document.getElementById('#img') as HTMLImageElement 
const nextImg = <HTMLImageElement>document.getElementById('#img')

img.src
myImg.src


