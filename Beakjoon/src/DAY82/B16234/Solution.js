const fs = require('fs');
const input = fs.readFileSync('./index.txt').toString().trim().split('\n');
const [N, L, R] = input[0].split(' ').map(Number);
const my = [1,-1,0,0], mx = [0,0,-1,1];
let map = [],cnt;
let visited, tmp;
for(let i=1; i<=N;i++) {
  map.push(input[i].split(' ').map(Number));
}

function dfs(y, x,area, val) {
  if(visited[y][x]) return;
  visited[y][x] = area;
  let ret = map[y][x];
  cnt++;
  for(let i=0;i<4;i++) {
    let ny= y+my[i], nx = x+mx[i];
    if(ny < 0 || nx<0 || ny>=N || nx>=N) continue;
    if(visited[ny][nx] > 0) continue; 
    let abs = Math.abs(map[y][x]- map[ny][nx]);
    if(abs < L || abs > R) continue;
    tmp.push([ny, nx])
    ret += dfs(ny, nx, area, val);
  }

  return ret;
}

function Solution() {
  let day = 0, chk = true, dimen;
  while(true) {
    let area = 0;
    chk = true;
    visited = Array.from(new Array(N), () => new Array(N).fill(0));

    for(let i=0;i<N;i++) {
      for(let j=0;j<N;j++) {
        if(visited[i][j] === 0) {
          tmp = [];
          dimen = 0;
          cnt=0;
          area++;
          tmp.push([i,j])
          dimen = dfs(i,j,area,map[i][j]);
          if(tmp.length === 1) continue;
          for(const [y, x] of tmp) {
            map[y][x] = Math.floor(dimen/cnt);
            chk = false;
          }
        }
      }
    }
    
    if(chk) break;
    day++;
  }
  return day
}

console.log(Solution());