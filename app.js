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

// Adjust your code to add a message next to even numbers only that says: "<-- is an even number".

// 🔴 Commit.

// C. Give me Five
// For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five.
// Example Output:

// I found a 5. High five!
// I found a 10. High five!
// Add to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of three.
// Example Output:

// I found a 3. Three is a crowd
// I found a 5. High five!
// I found a 6. Three is a crowd
// I found a 9. Three is a crowd
// I found a 10. High five!
// 🔴 Commit.

// D. Savings account
// Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
// Check your work! Your banck_account should have $55 in it.

// You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
// Check your work! Your banck_account should have $10,100 in it.

// 🔴 Commit.