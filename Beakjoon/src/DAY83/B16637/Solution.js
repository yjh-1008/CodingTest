const fs = require('fs');
const input= fs.readFileSync('./index.txt').toString().trim().split('\n');
let N = parseInt(input[0]);
let arr  = input[1].split('');
let nums=[], strs=[];
let ret = -2147483648
function operation(oper, a, b) {
  if(oper === '+') return a+b;
  else if(oper==='-') return a-b;
  else if(oper === '*') return a*b;
}

function go(idx, num) {
  if(idx === nums.length-1) {
    ret = Math.max(ret, num);
    return;
  }

  go(idx+1, operation(strs[idx], num, nums[idx+1]));
  if(idx+2 <= nums.length-1) {
    let tmp = operation(strs[idx+1], nums[idx+1], nums[idx+2] );
    go(idx+2, operation(strs[idx], num, tmp));
  }
  return;
}

function Solution() {
  for(let i=0;i<N;i++) {
    if(isNaN(arr[i])) {
      strs.push(arr[i]);
    }else {
      nums.push(arr[i]);
    }
  }
  nums = nums.map((data)=>parseInt(data));
  go(0, nums[0]);
}
Solution()
console.log(ret);