"use strict";
let startingHoneyPot = 500000000;
let currentHoneyPot;
let movieGenres = [];
let topActors = [];
let midActors = [];
let lowActors = [];
let userSayings = [];

topActors.push(new TopActor("Angelina", "Jolie", 25000000, 8));
topActors.push(new TopActor("Denzel", "Washington", 22000000, 7));
topActors.push(new TopActor("Jennifer", "Lawrence", 19000000, 5));
topActors.push(new TopActor("Meryll", "Streep", 20000000, 10));
topActors.push(new TopActor("Duane", "Johnson", 32000000, 3));

midActors.push(new MidActor("Angela", "Basset", 13000000, 7));
midActors.push(new MidActor("Taylor", "Kitsch", 9000000, 4));
midActors.push(new MidActor("Keanu", "Reeves", 11000000, 4));
midActors.push(new MidActor("Nicole", "Kidman", 10000000, 8));
midActors.push(new MidActor("Anna", "Kendrick", 8000000, 7));

lowActors.push(new LowActor("Terri", "Hatcher", 1000000, 2));
lowActors.push(new LowActor("Tom", "Selleck", 4000000, 9));
lowActors.push(new LowActor("Jennifer", "Garner", 6000000, 7));
lowActors.push(new LowActor("James", "McAvoy", 3000000, 3));

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

function TopActor(first, last, salary, status){ //TopActor Object constructor
	this.firstName = first;
	this.lastName = last;
	this.salary = salary;
	this.shame = status; //high shame, hig status.  low shame, low status.
}
	
function MidActor(first, last, salary, status) { //MidActor Object constructor
	this.firstName = first;
	this.lastName = last;
	this.salary = salary;
	this.shame = status;
}

function LowActor(first, last, salary, status) { //LowActor Object consructor
	this.firstName = first;
	this.lastName = last;
	this.salary = salary;
	this.shame = status;
}

function UserSaying(content, lewdnessFactor) {
	this.phrase = content;
	this.lewdness = lewdnessFactor;
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
	resultLevelOneActOne = levelOne_ActOne();
	console.log(resultLevelOneActOne);
	let returnedGenreChoices = [];	
	returnedGenreChoices = levelOneGetGenreChoices(resultLevelOneActOne);
	console.log(returnedGenreChoices);
	let levelOneHoneyPot = levelOneMakeGenreChoice(returnedGenreChoices);
	let director = levelTwo();
	let levelThreeHoneyPot = levelThree(director, levelOneHoneyPot);
	let userChosenActor = levelFour(levelThreeHoneyPot, director, returnedGenreChoices);
	levelFive(userChosenActor, director, returnedGenreChoices, levelThreeHoneyPot);
}

function levelFive() {
	alert("We're still working on this level!  Come back soon.");
	console.log("You've reached the second act of Hitting the Big Time!  Click BUY to purchase the next installment.");
}

