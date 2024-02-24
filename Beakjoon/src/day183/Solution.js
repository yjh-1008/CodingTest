const fs = require('fs');
const input = fs.readFileSync('./text.txt').toString().trim().split("\n");
const N = parseInt(input[0]);
const tmp = input.slice(1, input.length).map(v => v.split(""));
const arr= Array.from({length:20}).fill(0);
for(let i=1;i<=N;i++) {
  let value = 1;
  for(let j=0;j<N;j++) {
    if(tmp[i-1][j] === "T") arr[i] |= value;
    value *= 2;
  }
}
let ret = Number.MAX_VALUE;


function go(row) {
  
  if(row === N+1) {
    let sum = 0;
    for(let i=1;i<= 1<<(N-1);i *=2) {
      let cnt = 0;
      for(let j=1;j<=N;j++) if(arr[j] & i) cnt++;
      sum += Math.min(cnt, N-cnt);
    }
    ret = Math.min(ret, sum);
    return;
  }
  go(row+1);
  arr[row] = ~arr[row];
  go(row+1);
}

function Solution() {
  go(1);
  console.log(ret);
}

Solution();