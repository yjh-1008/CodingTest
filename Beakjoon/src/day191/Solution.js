const fs = require('fs');
const input = fs.readFileSync('./text.txt').toString().trim().split("\n");
const [N,M] = input[0].split(" ").map(Number);
const arr = [];
// const visited = Array.from({length:N}, () => new Array(M).fill(0));
for(let i=1;i<input.length;i++) {
  arr.push(input[i].split("").map(Number));
}

let ret = 0;
function Solution() {
  for(let s=0;s<(1<<(N*M));s++) {
    let sum = 0;
    //가로축
    for(let i=0;i<N;i++) {
      let cur = 0
      for(let j=0;j<M;j++) {
        let k = (i*M)+j;
        if((s & (1<<(k))) === 0) {
          cur = cur*10 + arr[i][j];
        } else {
          sum += cur;
          cur = 0;
        }
      }
      sum += cur;
    }

    for(let j=0;j<M;j++) {
      let cur = 0;
      for(let i=0;i<N;i++) {
        let K = (i*M) + j;
        if((s & (1<<K)) !== 0) {
          cur = cur*10 + arr[i][j]
        } else {
          sum += cur;
          cur = 0;
        }
      } 
      sum += cur;
    }
    ret = Math.max(ret, sum);
  }
  console.log(ret);
}

Solution();