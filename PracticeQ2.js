// Q2 Create a Function to roll a dice and always display the value from ( 1 to 6);

function rollDice(){
    let value = Math.floor( Math.random()*6)+1;
    console.log(`The value of Dice you have rolled is:- ${value}`);
}

let input = prompt(" Enter yes/no to roll a dice:- ");

if (input == "yes"){
    rollDice();
} else{
    console.log(" The Dice has not Rolled");
}


