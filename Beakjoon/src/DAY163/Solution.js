const fs = require('fs');
const input = fs.readFileSync('./text.txt').toString().trim().split("\n").map(v => Number(v));
const dp = new Array(101).fill(0);

function Solution() {
  dp[1] = dp[2] = dp[3] =1n;

  for(let i=4;i<=100;i++) {
    dp[i] = dp[i-2] +  dp[i-3];
  }
  const ret = [];
  for(let i=1;i<input.length;i++) {
    ret.push(dp[input[i]]);
  }

  console.log(ret.join("\n"));
}

Solution();