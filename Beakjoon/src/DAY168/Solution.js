const fs = require('fs');
const arr = fs.readFileSync('/dev/stdin').toString().trim().split("\n")[0];
const N = arr.length;
const MOD = 1000000;
const dp = new Array(5001).fill(0);
function Solution() {
  if(arr[0] === '0') {
    console.log(0);
    return;
  }
  dp[0] = 1;
  dp[1] =1; 
  for(i=2;i<=N;i++) {
     if(arr[i-1] > '0') dp[i] = dp[i-1];
     const tmp = parseInt(arr[i-2] + arr[i-1]);
     if(tmp <= 26 && tmp >=10) dp[i] =(dp[i]+dp[i-2])%MOD;
  }
  console.log(dp[N]);
}
Solution();

