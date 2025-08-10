function myname(){
    console.log("A");
    console.log("B");
    console.log("H");
    console.log("I");
}

myname();

// Add two numbers:- 
function addTwoNumbers(number1, number2) {
    let val = (number1 + number2);
    return val; 
}

let val= addTwoNumbers(10, 190);
console.log(val);


// login user by function:- 

function userLogin(username) {
    return (` ${username} just logged in`);
}

let value = (userLogin("Abhishek Kamnle"));
console.log(value);

// using Functions for shopping cart:- 

function shoppingCart(...num1) {
    return num1;
}

console.log(shoppingCart(2, 200, 400, 5000));

// Objects and Functions:- 

let course = {
    name: "Webdevelopment",
    price: 7000,
}

function courseDetails(anyobject) {
    console.log(` Username is ${course.name} and ${course.price} `)

}

courseDetails(course);