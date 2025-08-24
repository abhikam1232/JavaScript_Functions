const isEven = (n) => {
    if (n%2 ==0){
        console.log(" it is even");
    } else {
        console.log(" It is ODD");
    }
};

console.log(isEven(5));


// Print a table of number using arrow function:- 

const myTable = (a) => {
    for (let i=2; i<=20; i = i+2){
        console.log(i);
    };
};