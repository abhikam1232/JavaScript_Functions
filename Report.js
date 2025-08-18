/** const information = {
    name: "John",
    class: "XB",
    maths: 89,
    Biology: 78,
    physics: 60,
    SocialSciences: 84,
    getTotal() {
        let total = (this.maths + this.Biology + this.SocialSciences);
        console.log(` ${this.name} got total marks of = ${total}` );
    } 
}
information.getTotal(); **/

// Create a code to get the report total marks, percentage and grade:- 

const report = {
    name: "Raghav",
    class: "XII",
    Maths: 77,
    Chemistry: 69,
    Biology: 83,
    IT: 89,
    Physics: 65,

    getResult() {
        let total = (this.Maths + this.Chemistry + this.Biology + this.IT + this.Physics);
        let percentage = (total / 500) * 100;

        console.log(` ${this.name} got total marks:- ${total} and percentage :- ${percentage}`)

        if (percentage <= 80) {  // If else is excuted for grades:- 
            console.log("Congratulations You got A grade");
        } else if (percentage <= 70) {
            console.log("Good Job you got B grade");
        } else if (percentage <= 50) {
            console.log("You got C Grade, Not bad!!");
        } else if (percentage <= 35 || percentage >= 59) {
            console.log(" You just passed");
        } else {
            console.log(" You failed ");
        }

        
    }
}

report.getResult();



