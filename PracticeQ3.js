// Create a function that returns the Concatenation of all String in an Array:- 

let myArray = ["Hii", "hello", "Welcome", "comesoon", "!"];

function concatenation(myArray){
    let result = "";

    for ( let i=0; i<myArray.length; i++){
        result = result + myArray[i];
    }

    return result;
}

finalResult = concatenation(myArray);
console.log(finalResult);


