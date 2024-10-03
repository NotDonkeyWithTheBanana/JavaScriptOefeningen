const prompt = require("prompt-sync")();

let number = 0;

do{
    number = Number(prompt("Zou u alstublieft een getal tussen de 1 en de 10 in kunnen geven? Alvast bedankt Mvg Sybren Deckers 6G1."));
}while(number >= 1 && number <= 10);

console.log(number);