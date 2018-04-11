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
	return rolledNumber;
}

/*function levelTwoRoll(){
	for (let i = 0; i<3; i++) {
		let levelTwoRollOne = rollDie(dieTen);
			if(levelTwoRollOne = 1 || 6) {
				directorOne === false;
			}
			Else if { (levelTwoRollOne = 2 || 7)
				directorTwo === false;
			}
			Else if { (levelTwoRollOne = 3 || 8) 
				directorThree === false;
			}
			Else if { (levelTwoRollOne = 4 || 9) 
				directorFour === false;
			}
			Else {
				directorFive ===false;
			}
	}
	}
*/
function toUSDollar(numberAmount) {//MASTER CONVERT TO US DOLLAR FUNCTION
console.log((numberAmount).toLocaleString('en-US', {
  style: 'currency',
  currency: 'USD',
})); /* $2,500.00 */
}

function createGenre(genre, amount, i){
	let newGenre = new Genre(genre, amount);
	movieGenres.push(newGenre);
	//console.log(movieGenres[i]);
}

function createTopActor(first, last, salary, i){
	let newActor = new TopActor(first, last, salary);
	topActors.push(newActor);
	//console.log(topActors[i]);
}

function createMidActor(first, last, salary, i){
	let newActor = new MidActor(first, last, salary);
	midActors.push(newActor);
}

function createLowActor(first, last, salary, i){
	let newActor = new LowActor(first, last, salary);
	lowActors.push(newActor);
}
/*function createObject(objectClassName, fullName, salary, i){
	let newArray = [];
	let newObject = new objectClassName(x, y);
	newArray.push(newObject);
	console.log(newArray[i]);
}

createObject(new topActors, new Angelina_Jolie, 25000000, 0);
*/

//place object consructors here
function Genre(genre, budget){ // MASTER GENRE OBJECT CONSTRUCTOR FUNCTION
	this.type = genre;
	this.budget = budget;
}

function TopActor(first, last, salary){
	this.firstName = first;
	this.lastName = last;
	this.salary = salary;
}
	
function MidActor(first, last, salary) {
	this.firstName = first;
	this.lastName = last;
	this.salary = salary;
}

function LowActor(first, last, salary) {
	this.firstName = first;
	this.lastName = last;
	this.salary = salary;
}
	
	//BELOW IS ANDREW'S MODEL FOR BUILDING AN OBJECT CONSTRUCTOR
	/*
	function student(name, age){ //this is an object constructor
	this.age = age;
	this.name = name;
	}

	let students = [];
	students.push( new student("adff", 34));

	students[0].age

	loop
	if (students[
*/

//LIST DIFFERENT DATA SETS HERE:
let movieGenres = [];
let topActors = [];
let midActors = [];
let lowActors = [];
let directorsArray = [];

topActors.push(new TopActor("Angelina", "Jolie", 25000000, 0));
topActors.push(new TopActor("Angelina", "Jolie", 25000000, 0));
topActors.push(new TopActor("Denzel", "Washington", 22000000, 1));
topActors.push(new TopActor("The Rock", "", 19000000, 2));
topActors.push(new TopActor("Meryll", "Streep", 20000000, 3));
/*for(let i=0; i<=topActors.length; i++){
console.log(topActors[i]);
}
*/

//createMidActor("Angela", "Basset", 13000000);
midActors.push(new MidActor("Angela", "Basset", 13000000));
//createMidActor("Taylor", "Kitsch", 9000000);
midActors.push(new MidActor("Taylor", "Kitsch", 9000000));
//createMidActor("Keanu", "Reeves", 11000000);
midActors.push(new MidActor("Keanu", "Reeves", 11000000));
//createMidActor("Kidman", "Nicole", 10000000);
midActors.push(new MidActor("Kidman", "Nicole", 10000000));
//for(let i=0; i<=midActors.length; i++){
//console.log(midActors[i]);}

//LowActor("Terri", "Hatcher", 1000000);
//LowActor("Tom", "Selleck", 4000000);
//LowActor("Jennifer", "Garner", 6000000);
//LowActor("James", "McAvoy", 3000000);
lowActors.push(new LowActor("Terri", "Hatcher", 1000000));
lowActors.push(new LowActor("Tom", "Selleck", 4000000));
lowActors.push(new LowActor("Jennifer", "Garner", 6000000));
lowActors.push(new LowActor("James", "McAvoy", 3000000));
//for(let i=0; i<=lowActors.length; i++){
//console.log(lowActors[i]);}


createGenre("action", 200000000, 0);
createGenre("romance", 35000000, 1);
createGenre("comedy", 45000000, 2);
createGenre("suspense", 30000000, 3);
createGenre("children's animated", 100000000, 4);
createGenre("children's live-action", 40000000, 5);
createGenre("musical drama", 75000000, 6);
createGenre("musical comedy", 50000000, 7);
createGenre("war", 150000000, 8);
createGenre("young adult", 20000000, 9);
createGenre("mystery", 50000000, 10);
createGenre("chase", 28000000, 11);
createGenre("heist", 65000000, 12);
createGenre("period drama", 70000000, 13);
createGenre("sci-fi space opera", 300000000, 14);
createGenre("sci-fi time-travel", 120000000, 15);
createGenre("sci-fi dystopian", 125000000, 16); 
createGenre("fantasy", 112000000, 17);
createGenre("indie drama", 7000000, 18);
createGenre("indie comedy", 9000000, 19);
createGenre("musical drama", 75000000, 20);

