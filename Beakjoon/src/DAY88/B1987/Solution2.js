const fs = require('fs');
const input = fs.readFileSync('./index.txt').toString().trim().split('\n');
const [R, C] =  input.shift().split(' ').map(Number);
let map = input.map((data)=> [...data]);
let ret = Number.MIN_VALUE;

let my = [1,-1,0,0], mx = [0,0,-1,1];

function dfs(y,x,num, cnt) {
  ret = Math.max(ret, cnt);
  for(let i=0;i<4;i++) {
    let ny = y+my[i], nx = x+mx[i];
    if(ny < 0 || nx<0 || ny>=R || nx>=C) continue;
    let next = 1<<map[ny][nx].charCodeAt(0)- 65
    if((num & next) === 0) dfs(ny, nx, num | next, cnt+1);
  }
  return;
}

function Solution() {
  dfs(0,0,1<<map[0][0].charCodeAt(0)- 65, 1)
  console.log(ret);
}

Solution();



