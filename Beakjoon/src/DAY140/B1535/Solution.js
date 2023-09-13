const fs = require('fs');
const input = fs.readFileSync('./index.txt').toString().trim().split('\n')
let N = parseInt(input.shift());
const damage = input.shift().split(' ').map(Number);
const happy = input.shift().split(' ').map(Number);
function Solution() {
  const dp = new Array(101).fill(0);
  for(let i=0;i<N;i++){
    let d = damage[i], h = happy[i];
    for(let j=100;j>=d;j--) {
      dp[j] = Math.max(dp[j], dp[j-d]+h);
    }
  }
  dp[100] = 0
  // console.log(dp.slice(50, 100))
  // // let ret = 0;
  // dp.forEach((v,i) => console.log(v, i));
  console.log(Math.max(...dp))
}

Solution();