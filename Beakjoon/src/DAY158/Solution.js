const fs = require('fs');
const input = fs.readFileSync('./text.txt').toString().trim().split('\n');
const [N,M] = input.shift().split(" ").map(v => Number(v));
const mx = [0,0,-1,1], my = [1,-1,0,0];
const map = Array.from({length:N});
const dp = Array.from({length:N}, () => new Array(M).fill(-1));
let ret = 0;
function initMap() {
  for(let i=0;i<N;i++) {
    map[i] = input[i].split(" ").map(v => Number(v));
  }
}

function go(x, y) {
  if(x === N-1 && y === M-1) return 1;
  if(dp[x][y] != -1) return dp[x][y]
  dp[x][y] = 0;
  for(let i=0;i<4;i++) {
    const nx = x+mx[i], ny= y+my[i];
    if(nx < 0 || ny<0 || nx >=N || ny>=M) continue;
    if(map[nx][ny] < map[x][y]) {
      dp[x][y] = dp[x][y] + go(nx, ny);
    }
  }
  return dp[x][y];
};

function Solution() {
  initMap();
  ret= go(0,0);
  console.log(ret)
};

Solution();