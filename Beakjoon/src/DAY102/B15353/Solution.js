const fs = require('fs');
const input = fs.readFileSync('./index.txt').toString().trim().split(' ').map(v=> BigInt(v));

console.log((input[0] + input[1]).toString())