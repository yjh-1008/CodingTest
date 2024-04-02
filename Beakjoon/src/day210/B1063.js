const fs = require('fs');
const input = fs.readFileSync('./text.txt').toString().trim().split("\n");
const dp = new Array(41).fill([0,0]);

const fibo = (n) => {
  if(n != 0 && n!= 0 && dp[n][0] > 0 && dp[n][1] > 0) return dp[n];

  if(n === 0) {
    return [dp[n][0]+1, dp[n][1]];
  } else if(n === 1) {
    return [dp[n][0], dp[n][1]+1];
  } else {
    const ret1 = fibo(n-1);
    const ret2 = fibo(n-2);
    return dp[n] = [ret1[0] + ret2[0], ret1[1] + ret2[1]];
  }
}

const Solution = () => {
  dp[0] = [1,0];
  dp[1] = [0,1];
  // console.log(dp[2]);
  for(let i=1;i<input.length;i++) {
    const ret = fibo(parseInt(input[i]));
    console.log(Math.floor(ret[0]/2), Math.floor(ret[1]/2))
  }

  
}

Solution();