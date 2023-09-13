const fs = require('fs');
const input = fs.readFileSync('./index.txt').toString().trim().split('\n')
let [N,K] = input.shift().split(' ').map(Number);
const arr = input.map(v=>v.split(' ').map(Number));
function Solution() {
  const dp = new Array(100005).fill(0)

  while(N--) {
    let [w, v] = arr.shift();
    for(let j=K; j>=w;j--) {
      dp[j] = Math.max(dp[j], dp[j-w]+v);
    }
  }
  console.log(dp[K]);
}

Solution();