// #: 벽
// .: 지나갈 수 있는 공간
// J: 지훈이의 미로에서의 초기위치 (지나갈 수 있는 공간)
// F: 불이 난 공간
const fs = require('fs');
const input = fs.readFileSync('./index.txt').toString().split('\n');
const [R,C] = input[0].split(' ').map(Number);
let map = [], my = [1,-1,0,0]; mx = [0,0,-1,1], visited = Array.from(new Array(R), () => new Array(C).fill(0)),  q = [];
let J=[],F=[];
for(let i=1;i<= R; i++) {
  let tmp =  input[i].split('')
  map.push(tmp);
  tmp.filter((data,idx)=> {
    if(data === 'J'){
      J.push([i-1,idx]);
      visited[i-1][idx] = 1;
    } 
    else if(data === 'F') {
      F.push([i-1,idx]);
      visited[i-1][idx] = 1;
    }else if(data=== '#'){
      visited[i-1][idx] = -1;
    } 
  });

}

function Solution() {
  let chk= false;
  
  while(F.length) {
    const [y, x] = F.shift();

    for(let i=0;i<4;i++) {
      const ny = y + my[i];
      const nx = x + mx[i];
      if(ny < 0 || nx < 0 || ny>=R || nx>=C) continue;
      if(visited[ny][nx] === 0) {
        visited[ny][nx] = visited[y][x]+1;
        F.push([ny, nx])
      }
    }
  }
  
  while(J.length) {
    const [y, x] = J.shift();
    
    for(let i=0;i<4;i++) {
      const ny = y + my[i];
      const nx = x + mx[i];
      if(ny < 0 || nx < 0 || ny>=R || nx>=C) continue;
      if(visited[ny][nx] === -1) continue;
      if(visited[y][x]+1 >= visited[ny][nx]) continue;
      if(ny === 0 || nx === 0 || ny === R-1 || nx=== C-1) {
        return visited[y][x]+1;
      }
      visited[ny][nx] = visited[y][x]+1;
      J.push([ny,nx])
    }
    
  }
  return "IMPOSSIBLE"
}

console.log(Solution());

