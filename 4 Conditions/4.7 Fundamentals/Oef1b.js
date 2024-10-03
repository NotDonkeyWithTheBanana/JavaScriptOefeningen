const prompt = require("prompt-sync")();

let aantal = 5;
let regel = "";

for(let i = 1; i <= aantal; i++){
    regel = "";
    for(let j = 1; j <= aantal - i; j++){
        regel += " ";
    }
}for(let k = 1; k <= i; k++){
    regel += "*";
}console.log(regel);