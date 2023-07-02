const fs = require('fs');
const input = fs.readFileSync('./index.txt').toString().trim().split('\n')
const [N, M, H] = input.shift().split(' ').map(Number);
let visited  =  Array.from(new Array(H+1),()=> new Array(N+1).fill(0));
let mx = [1,-1];
let answer = Number.MAX_VALUE;

function check() {
  for(let i=1;i<=N;i++) {
    let start = i;
    for(let j=1;j<=H;j++) {
      if(visited[j][start]) start++;
      else if(visited[j][start-1]) start--;
    }
    if(i !== start) return false;
  }
  return true;
}


function go(here,cnt) {
  if(cnt > 3 || cnt >= answer) {
    return;
  }

  if(check()) {
    answer = Math.min(answer, cnt);
    return;
  }
 
  for(let i=here;i<=H;i++) {
    for(let j=1;j<=N;j++) {
      if(visited[i][j] || visited[i][j+1]|| visited[i][j-1]) continue;
      visited[i][j] = 1;
      go(i, cnt+1);
      visited[i][j]=0;
    }
  }

  return;
}

function Solution() {
  for(let i=0;i<M;i++) {
    const [y, x] = input[i].split(' ').map(Number);
    visited[y][x] = 1;
  }
  go(1,0);

}
Solution()
console.log(answer === Number.MAX_VALUE ? -1 : answer);