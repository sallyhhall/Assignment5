// Create a “cheat sheet” JavaScript file that contains examples of all of the things we learned today, delineated with comments:

// Variables
	var price = 5;
	var quantity = 3;
	var total = price * quantity;
	//to write the total onto the page, I can do the following:
	document.write(total);

// Debugging (alerts, comments, the console)
	//You can "inspect element" on Chrome, look at the console
	//and it will tell you if there is an error and on which line the error lies...
	//You can also write in console.log() and/or alert() on every line until you find out 
	//which line has the buggy code (meaning once the console.log/alert does not produce anything, you know
	//that the line above it is the issue...)

// DIFFERENT DATA TYPES

// Arrays
	var flowers = ["sunflower", "rose", "peony"]
	var butterflies = ["monarch", "swallowtail", "buckeye"]
	var flowerbutter = [flowers, butterflies]

	// to write swallowtail in the console, I will write the following:
	console.log(flowerbutter[1][1]);

// Testing
	// To test if two strings or numbers are equal, I use ===
	console.log(5 === 6);
	//The above is marked as false in the console.
	//To test if two strings or numbers are NOT equal, I use !==
	console.log(5!==6);
	//The above is marked as true in the console, as indeed, 5 does not equal 6.
	//<, >, <=, >= are also valid comparison operators

// Logic
	//The if statement allows us to run code only if a certain test evaluates to true

	if("Sally"==="Sallye"){
	  console.log("You'll never see this in the console because Sally is not the same thing as Sallye");
	}

	//The else if statement allows multiple tests to take place, before getting to "else".
	else if("Sally"==="Sallie"){
	  console.log("You still won't see this...womp womp");
	} 
	else if("Sally"==="Sally"){
		console.log("Oh thank goodness, I know how to spell my name.")
	}
	//The "else" statement is what will appear (in this case, the console) if nothing else is true.
	else{
		console.log("I thought I could spell my name anyway I wanted. Oh well.")
	}

// Functions
// A function is a way to encapsulate code for later use
// It can take arguments, which are used as variables inside the function
// It usually returns a value, which can be used later on or displayed immediately

// Write 3 different functions that take input and return something via the console or an alert

//Function #1:

function fullName(firstName,lastName){
	return firstName + " " + lastName;
}
console.log(fullName("Sally", "Hall"));


//Function #2:
function laugh(joke, laughter){
	var jokeLaugh = joke + " " + laughter;
	alert(jokeLaugh);
}

laugh("Why did the chicken cross the road?", "HAHAHhahahaHAHAHA");

// Function #3
function multiply(numberOne, numberTwo){
	return numberOne * numberTwo;
}

alert(multiply(17,98));



