const fs = require('fs');
const input = fs.readFileSync('./index.txt').toString().split('');
//const input = fs.readFileSync('/dev/stdin').toString().split('');
const arr = Array(26).fill(0)
input.map((data)=> {
    arr[data.codePointAt()-97]++;

})
console.log(arr.join(' '))