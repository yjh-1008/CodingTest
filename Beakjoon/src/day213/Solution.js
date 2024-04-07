const fs = require('fs');
const input = fs.readFileSync('./text.txt').toString().trim().split("\n");
const N = parseInt(input[0]);

const dp = input.slice(1).map((item) => item.split(" ").map(Number));
const arr = new Array(N+1).fill(0);
function Solution() {
  // dp.unshift([0,0])
  let max = 0;
  for(let i=0;i<N;i++) {
    const [day, payment] = dp[i];
    max = Math.max(max, arr[i]);
    if(day+i > N) continue;
    arr[i+day] = Math.max(arr[i+day], max +payment);
    // console.log(arr)
  }
  // console.log(arr);
  console.log(arr.reduce((max, item) => Math.max(max, item),0))
}

Solution();