const fs = require('fs');
const input = fs.readFileSync('./text.txt').toString().trim().split("\n");
const N = parseInt(input[0]);
let str1 = input[1].split("");
let str2 = input[1].split("").reverse();
const LCS = Array.from({length:N+1}, () => new Array(N+1).fill(0));
function Solution() {
  for(let i=1;i<=N;i++) {
    for(let j=1;j<=N;j++) {
      if(str1[i-1] == str2[j-1]) {
        console.log(str1[i]);
        LCS[i][j] = LCS[i-1][j-1] + 1;
      } else {
        LCS[i][j] = Math.max(LCS[i-1][j], LCS[i][j-1]);
      }
    }
  }
  console.log(N - LCS[N][N]);
}

Solution();