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
console.log("Total count of rolls: " + mySixDie.totalCount);
mySixDie.reset();


console.log("Rolling the " + myTwelveDie.type + " die " + myTwelveDieRolls + " times:");
for(i=0; i<myTwelveDieRolls; i++){
    console.log(myTwelveDie.roll(myTwelveDie.size));
}
console.log("Total count of rolls: " + myTwelveDie.totalCount);
myTwelveDie.reset();


console.log("Rolling the " + myTwentyDie.type + " die " + myTwentyDieRolls + " times:");
for(i=0; i<myTwentyDieRolls; i++){
    console.log(myTwentyDie.roll(myTwentyDie.size));
}
console.log("Total count of rolls: " + myTwentyDie.totalCount);
myTwentyDie.reset();