function levelFour(levelThreeHoneyPot, director, returnedGenreChoices) {
let levelFourRollOne;
levelFourRollOne = rollDie(diceFour);
let levelFourActors = [];

levelFourActors.push(lowActors[levelFourRollOne]);
levelFourActors.push(midActors[levelFourRollOne]);
levelFourActors.push(topActors[levelFourRollOne]);
levelFourActors.push(lowActors[levelFourRollOne]);
levelFourActors.push(midActors[levelFourRollOne]);
levelFourActors.push(topActors[levelFourRollOne]);
levelFourActors.push(lowActors[levelFourRollOne]);
levelFourActors.push(midActors[levelFourRollOne]);
levelFourActors.push(topActors[levelFourRollOne]);

let levelFourActorOne;
levelFourActorOne = levelFourActors[rollDie(diceEight)];
alert("On the way out of the restaurant you bump into " + levelFourActorOne.firstName + " " + levelFourActorOne.lastName + " getting out of their UberX...");
alert("You roll your eight-sided di to determine your action...");
let levelFourRollTwo;
levelFourRollTwo = rollDie(diceEight);
alert("You decide to say...");

userSayings.push(new UserSaying("Hey, what's shaking, baby?  Do you want to talk about my new flick over dranks?", 3));
userSayings.push(new UserSaying("Yo yo yo yo, honey dew, I was just thinking about you.  Can I holla at you for a min?", 4));
userSayings.push(new UserSaying("Maaaan, I done loved your last flick.  Let's lock it up for this " + director + " project I got lined up.", 2));
userSayings.push(new UserSaying("My man, my man, my man, my man, I was just talking to " + director + "." + "Come sit down and lets talk about working together.", 2));
userSayings.push(new UserSaying("Hey, what's shaking, baby?  Do you want to talk about my new flick over dranks?", 5));
userSayings.push(new UserSaying("Yo yo yo yo, honey dew, I was just thinking about you.  Can I holla at you for a min?", 4));
userSayings.push(new UserSaying("Maaaan, I done loved your last flick.  Let's lock it up for this " + director + " project I got lined up.", 1));
userSayings.push(new UserSaying("My man, my man, my man, my man, I was just talking to " + director + "." + "Come sit down and lets talk about working together.", 2));

alert(userSayings[levelFourRollTwo].phrase);
	if (userSayings[levelFourRollTwo].lewdness >= 3 && levelFourActorOne.shame <= 7 || levelFourActorOne.shame <= 6) {
		alert(levelFourActorOne.firstName + " " + levelFourActorOne.lastName + " stops dead in their tracks and locks your eyes with their stare...");
		alert(levelFourActorOne.firstName + " " + levelFourActorOne.lastName + " nods toward their head of security, gives him their belongings, and...");
		alert("...puts their arm around yours.  " + levelFourActorOne.firstName + " " + levelFourActorOne.lastName + " says, 'I have been waiting a long time to work with you, and I am definitely interested in what you have to say.  Lets talk!");
		alert("Success!  You might have just landed yourself a lead actor for your next project.  Lets just hope " + levelFourActorOne.firstName + " " + levelFourActorOne.lastName + " and " + director + " can get along.  Off to Level 5!");
		return levelFourActorOne;
	}
	else {
		alert("Yikes, looked like you scared " + levelFourActorOne.firstName + " away with your shamelessness...");
		alert("That's not how movies are made in this town.  You should know that by now, but since you don't...");
		alert("Head back to Level 1 to figure it out.");
		levelThreeHoneyPot = currentHoneyPot;
		currentHoneyPot = 0;
		startingHoneyPot = 500000000;
		levelOneMakeGenreChoice(returnedGenreChoices);
	}
}
	


function levelThree(randomDirector, currentHoneyPot) {
	let directorInitialR;
	directorInitialR = midActors[rollDie(diceFour)].salary; 
	let directorInitialRate;
	directorInitialRate	= parseInt(directorInitialR);
	alert("Awesome!  " + randomDirector + " has accepted your offer and would like to meet for drinks at Per Se off Hollywood Boulevard.  You tell your assistant to hold your calls and cancel your private pilates session with your personal trainer Javi.  Press Return to head over to the restaurant!");
	alert(randomDirector + " loves the script you've sent their people.  But before they can get into business, " + randomDirector + " says, you have to talk to their agent.  " + randomDirector + " dials his cell phone and hands it to you.  You take the phone and grit your teeth.  It's contract time...(press Return to negotiate with " + randomDirector + "'s agent)");
	let userInputLevelThreeOne;
		userInputLevelThreeOne = prompt(randomDirector + "'s agent tells you her client wants " + toUSDollar(directorInitialRate) + " to shoot the picture.  Do you want to negotiate this rate?  Press 1 for 'YES' or 2 for 'NO'.");
	if (userInputLevelThreeOne == 1) {
		let directorAcceptedRate;
		directorAcceptedRate = negotiate(randomDirector, directorInitialRate);//what happens when you return this true or false?  If it's true you move on to level 4, otherwise you're kicked out to another scenario.  WHAT IS THAT SCENARIO?  Call it Plan B and board it out.
		console.log(directorAcceptedRate);
		let directorAcceptedRate2;
		directorAcceptedRate2 = parseInt(directorAcceptedRate);
		let levelThreeHoneyPotReturn;
		Number(currentHoneyPot);
			levelThreeHoneyPotReturn = currentHoneyPot - directorAcceptedRate2;
			parseInt(levelThreeHoneyPotReturn);
			if (levelThreeHoneyPotReturn >= 0) {
			console.log("Your new Honeypot amount is " + toUSDollar(levelThreeHoneyPotReturn));
			return levelThreeHoneyPotReturn;
			}
			else {
			alert("You ran out of money!  Hit the rehab spa in Sedona and try again in 6 months!");
			}
	}
	else {
		alert("you chose not to negotiate with " + randomDirector + "'s rate of " + toUSDollar(directorInitialRate) + " to make your movie.  Looks like you and " + randomDirector + " have a deal!  Head home to shower before you meet the writer whose script you chose this morning...");
		let levelThreeHoneyPotReturn = currentHoneyPot - directorInitialRate;
		console.log("Your new Honeypot total is " + toUSDollar(levelThreeHoneyPotReturn));
		return levelThreeHoneyPotReturn;
		//console.log("you did not agree to " + randomDirector + "'s initial rate of $" + directorInitialRate + " to make your movie.");
	}
}

