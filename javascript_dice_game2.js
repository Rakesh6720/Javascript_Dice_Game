"use strict";
let startingHoneyPot = 500000000;
let currentHoneyPot;
let movieGenres = [];
let topActors = [];
let midActors = [];
let lowActors = [];

topActors.push(new TopActor("Angelina", "Jolie", 25000000));
topActors.push(new TopActor("Denzel", "Washington", 22000000));
topActors.push(new TopActor("Jennifer", "Lawrence", 19000000));
topActors.push(new TopActor("Meryll", "Streep", 20000000));
topActors.push(new TopActor("Duane", "Johnson", 32000000));

midActors.push(new MidActor("Angela", "Basset", 13000000));
midActors.push(new MidActor("Taylor", "Kitsch", 9000000));
midActors.push(new MidActor("Keanu", "Reeves", 11000000));
midActors.push(new MidActor("Kidman", "Nicole", 10000000));
lowActors.push(new LowActor("Terri", "Hatcher", 1000000));
lowActors.push(new LowActor("Tom", "Selleck", 4000000));
lowActors.push(new LowActor("Jennifer", "Garner", 6000000));
lowActors.push(new LowActor("James", "McAvoy", 3000000));

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

function Genre(genre, budget){ // MASTER GENRE OBJECT CONSTRUCTOR FUNCTION
	this.type = genre;
	this.budget = budget;
}

function createGenre(genre, amount, i){ //Genre consructor w/ array push
	let newGenre = new Genre(genre, amount);
	movieGenres.push(newGenre);
	//console.log(movieGenres[i]);
}

function TopActor(first, last, salary){ //TopActor Object constructor
	this.firstName = first;
	this.lastName = last;
	this.salary = salary;
}
	
function MidActor(first, last, salary) { //MidActor Object constructor
	this.firstName = first;
	this.lastName = last;
	this.salary = salary;
}

function LowActor(first, last, salary) { //LowActor Object consructor
	this.firstName = first;
	this.lastName = last;
	this.salary = salary;
}


let diceFour = 4;
let diceSix = 6;
let diceEight = 8;
let diceTen = 10;
let diceTwelve = 12;
let diceTwenty = 20;

function rollDie(dieNumber) { //MASTER ROLL DICE function
	let rolledNumber = (Math.floor(Math.random() * dieNumber) + 1); 
	return rolledNumber;
}

function toUSDollar(numberAmount) {//MASTER CONVERT TO US DOLLAR FUNCTION
	let result = (numberAmount).toLocaleString('en-US', {
	style: 'currency', currency: 'USD',}); /* $2,500.00 */
	return result;
}

let userInputStart = prompt("Welcome to Hitting the Big Time!  You are a big money producer with $500,000,000 in the bank.  Are you ready to make a movie? Y/N");
	if (userInputStart == "Y") {
		playGame();
	}
	else {
		alert("Goodbye!");
	}

function playGame() {
	let resultLevelOneActOne = [];
	let returnedGenreChoices = [];
	resultLevelOneActOne = levelOne_ActOne();
	//console.log(resultLevelOneActOne);
	returnedGenreChoices = levelOneGetGenreChoices(resultLevelOneActOne);
	console.log(returnedGenreChoices);
	let levelOneHoneyPot = levelOneMakeGenreChoice(returnedGenreChoices);
	let director = levelTwo();
	levelThree(director);
	
}

function levelThree(randomDirector) {
	let directorInitialRate = midActors[rollDie(diceFour)].salary; 
	parseInt(directorInitialRate);
	alert("Awesome!  " + randomDirector + " has accepted your offer and would like to meet for drinks at Per Se off Hollywood Boulevard.  You tell your assistant to hold your calls and cancel your private pilates session with your personal trainer Javi.  Press Return to head over to the restaurant!");
	alert(randomDirector + " loves the script you've sent their people.  But before they can get into business, " + randomDirector + " says, you have to talk to their agent.  " + randomDirector + " dials his cell phone and hands it to you.  You take the phone and grit your teeth.  It's contract time...(press Return to negotiate with " + randomDirector + "'s agent)");
	let userInputLevelThreeOne = prompt(randomDirector + "'s agent tells you her client wants $" + directorInitialRate + " to shoot the picture.  Do you want to negotiate this rate?  Press 1 for 'YES' or 2 for 'NO'.");
	if (userInputLevelThreeOne == 1) {
		negotiate(randomDirector, directorInitialRate);//what happens when you return this true or false?  If it's true you move on to level 4, otherwise you're kicked out to another scenario.  WHAT IS THAT SCENARIO?  Call it Plan B and board it out.
		//if (true == negotiate(randomDirector, directorInitialRate)){
		//kick out to level 4; }
		//else { kick out to Plan B
		console.log("if you're reading this it means the negotiate function worked");
	}
	else {
		console.log("you chose not to negotiate with " + randomDirector + "'s rate of $" + directorInitialRate + " to make your movie.  Looks like you and " + randomDirector + " have a deal!  Head home to shower before you meet the writer whose script you chose this morning...");
		//console.log("you did not agree to " + randomDirector + "'s initial rate of $" + directorInitialRate + " to make your movie.");
	}
}

