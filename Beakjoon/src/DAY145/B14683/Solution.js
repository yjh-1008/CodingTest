const fs = require('fs');
const input = fs.readFileSync('./index.txt').toString().trim().split('\n');
const [N,K] = input.shift().split(' ').map(Number);
const dp = Array.from({length: 101},() => new Array(100001).fill(0));
const arr = input.map(v=>v.split(' ').map(Number));
function Solution() {
  dp[0][arr[0][0]] = arr[0][1];
  dp[0][arr[0][2]] = arr[0][3];
  for(let i=1;i<N;i++) {
    for(let j=0;j<100001;j++) {
      if(dp[i-1][j]) {
        if(j + arr[i][0] <= K) {
          dp[i][j+arr[i][0]] = Math.max(arr[i][1]+dp[i-1][j], dp[i][j+arr[i][0]])
        }
        if(j + arr[i][2] <= K) {
          dp[i][j+arr[i][2]] = Math.max(arr[i][3]+dp[i-1][j], dp[i][j+arr[i][2]])
        }
      }
    }
  }
  console.log( Math.max.apply(
    null,
    dp[N - 1].filter(x => x != undefined),
  ));
}

Solution();