const fs = require('fs');
const input = parseInt(fs.readFileSync('./index.txt').toString().trim());

let dp = new Array(91).fill(0);

function Solution() {
  dp[1] = 1;
  for(let i=2;i<=90;i++) {
    dp[i] = BigInt(dp[i-1]) + BigInt(dp[i-2]);
  }
  console.log(dp[input].toString());
}

Solution();