const fs = require('fs');
const input = fs.readFileSync('./index.txt').toString().trim().split('\n');
let [R, C, K] = input.shift().split(' ').map(Number);
let visited = Array.from(new Array(R),()=> new Array(C).fill(0));
let map = [];
let my=  [1,-1,0,0] , mx = [0,0,-1,1];
let ret = 0 ;
function go(y, x,cnt) {
  if(y === 0 && x === C-1) {
    if(cnt === K) {
      ret++;
    }
    return;
  }
  for(let i=0;i<4;i++) {
    let ny = y + my[i], nx = x+mx[i];
    if(ny<0 || nx<0 || ny>=R|| nx>=C) continue;
    if(visited[ny][nx]) continue;
    visited[ny][nx] = 1;
    go(ny, nx, cnt+1);
    visited[ny][nx] = 0;
  }
  return;
}


function Solution() {
  for(let i=0;i<R;i++) {
    let str = input[i].split('')
    for(let j=0;j<C;j++) {
      if(str[j] === 'T') visited[i][j] = 1;
    }
    map.push(str);
  }
  visited[R-1][0] = 1;
  go(R-1,0,1);
  
}
Solution()
console.log(ret);