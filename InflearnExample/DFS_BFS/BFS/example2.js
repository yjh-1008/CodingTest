const fs = require('fs');
const input = fs.readFileSync('./index.txt').toString().trim().split('\n');
const [n,m] = input.shift().split(' ').map(Number);
const [sy, sx] = input.shift().split(' ').map(Number);
const [dy, dx] = input.shift().split(' ').map(Number);
const my = [1,-1,0,0];
const mx = [0,0,-1,1];
let map = [];
for(let i=0;i<n;i++){
        map.push(input.shift().split(' ').map(Number))
}
const visited = Array.from(new Array(n), () => new Array(m).fill(false));
class Point{
        constructor(y, x,c) {
                this.y = y;
                this.x =x;
                this.c = c;
        }
}

function bfs(sy, sx) {
        let q = [];
        q.push(new Point(sy,sx,0));
        visited[sy][sx] = true;
        while(q.length){
                let tmp = q.shift();
                if(tmp.y === dy && tmp.x === dx) {
                        return tmp;
                }
                for(let i = 0;i<4;i++) {
                        let ny = tmp.y+my[i];
                        let nx = tmp.x+mx[i];
                        if(ny < 0 || nx <0 || ny>=n ||nx>=m) continue;
                        if(!visited[ny][nx] && map[ny][nx] === 1) {
                                q.push(new Point(ny, nx, tmp.c+1));
                        }
                }
        }
        return -1;
}
const result = bfs(sy,sx);

console.log(result === -1 ? result : result.c);