function negotiate(opponent, opponentRateFirst) { //this is the negotiation function
	let acceptedCounterOffer;
	let userCounterAmount;
		userCounterAmount = prompt("You've chosen to negotiate with " + opponent + "'s agent.  " + opponent + "'s initial offer was " + toUSDollar(opponentRateFirst) + " dollars to direct your new movie. Enter your counter offer as a factor of 1 million and press Return.  (For example, to offer " + opponent + " $20 million enter the number 20 and press Return.  To offer " + opponent + " $12 million, enter 12 and pess return.  For $100 million enter 100 and press Return, etc."); 
	parseInt(userCounterAmount);
	let userCounter = userCounterAmount * 1000000;
	if (userCounter >= 0.25 * opponentRateFirst + opponentRateFirst) {
		//let opponentResponse = true;
		console.log("Nice!  " + opponent + " has accepted your offer!  Head back to your office to check your messages and get a back massage from your masseuse Tito.");
		userCounter = acceptedCounterOffer;
		return acceptedCounterOffer;
		//what do these boolean responses trigger when passed back to the levelThree function?
	}
	else if (userCounter <= opponentRateFirst - (0.75 * opponentRateFirst)) {
		//let opponentResponse = false;
		findNewDirector(opponent, opponentRateFirst);
	}
	else {
		let acceptedCounterOffer;
		acceptedCounterOffer = makeCounter(opponent, opponentRateFirst, userCounter);
		console.log("If you're reading this then you accepted " + opponent + "'s first counter offer of " + toUSDollar(acceptedCounterOffer) + " to direct your movie.  Great!  Let's get to work!");
		return acceptedCounterOffer;
	}
	
	return acceptedCounterOffer;
}

function findNewDirector(opponent,opponentRateFirst){ //invoke this function if the user rejects all the first director's rate offers.
	console.log("Ugh, it didn't work out with " + opponent + ".  It's okay, that's why you made a list.  Head back to your office to find a new director!");
	levelTwo();
}
	
