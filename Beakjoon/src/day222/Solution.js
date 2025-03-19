const fs = require('fs');
const input = fs.readFileSync('./text.txt').toString().trim().split("\n");
const N = Number(input[0]);
const arr = input.slice(1).map((v) => v.split(" ").map(Number));

const DX = [0,1,0,-1], DY = [-1,0,1,0];

function go(x, y, t, visited) {
  visited[x][y] = true;

  for(let i=0;i<4;i++) {
    const nx = x+DX[i], ny = y+DY[i];
    if(nx < 0 || nx >= N || ny < 0 || ny >= N) continue;
    if(visited[nx][ny] === true || arr[nx][ny] <= t) continue;

    go(nx, ny,t , visited);
  }
}

function Solution() {
  let answer = 1;
  for(let t=1;t<=100;t++) {
    let cnt = 0;
    const visited = Array.from({length:N}, () => Array(N).fill(false));
    for(let i=0;i<N;i++) {
      for(let j=0;j<N;j++) {
        if(!visited[i][j] && arr[i][j] > t ) {
          // console.log(i, j, t)
          cnt += 1;
          go(i,j, t, visited);
        }
      }
    }
    // console.log(cnt)
    // if(answer > cnt) break;
    answer = Math.max(answer, cnt);
  }
  // console.log(visited, arr)
  console.log(answer)
}

Solution();

