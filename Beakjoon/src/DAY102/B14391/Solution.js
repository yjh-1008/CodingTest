const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, M] = input.shift().split(' ').map(v => v*1);
const map=[];
let ret = 0

function Solution() {
  for(let i=0;i<N;i++) {
    map.push(input[i].split('').map(v => v*1));
  }
  
  for(let s=0;s < (1<<(N*M)); s++) {
    let sum = 0;
    for(let i=0;i<N;i++) {
      let cur = 0;
      for(let j=0;j<M;j++) {
        let k = i*M +j;
        if ((s & (1 << k)) === 0)  {
          cur = cur*10 + map[i][j];
        }else {
          sum += cur;
          cur = 0;
        }
      }
      sum += cur;
    }

    for(let j=0;j<M;j++) {
      let cur = 0;
      for(let i=0;i<N;i++) {
        let k = i*M +j;
        if ((s & (1 << k)) !== 0) {
          cur = cur*10 + map[i][j];
        }else {
          sum += cur;
          cur = 0;
        }
      }
      sum += cur;
    }
    ret = Math.max(ret, sum)
  }
  console.log(ret);
}

Solution()