var sixDie = { //defining an ojbect
    size: 6, //setting size to default to 6
    type: "Cube", //setting type to default to standard 6-sided
    totalRolls: 0,
    totalCount: 0,
    roll: function(dieSize) { //defining function named 'roll'
        var die = Math.ceil(dieSize*Math.random());
        this.totalRolls++;
        this.totalCount+=die;
        return die;
    },
    reset: function() {
        this.totalRolls=0;
        this.totalCount=0;
    }
};

var twelveDie = { //defining an ojbect
    size: 12, //setting size to default to 6
    type: "Dodecahedron", //setting type to default to standard 6-sided
    totalRolls: 0,
    totalCount: 0,
    roll: function(dieSize) { //defining function named 'roll'
        var die = Math.ceil(dieSize*Math.random());
        this.totalRolls++;
        this.totalCount+=die;
        return die;
    },
    reset: function() {
        this.totalRolls=0;
        this.totalCount=0;
    }
};

var twentyDie = { //defining an ojbect
    size: 20, //setting size to default to 6
    type: "Icosahedron", //setting type to default to standard 6-sided
    totalRolls: 0,
    totalCount: 0,
    roll: function(dieSize) { //defining function named 'roll'
        var die = Math.ceil(dieSize*Math.random());
        this.totalRolls++;
        this.totalCount+=die;
        return die;
    },
    reset: function() {
        this.totalRolls=0;
        this.totalCount=0;
    }
};

//exports is an object in javascript and we are adding new attribute die that we're
//setting to the die object to be exported to the program.js file
exports.exp_sixdie = sixDie;
exports.exp_twelvedie = twelveDie;
exports.exp_twentydie = twentyDie;