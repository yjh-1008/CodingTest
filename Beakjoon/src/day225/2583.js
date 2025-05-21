const fs = require('fs');
const input = fs.readFileSync('./2583.txt').toString().trim().split("\n");

const [M, N] = input[0].split(" ").map(Number);
const squares = input.slice(1);
const DY = [-1,0,1,0], DX = [0,1,0,-1];

(function Solution(){
  const map = Array.from(Array(M), () => Array(N).fill(false));
  let ret = 0;
  const areas = [];
  const move = (y, x) => {
    let cnt = 1;
    for(let i=0;i<4;i++) {
      const ny = DY[i] + y, nx = DX[i] + x;

      if(ny < 0 || ny >= M || nx < 0 || nx>=N) continue;
      if(map[ny][nx]) continue;

      map[ny][nx] = true;
      cnt += move(ny, nx, cnt);
    }
    return cnt;
  }

  squares.forEach((item, idx) => {
    const [sx, sy, ex, ey] = item.split(" ").map(Number);
    for(let i=sy;i<ey;i++) {
      for(let j=sx;j<ex; j++) {
        map[i][j] = true;
      }
    }
  })

  for(let i=0;i<M;i++) {
    for(let j=0;j<N;j++) {
      if(!map[i][j])  {
        map[i][j] = true;
        ret++;
        const cnt = move(i, j,1);
        areas.push(cnt);
      }
    }
  }
  console.log(ret)
  console.log(areas.sort((a,b) => a-b).join(" ").trim())
}())