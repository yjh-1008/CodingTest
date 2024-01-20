const fs = require('fs');
const input = fs.readFileSync('./text.txt').toString().trim().split('\n');
const C = Number(input.shift());
let arr, dp,sum;
function Solution() {
  let N;
  const ret = [];
  for(let T=0;T<C;T++) {
    N = Number(input.shift());
    sum = Array.from({length:N+1}).fill(0);
    dp = Array.from({length:N+1}, () => new Array(N+1).fill(0));
    arr = [0, ...input.shift().split(" ").map(v => Number(v))];
    for(let j=1;j<=N;j++) {
      sum[j] = sum[j-1]  + arr[j];
    }
    for(let i=1;i<=N;i++) {
      for(let j=1;j<=N-i;j++) {
        dp[j][i+j] = Number.MAX_VALUE;
        for(let k=j;k<i+j;k++) {
          dp[j][i+j] = Math.min(dp[j][i + j], dp[j][k] + dp[k + 1][i + j] + sum[i + j] - sum[j - 1]);
        }
      }
    }
    ret.push(dp[1][N]);
  }
  console.log(ret.join("\n"));
};

Solution();
