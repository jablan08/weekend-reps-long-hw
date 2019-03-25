// A. Q + A
// How do we assign a value to a variable?
    // You use var, let, or const. = to whatever value or string you want it to  be.
// How do we change the value of a variable?
    // you would call the variable and then = to another value.
// How do we assign an existing variable to a new variable?
    // you would first call the new variable and then = it to the exisiting variable
// Remind me, what are declare, assign, and define?
    // Declaring refers to the variable and scope you are defining, and assigning is the value you are giving 
    // that variable
    // For example, let(declare) num(define) =(assign)100;   you use let, var, or const to 
// What is pseudocoding and why should you do it?
    // This is when you are formulating out what the code should run for the situtation.
    // You break down the process step by step, so you can easily see what exactly you need to accomplish.
    // This is good to organize your thoughts and to prepare the system to run the code.
// What percentage of time should be spent thinking about how you're going to solve a 
// problem vs actually typing in code to solve it?
    // You should spend 75%-80% thinking about how to solve the problem and the rest of the time typing code to solve it.


// B. Strings



// Create a variable called firstVariable.
let firstVariable;
// Assign it the value of the string "Hello World"
firstVariable = "Hello World";
// Change the value of this variable to some number.
firstVariable = 9000;
// Store the value of firstVariable in a new variable called secondVariable

let secondVariable = firstVariable;
// Change the value of secondVariable to any string.

secondVariable = "It's over 9000!!"
// What is the value of firstVariable?
    // 9000
// Create a variable called yourName and set it equal to your name as a string.
let yourName = "Joshua Ablan"
//  Then, write an expression that takes the string "Hello, my name is " and the 
//  variable yourName 
// so that it returns a new string with them concatenated.
console.log(`Hello my name is ${yourName}`)

// C. Booleans
// Using the provided variable definitions,
//  replace the blanks so that all log statements 
//  print true in the console. Answers should be all be
//   valid JS syntax and not weird things that 
//   don't make sense but happen to print true to the console.
  const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';

  console.log(a !== b);
  console.log(c !== d);
  console.log('Name' === 'Name');
  console.log(true !== false);
  console.log(false && false && false && false && false && false || true);
  console.log(false === false);
  console.log(e == 'Kevin');
  console.log(a !== b !== c);
  console.log(a === a || d);
  console.log(48 == '48');

//   D. The farm
// Declare a variable animal. Set it to be either "cow"
//  or something else.
let animal = "yup";
// Write code that will print out "mooooo" if the it is equal to cow. 
    if (animal === "cow") { 
    console.log("Moooooooo")    
     // Change your code so that if the variable animal is 
    // anything other than a cow, it will print "Hey! You're not a cow."
    } else {
    console.log("Hey! You're not a cow!");
}
// Commit.

// E. Driver's Ed
// Make a variable that will hold a person's age. Be semantic.
let age = 19;
// // Write code that will print out "Here are the keys",
//  if the age is 16 years or older.
if (age >= 16) {
    console.log(`Here are the keys. You are ${age} years old.`)
} else {
    console.log(`Sorry! you're too young. You are only ${age} years old!`)
};
// // If the age is younger than 16, a message 
// should print "Sorry, you're too young."

// // Commit.

// II. Loops

// A. The basics
// Write a loop that will print out all the numbers from 0 to 10, inclusive.
for (let i = 0; i < 10; i++) {
    console.log(i);
} 
// Write a loop that will print out all the numbers from 10 up to and including 400.
for (let i = 10; i <= 400; i++) {
    console.log(i);
}
// Write a loop that will print out every third number starting with 12 and going no higher than 4000.
for (let i = 12; i < 4000; i+=3) {
    console.log(i);
}
// 🔴 Commit.

// B. Get even
// Print out the even numbers that are within the range of 1 - 100.
for (let i = 0; i <=100; i++)
    if (i % 2 ===0) {
        console.log(i);
    } 
// Adjust your code to add a message next to even numbers only that says: "<-- is an even number".
for (let i = 0; i <=100; i++)
    if (i % 2 ===0) {
        console.log(`${i} <---- is an even number`);
    } 
// 🔴 Commit.

// C. Give me Five
// For the numbers 0 - 100, print out 
//"I found a number. High five!" if the number is a multiple of five.
// Example Output:

// I found a 5. High five!
// I found a 10. High five!
// Add to the code from above to print out "I found a number. 
// Three is a crowd" if the number is a multiple of three.
// Example Output:

// I found a 3. Three is a crowd
// I found a 5. High five!
// I found a 6. Three is a crowd
// I found a 9. Three is a crowd
// I found a 10. High five!
for (let i = 0; i <=100; i++) {
    if (i % 3 ===0) {
        console.log(`I found a ${i}. Three is a crowd!`)
    } else if (i % 5 === 0) {
        console.log(`I found a ${i}.  High five!`)
    };
};
// 🔴 Commit.

