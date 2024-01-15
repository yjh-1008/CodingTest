const fs = require('fs');
const input = fs.readFileSync('./text.txt').toString().trim().split('\n');
const N = Number(input.shift());
const arr = input[0].split(" ").map(Number);
const dp = Array.from({length:105},() => new Array(21).fill(0n));
function Solution() {
  
  dp[0][arr[0]] = 1n;  
  //n번째 이전에 더한 값에  더하기를 하거나 빼기를 하는 수, n번째에 이전에 뺀 값에 더하거나 뺀 수.
  for(let i=1;i<N;i++) {
    for(let j=0;j<21;j++) {
      if(dp[i-1][j]) {
        if(j + arr[i] <= 20) {
          dp[i][j+arr[i]] += dp[i-1][j];
        }

        if(j - arr[i] >= 0) {
          dp[i][j-arr[i]] += dp[i-1][j];
        }
      }
    }
  }
  console.log(dp[N-2][arr[N-1]].toString());
}

Solution();