var dice = require("./dice.js");

//Describes the dice variable we set our die export to
console.log(dice);

//Creates new die variable and grabs the exported attributes from the dice.js file
//which defines the dice objects
var mySixDie = dice.exp_sixdie;
var myTwelveDie = dice.exp_twelvedie;
var myTwentyDie = dice.exp_twentydie;

console.log(mySixDie.roll(mySixDie.size));
console.log(mySixDie.roll(mySixDie.size));
console.log(mySixDie.roll(mySixDie.size));

console.log(myTwelveDie.roll(myTwelveDie.size));
console.log(myTwelveDie.roll(myTwelveDie.size));
console.log(myTwelveDie.roll(myTwelveDie.size));

console.log(myTwentyDie.roll(myTwentyDie.size));
console.log(myTwentyDie.roll(myTwentyDie.size));

//describe die objects
console.log("Total rolls of the " + mySixDie.type + " die: " + mySixDie.totalRolls);
console.log(mySixDie);
console.log("Total rolls of the " + myTwelveDie.type + " die: " + myTwelveDie.totalRolls);
console.log(myTwelveDie);
console.log("Total rolls of the " + myTwentyDie.type + " die: " + myTwentyDie.totalRolls);
console.log(myTwentyDie);