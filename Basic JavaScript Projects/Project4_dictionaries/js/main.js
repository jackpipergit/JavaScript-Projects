// Dictionary of Laravel framework information
function dictionary() {
    var Laravel = {
        Type: "Framework",
        Language: "PHP",
        Version: "10.x",
        Creator: "Taylor Otwell",
        ReleaseYear: 2011,
        Features: "MVC Architecture"
    };

    // Display Laravel information from the dictionary
    document.getElementById("Dictionary").innerHTML = "Was created by " + Laravel.Creator;
}


// Second dictionary of Laravel framework information
function dictionary2() {
    var Laravel = {
        Type: "Framework",
        Language: "PHP",
        Version: "10.x",
        Creator: "Taylor Otwell",
        ReleaseYear: 2011,
        Features: "MVC Architecture"
    };
    // Delete a KVP before displaying
    delete Laravel.ReleaseYear;
    // Display Laravel information from the dictionary
    document.getElementById("Dictionary2").innerHTML = "Was released in " + Laravel.ReleaseYear;
}