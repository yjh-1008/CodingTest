const fs = require('fs');
const input = fs.readFileSync('./test.txt').toString().trim().split("\n");
let arr;
let visited;
const T = input[0];

const dx = [0,0,-1,1], dy = [-1,1,0,0];

function go(x, y, N, M) {
  for(let i=0;i<4;i++) {
    const nx = x+dx[i], ny = y+dy[i];
    // console.log(N, M)
    if(nx < 0 || nx>= N || ny<0 || ny>=M) continue;
    if(visited[nx][ny] === true || arr[nx][ny] === 0) continue;
    visited[nx][ny] = true;
    go(nx, ny, N, M);
  }
}

function Solution() {
  let idx=1;
  const answer = [];
  for(let i=1;i<=T;i++) {
    // console.log(input[idx])
    const [N, M, K] = input[idx++].split(" ").map(Number);
    const range = idx+K;

    arr = Array.from({length: N},() => new Array(M).fill(0));
    visited =Array.from({length: N},() => new Array(M).fill(0));
    let cnt= 0;
    // console.log(arr)
    while(idx<range) {
      const [x, y] = input[idx++].split(" ").map(Number);
      arr[x][y] = 1;    
    }  

    for(let i=0;i<N;i++) {
      for(let j=0;j<M;j++) {
        if(visited[i][j] == false && arr[i][j] == 1) {
          visited[i][j] = true;
          go(i, j, N, M);
          cnt++;
        }
      }
    }
    // console.log(cnt)
    answer.push(cnt)
  }
  console.log(answer.join("\n"))
}

Solution();