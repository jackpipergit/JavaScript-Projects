// Ternary operator to check if user is tall enough to ride
function Ride_Function() {
    var Height = document.getElementById("Height").value;
    var Can_ride = (Height >= 52) ? "You are tall enough" : "You are too short";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

// Ternary operator to check if user is old enough to vote, > 18 is true, < 18 is false
function Vote_Function() {
    var Age = document.getElementById("Age").value;
    var Can_vote = (Age >= 18) ? "You can vote!" : "You are not old enough to vote";
    document.getElementById("Vote").innerHTML = Can_vote;
}

// Constructor function for Vehicle objects
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

// Constructor function for Vehicle objects
function new_Function() {
    var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
    document.getElementById("New_and_This").innerHTML = 
        "Jack drives a " + Jack.Vehicle_Color + "-colored " + 
        Jack.Vehicle_Year + " " + Jack.Vehicle_Make + " " + 
        Jack.Vehicle_Model;
}

// Nested function to count from 9 to 10
function count_Function() {
    document.getElementById("Counting").innerHTML = Count();
    function Count() {
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
}
