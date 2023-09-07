const fs = require('fs');
const input = parseInt(fs.readFileSync('./index.txt').toString().trim());

const dp = new Array(input+1).fill(0);
// dp[0] = 0;
// dp[1] = 1;
function Solution() {
  for(let i=2;i<=input;i++) {
    dp[i] = dp[i-1]+1
    if(i%3 === 0) dp[i] = Math.min(dp[i], dp[Math.floor(i/3)] +1);
    if(i%2 === 0) dp[i] = Math.min(dp[i], dp[Math.floor(i/2)] +1);
  }
  console.log(dp[input]);
}

Solution();