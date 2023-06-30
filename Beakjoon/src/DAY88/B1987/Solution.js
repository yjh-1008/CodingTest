const fs = require('fs');
const input = fs.readFileSync('./index.txt').toString().trim().split('\n');
let [R, C] = input.shift().split(' ').map(Number);
let map = input.map((v)=> [...v]);
let ret = Number.MIN_VALUE;
let visited = new Array(30).fill(0);
function go(y, x, cnt) {
  ret = Math.max(cnt, ret);
  for(let i=0;i<4;i++) {
    let ny = y + my[i];
    let nx = x + mx[i];
    if(ny < 0 || nx <0 || ny>=R || nx>=C) continue;
    let idx = map[ny][nx].charCodeAt(0) - 65
    if(visited[idx]) continue;
    visited[idx] = 1;
    go(ny, nx, cnt+1);
    visited[idx] = 0;
  }
  return;
}

let my = [1,-1,0,0], mx = [0,0,-1,1];
function Solution() {


 
  
  visited[map[0][0].charCodeAt(0)- 65] = 1;
  go(0, 0, 1)

  return ret;
}

console.log(Solution());