// redundant code
// class Coder {
//     name: string
//     music: string
//     age: number
//     lang: string

//     constructor(name: string, music: string, age: number, lang: string) {
//         this.name = name
//         this.music = music
//         this.age = age
//         this.lang = lang
//     }
// }

class Coder {
    secondLang!: string // is another option
    // add the visibility modifiers to make it more DRY
    constructor(public readonly name: string, public music: string, private age: number, protected lang: string = "TypeScript") {
        this.name = name
        this.music = music
        this.age = age
        this.lang = lang
    }

    public getAge() {
        return `Hello, I'm ${this.age}`
    }
}

const Dave = new Coder('Dave', 'Rock', 42)
console.log(Dave.getAge())
// console.log(Dave.age)
// console.log(Dave.lang)
console.log(Dave.name)

class WebDev extends Coder {
    constructor(public computer: string, name: string, music: string, age: number) {
        super(name, music, age)
        this.computer = computer
    }

    public getLang() {
        return `I write ${this.lang}`
    }
}

const Sara = new WebDev('Mac', 'Sara', "Lofi", 25)
console.log(Sara.getLang())
// console.log(Sara.age)
// console.log(Sara.lang)
console.log(Sara.name)