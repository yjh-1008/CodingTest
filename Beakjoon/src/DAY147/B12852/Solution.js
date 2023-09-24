const fs = require('fs');
const n = Number(fs.readFileSync('./index.txt').toString().trim());
const dp = new Array(1000006).fill(Number.MAX_VALUE);
const arr = [];
function Solution() {
  dp[1] = 0;
  const go = (i) => {
    if(i === 0) return;
    arr.push(i);
    if(i%3 === 0 && dp[i]-1 === dp[i/3]) go(i/3);
    else if(i%2 === 0 && dp[i]-1 === dp[i/2]) go(i/2);
    else if(i-1 >= 0 && dp[i]-1 === dp[i-1]) go(i-1);
    return;
  }

  for(let i=2;i<=n;i++) {
    if(i%3 === 0) dp[i] = Math.min(dp[i], dp[i/3]+1);
    if(i%2 === 0) dp[i] = Math.min(dp[i], dp[i/2]+1);
    dp[i] = Math.min(dp[i], dp[i-1]+1); 
  }
  console.log(dp[n]);
  go(n);
  console.log(arr.join(" "));
}
Solution();