// Runs when someone clicks the first p tag!
function My_First_Function() {
    var Sent = "This is the button text!";
    document.getElementById("clickText").innerHTML = Sent;
}

// Handles the second button click
function myFunction() {
    // Start with the first part of our message
    var sentence = "This is the beginning of the string";
    
    // Add more to our string using += operator
    sentence += " and this is the end of the string!";
    
    // Grab the element with id = concatenate and pop our string in there
    document.getElementById("concatenate").innerHTML = sentence;
}