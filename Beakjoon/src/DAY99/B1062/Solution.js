const fs = require('fs');
const input = fs.readFileSync('./index.txt').toString().trim().split('\n');
const [N, K] = input.shift().split(' ').map(Number);
let ret = 0;
function count(num,splitWords){
  let count = 0;
  for(let i=0;i<N;i++) {
    if((num & splitWords[i]) === splitWords[i]) {
      count++;
    }
  }
  return count;
}

function dfs(idx,cnt,num, splitWords) {
  if(cnt === K) {
    ret = Math.max(ret,count(num,splitWords));
    return;  
  }
  if(idx === 26) return;
  dfs(idx+1,cnt, num, splitWords);
  if((num & (1<<idx)) === 0) dfs(idx+1,cnt+1, num |(1<<idx), splitWords);
}

function Solution() {
  if(K < 5) return 0;
  let basic = 0b10000010000100000101;

  const splitWords = [];
  for(let i=0;i<N;i++) {
    let str = input[i]
    let tmp= basic;
    for(let j=4;j<str.length-4;j++){
      let idx = str.charAt(j).charCodeAt(0)-'a'.charCodeAt(0);
      tmp |= 1<<idx
    }
    splitWords.push(tmp)
  }

  dfs(0,5,basic, splitWords);
  return ret
}

console.log(Solution());