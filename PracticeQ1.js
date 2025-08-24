// Write an Arrow Function that returns the Square of a number..

const mySquare = (n) => (n*n);

const myCube = (x) => (x*x*x);

//Q2. Write a function that prints " hello world" 5 times at intervals of 2 secs each...

/** let id = setInterval ( () => {
    console.log(" Hello What's going on!!!");
}, 2000);

setTimeout( () =>{
    clearInterval(id);
}, 10000); **/


// Q3 Print hello Abhishek 5 times and than stop... 

const myPrint = () => {

    setTimeout( () => {
        console.log(" Hello Abhishek");
    }, 1000);

    setTimeout( () => {
        console.log(" Hello Abhishek");
    }, 2000);
    
    setTimeout( () => {
        console.log(" Hello Abhishek");
    }, 3000);
    
    setTimeout( () => {
        console.log(" Hello Abhishek");
    }, 4000);

    setTimeout( () => {
        console.log(" Hello Abhishek");
    }, 5000);
    
}
console.log(myPrint());