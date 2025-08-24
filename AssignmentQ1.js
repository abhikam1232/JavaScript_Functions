// Q1. Write an Arrow function name arrayAverage that accepts an array of numbers and returns the average of those numbers..

let myArray = [ 20, 30, 40, 50, 80];

const arrayAverage = (myArray) => {
    let total = 0;
    for  ( let number of myArray){
        total += number;
    }
    return total / arrayAverage.length;
}

console.log(arrayAverage(myArray));

