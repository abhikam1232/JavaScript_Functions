const info = {
    name: "Abhishek",
    age: 22,
    Eng: 80,
    Math: 85,
    Physics: 78,
    getAvg() {
        let Avg = (this.Eng + this.Math + this.Physics)/3;  // "this" keyword is basically used to access any parameter from an object if the function is running in that object
        console.log(` ${this.name} got an Average marks about:- ${Avg}`);
        console.log(this);
    }
}

info.getAvg();

console.log(this);

// This is next section:- 

const student = {
    name: "Pranav",
    age: 21.5,
    coding: 79,
    Ml: 95,
    Web3: 70,
    getAvg2() {
        let val = ( this.coding + this.Ml + this.Web3)/3;
        console.log((` ${this.name} this is the Average of many:- ${val}`));

    }
}
student.getAvg2();

// Another section for This:- 


const device = {
    name: "Laptop",
    model: "AsusVivobook",
    price: 65000,
    version: 22.5,
    getAvg() {
        val = (this.price + this.version)/2;
        console.log(` ${this.name} Average price is:- ${val}`);
    }
}

device.getAvg();