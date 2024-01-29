const fs = require('fs');
const N = Number(fs.readFileSync("./text.txt").toString().trim());
const dp = Array.from({length: 100001}, () => new Array(3).fill(0));
function Solution() {
  dp[0][0] = 1;
  dp[0][1] = 1;
  dp[0][2] = 1;
  const MOD = 9901;
  for(let i=1;i<N;i++) {
    dp[i][0] = (dp[i-1][1] + dp[i-1][2]) % MOD;
    dp[i][1] = (dp[i-1][0] + dp[i-1][2]) % MOD;
    dp[i][2] = (dp[i-1][1] +dp[i-1][0] + dp[i-1][2]) % MOD;
  }
  console.log(dp[N-1].reduce((acc,cur) => {return acc += cur},0) %MOD);
}

Solution();