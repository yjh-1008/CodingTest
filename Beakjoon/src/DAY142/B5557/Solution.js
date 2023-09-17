// const fs = require('fs');
// let [N,...arr] = fs.readFileSync('./index.txt').toString().trim().split('\n').map(v=>v.split(' ').map(Number));
// arr = arr[0];
// const dp = Array.from({ length: N - 1 }, () => new Array(21).fill(BigInt(0)));
// function Solution() {
//   const answer = arr[arr.length-1];
//   arr = arr.slice(0,arr.length-1);
//   const go = (idx, sum, answer) => {
//     if(sum <0 || sum>20) return 0;
//     let ret = arr[idx][sum];
//     if(idx === arr.length-1) {
//       if(ret === answer) return 1;
//       else return 0;
//     }
 
//     ret += go(idx+1, sum + arr[idx+1]);
//     ret += go(idx+1, sum - arr[idx+1]);
//     return ret;
//   }
//   let ret = go(0, arr[0], answer);
//   console.log(ret)
// }

// Solution();
const fs = require('fs');

const solution = (N, numbers) => {
  const dp = Array.from({ length: N - 1 }, () => new Array(21).fill(BigInt(0)));

  dp[0][numbers[0]] += BigInt(1);
  for (let i = 1; i < N - 1; i++) {
    for (let j = 0; j <= 20; j++) {
      if (dp[i - 1][j]) {
        if (j + numbers[i] <= 20) dp[i][j + numbers[i]] += dp[i - 1][j];
        if (j - numbers[i] >= 0) dp[i][j - numbers[i]] += dp[i - 1][j];
      }
    }
  }

  return dp[N - 2][numbers[N - 1]].toString();
};

input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0]);
const numbers = input[1].split(' ').map(Number);

console.log(solution(N, numbers));