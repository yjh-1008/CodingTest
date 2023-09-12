const fs = require('fs');
const [N,...arr] = fs.readFileSync('./index.txt').toString().trim().split('\n').map(Number);
function Solution() {
  const dp = Array.from(310).fill(0);
  dp[0] = arr[0];
  dp[1] = arr[0] + arr[1];
  dp[2] = Math.max(arr[0] + arr[2], arr[1]+arr[2]);
  for(let i=3;i<N;i++) {
    dp[i] = Math.max(arr[i] + arr[i - 1] + dp[i - 3], arr[i] + dp[i - 2]);
  }
  console.log(dp[N-1]);
}

Solution();