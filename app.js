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
