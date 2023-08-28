const fs = require('fs');
const input = fs.readFileSync('./index.txt').toString().trim().split('\n').map(Number);
const N = input.shift();

function Solution() {
  let ret = Number.MIN_VALUE
  let tmp = input[0];
  for(let i=1;i<N;i++) {
    let cur = tmp * input[i];
    if(cur > input[i]) {
      tmp = cur;
      
    }else {
      tmp = input[i];
    }
    ret = Math.max(ret, tmp);
  }
  console.log(ret.toFixed(3));
}

Solution();