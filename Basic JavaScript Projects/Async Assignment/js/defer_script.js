function changeText() {
    // This will work because defer ensures the HTML element exists
    document.getElementById("deferTest").innerHTML = 
        "Defer attribute worked properly.";
}

// This will also work on page load because of defer
console.log("Script loaded: Found element with id 'deferTest':", 
    document.getElementById("deferTest")); 