// D. Savings account
// Write code that will save the sum of all the numbers between 1 - 10 to a 
//variable called bank_account.
// Check your work! Your bank_account should have $55 in it.
let bank_account = 0;
for (let i =0; i <= 10; i++) {
    bank_account += i;
    
};
// You got a bonus! Your pay is now doubled each week. Write code that will
// save the sum of all the numbers between 1 - 100 multiplied by 2.
// Check your work! Your bank_account should have $10,100 in it.
let dank_Account = 0;
for (let i =0; i <= 100; i++) {
    dank_Account += i * 2; 
}; console.log(`Your bank account is dank! It has $${dank_Account} doll-hairs!`); 
// 🔴 Commit.

// E. Multiples of 3 and 5
// If we list all the natural numbers below 10 that are multiples of 3 or 5, 
//we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below 1000. If a previous 
// question you've done has helpful bits of code in it that partially 
// solves this problem, look back at them.

// You just solved Project Euler problem 1!

// Are you having dejà vu? This just in! From the 
//"Read the entire problem before you start" dept: 
//This problem was on a previous assignment. You may skip it 
//if you've already done it, just include a comment saying that you've 
//already done it. If you've now done the problem twice, perhaps next 
// time you'll read the whole problem before starting it.
console.log("I have already done this!");
// 🔴 Commit.

// III. Arrays & Control flow
// A. Talk about it:
// What are the things in an array called?
  // They are called elements.
// Do Arrays guarantee those things will be in order?
  // Elements are set in a order starting at an index of 0. 
// What real-life thing could you model with an array?
    // You can model anything that is a list! 
    //For example, you can list the people who live in your house.
// 🔴 Commit.

// B. Easy Does It
// Create an array that contains three quotes and store it in a variable called quotes.
const quotes = ["Don't think, FEEEL","The Force is strong with this one.","A quote within a qoute."]
// 🔴 Commit.

// C. Accessing elements
// Given the following array const randomThings = [1, 10, "Hello", true]

// How do you access the 1st element in the array?

// Change the value of "Hello" to "World".

// Check the value of the array to make sure it updated the array. How? Why, yes! console.log();

// 🔴 Commit.

// D. Change values
// Given the following array const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]

// What would you write to access the 3rd element of the array?

// Change the value of "Github" to "Octocat"

// Add a new element, "Cloud City" to the array.

// 🔴 Commit.

// E. Mix It Up
// Given the following array: const myArray = [5, 10, 500, 20]

// Add the string "Egon" to the end of the array. Add another string of your choice to the end of the array.

// Remove the 5 from the beginning of the array.

// Add the string "Bob Marley" to the beginning of the array.

// Remove the string of your choise from the end of the array.

// Reverse this array using Array.prototype.reverse(). Did you mutate the array? What does mutate mean? Did the .reverse() method return anything?

// 🔴 Commit.

// F. Biggie Smalls
// Create a variable that contains an integer.

// Write an if ... else statement that:

// console.log()s "little number" if the number is entered is less than 100

// console.log()s big number if the number is greater than or equal to 100.

// 🔴 Commit.

// G. Monkey in the Middle
// Write an if ... else if ... else statement:

// console.log() little number if the number entered is less than 5.

// If the number entered is more than 10, log big number.

// Otherwise, log "monkey". 

// 🔴 Commit.

// H. What's in Your Closet?
// Below, we've given you examples of Kristyn and Thom's closets modeled as data in JavaScript.

const kristynsCloset = [
    'left shoe',
    'cowboy boots',
    'right sock',
    'GA hoodie',
    'green pants',
    'yellow knit hat',
    'marshmallow peeps'
  ];
  
  // Thom's closet is more complicated. Check out this nested data structure!!
  const thomsCloset = [
    [
      // These are Thom's shirts
      'grey button-up',
      'dark grey button-up',
      'light blue button-up',
      'blue button-up'
    ],
    [
      // These are Thom's pants
      'grey jeans',
      'jeans',
      'PJs'
    ],
    [
      // Thom's accessories
      'wool mittens',
      'wool scarf',
      'raybans'
    ]
  ];
  // What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.
  
  // Kristyn just bought some sweet shades! Add "raybans" to her closet after "yellow knit hat".
  
  // Kristyn spilled coffee on her hat... modify this item to read "stained knit hat" instead of yellow.
  
  // Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirts array.
  
  // In the same way, access one item from Thom's pants array.
  
  // Access one item from Thom's accessories array.
  
  // Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"
  
  // Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.
  
  // 🔴 Commit.
  
  