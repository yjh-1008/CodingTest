const fs = require('fs');
const input = fs.readFileSync('./index.txt').toString().trim(); 
const len = input.length/2;
let left = input.slice(0,parseInt(len));
let right = input.slice( Number.isInteger(len) ? len: parseInt(len)+1).split('').reverse().join('');

if(left === right) console.log(1);
else console.log(0);