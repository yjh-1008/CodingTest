const fs = require('fs');
const input = fs.readFileSync('./text.txt').toString().trim().split('\n');
const [N, K] = input.shift().split(" ").map(v => Number(v));
const arr = input.map(v => Number(v));
const dp = new Array(K+1).fill(0);

function Solution() {
  arr.forEach(v => dp[v] = 1);
  for(let i=1;i<=N;i++) {
    for(let j=arr[i];j<=K;j++) {
      dp[j] += dp[j - arr[i]];
    }
  }
  console.log(dp[K])
}

Solution();