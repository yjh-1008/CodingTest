const fs = require('fs');
const input = fs.readFileSync('./text.txt').toString().trim().split("\n");
const N = Number(input.shift());
const arr = input.map(v => v.split(" ").map(d => Number(d)));
const dp = new Array(3).fill(0);
const minDp =  new Array(3).fill(0);
function Solution() {
// +1, -1해서 갈 수있는 좌표먄 이동 가능.
  for(let i=0;i<3;i++) {
    dp[0] = minDp[0] = arr[0][0];
    dp[1] = minDp[1] = arr[0][1];
    dp[2] = minDp[2] = arr[0][2];
  }
  for(let i=1;i<N;i++) {
      let tmp0 = dp[0];
      let tmp1 = dp[1];
      let tmp2 = dp[2];
      
      dp[0] = Math.max(dp[0], tmp1) + arr[i][0];
      dp[2] =  Math.max(tmp2, tmp1) + arr[i][2];
      dp[1] = Math.max(Math.max(tmp0, dp[1]), tmp2) + arr[i][1];
      
      tmp0 = minDp[0];
      tmp1 = minDp[1];
      tmp2 = minDp[2];
      minDp[0] = Math.min(tmp0, tmp1) + arr[i-1][0];
      minDp[2] =  Math.min(tmp2, tmp1) + arr[i-1][2];
      minDp[1] = Math.min(Math.min(tmp0, tmp2), tmp1) + arr[i-1][1];
  }
  console.log(Math.max(...dp), Math.min(...minDp));
  // console.log(dp)
}

Solution();