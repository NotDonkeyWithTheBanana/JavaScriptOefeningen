const prompt = require("prompt-sync")();

let jaar = Number(prompt("Welk jaar is het?"));
let maand = Number(prompt("Welke maand?"));

if(jaar % 4 == 0){
    if(maand = 2){
        console.log("februari in een schrikkeljaar.");
    }
}
if (maand == 2){
    if((jaar % 4 == 0 && jaar % 100 != 0) || (jaar % 400 == 0)){
        console.log("Februari in een schrikkeljaar.")
    }else{
        console.log("Februari in een normaal jaar.");
    }
}