function levelTwo() {
	alert("In the following prompts please enter your top 3 choices for directors you would like to work with on your film.  Press Enter to continue...");
	let directorOne = prompt("Enter the name of a director and hit return: ");
	let directorTwo = prompt("Enter the name of a director and hit return: ");
	let directorThree = prompt("Enter the name of a director and hit return: ");
	let directorsArray = [];
	directorsArray.push(directorOne);
	directorsArray.push(directorTwo);
	directorsArray.push(directorThree);
	console.log(directorsArray); //Print the chosen directors as a string w/ commas
	console.log("You bang your desk and summon your assistant through the door.  You tell him to get " + directorOne + ", " + directorTwo + ", and " + directorThree + " on the phone, ASAP!");
	
let levelTwoRollOne = rollDie(diceTen);
	if(levelTwoRollOne == 1 || levelTwoRollOne == 6 || levelTwoRollOne == 4){
		//directorOne === false;
		console.log(levelTwoRollOne);
		let unavailableDirectors = [];
		unavailableDirectors = directorsArray.slice(0, 1);
		console.log(unavailableDirectors);
		let availableDirectors = [];
		availableDirectors.push(directorTwo);
		availableDirectors.push(directorThree);
		console.log(availableDirectors);
		console.log("Uh-oh, " + unavailableDirectors[0] + " is unavailable until 2020.");
		console.log("Your two options are " + availableDirectors[0] + " and " + availableDirectors[1]);
		let userSelectedDirector = prompt("Press 1 for " + availableDirectors[0] + " and 2 for " + availableDirectors[1]);
			if (userSelectedDirector === 1) {
				let chosenDirector = availableDirectors[0];
				return chosenDirector;
			}
		else {
			let chosenDirector = availableDirectors[1];
			return chosenDirector;
		}
	} 
	else if (levelTwoRollOne == 2 || levelTwoRollOne == 7 || levelTwoRollOne == 9) {
		//directorTwo === false;
		console.log(levelTwoRollOne);
		let unavailableDirectors = [];
		unavailableDirectors = directorsArray.slice(1, 2); 
		console.log(unavailableDirectors);
		let availableDirectors = [];
		availableDirectors.push(directorOne);
		availableDirectors.push(directorThree);
		console.log(availableDirectors);
		console.log("Uh-oh, " + unavailableDirectors[0] + " is in rehab for LaCroix abuse.");
		console.log("Your two options are " + availableDirectors[0] + " and " + availableDirectors[1]);
		let userSelectedDirector = prompt("Press 1 for " + availableDirectors[0] + " and 2 for " + availableDirectors[1]);
		if (userSelectedDirector == 1) {
			let chosenDirector = availableDirectors[0];
			return chosenDirector;
		}
		else {
			let chosenDirector = availableDirectors[1];
			return chosenDirector;
		}
	} 
	else if (levelTwoRollOne == 3 || levelTwoRollOne == 5 || levelTwoRollOne == 9) {
		//directorThree === false;
		console.log(levelTwoRollOne);
		let unavailableDirectors = [];
		let availableDirectors = [];
		unavailableDirectors = directorsArray.slice(2, 3);
		console.log(unavailableDirectors);
		availableDirectors.push(directorOne); 
		availableDirectors.push(directorTwo);
		console.log(availableDirectors);
		console.log("Uh-oh, " + unavailableDirectors[0] + " is unavailable because of an injury suffered during a para-skiing commercial shoot.");
		console.log("Your two options are " + availableDirectors[0] + " and " + availableDirectors[1]);
		let userSelectedDirector = prompt("Press 1 for " + availableDirectors[0] + " and 2 for " + availableDirectors[1]);
			if (userSelectedDirector == 1) {
				let chosenDirector = availableDirectors[0];
				return chosenDirector;
			}
			else {
				let chosenDirector = availableDirectors[1];
				return chosenDirector;
			}
	}
	else {
		console.log(levelTwoRollOne);
		let availableDirectors = [];
		availableDirectors.push(directorOne);
		availableDirectors.push(directorTwo); 
		availableDirectors.push(directorThree);
		console.log("Yay, all your choices for director are available!");
		console.log("Of the directors" + directorsArray + " which director would you like to work with?");
		let userSelectedDirector = prompt("Press 1 for " + availableDirectors[0] + ", 2 for " + availableDirectors[1] + ", and 3 for " + availableDirectors[2]);
			if (userSelectedDirector == 1) {
				let chosenDirector = availableDirectors[0];
				return chosenDirector;
			}
			else if(userSelectedDirector == 2) {
				let chosenDirector = availableDirectors[1];
				return chosenDirector;
			}
			else {
				let chosenDirector = availableDirectors[2];
				return chosenDirector;
			}
	}		
}


