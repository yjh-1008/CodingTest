const fs = require('fs');
const input= fs.readFileSync('./index.txt').toString().trim().split('\n');

let arr = input[0].split(' ').map(Number);
const pieces = [0,0,0,0];
let short ={
  5: 21,
  10:24,
  15:26
}
let scores = [
  0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20,
22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 13,
16, 19, 22, 24, 28, 27, 26, 25, 30, 35, 0
]
let next = []
for(let i = 0; i<32; i++) next[i] = i+1;
next[20] = 32;
next[23] = 29;
next[25] = 29;
next[31] = 20;


let point = 2;

let ret = Number.MIN_VALUE
function dfs(idx, sum) {
  if(idx === 10) {
    ret = Math.max(ret, sum);
    return;
  }

  let d = arr[idx];
  for(let i=0;i<4;i++) {
    let p = pieces[i];

    let tmp  =p;

    if(tmp === 32) continue;

    for(let j=0;j<d;j++) {
      if(p === 32) break;
      if(j === 0 && short[p]) p = short[p];
      else p = next[p];
    }

    if(p !==32 && pieces.includes(p)) continue;
    pieces[i] = p;
    dfs(idx+1, sum+scores[p]);
    pieces[i] = tmp;


  }


}


function Solution() {
  dfs(0,0)
  console.log(ret)
}

Solution();