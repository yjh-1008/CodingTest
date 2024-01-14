const fs = require('fs');
const input = fs.readFileSync('./text.txt').toString().trim().split('\n');
const N = Number(input[0]);
const map = Array.from({length: 24}, () => new Array(24).fill(0));


for(let i=1;i<=N;i++) {
  const arr = input[i].split(" ").map(v=>Number(v));
  for(let j=1;j<=N;j++) {
    map[i][j] = arr[j-1];
  }
}
const dp = Array.from({length: 24}, () => Array.from({length:24}, () => new Array(3).fill(0)));

function check(y, x, d) {
  if(d === 0 || d===2) {
    if(!map[y][x]) return true;
  } else if(d === 1) {
    if(map[y][x] === 0 && map[y-1][x] === 0 && map[y][x-1] === 0) return true;
  }
  return false;
}


function Solution() {
  dp[1][2][0] = 1;
  for(let i=1;i<=N;i++) {
    for(let j=1;j<=N;j++) {
      // 0: 가로, 1: 대각선, 2, 세로
      if(check(i, j+1, 0)) dp[i][j+1][0] += dp[i][j][0]; 
      if(check(i+1, j+1, 1)) dp[i+1][j+1][1] += dp[i][j][0];

      if(check(i+1, j, 2)) dp[i+1][j][2] += dp[i][j][2];
      if(check(i+1, j+1, 1)) dp[i+1][j+1][1] += dp[i][j][2];

      if(check(i, j+1, 0)) dp[i][j+1][0] += dp[i][j][1];
      if(check(i+1, j, 2)) dp[i+1][j][2] += dp[i][j][1];
      if(check(i+1, j+1, 1)) dp[i+1][j+1][1] += dp[i][j][1];
    }
  }
  console.log(dp[N][N][0] + dp[N][N][1] + dp[N][N][2]);
}

Solution();