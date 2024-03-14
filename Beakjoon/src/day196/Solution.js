const fs = require('fs');
const [N, str] = fs.readFileSync('./text.txt').toString().trim().split("\n");
const arr = str.split("");
const stack = [];
const bit = Array.from({length: N}).fill(0);
// class Noode {
//   constructor(idx)
// }

function Solution() {
  let ret = 0, cnt = 0;
  for(let i=0;i<N;i++) {
    if(arr[i] === '(') {
      stack.push(i);
    } else {
      if(!stack.length) continue;
      console.log(stack.at(-1))
      bit[i] = bit[stack.at(-1)] = 1; 
      stack.pop(); 
    }
    ret = Math.max(cnt, ret);
  }
  for(let i=0;i<N;i++) {
    if(bit[i]){
      cnt++;
      ret = Math.max(ret, cnt);
    }else cnt=0;
  }
  console.log(ret);
}

Solution();