const fs = require('fs');
const input = fs.readFileSync('./index.txt').toString().trim().split('\n');

const [N, L] = input[0].split(' ').map(Number);
let arr = []
for(let i=1; i<=N;i++) {
  arr.push(input[i].split(' ').map(Number));
}

function Solution() {
  let ret = 0;
  arr.sort((a,b) => {
    if(a[0] === b[0]) return a[1] - b[1];
    else return a[0] - b[0];
  })
  // console.log(arr)
  let tmp = 0;

  for(let i=0; i<N; i++) {
    if(tmp < arr[i][1]) {
      let max = Math.max(tmp, arr[i][0]);
      let c = Math.ceil((arr[i][1]- max)/L);
      ret+=c;
      tmp = max + (c*L)
    }
  }
  console.log(ret);
}
Solution();