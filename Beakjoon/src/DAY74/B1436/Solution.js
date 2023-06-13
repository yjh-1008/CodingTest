const fs = require('fs');
const N = parseInt(fs.readFileSync('./index.txt').toString().trim());

function Solution() {

    let ret= 1,s = 666;

    while(ret<N) {
        s++;
        if(s.toString().includes("666"))ret++;
    }
    return s;
}

console.log(Solution());