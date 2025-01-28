// Function to count to 10, using while loop
function call_Loop() {
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("p1").innerHTML = Digit;
}

// Function to list instruments using for loop
function for_Loop() {
    var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
    var Content = "";
    for (var Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

// Array Function
function array_Function() {
    var Cat_Picture = [];
    Cat_Picture[0] = "sleeping";
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    document.getElementById("Array").innerHTML = "Cat is " + 
        Cat_Picture[2] + ".";
}

// Function to demonstrate const keyword
const Musical_Instrument = {
    type: "Guitar",
    brand: "Fender",
    color: "black",
    price: 900
};

function constant_function() {
    Musical_Instrument.color = "blue";  // Changing property 
    Musical_Instrument.year = 2024;     // New property
    document.getElementById("Constant").innerHTML = 
        "The cost of the " + Musical_Instrument.color + " " + 
        Musical_Instrument.type + " was $" + Musical_Instrument.price + 
        " and it was made in " + Musical_Instrument.year;
}

// Function to demonstrate let keyword
function let_Function() {
    let X = 82;
    document.getElementById("Let").innerHTML = X;
    {
        let X = 33;
        document.getElementById("Let").innerHTML = "<br>" + X;
    }
    document.getElementById("Let").innerHTML += "<br>" + X;
}

// Function to create and display a person object
let person = {
    firstName: "Jack",
    lastName: "Piper",
    age: 26,
    occupation: "Developer",
    fullDescription: function() {
        return this.firstName + " " + this.lastName + 
               " is a " + this.age + " year old " + 
               this.occupation + ".";
    }
};

// Function to display person description
function person_Function() {
    document.getElementById("Person_Object").innerHTML = person.fullDescription();
}
