// Concatenate multiple strings
function concatenate() {
    var part1 = "This is ";
    var part2 = "a concatenated ";
    var part3 = "string made ";
    var part4 = "of four parts.";
    var whole_sentence = part1.concat(part2, part3, part4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

// Slice method to extract part of a string, Extracting "quick brown fox"
function sliceMethod() {
    var sentence = "The quick brown fox jumps over the lazy dog.";
    var section = sentence.slice(4, 19);
    document.getElementById("Slice").innerHTML = section;
}

// toUpperCase method to convert string to uppercase
function upperCase() {
    var text = "Converting this text to uppercase!";
    var result = text.toUpperCase();
    document.getElementById("Upper").innerHTML = result;
}

// Search method to find position of a substring, searching for "Decking"
function searchMethod() {
    var text = "The UK's Most Affordable, High-quality Decking Board.";
    var position = text.search("Decking");
    document.getElementById("Search").innerHTML = 
        "The word 'Decking' starts at position: " + position;
}

// toString method to convert number to string
function numberToString() {
    var number = 182;
    document.getElementById("ToString").innerHTML = 
        number.toString() + " is now a " + typeof number.toString();
}

// toPrecision method to format number to specific length
function precisionMethod() {
    var number = 12938.3012567;
    document.getElementById("Precision").innerHTML = 
        "Original number: " + number + "<br>Formatted to 10 digits: " + number.toPrecision(10);
}

// toFixed method to format number to specific decimal places
function fixedMethod() {
    var number = 3.14159265359;
    document.getElementById("Fixed").innerHTML = 
        "Original number: " + number + 
        "<br>Fixed to 2 decimal places: " + number.toFixed(2) +
        "<br>Fixed to 4 decimal places: " + number.toFixed(4);
}

// valueOf method to return the primitive value
function valueMethod() {
    var text = new String("Hello World!");
    document.getElementById("Value").innerHTML = 
        "String object: " + text + 
        "<br>Primitive value: " + text.valueOf();
}
