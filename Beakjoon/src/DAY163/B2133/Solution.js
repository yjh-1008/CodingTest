const fs = require('fs');
const N = Number(fs.readFileSync('./text.txt').toString().trim());
const dp = new Array(N+1).fill(0);

function Solution() {
  //원하는 값 경우의 수
  dp[0] = 1;
  dp[2] = 3;
  for(let i=3;i<=N;i++) {
    if(i%2 !== 0) continue;
    for(let j=2;j<=i;j+=2) {
      if(j === 2) dp[i] = dp[i-j] * dp[j];
      else if(N-j >= 0) dp[i] += dp[i-j] *2;
    }
  }
  console.log(dp[N]);
}

Solution();

