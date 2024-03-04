const fs = require('fs');
const input = fs.readFileSync('./text.txt').toString().trim().split("\n");
const [N,M] = input[0].split(" ").map(Number);
const arr = [];
const visited  = Array.from({length:M},() => new Array(N).fill(0));
// const next = [[1,0],[-1,0],[0,1],[0,-1]];
for(let i=1;i<input.length;i++) {
  arr.push(input[i].split(" ").map(Number));
}

function getDir(x) {
  switch(x) {
    case 0:
      return [0,-1];
    case 1:
      return [-1,0];
    case 2:
      return [0,1];
    case 3:
      return [1,0];
  }
}

function go(x, y, cnt, rooms) {
  if(visited[x][y]) return 0;
  visited[x][y] = rooms;
  let ret = 1;
  for(let i=0;i<4;i++) {
    if(!(arr[x][y] & (1<<i))) {
      const [mx, my] = getDir(i);
      const nx = x+mx;
      const ny = y+my;
      // console.log(x, y, nx, ny, arr[x][y]);
      ret += go(nx, ny, cnt+1, rooms);
    }
  }
  return ret;
}

function Solution() {
  //서 북 동 남 : 1, 2, 4, 8
  let rooms = 1;
  const areas = {};
  let maxArea = 0, maxBrokenArea = 0;
  //1. 이 성에 있는 방의 개수
  for(let i=0;i<M;i++) {
    for(let j=0;j<N;j++) {
      if(!visited[i][j])  {
        const area = go(i,j,0, rooms);
        areas[rooms] = area;
        maxArea = Math.max(area, maxArea);
        rooms+=1;
      }
    }
  }
  for(let i=0;i<M;i++) {
    for(let j=0;j<N;j++) {
      if(i+1 < M) {
        if(visited[i][j] !== visited[i+1][j] ) {
          const area1=areas[visited[i][j]], area2 = areas[visited[i+1][j]];
          maxBrokenArea = Math.max(maxBrokenArea,area1+area2 );
        }
      }

      if(j+1<N) {
        if(visited[i][j] !== visited[i][j+1] ) {
          const area1=areas[visited[i][j]], area2 = areas[visited[i][j+1]];
          maxBrokenArea = Math.max(maxBrokenArea,area1+area2 );
        }
      }
    }
  }

  console.log(`${rooms-1}\n${maxArea}\n${maxBrokenArea}`);
}

Solution();