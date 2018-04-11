"use strict";



/*function createObject(objectClassName, fullName, salary, i){
	let newArray = [];
	let newObject = new objectClassName(x, y);
	newArray.push(newObject);
	console.log(newArray[i]);
}

createObject(new topActors, new Angelina_Jolie, 25000000, 0);
*/

//place object consructors here

	
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
function rollDie(dieNumber) { //MASTER ROLL DICE function
	let rolledNumber = (Math.floor(Math.random() * dieNumber) + 1); 
	return rolledNumber;
}

function createGenre(genre, amount, i){ //Genre consructor w/ array push
	let newGenre = new Genre(genre, amount);
	movieGenres.push(newGenre);
	//console.log(movieGenres[i]);
}

function createTopActor(first, last, salary, i){ //topActor constructor w/ array push
	let newActor = new TopActor(first, last, salary);
	topActors.push(newActor);
	//console.log(topActors[i]);
}

function createMidActor(first, last, salary, i){ //MidACtor constructor w/ array push
	let newActor = new MidActor(first, last, salary);
	midActors.push(newActor);
}

function createLowActor(first, last, salary, i){ //LowActor consructor w/ array push
	let newActor = new LowActor(first, last, salary);
	lowActors.push(newActor);
}

function toUSDollar(numberAmount) {//MASTER CONVERT TO US DOLLAR FUNCTION
console.log((numberAmount).toLocaleString('en-US', {
  style: 'currency',
  currency: 'USD',
})); /* $2,500.00 */
}

//LIST DIFFERENT DATA SETS HERE:
let diceFour = 4;
let diceSix = 6;
let diceEight = 8;
let diceTen = 10;
let diceTwelve = 12;
let diceTwenty = 20;
let movieGenres = [];
let topActors = [];
let midActors = [];
let lowActors = [];
let directorsArray = [];
let unavailableDirectors = [];
let availableDirectors = [];

//Call all the Actor Object Constructor push to Array functions to populate the actor lists
topActors.push(new TopActor("Angelina", "Jolie", 25000000));
topActors.push(new TopActor("Denzel", "Washington", 22000000));
topActors.push(new TopActor("Jennifer", "Lawrence", 19000000));
topActors.push(new TopActor("Meryll", "Streep", 20000000));
topActors.push(new TopActor("Duane", "Johnson", 32000000));
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
*/

