const fs = require('fs');
const input = fs.readFileSync('./index.txt').toString().trim().replaceAll('\r','').split('\n');

const size = parseInt(input.shift());
const arr = Array(26).fill(0);
let idx;
for(let i=0;i<size;i++) {
    idx = input[i].charCodeAt(0) - 97
    arr[idx]++;
}
let chk = false;
let answer=''
for(i=0;i<26;i++) {
    if(arr[i] >=5) {
        chk = true;
        answer+= String.fromCharCode(i+97);
    }
}

if(chk) console.log(answer);
else console.log("PREDAJA")