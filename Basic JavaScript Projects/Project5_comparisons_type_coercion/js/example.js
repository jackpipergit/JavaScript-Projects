// Function to display NaN
function my_Function() {
    document.getElementById("Test").innerHTML = 0/0;
}

// Function to display true using isNaN()
function my_Function2() {
    document.getElementById("Test2").innerHTML = isNaN('Hello');
}

// Function to display false using isNaN()
function my_Function3() {
    document.getElementById("Test3").innerHTML = isNaN(123);
}