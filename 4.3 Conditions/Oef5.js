const prompt = require("prompt-sync")();

let inkomen = Number(prompt("Wat is je inkomen?"));

if(inkomen < 10000){
     inkomen2 = inkomen;
     belasting = 0;
}
else if(inkomen > 10000 && inkomen < 20000){
    inkomen2 = inkomen - inkomen * 0.1;
}
else if(inkomen > 20000 && inkomen < 50000){
    inkomen2 = inkomen - inkomen * 0.2;
}
else{
    inkomen2 = inkomen - inkomen * 0.3;
}

console.log("De belasting bedraagt " + belasting + " euro waardoor je netto-inkomen gelijk is aan " + inkomen2 + " euro.");