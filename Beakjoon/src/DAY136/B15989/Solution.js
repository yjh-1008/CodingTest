const fs = require('fs');
let [N,...arr] = fs.readFileSync('./index.txt').toString().trim().split('\n').map(Number);

const dp = new Array(10001).fill(0);

function Solution() {
  dp[0]=1
  for(let i=1;i<=3;i++) {
    for(let j=1;j<=10000;j++) {
      if(j-i >= 0 ) dp[j] += dp[j-i];
    }
  }
  let ret = [];
  for(let i=0;i<N;i++) {
    ret.push(dp[arr[i]]);
  }
  console.log(ret.join("\n"))
}

Solution();