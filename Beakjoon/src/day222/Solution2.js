const fs = require('fs');
const input = fs.readFileSync('./text.txt').toString().trim().split("\n");
const [M,N, K] = input[0].split(" ").map(Number);

const visited = Array.from({length:M},() => Array(N).fill(false));
const DX = [0,1,0,-1], DY = [1,0,-1,0];
function go(x, y) {
  visited[x][y] = true;
  let area = 1;

  for(let i=0;i<4;i++) {
    const nx = DX[i] + x, ny = DY[i] + y;
    if(nx < 0 || nx >= M || ny < 0 || ny >= N) continue;
    // console.log(nx, ny)
    if(visited[nx][ny]) continue;
    area+= go(nx, ny);
  }
  return area;
} 

function Solution() {
  input.slice(1).forEach((v) => {
    const [sx, sy, ex, ey] = v.split(' ').map(Number);
    for(let j=sx;j<ex;j++) {
        for(let k=sy; k<ey;k++) {
            visited[k][j] = true;
        }
    }
  })
  const answer = [];
  for(let i=0;i<M;i++) {
    for(let j=0;j<N;j++) {
      if(!visited[i][j]) {
        answer.push(go(i, j))
        // console.log(visited)
      }
    }
  }
  console.log(`${answer.length}\n${answer.sort((a,b)=> a-b).join(" ")}`)
}

Solution();