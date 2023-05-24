const n = require('fs').readFileSync('/dev/stdin').toString() * 1;


const arr = [0,1];


for(let i=1; i<n; i++) {
    arr.push(BigInt(arr[i])+BigInt(arr[i-1]));
}

console.log(arr[arr.length-1].toString())
