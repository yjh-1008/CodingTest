const fs = require('fs');
const input = fs.readFileSync('./text.txt').toString().trim().split('\n');
const N = Number(input.shift());
const arr = Array.from({length: N}, () => new Array(N).fill(0));
const dp = Array.from({length: N}, () => new Array(N).fill(0));
function Solution() {
  for(let i=0;i<N;i++) {
    input[i].split(" ").forEach((v,j) => arr[i][j] = Number(v));
  }
  dp[0][0] = arr[0][0]
  for(let i=1;i<N;i++) {
    for(let j=0;j<=i;j++) {
      if(j === 0) dp[i][j] = arr[i][j] + dp[i-1][j];
      else if(j===i) dp[i][j] = arr[i][j] + dp[i-1][j-1];
      else {
        dp[i][j] = Math.max(arr[i][j] + dp[i-1][j-1], arr[i][j] + dp[i-1][j]);
      }
    };
    console.log(dp)
  }
  console.log(Math.max(...dp[N-1].splice(0, N)));
}

Solution();