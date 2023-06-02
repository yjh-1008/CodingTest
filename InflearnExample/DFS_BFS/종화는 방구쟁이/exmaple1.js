const fs = require('fs');
const input = fs.readFileSync('./index.txt').toString().trim().split('\n');

const [n,m] = input.shift().split(' ').map(Number);
let map =[];
let visited= Array.from(Array(n), () => new Array(m).fill(false));
let my= [1,-1,0,0];
let mx = [0,0,-1,1];

for(let i=0; i<n;i++) {
    let rows = input.shift().split(' ').map(Number);
    map.push(rows);
    for(let j=0; j<m; j++) {
        if(map[i][j] === 0) visited[i][j] = true;
    }
}
let answer = 0;
function solution(y, x) {
    console.log(y,' ',x)
    visited[y][x] = true;
    for(let i=0;i<4;i++) {
        let ny = my[i] + y;
        let nx = mx[i] + x;
        if(ny < 0 || nx <0 || ny>=n || nx>=m) continue;
        if(map[ny][nx] === 1 && !visited[ny][nx]) {
            solution(ny,nx);
        }
    }
}

for(let i=0;i<n;i++) {
    for(let j=0;j<m;j++) {
        if(map[i][j] === 1 && !visited[i][j]) {
            answer++;
            console.log(i,' ',j)
            solution(i,j);
        }
    }
}

console.log(answer);