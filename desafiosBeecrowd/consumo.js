let input = require("fs").readFileSync("/dev/stdin", "utf8");
let lines = input.split("\n");

let distancia = parseInt(lines.shift());
let combustivel = parseFloat(lines.shift());

let consumo = distancia / combustivel;

console.log(`${consumo.toFixed(3)} km/l`);