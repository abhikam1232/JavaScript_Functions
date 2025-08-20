// Create a program that prints numbers from 1 to 10 using setInterval(), and use setTimeout() to stop the interval after it reaches 10.

let num = 1; // Created a varible num stored 1 inside it... 

let interval = setInterval ( () =>  {
    console.log(num);
    num++;
}, 1000);

setTimeout( () => {
    clearInterval(interval);
    console.log("Done");
}, 10000);