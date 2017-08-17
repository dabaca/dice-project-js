//using the dice.js file which defines the dice objects
var dice = require("./dice.js");

//Describes the dice variable we set our die export to
console.log(dice);

//Creates new die variable and grabs the exported attributes from the dice.js file
//which defines the dice objects
var mySixDie = dice.exp_sixdie;
var mySixDieRolls = 4;

var myTwelveDie = dice.exp_twelvedie;
var myTwelveDieRolls = 6;

var myTwentyDie = dice.exp_twentydie;
var myTwentyDieRolls = 5;


console.log("Rolling the " + mySixDie.type + " die " + mySixDieRolls + " times:");
for(i=0; i<mySixDieRolls; i++){
    console.log(mySixDie.roll(mySixDie.size));
}

console.log("Rolling the " + myTwelveDie.type + " die " + myTwelveDieRolls + " times:");
for(i=0; i<myTwelveDieRolls; i++){
    console.log(myTwelveDie.roll(myTwelveDie.size));
}

console.log("Rolling the " + myTwentyDie.type + " die " + myTwentyDieRolls + " times:");
for(i=0; i<myTwentyDieRolls; i++){
    console.log(myTwentyDie.roll(myTwentyDie.size));
}


//describe die objects
console.log("Total rolls of the " + mySixDie.type + " die: " + mySixDie.totalRolls);
console.log(mySixDie);
console.log("Total rolls of the " + myTwelveDie.type + " die: " + myTwelveDie.totalRolls);
console.log(myTwelveDie);
console.log("Total rolls of the " + myTwentyDie.type + " die: " + myTwentyDie.totalRolls);
console.log(myTwentyDie);