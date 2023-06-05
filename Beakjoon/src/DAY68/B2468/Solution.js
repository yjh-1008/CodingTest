const fs = require('fs');
const [n, ...input] = fs.readFileSync('./index.txt').toString().trim().split('\n');

let map = [];
let visited;
let my= [1,-1,0,0];
let mx= [0,0,-1,1];
input.forEach((data)=> {
    map.push(data.split(' ').map(Number))
})


function dfs(y, x, t) {
    visited[y][x] = 1;
    for(let i=0;i<4;i++) {
        let ny = y+my[i];
        let nx = x+mx[i];
        if(ny<0 || nx < 0 || ny>=n || nx>=n || map[ny][nx] < t) continue;
        if(visited[ny][nx] === 0) {
            dfs(ny, nx, t);
        }
    }
}
function Solution() {
    let answer = Number.MIN_VALUE;
    let count;
    for(let t=1;t<=100;t++)  {
        count = 0;
        visited = Array.from(new Array(Number(n)),() => new Array(Number(n)).fill(0));

        for(let i=0;i<n;i++) {
            for(let j=0;j<n;j++) {
                if(map[i][j] >= t && visited[i][j] === 0) {
                    count++;
                    dfs(i, j, t);
                }
            }
        }
        answer = Math.max(answer, count)
    }

    return answer;
}

console.log(Solution())