const prompt = require("prompt-sync")();

let getal;
let sum = 0;

do {
    getal = Number(prompt("Zou u alstublieft een getal in kunnen geven? Alvast bedankt Mvg Sybren Deckers 6G1."));
    sum += getal;
}while(getal > 0);

console.log(sum);

