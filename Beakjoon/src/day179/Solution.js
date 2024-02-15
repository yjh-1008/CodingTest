const fs = require('fs');
const arr = fs.readFileSync('./text.txt').toString().trim().split(" ").map(Number);
const N = arr.length;
const INF = Number.MAX_VALUE;
const dp = Array.from({length:N+1},() => Array.from({length:5}, () => new Array(5).fill(Infinity)));


function getPoint(a, b) {
  if(a === b) return 1;

  if(a === 0) return 2;
  //반대방향 발판이라면
  if(a%2 === b%2) {
    return 4;
  }
  return 3;
}

function Solution() {
  dp[0][arr[0]][0] = 2;
  for(let i=1;i<N;i++) {
    for(let j=0;j<5;j++) {
      for(let k=0;k<5;k++) {
        //같은 발판을 밟을 수 없다.
        if(j === k) continue;
        //이전에 밟고있던 발판이라면
        if(dp[i-1][j][k] !== INF) {
          const nextStep = arr[i];
          const leftPoint = getPoint(j, nextStep);
          const rightPoint= getPoint(k, nextStep);
          // console.log(dp[i][nextStep][k])
          dp[i][nextStep][k] =  Math.min(dp[i-1][j][k]+leftPoint, dp[i][nextStep][k]);
          dp[i][j][nextStep] = Math.min(dp[i-1][j][k]+rightPoint, dp[i][j][nextStep]);
        }
      }
    }
  }

  console.log(Math.min(...dp[N-2].flat()))
}

Solution();