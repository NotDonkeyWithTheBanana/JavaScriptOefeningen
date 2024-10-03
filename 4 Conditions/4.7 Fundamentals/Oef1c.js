const prompt = require("prompt-sync")();

let invoer = Number(prompt("Geef een getal in."));
let regel = "";

for(i = 0; i <= invoer;i++){
    regel = "";

    for(let j = 1; j <= invoer - i; j++){
        regel += " ";
    }for(let k = 1; k <= i; k++){
        regel += "*";
    }for(let l = 0; l <= i; l++){
        regel += "*";
    }for(let m = 1; m <= invoer - i; m++){
        regel += " ";
    }
    console.log(regel);
}