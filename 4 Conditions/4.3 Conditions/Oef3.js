const prompt = require("prompt-sync")();

let score1 = Number(prompt("Wat is de 1ste score?"));
let score2 = Number(prompt("Wat is de 2de score?"));

if (score1 && score2 >= 50){
    "De scores zijn goed."
}
else if (score1 >= 50 && score2 < 50 || score1 < 50 && score2 >= 50){
    "1 score is goed.";
}
else{
    "Beide scores zijn slecht.";
}
