const fs = require('fs');
const input = fs.readFileSync('./text.txt').toString().trim().split("\n");
const N = Number(input.shift());
const arr= input[0].split(" ").map(v => Number(v));
const dp = new Array(N).fill(0);
function Solution() {
  for(let i=0;i<N;i++) {
    dp[i] = 1;
    for(let j=i;j>=0;j--) {
      if(arr[j] < arr[i]) dp[i] = Math.max(dp[i], dp[j]+1);
    }
  }
  console.log(Math.max(...dp));
}

Solution();