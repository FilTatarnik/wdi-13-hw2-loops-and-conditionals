console.log("hello");

//-----------------Easy Going-------------//
//write a loop that will log the numbers 1 through 20

for (let i = 1; i<=20; i++){
	console.log(i);
}

//---------------Get even-------------//
// //write a FOR loop that will only log the even numbers in 0 through 200

for (let i = 2; i<=200; i+=2) {
	if(i % 2 === 0){	
	console.log(i);
}
}
//----------------Excited Kitten----------------//
//1.Write code that logs "Loves me, pet me! HSSSSSSS!" 20 times
//2.For every even number in your loop, log "...human...why you taking pictures of me?...",
// "...the catnip made me do it...", or "...why does the red dot always get away..." at random.



//created variables that hold the strings
const catOne = "...human...why you taking pictures of me?...";
const catTwo = "...the catnip made me do it...";
const catThree = "...why does the red dot always get away...";


//loop that logs "Love me, pet me! HSSSSSS!" 20 times
for (let i = 0; i <= 20; i++){
			console.log("Love me, pet me! HSSSSSS!");
//check to see if the number that i is going through
	if(i % 2 === 0){
		//made variable that holds the function Math.random
		let randCat = Math.random();
		//if the random number generated is less than equal to .33, log catOne
	  if (randCat <= .33){
	  	console.log(catOne);
	  			//if the random number generated is less than equal to .66, log catTwo
	} else if (randCat <= .66) {
		console.log(catTwo);
		//any other number above .66, log catThree
	} else {
		console.log(catThree);
	}
	}
}



// Write a javascript application that logs all numbers from 1 - 100.
// If a number is divisible by 3 log "Fizz" instead of the number.
// If a number is divisible by 5 log "Buzz" instead of the number.
// If a number is divisible by 3 and 5 log "FizzBuzz" instead of the number.

// setting up loop

for (let i = 1; i < 100; i++) {
	//if i is divisible by 3 and 5, console log "fizzbuzz" instead of the number
	if (i % 3 && 5 === 0)
		console.log("FizzBuzz");
	//otherwise if i is divisible by 3 console log "fizz"
	else if(i % 3 === 0)
		console.log("fizz");
	//otherwise if i is divisble by 5 console log "buzz"
	else if(i % 5 === 0)
		console.log("buzz");
	//console logging 0-100
	else console.log(i);	
}

// ---------Getting to know you --------- //
// Use the following arrays to answer the questions below (name, age, hometown):
const shahzad = ["Shahzad", 1000, "Austin"];
const jim = ["Jim", 16, "All cities"];
const reuben = ["Reuben", 22, "Durham"];
const daniel = ["Daniel", 186, "Dallas"];
const ryan = ["Ryan", 65, "Denver"];

// Daniel decides that Shahzad can't be named "Shahzad" anymore. Remove "Shahzad" from the shahzad array and replace it with "Gameboy".

//use .splice to take out shahzad and replace it with Gameboy
shahzad.splice(0, 1, 'Gameboy');
console.log(shahzad);

// //Daniel just had his birthday; change Daniel's array to reflect him being a year older. Don't just hard code 187--pretend that you don't know that his age is 186, and write your code to just make him a year older than whatever age he was.

//use .splice to replace daniel's age with 19
daniel.splice(1,1, 19);
console.log(daniel);

// //Ryan is Batman maybe. Or possibly Robin. Change Ryan's hometown from "Denver" to "Gotham City".
// ryan.splice(0, 1, 'Batman');
// ryan.splice(2, 1, 'Gotham City');
// console.log(ryan);

// //Reuben left Durham 5 years ago to come to Chicago. Remove "Durham" from Reuben's array and add "Chicago". (Note: remove and then add is different from simply changing the value at that index.)
// reuben.splice(2, 1, 'Chicago');
// console.log(reuben);

// //Bonus: Whoops! Jim is actually only allowed to be in one of two cities. Whatever the first of the 3 cities for Jim is now, remove it from the array using .splice()
// jim.splice(2, 1);
// console.log(jim);