function levelOneMakeGenreChoice (availableGenres) {	
	console.log("1. " + availableGenres[0].type + ", cost " + toUSDollar(availableGenres[0].budget));
	console.log("2. " + availableGenres[1].type + ", cost " + toUSDollar(availableGenres[1].budget));
	console.log("3. " + availableGenres[2].type + ", cost " + toUSDollar(availableGenres[2].budget));
	console.log("4. " + availableGenres[3].type + ", cost " + toUSDollar(availableGenres[3].budget));
	
	alert("did you get the console to print out?");
	let userInputTwo = prompt("Your assistant brings to your desk four piles of scripts sorted by the genres listed below.  Each genre is followed by the size of the budget required to execute it.  Remember, the more a genre costs to produce the more difficult it becomes to return a profit.  However, with great risk there is great glory.  Please enter the number of the genre you'd like to produce: "); 
	
	if (userInputTwo == 1) {
		let genreBudgetInDollars = parseInt(Number(availableGenres[0].budget));
		alert("You've chosen the " + availableGenres[0].type + " genre.  That's going to cost you " + toUSDollar(genreBudgetInDollars) + ".  Press Return to continue...");
		//console.log(toUSDollar(genreBudgetInDollars));
		console.log("Here's what's left in your Honeypot: " + toUSDollar(currentHoneyPot = startingHoneyPot - genreBudgetInDollars));
		let result = toUSDollar(currentHoneyPot = startingHoneyPot - genreBudgetInDollars);
		return result;//return currentHoneyPot;
	}
	else if (userInputTwo == 2) {
		let genreBudgetInDollars = parseInt(availableGenres[1].budget);
		alert("You've chosen the " + availableGenres[1].type + " genre.  That's going to cost you " + toUSDollar(genreBudgetInDollars) + ".  Press Return to continue...");
		console.log("Here's what's left in your Honeypot: " + toUSDollar(currentHoneyPot = startingHoneyPot - genreBudgetInDollars));
		let result = toUSDollar(currentHoneyPot = startingHoneyPot - genreBudgetInDollars);
		return result;//return currentHoneyPot;//currentHoneyPot = subtractFromHoneyPot(startingHoneyPot, genreBudgetInDollars);
	}
	else if (userInputTwo == 3) {
		let genreBudgetInDollars = parseInt(availableGenres[2].budget);
		alert("You've chosen the " + availableGenres[2].type + " genre.  That's going to cost you " + toUSDollar(genreBudgetInDollars) + ".  Press Return to continue...");
		console.log("Here's what's left in your Honeypot: " + toUSDollar(currentHoneyPot = startingHoneyPot - genreBudgetInDollars));
		let result = toUSDollar(currentHoneyPot = startingHoneyPot - genreBudgetInDollars);
		return result;//return currentHoneyPot;//currentHoneyPot = subtractFromHoneyPot(startingHoneyPot, genreBudgetInDollars);
		//return currentHoneyPot;
	}
	else {
		let genreBudgetInDollars = parseInt(availableGenres[3].budget);
		alert("You've chosen the " + availableGenres[3].type + " genre.  That's going to cost you " + toUSDollar(genreBudgetInDollars) + ".  Press Return to continue...");
		console.log("Here's what's left in your Honeypot: " + toUSDollar(currentHoneyPot = startingHoneyPot - genreBudgetInDollars));
		let result = toUSDollar(currentHoneyPot = startingHoneyPot - genreBudgetInDollars);
		return result;//return currentHoneyPot;//currentHoneyPot = subtractFromHoneyPot(startingHoneyPot, genreBudgetInDollars);
		//return currentHoneyPot;
	}
}


function levelOneGetGenreChoices(resultLevelOneActOne) {
	let availableGenres = [];
	let genreOne = movieGenres[resultLevelOneActOne[0]];
	let genreTwo = movieGenres[resultLevelOneActOne[1]];
	let genreThree = movieGenres[resultLevelOneActOne[2]];
	let genreFour = movieGenres[resultLevelOneActOne[3]];
	//console.log(genreOne, genreTwo, genreThree, genreFour);
	
	availableGenres.push(genreOne);
	availableGenres.push(genreTwo);
	availableGenres.push(genreThree);
	availableGenres.push(genreFour);
	console.log(availableGenres);
	return availableGenres;
}

function levelOne_ActOne() {
	let levelOneRollOne = [];
	let genreRollOne;
	let genreRollTwo;
	let genreRollThree;
	let genreRollFour;

	genreRollOne = rollDie(diceTwenty);
	genreRollTwo = rollDie(diceTwenty);
	genreRollThree = rollDie(diceTwenty);
	genreRollFour = rollDie(diceTwenty);
	
	
	levelOneRollOne.push(genreRollOne);
	levelOneRollOne.push(genreRollTwo);
	levelOneRollOne.push(genreRollThree);
	levelOneRollOne.push(genreRollFour);
	
	//console.log(levelOneRollOne);
	return levelOneRollOne;
}