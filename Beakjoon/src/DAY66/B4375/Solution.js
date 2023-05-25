function solution() {
    const answer=[];
    while(input.length) {
        const num = input.shift();
        let str = '1';
        while (BigInt(str) % BigInt(num)!== BigInt(0)) {
            str+='1'
        } 
        answer.push(str.length)
    }

    return answer;
}

const fs = require('fs');
const input = fs.readFileSync('./index.txt').toString().trim().replaceAll('\r','').split('\n').map(Number);

console.log(solution().join('\n'));