function makeCounter(opponent, opponentRateFirst, userCounter) { // this is the counter negotiation function
	let opponentCounterOff = ((rollDie(diceSix) / 10) * opponentRateFirst) + opponentRateFirst;
	let opponentCounterOffer = parseInt(opponentCounterOff);
	alert(opponent + " has rejected your offer.  Press Return to see " + opponent + "'s agent's counter offer...");
	let userInputFirst = prompt(opponent + " has countered with a rate of " + toUSDollar(opponentCounterOffer) + " to direct your film.  Will you accept?  Press 1 for 'YES' and 2 for 'NO'...");
	if (userInputFirst == 1){
		return opponentCounterOffer;
	}
	else {
		let userInputSecond = prompt("You've rejected  " + opponent + "'s agent's counter offer of " + toUSDollar(opponentRateFirst) + " dollars to direct your new movie. Do you wish to make " + opponent + " another offer? Press 1 for 'YES' and 2 for 'NO'..." );
		if (userInputSecond == 1) {
			let userCounterCounter = prompt("Enter your counter offer to " + opponent + " as a factor of 1 million and press Return.  (For example, to offer " + opponent + " $20 million enter the number 20 and press Return.  To offer " + opponent + " $12 million, enter 12 and pess return.  For $100 million enter 100 and press Return, etc."); 
			parseInt(userCounterCounter) * 1000000;
				if (userCounterCounter > opponentRateFirst && rollDie(diceTwelve) % 2 == 0) {
					//launch continue with director move to level 4 function
					//console.log("Nice!  " + opponent + " has accepted your offer!  Head back to your office to check your messages and get a back-rub from your masseuse Tito.");
					return userCounterCounter;
				}
				else if (userCounterCounter > opponentRateFirst && rollDie(diceTwelve) % 2 !== 0) {
					console.log(opponent + "rejected your offer, you cheapskate!  " + opponent + " quits your movie and burns your reputation at their weekly poker game.");
					findNewDirector(opponent, opponentRateFirst);
				}
				else if (userCounterCounter < opponentRateFirst && rollDie(diceTen) == 6) {
					console.log("Nice!  " + opponent + " has accepted your offer!  Head back to your office to check your messages and get a back massage from your masseuse Tito.");
					return userCounterCounter;
					//launch continue with director move to level 4 function
				}
				else {
					findNewDirector(opponent, opponentRateFirst);
				}
		}
		else {
			//what happens if you accept the director's new rate?  you should subtract money from your honeypot and move on to level four
			console.log("Ugh, too bad!  " + opponent + " doesn't like your new rate.  " + opponent + " is leaving the project disappointed, but on good terms with you.");
			findNewDirector(opponent, opponentRateFirst);
		}
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
			if (userSelectedDirector == 1) {
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
	
	//alert("did you get the console to print out?");
	let userInputTwo = prompt("Your assistant brings to your desk four piles of scripts sorted by the genres listed below.  Each genre is followed by the size of the budget required to execute it.  Remember, the more a genre costs to produce the more difficult it becomes to return a profit.  However, with great risk there is great glory.  Please enter the number of the genre you'd like to produce: "); 
	
	if (userInputTwo == 1) {
		let genreBudgetInDollars = parseInt(Number(availableGenres[0].budget));
		alert("You've chosen the " + availableGenres[0].type + " genre.  That's going to cost you " + toUSDollar(genreBudgetInDollars) + ".  Press Return to continue...");
		//console.log(toUSDollar(genreBudgetInDollars));
		console.log("Here's what's left in your Honeypot: " + toUSDollar(currentHoneyPot = startingHoneyPot - genreBudgetInDollars));
		let result;
		currentHoneyPot = startingHoneyPot - genreBudgetInDollars;
		result = currentHoneyPot;
		return result;
	}
	else if (userInputTwo == 2) {
		let genreBudgetInDollars = parseInt(availableGenres[1].budget);
		alert("You've chosen the " + availableGenres[1].type + " genre.  That's going to cost you " + toUSDollar(genreBudgetInDollars) + ".  Press Return to continue...");
		console.log("Here's what's left in your Honeypot: " + toUSDollar(currentHoneyPot = startingHoneyPot - genreBudgetInDollars));
		let result;
		currentHoneyPot = startingHoneyPot - genreBudgetInDollars;
		result = currentHoneyPot;
		return result;//return currentHoneyPot;//currentHoneyPot = subtractFromHoneyPot(startingHoneyPot, genreBudgetInDollars);
	}
	else if (userInputTwo == 3) {
		let genreBudgetInDollars = parseInt(availableGenres[2].budget);
		alert("You've chosen the " + availableGenres[2].type + " genre.  That's going to cost you " + toUSDollar(genreBudgetInDollars) + ".  Press Return to continue...");
		console.log("Here's what's left in your Honeypot: " + toUSDollar(currentHoneyPot = startingHoneyPot - genreBudgetInDollars));
		let result;
		currentHoneyPot = startingHoneyPot - genreBudgetInDollars;
		result = currentHoneyPot;
		return result;//return currentHoneyPot;//currentHoneyPot = subtractFromHoneyPot(startingHoneyPot, genreBudgetInDollars);
		//return currentHoneyPot;
	}
	else {
		let genreBudgetInDollars = parseInt(availableGenres[3].budget);
		alert("You've chosen the " + availableGenres[3].type + " genre.  That's going to cost you " + toUSDollar(genreBudgetInDollars) + ".  Press Return to continue...");
		console.log("Here's what's left in your Honeypot: " + toUSDollar(currentHoneyPot = startingHoneyPot - genreBudgetInDollars));
		let result;
		currentHoneyPot = startingHoneyPot - genreBudgetInDollars;
		result = currentHoneyPot;
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