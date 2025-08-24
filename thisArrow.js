const student = {
    name: "Abhishek",
    grade: 92,
    prop: this,
    getName: function() {
        return this.name;
    },
    getMarks: () => {
        console.log(this);
        return this.grade;
    },

    getinfo: function() {
        setTimeout( () => {
            console.log(this);
        }, 2000);
    },

    getinfo2: function() {
       setTimeout( function() {
        console.log(this);
       }, 2000);
    },
};
