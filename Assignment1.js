// Q1. Write a JS function that Returns Array elements larger than the number:- 

let myArry = [ 20, 30, 40, 50, 60, 70, 80];
let num = 5;

// For larger than the number:- 
function getElements (myArry, num) {
    for ( let i =0; i<=myArry.length; i++){
        if ( myArry[i]> num){
            console.log(myArry[i]);
        }
    }
}

console.log(getElements(myArry, num));