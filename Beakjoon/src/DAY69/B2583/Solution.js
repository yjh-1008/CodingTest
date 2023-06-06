const fs = require('fs');
const input = fs.readFileSync('./index.txt').toString().trim().split('\n');
const [M,N,K] = input.shift().split(' ').map(Number);
let map = Array.from(new Array(M), () => new Array(N).fill(0))
let visited = Array.from(new Array(M), () => new Array(N).fill(0))
const dy = [1,-1,0,0]
const dx = [0,0,-1,1]

function dfs(y, x) {
    visited[y][x] = 1;
    let ret = 1;
    for(let i =0;i<4;i++) {
        let ny = y+dy[i];
        let nx = x+dx[i];
        if(ny < 0 || nx<0 || ny>=M || nx>=N) continue;
        if(map[ny][nx] === 0 && visited[ny][nx] === 0) {
            ret += dfs(ny, nx);
        }
    }
    return ret;
}

function Solution() {
    
    for(let i=0;i<K;i++) {
        const [sx, sy, ex, ey] = input.shift().split(' ').map(Number);
        for(let j=sx;j<ex;j++) {
            for(let k=sy; k<ey;k++) {
                map[k][j] = 1;
            }
        }
    }
    let dimen = []
    for(let y = 0;y<M;y++) {
        for(let x = 0 ; x<N; x++) {
            if(map[y][x] === 0 && visited[y][x]===0) {
                dimen.push(dfs(y, x))
            }
        }
    }
    dimen= dimen.sort((a,b) => a-b);
    return dimen
}
const result = Solution();
console.log(result.length);
console.log(result.join(' '))