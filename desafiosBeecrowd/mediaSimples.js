let A = parseFloat(lines.shift());
let B = parseFloat(lines.shift());

let media = (3.5 * A + 7.5 * B) / 11;

console.log(`MEDIA = ${media.toFixed(5)}`);