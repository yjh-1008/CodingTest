const fs = require('fs');
const arr = fs.readFileSync('./text.txt').toString().trim().split("\n").map(v => Number(v));
const N = Number(arr.shift());
const dp = new Array(N).fill(0);
function Solution() {
  for(let i=0;i<N;i++) {
    dp[i] = 1;
    for(let j=0;j<i;j++) {
      if(arr[i] > arr[j]) {
        dp[i] = Math.max(dp[i], dp[j]+1);
      }
    }
  }
  // console.log(dp);
  console.log(N-Math.max(...dp));
}

Solution();