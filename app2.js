function multipleGreet(func, n) {
    for (let i = 1; i <= n; i++) {
        func();
    }
}

let greet = function () {
    console.log("Hello");
}

multipleGreet(greet, 5);



// Again:- 
function outerFunc(func, x) {
    for (let i = 1; i <= x; i++) {
        func();
    }

}
let box = function () {
    console.log("Namaste");
}
outerFunc(box, 1000);


// Odd and Even Functions:- 





function oddOreven(request) {
    if (request == "odd") {
        let odd = function (n) {
            console.log(!(n % 2 == 0));
        }

        return odd;

    } else if (request == "even") {
        let even = function (n) {
            console.log(n % 2 == 0);
        }
        return even;

    } else {
        console.log("It is not Odd nor Even");
    }

    



}