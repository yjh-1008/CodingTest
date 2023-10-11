const fs = require('fs');
let [A, B] = fs.readFileSync('./index.txt').toString().trim().split('\n').map(Number);
const dp = Array.from({length:20}, () => Array.from({length: 20},  () => new Array(20).fill(0)));
function Solution() {
  const isPrime = (num) => {
    if(num<2) return 0;
    for(let i=2;i*i<=num;i++) if(num%i === 0) return 0;
    return 1; 
  }


  A = A/100;
  B = B/100;
  dp[0][0][0] = 1.0;
  for(let i=1;i<=18;i++) {
    for(let j=0;j<=i;j++)  {
      for(let k=0;k<=i;k++) {
        if(j > 0) dp[i][j][k] += dp[i-1][j-1][k] * A * (1-B);
        if(k > 0) dp[i][j][k] += dp[i-1][j][k-1] * (1-A) * B;
        if(j> 0 && k >0)  dp[i][j][k] += dp[i-1][j-1][k-1] * A * B;
        dp[i][j][k] += dp[i-1][j][k] * (1-A) * (1-B);
      }
    }
  }

  let ret = 0;
  for(let i=0;i<=18;i++) {
    for(let j=0;j<=18;j++) {
      if(isPrime(i)|| isPrime(j) ) ret += dp[18][i][j];
    }
  }
  console.log(ret);
}
Solution();