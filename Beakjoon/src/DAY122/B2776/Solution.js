const fs = require('fs');
const input = fs.readFileSync('./index.txt').toString().trim().split('\n');
const T = parseInt(input.shift());

function bs(n, arr, len) {
  let lt = 0, rt = len-1;
  while(true)  {
    if(lt > len || rt< 0 || lt > rt) break;
    let mid = Math.floor((lt+rt)/2);
    if(arr[mid] === n) return true;
    else if(arr[mid] > n) rt = mid-1;
    else lt = mid+1;
  }
  
  return false;
}

function Solution() {
  let ret = [];
  let n1, n2;
  for(let i =0;i<T;i++) {
    let N =  parseInt(input.shift());
    n1 = input.shift().split(' ').map(Number).sort((a,b)=>a-b);
    let M =  parseInt(input.shift());
    n2 =  input.shift().split(' ').map(Number)
    for(let j=0;j<M;j++) {
      ret.push(bs(n2[j], n1, N) ? 1 : 0);
      
    }
  }
  return ret;
}

console.log(Solution().join('\n'));