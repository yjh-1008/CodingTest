const fs =require('fs');
const input = fs.readFileSync('./text.txt').toString().trim().split("\n");
const N = Number(input.shift());
const close = input.shift().split(" ").map(v => Number(v));
const M = Number(input.shift());
const seq = input.map(v => Number(v));


function go(idx, c1, c2) {
  if(idx === seq.length) return 0;
  // console.log(N)
  const tmp1 = Math.abs(seq[idx] - c1);
  const tmp2 = Math.abs(seq[idx] - c2);
  return Math.min(tmp1 + go(idx+1, seq[idx] , c2), tmp2 + go(idx+1, c1, seq[idx]));
}

function Solution() {
  //true면 닫힌 상태
  // console.log(seq)
  console.log(go(0, close[0], close[1]));
}

Solution();