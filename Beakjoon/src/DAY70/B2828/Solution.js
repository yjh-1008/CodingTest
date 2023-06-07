const fs = require('fs');
let input = fs.readFileSync('./index.txt').toString().trim().split('\n');
const [N, M] = input.shift().split(' ').map(Number)
const j = parseInt(input.shift());
input = input.map(Number);
function Solution() {
    let ret = 0;
    let cur = 1;
    for(let i=0;i<j;i++) {
        let ran = cur + M -1;
        let tmp = input[i];
        if(tmp >= cur && tmp <= ran) continue;
        else {
            if(tmp < cur) {
                ret += (cur - tmp);
                cur = tmp;
            }else {
                cur += tmp - ran;
                ret += tmp - ran;
            }
        }
        
    }
    return ret;
}

console.log(Solution());