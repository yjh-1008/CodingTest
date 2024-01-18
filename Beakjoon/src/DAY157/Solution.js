const fs = require('fs');
const input = fs.readFileSync('./text.txt').toString().trim().split('\n');
const N = Number(input.shift());
const arr = input.map(v => v.split(" ").map(v => Number(v)));
const dp = Array.from({length: N+1}).fill(0);

function Solution() {
  let max = 0;
  for(let i=0;i<N;i++) {
    max = Math.max(max, dp[i])
    const [day, pay] = arr[i];
    if(i+day <= N) {
      dp[i+day] = Math.max(dp[i+day], max+pay);
    }

  }
  console.log(max);
}

Solution();