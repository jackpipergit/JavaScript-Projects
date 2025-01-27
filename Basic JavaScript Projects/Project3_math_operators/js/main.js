// Function that returns the result of an addition operation to the paragraph element 
function addition() {
    var x = 5;
    var y = 6;
    var z = x + y;
    document.getElementById("MathAdd").innerHTML = "Sum of 5 and 6 is: " + z;
}

// Function that returns the result of a subtraction operation to the paragraph element
function subtraction() {
    var x = 10;
    var y = 5;
    var z = x - y;
    document.getElementById("MathSub").innerHTML = "Difference between 10 and 5 is: " + z;
}

// Function that returns the result of a multiplication operation to the paragraph element
function multiplication() {
    var simple_Math = 6 * 8;
    document.getElementById("MathMul").innerHTML = "6 x 8 = " + simple_Math;
}

// Function that returns the result of a division operation to the paragraph element
function division() {
    var simple_Math = 48 / 6;
    document.getElementById("MathDiv").innerHTML = "48 / 6 = " + simple_Math;
}

// Function that returns the result of a more complex math operation to the paragraph element
function more_Math() {
    var simple_Math = (1 + 2) * 10 / 2 - 5;
    document.getElementById("MathMore").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + simple_Math;
}

// Function that returns the remainder of a division operation using the modulus operator
function modulus_Operator() {
    var simple_Math = 25 % 6;
    document.getElementById("MathMod").innerHTML = "Divide 25 by 6 you have a remainder of: " + simple_Math;
}

// Function that returns a positive number as a negative number using the negation operator
function negation_Operator() {
    var x = 10;
    document.getElementById("MathNeg").innerHTML = "Negative form of 10 is: " + -x;
}

// Function that demonstrates the increment operator
function increment() {
    var x = 5;
    x++;
    document.getElementById("MathInc").innerHTML = "Incrementing 5 by 1 equals: " + x;
}

// Function that demonstrates the decrement operator
function decrement() {
    var x = 5;
    x--;
    document.getElementById("MathDec").innerHTML = "Decrementing 5 by 1 equals: " + x;
}

// Function that generates a random number between 0 and 1
function random_Number() {
    document.getElementById("RandomNum").innerHTML = "Random number is: " + Math.random();
}

// Function that generates a random number within a specific range (e.g., 1-100)
function random_Number_Range() {
    var randomNumber = Math.floor(Math.random() * 100) + 1;
    document.getElementById("RandomRange").innerHTML = "Random number between 1 and 100 is: " + randomNumber;
}

// Function that shows the result of Math.round() method
function math_Round() {
    document.getElementById("Math_Round").innerHTML = "4.6 rounded to the nearest integer is: " + Math.round(4.6);
}

// Function that shows the result of Math.floor() method
function math_Floor() {
    document.getElementById("Math_Floor").innerHTML = "4.9 rounded down to the nearest integer is: " + Math.floor(4.9);
}

// Function that shows the result of Math.ceil() method
function math_Ceil() {
    document.getElementById("Math_Ceil").innerHTML = "4.2 rounded up to the nearest integer is: " + Math.ceil(4.2);
}

// Function that shows the result of Math.pow() method
function math_Power() {
    document.getElementById("Math_Power").innerHTML = "2 raised to the power of 3 is: " + Math.pow(2, 3);
}

// Function that shows the result of Math.sqrt() method
function math_Sqrt() {
    document.getElementById("Math_Sqrt").innerHTML = "The square root of 81 is: " + Math.sqrt(81);
}