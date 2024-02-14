const fs = require('fs');
const input = fs.readFileSync('./text.txt').toString().split("\n");
const [N, K] = input[0].split(" ").map(Number);
const dp = Array.from({length:N+1},() => new Array(K+1).fill(0));
const arr = [];
for(let i=1;i<input.length;i++) {
  arr.push(input[i].split(" ").map(Number));
}
dp[0][arr[0][0]] = arr[0][1];
dp[0][arr[0][2]] = arr[0][3];
for(let i=1;i<N;i++) {
  for(let j=0;j<=K;j++) {
//     //참인경우 이전까지 걸렸던 시간
    if(dp[i-1][j]) {
      const [t1, v1, t2, v2] = arr[i];
      if(j + t1 <= K) {
        dp[i][j + t1] = Math.max(dp[i][j+t1], dp[i-1][j] + v1);
      }
  
      if(j + t2 <= K) {
        dp[i][j + t2] = Math.max(dp[i][j+t2], dp[i-1][j] + v2);
      }
    }
  }
}
console.log(Math.max(...dp[N-1]));
