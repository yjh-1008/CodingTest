const fs = require('fs');
const input = fs.readFileSync('./index.txt').toString().trim().split('\n');
let N = parseInt(input.shift());
let arr = [];
let minSums = input.shift().split(' ').map(Number);
let ret = [];
let sum = Number.MAX_VALUE;

function Solution() {
  for(let i=0;i<N;i++) {
    let t = input[i].split(' ').map(Number)
    arr.push(t);
  }
  for(let i=1; i < (1<<N); i++) {
    let c= new Array(5).fill(0);
    let idxs = [];
    let chk= true;
    for( j=0;j<N;j++) {
      if(i & (1<<j)) {
        idxs.push(j+1)
        arr[j].forEach((data, idx)=> {
          c[idx] += data;
        })
      }
    }
    console.log(c);
    console.log(minSums)
    let tmp = 0;
    if(c[0] >= minSums[0] &&c[1] >= minSums[1] &&c[2] >= minSums[2] &&c[3] >= minSums[3]) {
      if(sum > c[4]) {
        sum = c[4]
        ret = []
        ret.push(idxs);
      }  else if(sum === c[4]) ret.push(idxs);
    }
    

  }
  if(sum === Number.MAX_VALUE) console.log(-1);
  else console.log(`${sum}\n${ret.sort()[0].join(' ')}`)
}
Solution()