console.log(movieGenres[18]);
/*for(let i=0; i<=movieGenres.length; i++){
console.log(movieGenres[i]);
}

toUSDollar(movieGenres[7].budget);



let movieGenre = ["action -- $200 million", "romance -- $35 million", "comedy -- $45 million", "suspense -- $30 million", "children's animated -- $100 million", "children's live-action -- $40 million", "musical drama -- $ 75 million", "musical comedy -- $50 million", "war -- $150 million", "young adult -- $20 million", "mystery -- $50 million", "chase -- $80 million", "heist -- $65 million", "period drama -- $70 million", "sci-fi space -- $300 million", "sci-fi time-travel -- $120 million", "sci-fi dystopian -- $125 million", "fantasy -- $112 million", "indie drama -- $7 million", "indie comedy -- $9 million"];
console.log("movieGenre array length = " + movieGenre.length);

let highActorsArray = ["Angelina Jolie", "Denzel Washington", "The Rock", "Meryll Streep"];

let midActorsArray = ["Kevin Hart", "Bradley Cooper", "Emily Blunt", "Jenifer Lawrence"];

let lowActorsArray = ["Terri Hatcher", "Stacey Dash", "Alicia Silverstone", "Roseanne Bar"];

*/

let userInputStart = prompt("Welcome to Hitting the Big Time!  You are a big money producer with $500,000,000 in the bank.  Are you ready to make a movie? Y/N");

if (userInputStart === "Y") {
	playGame();
}
else {
	alert("Goodbye!");
}

function playGame() {
	//this is the master game function
	//STEP 1: CALL LEVEL ONE Function
	
	let userSelectedGenre = levelOne();
	levelTwo();

}

function levelOne() {
		//STEP 1: ROLL THE DICE TO SELECT THE 4 GENRES YOU CAN CHOOSE FROM
	//Can I make LEVEL 1 into its own function?
	let genreRollOne = rollDie(diceTwenty);
	let genreRollTwo = rollDie(diceTwenty);
	let genreRollThree = rollDie(diceTwenty);
	let genreRollFour = rollDie(diceTwenty);
	//STEP 2: ASSOCIATE THE ROLLED NUMBER W/ A GENRE FROM THE GENRE Array
	//console.log(movieGenres[genreRollOne].);
	let genreOne = movieGenres[genreRollOne];
	console.log("1. " + genreOne.type + ", cost $" + genreOne.budget);
	let genreTwo = movieGenres[genreRollTwo]
	console.log("2. " + genreTwo.type + ", cost $" + genreTwo.budget);
	let genreThree = movieGenres[genreRollThree];
	console.log("3. " + genreThree.type + ", cost $" + genreThree.budget);
	let genreFour = movieGenres[genreRollFour];
	console.log("4. " + genreFour.type + ", cost $" + genreFour.budget); 
	let userInputTwo = prompt("Your assistant brings to your desk four piles of scripts sorted by the genres listed below.  Each genre is followed by the size of the budget required to execute it.  Remember, the more a genre costs to produce the more difficult it becomes to return a profit.  However, with great risk there is great glory.  Please enter the number of the genre you'd like to produce: "); 
	//console.log(userInputTwo);
	return userInputTwo;
}

function levelTwo() {
	alert("In the following prompts please enter your top 5 choices for directors you would like to work with on your film.  Press Enter to continue...");
	let directorOne = prompt("Enter the name of a director and hit return: ");
	let directorTwo = prompt("Enter the name of a director and hit return: ");
	let directorThree = prompt("Enter the name of a director and hit return: ");
	let directorFour = prompt("Enter the name of a director and hit return: ");
	let directorFive = prompt("Enter the name of a director and hit return: ");
	directorsArray.push(directorOne, directorTwo, directorThree, directorFour, directorFive);
	console.log(directorsArray.length);
	console.log("You bang your desk and summon your assistant through the door.  You tell him to get " + directorOne + ", " + directorTwo + ", " + directorThree + ", " + directorFour +  " and " + directorFive + " on the phone, ASAP!");
	
	for (let i = 0; i<2; i++) {
		let levelTwoRollOne = rollDie(10);
			if(levelTwoRollOne == 1 || levelTwoRollOne == 6) {
				directorOne === false;
				console.log(levelTwoRollOne);
			} else if (levelTwoRollOne == 2 || levelTwoRollOne == 7) {
				directorTwo === false;
				console.log(levelTwoRollOne);
			} else if (levelTwoRollOne === 3 || 8) {
				directorThree === false;
				console.log(levelTwoRollOne);
			} else if(levelTwoRollOne === 4 || 9) {
				directorFour === false;
				console.log(levelTwoRollOne);
			}
			else {
				directorFive ===false;
				console.log(levelTwoRollOne);
			}
	}
}






	
	
	
