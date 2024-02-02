const fs = require('fs');
const input = fs.readFileSync('./text.txt').toString().trim().split("\n");
const N = parseInt(input.shift());
const M = parseInt(input.shift());
const vips = input.map(v => Number(v));
const dp = new Array(41).fill(1);
let ret = 1;
function Solution() {
  let flag = false;
  dp[2]= 2;
  for(let i=3;i<=N;i++) dp[i] = dp[i-1] + dp[i-2];
  let start = 0;
  for(let i=0;i<M;i++) {
    ret *= dp[vips[i] - start-1];
    start = vips[i];
  }
  ret *= dp[N-start];
  console.log(ret) 
}

Solution();