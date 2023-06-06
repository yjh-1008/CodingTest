const fs = require('fs');
const input = fs.readFileSync('./index.txt').toString().trim().split('\n');
const N = parseInt(input.shift());
const map = []
input.forEach((data) => {
    map.push(data.split('').map(Number));
})

function quard(y, x, size) {
    if(N === 1) return 1 === map[y][x] ? 1 : 0;

    let b = map[y][x];
    let ret = "";
    for(let i=y; i<y+size; i++) {
        for(let j=x; j<x+size;j++) {
            if(b !== map[i][j]) {
                let div = size/2;
                ret += "("
                ret += quard(y,x , div);
                ret += quard(y, x+div, div);
                ret += quard(y+div, x, div);
                ret += quard(y+div,x+div, div);
                ret += ")"
                return ret;
            }
        }
    }
    return 1 === map[y][x] ? 1 : 0
}

function Solution() {
    
    
    return quard(0,0,N);
}

console.log(Solution());