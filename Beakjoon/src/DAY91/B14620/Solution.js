const fs = require('fs');
const input = fs.readFileSync('./index.txt').toString().trim().split('\n');
const N = parseInt(input.shift());
let map  = [];
let visited = Array.from(new Array(N),()=> new Array(N).fill(0));
let my = [1,-1,0,0], mx = [0,0,-1,1];
let ret = Number.MAX_VALUE;

function go(y,x, cnt) {
  if(cnt===3) {
    let tmp = 0;
    for(let i=0;i<N;i++) {
      for(let j=0;j<N;j++) {
        if(visited[i][j]) {
          tmp += map[i][j];
        }
      }
    }
    ret = Math.min(ret, tmp);
    return;
  }
  for(let i=0;i<N;i++) {
    for(let j=0;j<N;j++) {
      if(visited[i][j]) continue;
      let chk = true;
      for(let k=0;k<4;k++) {
        let ny = i+ my[k], nx = j+mx[k];
        if(ny < 0 || nx<0 || ny>=N || nx>=N || visited[ny][nx]) {
          chk = false;
          break;
        } 
      }
      if(chk) {
        
        visited[i][j] = 1;
        let sum = 0;
        for(let k=0;k<4;k++) {
          let ny = i+ my[k], nx = j+mx[k];
          visited[ny][nx] = 1;
        }
        go(i,j, cnt+1);
        visited[i][j] = 0;
        for(let k=0;k<4;k++) {
          let ny = i+ my[k], nx = j+mx[k];
          visited[ny][nx] = 0
        }
      }
    }
  }

  return;
}

function Solution() {
  for(let i=0;i<N;i++) {
    map.push(input[i].split(' ').map(Number))
  }

  go(0,0 ,0);
}

Solution();
console.log(ret);


