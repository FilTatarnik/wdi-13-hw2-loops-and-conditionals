console.log("hello");

//write a loop that will log the numbers 1 through 20

// for (let i = 1; i<=20; i++){
// 	console.log(i);
// }

// //write a FOR loop that will only log the even numbers in 0 through 200

// for (let i = 2; i<=200; i+=2) {
// 	if(i % 2 === 0){	
// 	console.log(i);
// }


//1.Write code that logs "Loves me, pet me! HSSSSSSS!" 20 times
//2.For every even number in your loop, log "...human...why you taking pictures of me?...",
// "...the catnip made me do it...", or "...why does the red dot always get away..." at random.


//loop that logs "Love me, pet me! HSSSSSS!" 20 times
// for (let i = 0; i <= 20; i++){
// 	if(i % 2 === 0){
// 		console.log("...human...why you taking pictures of me?...", "...the catnip made me do it...", "...why does the red dot always get away...");
// 	} else 
// 	//logging the statement "Love me, pet me! HSSSSSS!" everytime the loop runs, 20 times.
// 	console.log("Love me, pet me! HSSSSSS!");

// }

//^^go back to this, you aren't finished!


Write a javascript application that logs all numbers from 1 - 100.
If a number is divisible by 3 log "Fizz" instead of the number.
If a number is divisible by 5 log "Buzz" instead of the number.
If a number is divisible by 3 and 5 log "FizzBuzz" instead of the number.

setting up loop

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

//Getting to know you
//Use the following arrays to answer the questions below (name, age, hometown):
// const shahzad = ["Shahzad", 1000, "Austin"];
// const jim = ["Jim", 16, "All cities"];
// const reuben = ["Reuben", 22, "Durham"];
// const daniel = ["Daniel", 186, "Dallas"];
// const ryan = ["Ryan", 65, "Denver"];

//Daniel decides that Shahzad can't be named "Shahzad" anymore. Remove "Shahzad" from the shahzad array and replace it with "Gameboy".

