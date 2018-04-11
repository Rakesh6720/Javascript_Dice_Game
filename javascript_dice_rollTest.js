"use strict";
//AVAILABLE DICE
let diceFour = 4;
let diceSix = 6;
let diceEight = 8;
let diceTen = 10;
let diceTwelve = 12;
let diceTwenty = 20;

//LIST FUNCTIONS HERE
function rollDie(dieNumber) { //MASTER ROLL DICE function
	let rolledNumber = (Math.floor(Math.random() * dieNumber) + 1); 
	//return rolledNumber;
}

console.log(rollDie(diceTwenty));
console.log(rollDie(diceFour));
console.log(rollDie(diceFour));
console.log(rollDie(diceFour));