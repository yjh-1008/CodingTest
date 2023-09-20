  const fs = require('fs');
  const input = fs.readFileSync('./index.txt').toString().trim().split('\n');
  const [N,K] = input.shift().split(' ').map(Number);
  const dp = new Array(K+1).fill(0);
  const arr = [];
  function Solution() {
    dp[0] = 1;
    input.forEach((v)=> {
      let num = parseInt(v);
      for(let j=num;j<K+1;j++) {
        if(j-num>=0) {
          dp[j] = dp[j] + dp[j-num];
        }
      }
    })
    console.log(dp[K])
  }

  Solution();