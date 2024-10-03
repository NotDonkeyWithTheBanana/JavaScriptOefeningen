const prompt = require("prompt-sync")();

let tekst = Number(prompt("Zou u alstublieft een tekst in kunnen geven? Alvast bedankt Mvg Sybren Deckers 6G1."));
if(tekst.length > 10){
    console.log("Dit is een lange tekst.");
}
else{
    console.log("Dit is een korte tekst.");
}