const fs = require('fs');
const input = fs.readFileSync('./index.txt').toString().trim().split('\n');
const [n,m] = input.shift().split(' ').map(Number);
let visited = Array.from(new Array(n), () => new Array(m).fill(0));
let map =[];

input.map(data => {
    map.push(data.split('').map(Number));
})

class Point {
    constructor(y, x) {
        this.y =y;
        this.x = x;
    }
}

const my = [1,-1,0,0]
const mx = [0,0,-1,1];
function Solution(sy, sx) {
    const q = [];
    q.push(new Point(sy, sx));
    visited[0][0] = 1;
    while(q.length) {
        const {y,x} = q.shift();
        if(y === n-1 && x === m-1)  return   
        for(let i=0;i<4;i++) {
            const ny = y+my[i];
            const nx = x+mx[i];
            if(ny < 0 || nx < 0 || ny >=n ||nx>=m || map[ny][nx] === 0) continue;
            if(visited[ny][nx] > 0) continue;
            visited[ny][nx] = visited[y][x]+1;
            q.push(new Point(ny, nx))
        }
    }
    
}

Solution(0,0)
console.log(visited[n-1][m-1])
 