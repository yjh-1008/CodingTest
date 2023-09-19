const fs = require('fs');
const input= fs.readFileSync('./index.txt').toString().trim().split('\n');
const [N,M] = input.shift().split(' ').map(Number);
const arr = input.map(v=>v.split(''));
const dp = Array.from({length: N},()=> new Array(M).fill(0));
const visited = Array.from({length: N},()=> new Array(M).fill(0));
const toX = [0,0,-1,1], toY=[1,-1,0,0];
function Solution() {
  const go = (x,y) => {
    let move = parseInt(arr[x][y]);
    for(let i=0;i<4;i++) {
      let nx = x+toX[i] * move;
      let ny = y+toY[i] * move;
      if(nx < 0 || ny<0 || nx>=N || ny>=M) continue;
      if(arr[nx][ny] === 'H') continue;
      if(visited[nx][ny]) {
        process.exit(console.log(-1));
      }
      if(dp[nx][ny] < dp[x][y] +1) {
        dp[nx][ny] = dp[x][y]+1
        visited[nx][ny] = 1;
        go(nx, ny);
        visited[nx][ny] = 0;
      }
    }
    return;
  }
  dp[0][0] = 1;
  visited[0][0] =1;
  go(0,0)
  // console.log(dp)
  let ret = 0;
  for(let i=0;i<N;i++) {
    for(let j=0;j<M;j++) {
      if(dp[i][j] === -1) {
        console.log(-1);
        return;
      }
      ret = Math.max(ret, dp[i][j]);
    }
  }
  console.log(ret)
}

Solution();