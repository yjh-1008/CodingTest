const fs = require('fs');
const input = fs.readFileSync('./text.txt').toString().trim().split("\n");

const [N, K] = input.shift().split(" ").map(Number);
const arr = input.map(Number);
const dp =  new Array(K+1).fill(0);
let ret = 0;


const Solution = () =>  {
  dp[0] = 1;
  // const dp = new Array(N).fill(0);
  for(let i=0;i<N;i++) {
    for(let j=arr[i];j<=K;j++) {
      dp[j] = dp[j] + dp[j - arr[i]];
    }
  }
  // console.log(dp)
  console.log(dp[K]);
}

Solution();
