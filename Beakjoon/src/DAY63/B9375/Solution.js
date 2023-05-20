const fs = require('fs');
let input = fs.readFileSync('./index.txt').toString().trim().replaceAll('\r','').split('\n');

function numberOfCase(map, arr) {
    arr.forEach((data)=> {
        let s = data.split(' ');
        map.set(s[1], map.has(s[1]) ? map.get(s[1])+1 : 1);
    })
    let result = 1
    map.forEach(data => {
        result *= data+1;
    })
    return result-1;
}

function solution() {
    let answer = []
    let n = parseInt(input.shift());
    let map = new Map();
    for(let i=0;i<n;i++) {
        let m = parseInt(input.shift());
        let arr = input.slice(0, m);
        input = input.slice(m);
        answer.push(numberOfCase(map, arr));
        map.clear()
    }
    return answer;
}

console.log(solution().join('\n'));