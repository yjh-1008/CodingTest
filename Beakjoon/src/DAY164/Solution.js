const fs = require('fs');
const input = fs.readFileSync('./text.txt').toString().trim().split("\n");
const N = Number(input.shift());
const dp = Array.from({length: N},() => new Array(N).fill(0n));
const arr = input.map(v => {
  return v.split(" ").map(d => Number(d))
});

function Solution() {
  dp[0][0] = 1n;
  for(let i=0;i<N;i++) {
    for(let j=0;j<N;j++) {
      const cur = arr[i][j];
      const r = j + cur;
      const d = i + cur;
      if(!dp[i][j]) continue;
      if(i === N-1 && j=== N-1) continue;
      if(d<N) dp[d][j] = dp[i][j] + dp[d][j];
      if(r<N) dp[i][r] = dp[i][j] + dp[i][r];
    }
  }
  // go(0,0);
  console.log(dp[N-1][N-1].toString())
}

Solution();