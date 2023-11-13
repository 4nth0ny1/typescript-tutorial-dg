// Index signatures 

// interface TransObj {
//     Pizza: number, 
//     Books: number, 
//     Job: number
// }

interface TransObj {
    [index: string]: number, // index signature
    // readonly [index: string]: number // readonly version
}

const todaysTransactions: TransObj = {
    Pizza: -10,
    Books: -5, 
    Job: 50
}

console.log(todaysTransactions.Pizza)
console.log(todaysTransactions['Pizza'])

let prop: string = 'Pizza'

console.log(todaysTransactions[prop])