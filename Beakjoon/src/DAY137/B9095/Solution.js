const fs = require('fs');
let [N, ...arr] = fs.readFileSync('./index.txt').toString().trim().split('\n').map(Number);

let dp = new Array(20).fill(0);
dp[0] = 1;

function Solution() {
  const go = (idx) => {
    for(let i=1;i<=3;i++) {
      if(idx + i > 20) return;
      dp[idx+i]+=1;
      go(idx+i);
    }
  }
  for(let i=1;i<=3;i++) {
    dp[i] += 1;
    go(i);
  }
  let ret = [];
  for(let i=0;i<N;i++) {
    ret.push(dp[arr[i]]);
  }

  console.log(ret.join("\n"));
}

Solution();