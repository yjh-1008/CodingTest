const fs = require('fs');
const input = fs.readFileSync('./text.txt').toString().trim().split("\n");
const [N, K] = input[0].split(" ").map(Number);
// anta tica


let ret = 0;
const start = 'a'.charCodeAt(0);
function getIdx(c) {
  return c.charCodeAt(0) - start;
}

function go(cnt, idx, bits, splitWords) {
  if(cnt === K) {
    let tmp =0;
    for(let i=0;i<splitWords.length;i++) {
      // console.log(bits);
      if((bits & splitWords[i]) === splitWords[i]) {
        tmp+=1;
      }
    }
    ret = Math.max(ret, tmp);
    return;
  }
  if(idx === 26) return;
  go(cnt,idx+1, bits, splitWords)
  if((bits & (1<<idx)) === 0)  go(cnt+1, idx+1, bits | (1<<idx), splitWords);
  return;
}

function Solution() {
  if(K < 5) return;
  let bits = 0b00000010000010000100000101;
  // console.log(bits)
  const splitWords = [];
  for(let i=1;i<input.length;i++) {
    const word = input[i].split("");
    let tmp = bits;
    for(let j=4;j<word.length-4;j++) {
      const c = getIdx(word[j]);
      tmp |= 1<<c;
    }
    splitWords.push(tmp);
  }
  // c
  go(5,1, bits, splitWords);
}

Solution();
console.log(ret);