const fs = require('fs');
const input = fs.readFileSync('./index.txt').toString().trim().split('\n');
const [N, M] = input.shift().split(' ').map(Number);


function makeMap() {
    let map = [];

    for(let i=0;i<N;i++) {
        map.push(input.shift().split(''));
    }

    return map;
}

function Solution() {
    const ret = [];

    const map = makeMap();
    let chk, count, str;
    let row = [];
    for(let i=0; i<N; i++){
        chk = false;
        count = 0;
        str = ""
        for(let j=0;j<M;j++) {
            if(map[i][j] === ".") {
                if(chk) str += `${count} `;
                else str += "-1 "; 
            }else if(map[i][j] === "c") {
                count = 0;
                str += `${count} `;
                chk = true;
            }
            count++;
        }
        ret.push(str.trim())
    }
    return ret;
}

console.log(Solution().join('\n'))