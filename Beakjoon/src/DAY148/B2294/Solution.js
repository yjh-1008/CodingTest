const fs = require('fs');
const input = fs.readFileSync('./index.txt').toString().trim().split('\n');
const [n,k] = input.shift().split(' ').map(Number);
const dp = new Array(10005).fill(Number.MAX_VALUE);
let arr = input.map(Number);
function Solution() {
  arr.forEach(v=>dp[v] = 1);
  for(let i=0;i<n;i++) {
    let tmp = arr[i];
    for(let j=1;j+arr[i]<=k;j++) {
      // console.log(j+arr[i]<)
      if(dp[j+arr[i]] > dp[j]+1) dp[j+arr[i]] = dp[j]+1
    }
  }
  console.log(dp[k] === Number.MAX_VALUE ? -1 : dp[k]);
}

Solution();