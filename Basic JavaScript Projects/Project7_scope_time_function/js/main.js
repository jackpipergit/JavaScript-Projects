// Global variable
var X = 10;

// Function using global variable
function globalFunction() {
    document.getElementById("Global").innerHTML = "Global variable X = " + X;
}

// Function with local variable
function localFunction() {
    var Y = 20;  // Local variable
    document.getElementById("Local").innerHTML = "Local variable Y = " + Y;
}

// Function with intentional error for debugging
function errorFunction() {
    var Z = 30;
    console.log("Starting error function");
    try {
        // Intentional error: trying to use undefined variable
        document.getElementById("Error").innerHTML = Z + undefinedVariable;
    } catch(err) {
        console.log("An error occurred: " + err);
        document.getElementById("Error").innerHTML = "Check console for error details";
    }
}

// Time-based function, checks the current time conditionally and outputs a message
function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12) {
        Reply = "Good morning!";
    } else if (Time >= 12 && Time < 18) {
        Reply = "Good afternoon!";
    } else {
        Reply = "Good evening!";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}

// Age if statement check function 
function checkAge() {
    var age = 20;
    if (age >= 18) {
        document.getElementById("Age_Result").innerHTML = "You are old enough to vote and drink in the UK!";
    } else if (age >= 16) {
        document.getElementById("Age_Result").innerHTML = "You can work full-time but cannot vote or drink yet.";
    } else {
        document.getElementById("Age_Result").innerHTML = "You are too young to vote, drink, or work full-time.";
    }
}

// Age verification function with input, if & else statement
function verifyAge() {
    var userAge = document.getElementById("Age_Input").value;
    if (userAge >= 18) {
        document.getElementById("Verification_Result").innerHTML = 
            "You are old enough to enter the event.";
    } else {
        document.getElementById("Verification_Result").innerHTML = 
            "You must be 18 or older to enter the event.";
    }
}
