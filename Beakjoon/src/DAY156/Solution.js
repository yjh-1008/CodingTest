const fs = require('fs');
const input = fs.readFileSync('./text.txt').toString().trim().split('\n');
const N = Number(input.shift());
const arr = input.shift().split(" ").map(Number);
const dp = Array.from({length:1005}).fill(0);

function Solution() {
  // for(let i=0;i<N;i++) {
  //   dp[i][arr[i]] = 1;
  // }

  for(let i=0;i<N;i++) {
    dp[i] = 1;
    for(let j=0;j<=i;j++) {
      if(arr[i] < arr[j] && dp[i] < dp[j]+1) {
        dp[i] = dp[j]+1
      }
    }
  }
  let max = 0;
  dp.forEach((v) => max = Math.max(max, v));
  console.log(max);
}

Solution();
