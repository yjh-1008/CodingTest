'use strict';
const fs = require('fs');
const input = fs.readFileSync('./text.txt').toString().trim().split("\n");
const [N,M] = input[0].split(" ").map(Number);
const map = [];
const items = [];
const moves = [[0, 1], [0,-1], [-1,0],[1,0]];
let dp = [];
let cnt = 0;
for(let i=1;i<=N;i++) {
  map.push(input[i].split(" ").map(Number));
  dp.push(new Array(N).fill([]));
}
for(let i=1+N;i<input.length;i++) {
  const [x, y, d] = input[i].split(" ").map(Number);
  const item = {
    x: x-1,
    y: y-1,
    d: d-1,
    id: cnt
  }
  items.push(item);
  dp[item.x][item.y] = [item.id];
  cnt+=1; 
}


// function isOver() {
//   for(let i=0;i<N;i++) {
//     for(let j=0;j<N;j++) {
//       if(dp[i][j].length >= 4) {
//         return true;
//       }
//     }
//   }
//   return false;
// }

function reverseAction(n) {
  switch(n) {
    case 0: 
      return 1;
    case 1:
      return 0;
    case 2:
      return 3;
    case 3:
      return 2;
  }
}

function progress(item, nx, ny) {
  let color = map?.[nx]?.[ny];
  if(color === undefined) {
    color = 2;
  }

  switch(color) {
    case 0:{
      const {x, y, d, id} = item;
      const tmp = dp[x][y];
      const findIdx = tmp.findIndex(s => s === item.id);
      const sliceArr = tmp.slice(findIdx);
      sliceArr.forEach(s => {
        items[s].x = nx;
        items[s].y = ny;
      });
      dp[nx][ny] = dp[nx][ny].concat(sliceArr);
      dp[x][y] = dp[x][y].slice(0, findIdx);
      return [nx, ny];
    }
    case 1: {
      const {x, y, d, id} = item;
      const cur = dp[x][y];
      const findIdx = cur.findIndex(s => s === item.id);
      const sliceArr = cur.slice(findIdx);
      sliceArr.forEach(s => {
        items[s].x = nx;
        items[s].y = ny;
      });
      sliceArr.reverse();
      dp[nx][ny] = dp[nx][ny].concat(sliceArr);
      dp[x][y] = dp[x][y].slice(0, findIdx);
      return [nx, ny];
    }
    case 2: {
      item.d = reverseAction(item.d);
      const rnx = item.x + moves[item.d][0] , rny = item.y + moves[item.d][1];
      const nColor = map?.[rnx]?.[rny];
      if(nColor === 2 || nColor === undefined) return [item.x, item.y];
      else return progress(item, rnx, rny);
    }
  }
}


function Solution() {
  let max = 0;
  let ret = 0;
  while(max < 4 && ret <=1000) {
    for(let i=0;i<items.length;i++) {
      const item = items[i];
      const nx = item.x + moves[item.d][0];
      const ny = item.y + moves[item.d][1];
      let [targetX, targetY] = progress(item, nx, ny);
      max = Math.max(dp[targetX][targetY].length, max);
    }
    ret +=1;
  }
  console.log(ret>1000 ? -1 : ret);      
}

Solution();