//LIST FUNCTIONS HERE
function Genre(genre, budget){ // MASTER GENRE OBJECT CONSTRUCTOR FUNCTION
	this.type = genre;
	this.budget = budget;
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

function findNewDirector(opponent,opponentRateFirst){ //invoke this function if the user rejects all the first director's rate offers.
	console.log("Ugh, it didn't work out with " + opponent + ".  It's okay, that's why you made a list.  Head back to your office to find a new director!");
}

function negotiate(opponent, opponentRateFirst) { //this is the negotiation function
	let userCounterAmount = prompt("You've chosen to negotiate with " + opponent + "'s agent.  " + opponent + "'s initial offer was " + opponentRateFirst + " dollars to direct your new movie. Enter your counter offer as a factor of 1 million and press Return.  (For example, to offer " + opponent + " $20 million enter the number 20 and press Return.  To offer " + opponent + " $12 million, enter 12 and pess return.  For $100 million enter 100 and press Return, etc."); 
	parseInt(userCounterAmount);
	let userCounter = userCounterAmount * 1000000;
	if (userCounter >= 0.75 * opponentRateFirst + opponentRateFirst) {
		let opponentResponse = true;
		console.log("Nice!  " + opponent + " has accepted your offer!  Head back to your office to check your messages and get a back massage from your masseuse Tito.");
		//what do these boolean responses trigger when passed back to the levelThree function?
	}
	else if (userCounter <= 0.15 * opponentRateFirst + opponentRateFirst) {
		let opponentResponse = false;
		findNewDirector(opponent, opponentRateFirst);
	}
	else {
		let opponentCounterOffer = makeCounter(opponent, opponentRateFirst, userCounter);
		console.log("If you're reading this then you accepted " + opponent + "'s first counter offer of $" + opponentCounterOffer + " to direct your movie.  Great!  Let's get to work!");
	}
}

function makeCounter(opponent, opponentRateFirst, userCounter) { // this is the counter negotiation function
	let opponentCounterOffer = ((rollDie(diceSix) / 10) + opponentRateFirst) + opponentRateFirst;
	parseInt(opponentCounterOffer);
	alert(opponent + " has rejected your offer.  Press Return to see " + opponent + "'s agent's counter offer...");
	let userInputFirst = prompt(opponent + " has countered with a rate of $" + opponentCounterOffer + " to direct your film.  Will you accept?  Press 1 for 'YES' and 2 for 'NO'...");
	if (userInputFirst == 1){
		return opponentCounterOffer;
	}
	else {
		let userInputSecond = prompt("You've rejected  " + opponent + "'s agent's counter offer of $" + opponentRateFirst + " dollars to direct your new movie. Do you wish to make " + opponent + " another offer? Press 1 for 'YES' and 2 for 'NO'..." );
		if (userInputSecond == 1) {
			let userCounterCounter = prompt("Enter your counter offer to " + opponent + " as a factor of 1 million and press Return.  (For example, to offer " + opponent + " $20 million enter the number 20 and press Return.  To offer " + opponent + " $12 million, enter 12 and pess return.  For $100 million enter 100 and press Return, etc."); 
			parseInt(userCounterCounter);
				if (userCounterCounter > opponentRateFirst && rollDie(diceTwelve) % 2 == 0) {
					//launch continue with director move to level 4 function
					console.log("Nice!  " + opponent + " has accepted your offer!  Head back to your office to check your messages and get a back-rub from your masseuse Tito.");
				}
				else if (userCounterCounter > opponentRateFirst && rollDie(diceTwelve) % 2 !== 0) {
					console.log(opponent + "rejected your offer, you cheapskate!  " + opponent + " quits your movie and burns your reputation at their weekly poker game.");
					findNewDirector(opponent, opponentRateFirst);
				}
				else if (userCounterCounter < opponentRateFirst && rollDie(diceTen) == 6) {
					console.log("Nice!  " + opponent + " has accepted your offer!  Head back to your office to check your messages and get a back massage from your masseuse Tito.");
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
	
function levelOne() {
	//STEP 1: ROLL THE DICE TO SELECT THE 4 GENRES YOU CAN CHOOSE FROM
	
	let genreRollOne = rollDie(diceTwenty);
	let genreRollTwo = rollDie(diceTwenty);
	let genreRollThree = rollDie(diceTwenty);
	let genreRollFour = rollDie(diceTwenty);
	//STEP 2: ASSOCIATE THE ROLLED NUMBER W/ A GENRE FROM THE GENRE Array
	//console.log(movieGenres[genreRollOne].);
	let genreOne = movieGenres[genreRollOne];
	let genreTwo = movieGenres[genreRollTwo];
	let genreThree = movieGenres[genreRollThree];
	let genreFour = movieGenres[genreRollFour];
	
	console.log("1. " + genreOne.type + ", cost $" + genreOne.budget);
	console.log("2. " + genreTwo.type + ", cost $" + genreTwo.budget);
	console.log("3. " + genreThree.type + ", cost $" + genreThree.budget);
	console.log("4. " + genreFour.type + ", cost $" + genreFour.budget); 
	
	let userInputTwo = prompt("Your assistant brings to your desk four piles of scripts sorted by the genres listed below.  Each genre is followed by the size of the budget required to execute it.  Remember, the more a genre costs to produce the more difficult it becomes to return a profit.  However, with great risk there is great glory.  Please enter the number of the genre you'd like to produce: "); 
	//console.log(userInputTwo);
	return userInputTwo;
}

function levelTwo() {
	alert("In the following prompts please enter your top 3 choices for directors you would like to work with on your film.  Press Enter to continue...");
	let directorOne = prompt("Enter the name of a director and hit return: ");
	let directorTwo = prompt("Enter the name of a director and hit return: ");
	let directorThree = prompt("Enter the name of a director and hit return: ");
	directorsArray.push(directorOne, directorTwo, directorThree);
	console.log(directorsArray); //Print the chosen directors as a string w/ commas
	console.log("You bang your desk and summon your assistant through the door.  You tell him to get " + directorOne + ", " + directorTwo + ", and " + directorThree + " on the phone, ASAP!");
	
		let levelTwoRollOne = rollDie(10);
			if(levelTwoRollOne == 1 || levelTwoRollOne == 6 || levelTwoRollOne == 4){
				//directorOne === false;
				console.log(levelTwoRollOne);
				unavailableDirectors = directorsArray.slice(0, 1);
				console.log(unavailableDirectors);
				availableDirectors.push(directorTwo, directorThree);
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
			} else if (levelTwoRollOne == 2 || levelTwoRollOne == 7 || levelTwoRollOne == 9) {
				//directorTwo === false;
				console.log(levelTwoRollOne);
				unavailableDirectors = directorsArray.slice(1, 2); 
				console.log(unavailableDirectors);
				availableDirectors.push(directorOne, directorThree);
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
			} else if (levelTwoRollOne == 3 || levelTwoRollOne == 5 || levelTwoRollOne == 9) {
				//directorThree === false;
				console.log(levelTwoRollOne);
				unavailableDirectors = directorsArray.slice(2, 3);
				console.log(unavailableDirectors);
				availableDirectors.push(directorOne, directorTwo);
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
				availableDirectors.push(directorOne, directorTwo, directorThree);
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
			
function levelThree(randomDirector) {
	let directorInitialRate = topActors[rollDie(diceFour)].salary; 
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

function playGame() {
	//this is the master game function
	let userSelectedGenre = levelOne();
	let chosenDirector = levelTwo(); 
	console.log(chosenDirector);
	levelThree(chosenDirector);
	console.log("Whoa, you've somehow passed out of the Level Three function, and so far your game works!");
}

//function start(){
	
	let userInputStart = prompt("Welcome to Hitting the Big Time!  You are a big money producer with $500,000,000 in the bank.  Are you ready to make a movie? Y/N");
	if (userInputStart === "Y") {
		playGame();
	}
	else {
	alert("Goodbye!");
	}
//}

//start();

/*
let movieGenre = ["action -- $200 million", "romance -- $35 million", "comedy -- $45 million", "suspense -- $30 million", "children's animated -- $100 million", "children's live-action -- $40 million", "musical drama -- $ 75 million", "musical comedy -- $50 million", "war -- $150 million", "young adult -- $20 million", "mystery -- $50 million", "chase -- $80 million", "heist -- $65 million", "period drama -- $70 million", "sci-fi space -- $300 million", "sci-fi time-travel -- $120 million", "sci-fi dystopian -- $125 million", "fantasy -- $112 million", "indie drama -- $7 million", "indie comedy -- $9 million"];
console.log("movieGenre array length = " + movieGenre.length);

let highActorsArray = ["Angelina Jolie", "Denzel Washington", "The Rock", "Meryll Streep"];

let midActorsArray = ["Kevin Hart", "Bradley Cooper", "Emily Blunt", "Jenifer Lawrence"];

let lowActorsArray = ["Terri Hatcher", "Stacey Dash", "Alicia Silverstone", "Roseanne Bar"];

*/

//START OF GAME HERE



