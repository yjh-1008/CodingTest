function go(a, b) {
    if(b === BigInt(1)) return a%c;
    let ret =go(a, BigInt(Math.floor(parseInt(b/BigInt(2)))))
    ret = (ret*ret)%c;
    if(b%BigInt(2)) ret = (ret*a)%c;
    return ret;
}

function solution() { 
    let answer = 0;
    answer = go(BigInt(a),BigInt(b))
    return parseInt(answer);
}

const fs = require('fs');
const [a, b, c] = fs.readFileSync('./index.txt').toString().trim().replace(/\\r/gi,'').split(' ').map(v=>BigInt(v));
console.log(solution())
