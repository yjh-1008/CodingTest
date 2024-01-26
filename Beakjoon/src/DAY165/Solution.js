const fs = require('fs');
const [N, K] = fs.readFileSync('./text.txt').toString().trim().split(" ").map(v => Number(v));
const dp = Array.from({length:201} ,()=> new Array(201).fill(0));
function Solution() {
  for(let j=0;j<=N;j++) dp[1][j] = 1;
  for(let i=0;i<=K;i++) dp[i][0] = 1;
  // 점화식 : dp[i][j] = dp[i-1][j] + dp[i][j-1];
  for(let i=2;i<=K;i++) {
    for(let j=1;j<=N;j++) {
      dp[i][j] = (dp[i-1][j] + dp[i][j-1])%1000000000;
    }
  }
  console.log(dp[K][N])
}

Solution();