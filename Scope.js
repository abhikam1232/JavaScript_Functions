// Block scope:- 
{
   let  x = 20;
   console.log(x);
    
}
 // console.log(x); This x cannot be used over here 

 // Var can be used in block scope:- 
 {
    var y = 10;
    console.log(y); // defining a variable with var can be used inside also 
 }
 console.log(y); // defining a variable with var can be used outside the block also

 // FUNCTION SCOPE and GLOBAL SCOPE:- 

 let sum = 54; // Global scope 

 function calsum(a, b) {
    // let sum = a+b; // This is basically a function scope:-
    console.log(sum);
 }

 calsum(20, 30);
 console.log(sum);

 // LEXICAL SCOPES:- 

 function major() {
    let a = 20000;
    let b = 5050505;
    function minor(){
        console.log(a); // These are lexical scopes delcared inside a major function and printed inside the minor function but the reverse is not possible
        console.log(b);
    }
    minor();
 }

 major();


 /** function outer(){
    function inner() {
        let m = 14511;
        let n = 455852;
    }
    console.log(m); // This is not possible because it the reverse of the lexical scope:- 
    console.log(n);

    inner();
 }
 outer(); **/

 // Practice guess trhe output:- 
let greet = "hello";

function changeGreet(){
    let greet = "Namasate";
    console.log(greet);
    function innerGreet(){
        console.log(greet);
    }
}

console.log(greet);
changeGreet();