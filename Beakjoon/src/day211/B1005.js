const { kMaxLength } = require('buffer');
const fs = require('fs');
const input = fs.readFileSync('./text.txt').toString().trim().split("\n");
const T = parseInt(input[0]);
let idx = 1;
//연결된걸 알려줘야함
//
function Solution() {
  const ret = [];
  for(let t = 0; t< T; t++) {
    const [N,K] = input[idx++].split(" ").map(Number);
    const dp = Array.from({length:N+1} ,() => new Array(N+1).fill(0));
    const connected = Array.from({length:N+1} ,() => new Array(N+1).fill(0))
    const arr = [0,...input[idx++].split(" ").map(Number)];

    for(let i=0; i<K;i++) {
      const [end, start] = input[idx++].split(" ").map(Number);
      connected[start][end] = 1;;
    }
    //목적지부터 시작.
    const start = input[idx++];
    dp[0][start] = arr[start];
    let tmp = dp[0][start];
    for(let i=1;i<=N;i++) {
      for(let j=1;j<=N;j++) {
        if(dp[i-1][j]) {
          for(let k=1;k<=N;k++) {
            if(connected[j][k]) {
              dp[i][k] = Math.max(dp[i][k], dp[i-1][j] + arr[k]); 
              tmp = Math.max(tmp, dp[i][k]);
            }
          }
        }
      }
    }
    ret.push(tmp);
  }
  console.log(ret.join("\n"))
}

Solution();