//--------------Yell at the Ninja Turtles ----------------- //
// Create an array with the members of the ninja turtles (Donatello, Leonardo, Raphael, Michaelangelo)
// const ninjaTurtles = ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo'];

// 	//Use a for loop to call .toUpperCase() on each of them and print out the result.
// for (let i = 0; i <= ninjaTurtles.length; i++) {
// 	if (typeof ninjaTurtles[i] === 'string') {
// 		ninjaTurtles[i] = ninjaTurtles[i].toUpperCase();
// 		// else if(typeof ninjaTurtles[i] === 'string') {
// 		// ninjaTurtles[i] = ninjaTurtles[i].toUpperCase();
// 		//^^ my sad attempt at the bonus. I literally just don't get it.


// 	}
// 	}
// console.log(ninjaTurtles);

//----------------Return of the Closets------------------//

const kristynsCloset = [
  "left shoe",
  "cowboy boots", //0
  "right sock",//1
  "GA hoodie",//2
  "green pants",//3
  "yellow knit hat",//4
  "marshmallow peeps"//5
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",//0,0
    "dark grey button-up",//0,1
    "light blue button-up",//0,2
    "blue button-up",//0,3
  ],[
    // These are Thom's pants
    "grey jeans",//1,0
    "jeans",//1,1
    "PJs"//1,2
  ],[
    // Thom's accessories
    "wool mittens",//2,0
    "wool scarf",//2,1
    "raybans"//2,2
  ]
];

//Alien Attire
//Kristyn's left shoe has traveled through time and space and turned up in Thom's accessories drawer! Remove Kristyn's shoe from the array and save it to the variable kristynsShoe. Use that variable to add Kristyn's lost shoe to Thom's accessories array.

const kristynsShoe = kristynsCloset.shift();

thomsCloset.push(kristynsShoe);

//Dress 'em up
//Modify your code to put together 3 separate outfits for Kristyn and Thom. Put the output in a sentence to tell us what we'll be wearing. Mix and match!

const thomOut1 = "Thom's gonna wear a " + thomsCloset[2][0] + "," + thomsCloset[2][2] + ", and " +thomsCloset[1][0];
console.log(thomOut1);
const thomOut2 = "Thom's gonna wear a " + thomsCloset[0][0] + "," + thomsCloset[2][1] + ", and " +thomsCloset[1][0];
console.log(thomOut2);
const thomOut3 = "Thom's gonna wear a " + thomsCloset[1][0] + "," + thomsCloset[1][2] + ", and " +thomsCloset[0][3];
console.log(thomOut3);
const krystOut1 = "Kristyn's gonna wear a " + kristynsCloset[0] + "," + kristynsCloset[2] + ", and " + kristynsCloset[1];
console.log(krystOut1);
const krystOut2 ="Kristyn's gonna wear a " + kristynsCloset[4] + "," + kristynsCloset[3] + ", and " + kristynsCloset[5];
console.log(krystOut2);
const krystOut3 ="Kristyn's gonna wear a " + kristynsCloset[1] + "," + kristynsCloset[5] + ", and " + kristynsCloset[0]; 
console.log(krystOut3);


//Dirty laundry
//Time to do laundry - loop through Kristyn's closet and log the sentence "WHIRR: Now washing (item)" for each item in the array.
//created loop to loop through array
for (i = 1; i < kristynsCloset.length; i++){
	//logged the sentence and logged krystins closet but not a number, but i, the thing that's being looped, so it'll console log the first one, repeat, and i will 1, repeat then i will be 2.
	console.log("WHIRR: Now washing " + kristynsCloset[i] + ".")
}

//Inventory
//Thom wants to do inventory on his closet. Using bracket notation, log the arrays (not the elements in the arrays) containing all of Thom's shirts, pants, and accessories.

//made a for loop that'll go through the array
for(i = 0; i < thomsCloset.length; i++) {
	//console log'd thom's array but it still lists the elements. Idk I can't figure it out
	console.log(thomsCloset[i]);
}



