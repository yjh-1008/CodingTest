const fs = require('fs');
const input = fs.readFileSync('./index.txt').toString().trim().split('\n');
const [N,M] = input.shift().split(' ').map(Number);
let map = [];
let visited =[]
let my= [1,-1,0,0], mx = [0,0,-1,1], chese=[],time=0;
for(let i=0;i<N;i++) {
    let r = input[i].split(' ').map(Number);
    map.push(r);
}


function go(y, x) {
    visited[y][x] = 1;
    if(map[y][x] === 1) {
        chese.push([y, x]);
        return;
    }

    for(let k=0;k<4;k++) {
        const ny=  y+my[k];
        const nx = x+mx[k];
        if(ny <0 || nx<0 || ny>=N || nx>=M) continue;
        if(visited[ny][nx]===1) continue;
        visited[ny][nx] = 1;
        go(ny, nx);
    } 
    return;
}


function Solution() {
    let cnt2;
    while(true) {
        visited = Array.from(new Array(N), () => new Array(M).fill(0));
        chese = [];
        go(0,0);
        cnt2 = chese.length;
        chese.forEach((c) => {
            map[c[0]][c[1]] = 0;
        })

        
        let flag = 0;
        for(let i=0;i<N;i++) {
            for(let j=0;j<M;j++) {
                if(map[i][j] === 1) flag = 1;
            }
        }
        time++;
        if(!flag) break;
    }
    return [time, cnt2];
}


console.log(Solution().join('\n'));