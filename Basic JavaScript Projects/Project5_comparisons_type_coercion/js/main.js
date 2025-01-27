// Typeof Coercion displays "number"
document.write(typeof 42);

// Type Coercion displays "105"
document.write("10" + 5);

// Function to display Infinity
function infinity_Function() {
    document.getElementById("Infinity").innerHTML = 2E310;
}

// Function to display Negative Infinity
function neg_infinity_Function() {
    document.getElementById("Neg_Infinity").innerHTML = -2E310;
}

// Boolean logic - Greater than operator displays "true"
document.write("<br>10 > 2 is: " + (10 > 2));

// Boolean logic - Less than operator displays "false"
document.write("<br>10 < 2 is: " + (10 < 2));

// Console log math operation
console.log("2 + 2 = " + (2 + 2));

// Console log Boolean false result
console.log("is 5 less than 2? " + (5 < 2));

// Double equals comparison showing true
document.write("<br>10 == 10 is: " + (10 == 10));

// Double equals comparison showing false
document.write("<br>10 == 5 is: " + (10 == 5));

// Triple equals comparisons - Same type and value (true)
document.write("<br>10 === 10 is: " + (10 === 10));

// Triple equals comparisons - Different type and different value (false)
document.write("<br>'10' === 5 is: " + ('10' === 5));

// Triple equals comparisons - Different type but same value (false)
document.write("<br>'10' === 10 is: " + ('10' === 10));

// Triple equals comparisons - Same type but different value (false)
document.write("<br>10 === 5 is: " + (10 === 5));

// AND operator examples
document.write("<br>5 > 2 AND 10 > 4 is: " + (5 > 2 && 10 > 4));  // true
document.write("<br>5 > 10 AND 10 > 4 is: " + (5 > 10 && 10 > 4));  // false

// OR operator examples
document.write("<br>5 > 10 OR 10 > 4 is: " + (5 > 10 || 10 > 4));  // true
document.write("<br>5 > 10 OR 10 > 20 is: " + (5 > 10 || 10 > 20));  // false

// NOT operator functions
function not_Function1() {
    document.getElementById("Not1").innerHTML = !(20 > 10);  // false because NOT true
}

// NOT operator function 2
function not_Function2() {
    document.getElementById("Not2").innerHTML = !(5 > 10);   // true because NOT false
}