let input = require("fs").readFileSync("/dev/stdin", "utf8");
let lines = input.split("\n");

let numero = parseInt(lines.shift());
let hora =  parseInt(lines.shift());
let salario = parseFloat(lines.shift());

let valor = salario * hora;

console.log(`NUMBER = ${numero}`);
console.log(`SALARY = U$ ${valor.toFixed(2)}`);