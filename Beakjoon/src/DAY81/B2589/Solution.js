const fs = require('fs');
const input = fs.readFileSync('./index.txt').toString().trim().split('\n');
const [N,M] = input[0].split(' ').map(Number);
let map = [], my = [1,-1,0,0], mx = [0,0,-1,1];
let visited;
let ret= 0
for(let i=1;i<=N;i++) {
  // console.log(input[i].split(''))
  map.push(input[i].split(''));
}

function bfs(y, x) {
  const q=[];
  visited[y][x] = 1;
  q.push([y,x]);
  while(q.length) {
    const [cy, cx] = q.shift();
    
    for(let i=0;i<4;i++) {
      let ny = cy + my[i];
      let nx = cx +  mx[i];
      if(ny < 0 || nx <0 || ny>=N || nx >=M) continue;
      if(map[ny][nx] === 'L' && visited[ny][nx] === 0) {
        console.log
        q.push([ny,nx]);
        visited[ny][nx] = visited[cy][cx]+1;
        ret = Math.max(ret, visited[cy][cx]+1)
      }
    }
  }
}


function Solution() {
  for(let i=0;i<N;i++) {
    for(let j=0;j<M;j++) {
      if(map[i][j] === 'L') {
        visited = Array.from(new Array(N), () => new Array(M).fill(0));
        bfs(i,j);
      }
    }
  }
}
Solution()
console.log(ret === 0 ? 0: ret-1);