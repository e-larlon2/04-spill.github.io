// Array of moves that the player and the computer can choose
var moves = ["stein", "saks", "papir"];

// Initialize player and computer points
let spillerPoeng = 0;
let datamaskinPoeng = 0;

// Set the initial points in the HTML document
document.getElementById("poeng1").innerHTML = spillerPoeng;
document.getElementById("poeng2").innerHTML = datamaskinPoeng;

// Counter variable to keep track of the number of rounds played
let counter = 0;

// Function that is called when the player clicks on a button
function btnOnClick(choice) {

    // Increment the counter
    counter++;

    // Generate a random move for the computer
    var computerMove = moves[Math.floor(Math.random() * 3)];

    // Check if the player and the computer chose the same move
    if (computerMove == choice) {
        document.getElementById("resultat").innerHTML = "Begge valgte " + choice + " som er lik " + computerMove + ".";
    }

    // Check if the player won
    else if (choice == "stein" && computerMove == "saks" ||
        choice == "papir" && computerMove == "stein" ||
        choice == "saks" && computerMove == "papir") {
        // Increment player points
        spillerPoeng++;
        // Update the result message and the player points in the HTML document
        document.getElementById("resultat").innerHTML =
            ("Du valgte " + choice + " som slår " + computerMove + ".");
        document.getElementById("poeng1").innerHTML = spillerPoeng;
    }
    // If the player didn't win, the computer won
    else {
        datamaskinPoeng++;
        document.getElementById("resultat").innerHTML =
            ("Datamaskinen valgte " + computerMove + " som slår " + choice + ".");
        document.getElementById("poeng2").innerHTML = datamaskinPoeng;
    }

    console.log(counter); // Log the counter to the console for debugging purposes        

    // Check if the game has been won
    if (spillerPoeng == 3) {
        alert("DU VANT!");
        // Reset the points
        spillerPoeng = 0;
        datamaskinPoeng = 0;

        // Set the initial points (0) in the HTML document
        document.getElementById("poeng1").innerHTML = spillerPoeng;
        document.getElementById("poeng2").innerHTML = datamaskinPoeng;
        // Update the result message in the HTML document
        document.getElementById("resultat").innerHTML = "Spill igjen";

    } else if (datamaskinPoeng == 3) {
        alert("DU TAPTE!");
        // Reset the points
        spillerPoeng = 0;
        datamaskinPoeng = 0;

        // Set the initial points (0) in the HTML document
        document.getElementById("poeng1").innerHTML = spillerPoeng;
        document.getElementById("poeng2").innerHTML = datamaskinPoeng;
        // Update the result message in the HTML document
        document.getElementById("resultat").innerHTML = "Spill igjen";
    }

    // Return false to prevent the page from refreshing when the button is clicked
    return false;
}



