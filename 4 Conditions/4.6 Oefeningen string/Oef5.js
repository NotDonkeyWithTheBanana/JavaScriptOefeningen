const prompt = require("prompt-sync")();

let tekst = (prompt("Zou u alstublieft een tekst in kunnen geven? Alvast bedankt Mvg Sybren Deckers 6G1."));

if(tekst.includes("omgedraaide tennistafel") == true){
    console.log("Dit is ongepast en niet professioneel. Schaam je!");
}
else{
    console.log("Dit is gepast");
}