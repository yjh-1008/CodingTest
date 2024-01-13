const fs = require('fs');
let txt = fs.readFileSync('text.txt').toString().trim().split("\n")[0];
const len = txt.length;

function Solution() {
  const memo = Array.from(new Array(2501), () => new Array(2501).fill(false));
  const chkPalin = (lt, rt) => {
    if(rt > len) return false;
    if(txt[lt] === txt[rt]) {
      if(memo[lt+1][rt-1] || rt-lt === 1){
        return true;
      }
    }
    return false;
  }
  const ret = new Array(2501).fill(Number.MAX_VALUE);
  for(let i=0;i<len;i++) memo[i][i] = true;
  for(let i=0;i<len-1;i++) {
    if(txt[i] === txt[i+1]) memo[i][i+1] = true;
  }
  //배열을 돈다. i (0~len), j (i+1, len)
  for (let i = 3; i <= len; i++) {
    for (let j = 0; j < len; j++) {
      const e = j + i - 1;

      if (txt[j] === txt[e] && memo[j + 1][e - 1]) {
        memo[j][e] = true;
      }
    }
  }


  for (let e = 0; e < len; e++) {
    for (let s = 0; s <= e; s++) {
      if (memo[s][e]) {
        const prevMinVal = s === 0 ? 0 : ret[s - 1];
        ret[e] = Math.min(ret[e], prevMinVal + 1);
      }
    }
  }
  console.log(ret[len-1]);
}

Solution();