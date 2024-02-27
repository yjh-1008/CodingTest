const fs = require('fs');
const input = fs.readFileSync('./text.txt').toString().trim().split("\n");
const [N,M] = input[0].split(" ").map(Number);
const arr = [];
const next= [[1,0], [-1,0], [0,1],[0,-1]];
for(let i=1;i<input.length;i++) {
  arr.push(input[i].split(""));
}

function getNum (c) {
  return c.charCodeAt(0) - 65;
}
let ret = -1;
function go(x, y,cnt, cur) {
  ret = Math.max(ret, cnt);
  for(let i=0;i<4;i++) {
    const [mx, my] = next[i];
    const nx = mx+x, ny = my+y;
    if(nx < 0 || nx >= N || ny<0 || ny>=M) continue;
    const tmp = 1 << getNum(arr[nx][ny]);
    if((cur & tmp )=== 0) go(nx, ny, cnt+1, tmp | cur);
  }
  return;
}

function Solution() {
  go(0,0,1, 1<<getNum(arr[0][0]));
  console.log(ret);
}

Solution();