const fs = require('fs');
const input = fs.readFileSync('./index.txt').toString().trim().split('\n');

input.pop();
function Solution() {
  let ret = [];
  while(input.length > 0) {
    let [n,m] = input.shift().split(' ');
    n = parseInt(n)
    const dp = new Array(10004).fill(0);
    m = parseInt(m.split(".").join());
    for(let i=0;i<n;i++) {
      let [c,p] = input.shift().split(' ');
      c = parseInt(c);
      p = parseInt(p.split(".").join());
      dp[p] = Math.max(dp[p], c);
      for(let j=p;j<=m;j++) {
        dp[j] = Math.max(dp[j], dp[j-p]+c);
      }
    }
    ret.push(dp[m])
    // console.log(dp[m]);
  }
  console.log(ret.join('\n'));
}

Solution();