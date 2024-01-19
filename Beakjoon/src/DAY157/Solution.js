const fs = require('fs');
const input = fs.readFileSync('./text.txt').toString().trim().split('\n');
const N = Number(input.shift());
const arr = input.map(v => v.split(" ").map(v => Number(v)));
const dp = Array.from({length: N+1}).fill(0);

function Solution() {
  let max = 0;
  for(let i=0;i<N;i++) {
    if(max < dp[i]) {
      max = dp[i]
    }
    if(i+arr[i][0] > N) continue;
    dp[i+arr[i][0]] = Math.max(max + arr[i][1], dp[i+arr[i][0]]);

  }
  // let max = 0;
  // dp.forEach(v => max=Math.max(max, v));
  console.log(Math.max(...dp));
}

Solution();