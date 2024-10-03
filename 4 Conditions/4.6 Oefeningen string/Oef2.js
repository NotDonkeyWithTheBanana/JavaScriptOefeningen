const prompt = require("prompt-sync")();

let tekst = (prompt("Zou u alstublieft een tekst in kunnen geven? Alvast bedankt Mvg Sybren Deckers 6G1."));
let laatste = tekst.substring(tekst.length, tekst.length - 1);

if(laatste == "."){
nieuwe = tekst.toUpperCase();
}else{
nieuwe = (tekst + ".").toUpperCase();
}

console.log(nieuwe);