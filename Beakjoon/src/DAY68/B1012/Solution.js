const fs = require('fs')
const input = fs.readFileSync('./index.txt').toString().trim().split('\n')
const test = Number(input.shift());
let my = [1,-1,0,0];
let mx = [0,0,-1,1];
let map, visited,n,m,c;
function dfs(y, x,n, m) {
    for(let i=0;i<4;i++) {
        let ny = y+my[i];
        let nx = x+mx[i];
        if(ny<0 || nx<0 || ny>=n || nx>=m || map[ny][nx] === 0) continue;
        if(visited[ny][nx] === 1) continue;
        visited[ny][nx] = 1;
        dfs(ny, nx,n, m)
    }
}


function Solution() {
    const answer = [];
    let count;
    for(let i=0;i<test;i++) {
        //지도 그리기
        count = 0;
        [n, m, c] = input.shift().split(' ').map(Number);
        map = Array.from(Array(n), () => new Array(m).fill(0)), visited = Array.from(Array(n), () => new Array(m).fill(0))

        for(let j=0;j<c;j++) {
            const [y, x] = input.shift().split(' ').map(Number);
            map[y][x] = 1;
        }

        for(let y=0;y<n;y++) {
            for(let x=0;x<m;x++) {
                if(map[y][x] === 1 && visited[y][x] === 0) {
                    count++;
                    visited[y][x] = 1;
                    dfs(y, x, n, m)
                } 
            }
        }
        answer.push(count);
    }
    return answer;
}

console.log(Solution().join('\n'));