const fs = require('fs');
const input  = fs.readFileSync('./text.txt').toString().trim().split('\n');
const N = Number(input.shift());
let dp;
const dx = [0,0,-1,1], dy= [1,-1,0,0];

function Solution() {
  const ret = [];
  for(let T=0;T<N;T++) {
    const L = Number(input.shift());
    const arr = Array.from({length:2}, () => new Array(L).fill(0));
    dp = Array.from({length:2}, () => new Array(L).fill(0));
    for(let i=0;i<2;i++) {
      arr[i] = input.shift().split(" ").map(v => Number(v));
    } 
    dp[0][0] = arr[0][0];
    dp[1][0] = arr[1][0];
    dp[0][1] = arr[0][1] + dp[1][0];
    dp[1][1] = arr[1][1] + dp[0][0];

    for(let i=2;i<L;i++) {
      dp[0][i] = arr[0][i] + Math.max(dp[1][i-1], dp[1][i-2]);
      dp[1][i] = arr[1][i] + Math.max(dp[0][i-1], dp[0][i-2]);
    }
    ret.push(Math.max(dp[0][L-1], dp[1][L-1]))
  }
  console.log(ret.join("\n"));
}

Solution();