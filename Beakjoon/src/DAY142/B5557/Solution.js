const fs = require('fs');
let input = require("fs")
  .readFileSync('./index.txt')
  .toString()
  .split("\n");
const N = Number(input[0]);
const arr = input[1].split(" ").map(Number);
const dp = Array.from({ length: N - 1 }, () => new Array(21).fill(0n));
function Solution() {
  dp[0][arr[0]] = 1n;
  for(let i=1;i<N-1;i++) {
    for(let j=0;j<21;j++) {
      if(dp[i-1][j]) {
        if(j+arr[i] <= 20) {
          dp[i][j+arr[i]] += dp[i-1][j];
        }
        if(j-arr[i] >= 0) {
          dp[i][j-arr[i]] += dp[i-1][j];
        }
      }
    }
  }
  console.log(dp[arr.length-2][arr[arr.length-1]].toString());
}

Solution();