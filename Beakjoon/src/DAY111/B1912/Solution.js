const fs = require('fs');
const input = fs.readFileSync('./index.txt').toString().trim().split('\n');
const N = parseInt(input[0]);
const arr = input[1].split(' ').map(Number);
const prefix_sum= new Array(N+1).fill(0);
let ret = Number.MIN_VALUE
const dp=[]

function Solution()  {
  for(let i=0;i<N;i++) {
    dp[i] = arr[i];
    if(dp[i] < dp[i-1] + arr[i]) {
      dp[i] =  dp[i-1] + arr[i]
    }
  }
  console.log(Math.max(...dp))
}
Solution()

// function Solution() {
//   for(let i=1;i<=N;i++){
//     prefix_sum[i] = prefix_sum[i-1] + arr[i-1];
//   }

//   for(let i=N-1;i>=0;i--) {
//     for(let j=i-1; j>=0; j--) {
//       let tmp = prefix_sum[i] - prefix_sum[j];
//       if(tmp > ret) ret = tmp;
//     }
//   }

//   console.log(ret);
// }
// Solution();