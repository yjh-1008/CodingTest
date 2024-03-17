const fs = require('fs');
const input = fs.readFileSync('./text.txt').toString().trim().split("\n").map(Number);
const N = parseInt(input[0]);
const arr = input.slice(1, input.length);
const stack = [];
//pop을 하면서 진행한다.
function Solution(){
  // let cnt = 0
  let ret = 0;
  // console.log(arr)
  for(let i=0;i<N;i++) {
    const tmp = arr[i];
    // console.
    let cnt = 1;
    while(stack.length && stack[stack.length-1].tmp <= tmp) {
      ret += stack[stack.length-1].cnt;
      
      if(stack[stack.length-1].tmp == tmp) {
        cnt = stack[stack.length-1].cnt + 1;
      } else {
        cnt = 1;
      }
      stack.pop();
    }
    if(stack.length) ret++;
    stack.push({tmp, cnt});
  }
  console.log(ret);
}

Solution();