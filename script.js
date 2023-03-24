var moves = ["stein", "saks", "papir"];
let spillerPoeng = 0;
let datamaskinPoeng = 0;
document.getElementById("poeng1").innerHTML = spillerPoeng;
document.getElementById("poeng2").innerHTML = datamaskinPoeng;


let counter = 0;
function btnOnClick(choice) {
    counter++;


    var computerMove = moves[Math.floor(Math.random() * 3)];
    if (computerMove == choice) {
        document.getElementById("resultat").innerHTML = "Begge valgte " + choice + " som er lik " + computerMove + ".";
    } else if (choice == "stein" && computerMove == "saks" ||
        choice == "papir" && computerMove == "stein" ||
        choice == "saks" && computerMove == "papir") {
        spillerPoeng++;
        document.getElementById("resultat").innerHTML =
            ("Du valgte " + choice + " som slår " + computerMove + ".");
        document.getElementById("poeng1").innerHTML = spillerPoeng;
        console.log(spillerPoeng)
    } else {
        datamaskinPoeng++;
        document.getElementById("resultat").innerHTML =
            ("Datamaskinen valgte " + computerMove + " som slår " + choice + ".");
        document.getElementById("poeng2").innerHTML = datamaskinPoeng;
    }

    console.log(counter);         
    
    if (spillerPoeng  == 4) {
        alert("DU VANT!");
         spillerPoeng = 0;
         datamaskinPoeng = 0;
    } else if (datamaskinPoeng == 4) {
        alert("DU TAPTE!");
        spillerPoeng = 0;
         datamaskinPoeng = 0;
    }
    return false;    
}



