export class Site {
    num: number;
    name: string;

    constructor(time: number, text: string) {
        this.num = time;
        this.name = text;
    }

    greetings() {
        return 'Hello from ' + this.name; 
    }

    promiseMe() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(this.num < 10) reject("A szam tul kicsi");
                resolve("Ez a szam pont jo"); 
            }, 3000)
        })
    }
}